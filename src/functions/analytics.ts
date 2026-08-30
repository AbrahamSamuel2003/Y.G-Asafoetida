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

    // Fetch datasets cleanly
    let allOrders: Array<any> = [];
    let allOrderItems: Array<any> = [];
    let allReviews: Array<any> = [];
    let allQuestions: Array<any> = [];
    let allTickets: Array<any> = [];
    let allProducts: Array<any> = [];
    let allAlerts: Array<any> = [];

    try {
      allOrders = (db.prepare("SELECT * FROM orders").all() ?? []) as Array<any>;
    } catch {
      allOrders = [];
    }

    try {
      allOrderItems = (db.prepare("SELECT * FROM order_items").all() ?? []) as Array<any>;
    } catch {
      allOrderItems = [];
    }

    try {
      allReviews = (db.prepare("SELECT * FROM reviews").all() ?? []) as Array<any>;
    } catch {
      allReviews = [];
    }

    try {
      allQuestions = (db.prepare("SELECT * FROM questions").all() ?? []) as Array<any>;
    } catch {
      allQuestions = [];
    }

    try {
      allTickets = (db.prepare("SELECT * FROM tickets").all() ?? []) as Array<any>;
    } catch {
      allTickets = [];
    }

    try {
      allProducts = (db.prepare("SELECT * FROM products").all() ?? []) as Array<any>;
    } catch {
      allProducts = [];
    }

    try {
      allAlerts = (db.prepare("SELECT * FROM stock_alerts").all() ?? []) as Array<any>;
    } catch {
      allAlerts = [];
    }

    // Aggregations
    const totalOrders = allOrders.length;
    const totalRevenue = allOrders
      .filter((o) => o && o.status !== "cancelled")
      .reduce((acc, o) => acc + (Number(o.total) || 0), 0);

    const ordersPlacedToday = allOrders.filter(
      (o) => o && Number(o.created_at || 0) >= startOfTodayMs,
    ).length;

    // Status counts
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
    for (const o of allOrders) {
      if (o && o.status) {
        ordersByStatus[o.status] = (ordersByStatus[o.status] ?? 0) + 1;
      }
    }

    // Pending counts
    const pendingReviewsCount = allReviews.filter((r) => r && r.status === "pending").length;
    const openQuestionsCount = allQuestions.filter(
      (q) => q && (q.status === "pending" || !q.answer),
    ).length;
    const openTicketsCount = allTickets.filter(
      (t) => t && (t.status === "open" || t.status === "in_progress"),
    ).length;
    const lowStockProductsCount = allProducts.filter(
      (p) => p && (!p.in_stock || (p.stock_left !== null && p.stock_left !== undefined && Number(p.stock_left) <= 5)),
    ).length;
    const stockAlertsCount = allAlerts.filter((a) => a && Number(a.notified) === 0).length;

    // Recent orders (latest 6)
    const recentOrders = [...allOrders]
      .sort((a, b) => (Number(b.created_at) || 0) - (Number(a.created_at) || 0))
      .slice(0, 6)
      .map((o) => {
        const count = allOrderItems.filter((i) => i && i.order_id === o.id).length;
        return {
          id: String(o.id || ""),
          createdAt: Number(o.created_at) || Date.now(),
          email: String(o.email || ""),
          total: Number(o.total) || 0,
          status: String(o.status || "placed"),
          itemCount: count || 1,
        };
      });

    // 7-day sales trend
    const recentSalesTrend: Array<{ date: string; revenue: number; orders: number }> = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0).getTime();
      const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999).getTime();

      const dayOrders = allOrders.filter(
        (o) => o && Number(o.created_at || 0) >= dayStart && Number(o.created_at || 0) <= dayEnd,
      );
      const dayRev = dayOrders
        .filter((o) => o.status !== "cancelled")
        .reduce((sum, o) => sum + (Number(o.total) || 0), 0);

      const dateLabel = d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
      recentSalesTrend.push({
        date: dateLabel,
        revenue: dayRev,
        orders: dayOrders.length,
      });
    }

    return {
      totalRevenue,
      totalOrders,
      ordersPlacedToday,
      pendingReviewsCount,
      openQuestionsCount,
      openTicketsCount,
      lowStockProductsCount,
      stockAlertsCount,
      ordersByStatus,
      recentOrders,
      recentSalesTrend,
    };
  });
