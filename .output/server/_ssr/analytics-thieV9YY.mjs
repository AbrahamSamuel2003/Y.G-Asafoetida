import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { t as getDb } from "./db-CPz3PJoi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-thieV9YY.js
var adminGetDashboardStatsServerFn_createServerFn_handler = createServerRpc({
	id: "4bb1dab43d898ad41937fc37855b3500ee9698ac112d0a86e4517e4566bb288d",
	name: "adminGetDashboardStatsServerFn",
	filename: "src/functions/analytics.ts"
}, (opts) => adminGetDashboardStatsServerFn.__executeServer(opts));
var adminGetDashboardStatsServerFn = createServerFn({ method: "GET" }).handler(adminGetDashboardStatsServerFn_createServerFn_handler, async () => {
	const db = getDb();
	const startOfToday = /* @__PURE__ */ new Date();
	startOfToday.setHours(0, 0, 0, 0);
	const startOfTodayMs = startOfToday.getTime();
	const ordersSummary = db.prepare(`
      SELECT
        COUNT(*) as totalOrders,
        SUM(CASE WHEN status != 'cancelled' THEN total ELSE 0 END) as totalRevenue,
        SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) as ordersToday
      FROM orders
    `).get(startOfTodayMs);
	const statusRows = db.prepare(`
      SELECT status, COUNT(*) as c FROM orders GROUP BY status
    `).all();
	const ordersByStatus = {
		placed: 0,
		packed: 0,
		shipped: 0,
		out: 0,
		delivered: 0,
		cancelled: 0,
		refund_requested: 0,
		refunded: 0
	};
	for (const r of statusRows) ordersByStatus[r.status] = r.c;
	const pendingReviews = db.prepare("SELECT COUNT(*) as c FROM reviews WHERE status = 'pending'").get()?.c ?? 0;
	const openQuestions = db.prepare("SELECT COUNT(*) as c FROM questions WHERE status = 'pending' OR answer IS NULL").get()?.c ?? 0;
	const openTickets = db.prepare("SELECT COUNT(*) as c FROM tickets WHERE status = 'open' OR status = 'in_progress'").get()?.c ?? 0;
	const lowStock = db.prepare("SELECT COUNT(*) as c FROM products WHERE in_stock = 0 OR (stock_left IS NOT NULL AND stock_left <= 5)").get()?.c ?? 0;
	const stockAlerts = db.prepare("SELECT COUNT(*) as c FROM stock_alerts WHERE notified = 0").get()?.c ?? 0;
	const recentOrders = db.prepare(`
      SELECT o.id, o.created_at, o.email, o.total, o.status,
             (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as itemCount
      FROM orders o
      ORDER BY o.created_at DESC
      LIMIT 6
    `).all().map((r) => ({
		id: r.id,
		createdAt: r.created_at,
		email: r.email,
		total: r.total,
		status: r.status,
		itemCount: r.itemCount
	}));
	const recentSalesTrend = [];
	for (let i = 6; i >= 0; i--) {
		const d = /* @__PURE__ */ new Date();
		d.setDate(d.getDate() - i);
		const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0).getTime();
		const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999).getTime();
		const dayStats = db.prepare(`
        SELECT
          COUNT(*) as cnt,
          SUM(CASE WHEN status != 'cancelled' THEN total ELSE 0 END) as rev
        FROM orders
        WHERE created_at >= ? AND created_at <= ?
      `).get(dayStart, dayEnd);
		const dateLabel = d.toLocaleDateString("en-IN", {
			month: "short",
			day: "numeric"
		});
		recentSalesTrend.push({
			date: dateLabel,
			revenue: dayStats?.rev ?? 0,
			orders: dayStats?.cnt ?? 0
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
		recentSalesTrend
	};
});
//#endregion
export { adminGetDashboardStatsServerFn_createServerFn_handler };
