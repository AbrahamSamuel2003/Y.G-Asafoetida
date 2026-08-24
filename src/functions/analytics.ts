import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type AdminDashboardStats = {
  totalRevenue: number;
  totalOrders: number;
  ordersPlacedToday: number;
  pendingReviewsCount: number;
  openQuestionsCount: number;
  openTicketsCount: number;
  lowStockProductsCount: number;
  stockAlertsCount: number;
  ordersByStatus: Record<string, number>;
  recentOrders: Array<{
    id: string;
    createdAt: number;
    email: string;
    total: number;
    status: string;
    itemCount: number;
  }>;
  recentSalesTrend: Array<{
    date: string;
    revenue: number;
    orders: number;
  }>;
};

export const adminGetDashboardStatsServerFn = createServerFn({ method: "GET" })
  .handler(async (): Promise<AdminDashboardStats> => {
    const db = getDb();
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTodayMs = startOfToday.getTime();

    // Total revenue & orders
    const ordersSummary = db.prepare(`
      SELECT
        COUNT(*) as totalOrders,
        SUM(CASE WHEN status != 'cancelled' THEN total ELSE 0 END) as totalRevenue,
        SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) as ordersToday
      FROM orders
    `).get(startOfTodayMs) as { totalOrders: number; totalRevenue: number | null; ordersToday: number | null } | undefined;

    // Status counts
    const statusRows = db.prepare(`
      SELECT status, COUNT(*) as c FROM orders GROUP BY status
    `).all() as Array<{ status: string; c: number }>;

    const ordersByStatus: Record<string, number> = {
      placed: 0,
      packed: 0,
      shipped: 0,
      out: 0,
      delivered: 0,
      cancelled: 0,
      refund_requested: 0,
      refunded: 0,
    };
    for (const r of statusRows) {
      ordersByStatus[r.status] = r.c;
    }

    // Pending counts
    const pendingReviews = (db.prepare("SELECT COUNT(*) as c FROM reviews WHERE status = 'pending'").get() as { c: number })?.c ?? 0;
    const openQuestions = (db.prepare("SELECT COUNT(*) as c FROM questions WHERE status = 'pending' OR answer IS NULL").get() as { c: number })?.c ?? 0;
    const openTickets = (db.prepare("SELECT COUNT(*) as c FROM tickets WHERE status = 'open' OR status = 'in_progress'").get() as { c: number })?.c ?? 0;
    const lowStock = (db.prepare("SELECT COUNT(*) as c FROM products WHERE in_stock = 0 OR (stock_left IS NOT NULL AND stock_left <= 5)").get() as { c: number })?.c ?? 0;
    const stockAlerts = (db.prepare("SELECT COUNT(*) as c FROM stock_alerts WHERE notified = 0").get() as { c: number })?.c ?? 0;

    // Recent orders
    const recentOrdersRows = db.prepare(`
      SELECT o.id, o.created_at, o.email, o.total, o.status,
             (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as itemCount
      FROM orders o
      ORDER BY o.created_at DESC
      LIMIT 6
    `).all() as Array<{ id: string; created_at: number; email: string; total: number; status: string; itemCount: number }>;

    const recentOrders = recentOrdersRows.map((r) => ({
      id: r.id,
      createdAt: r.created_at,
      email: r.email,
      total: r.total,
      status: r.status,
      itemCount: r.itemCount,
    }));

    // Last 7 days trend
    const recentSalesTrend: Array<{ date: string; revenue: number; orders: number }> = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0).getTime();
      const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999).getTime();

      const dayStats = db.prepare(`
        SELECT
          COUNT(*) as cnt,
          SUM(CASE WHEN status != 'cancelled' THEN total ELSE 0 END) as rev
        FROM orders
        WHERE created_at >= ? AND created_at <= ?
      `).get(dayStart, dayEnd) as { cnt: number; rev: number | null } | undefined;

      const dateLabel = d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
      recentSalesTrend.push({
        date: dateLabel,
        revenue: dayStats?.rev ?? 0,
        orders: dayStats?.cnt ?? 0,
      });
    }

    return {
      totalRevenue: ordersSummary?.totalRevenue ?? 0,
      totalOrders: ordersSummary?.totalOrders ?? 0,
      ordersPlacedToday: ordersSummary?.ordersToday ?? 0,
      pendingReviewsCount: pendingReviews,
      openQuestionsCount: openQuestions,
      openTicketsCount: openTickets,
      lowStockProductsCount: lowStock,
      stockAlertsCount: stockAlerts,
      ordersByStatus,
      recentOrders,
      recentSalesTrend,
    };
  });
