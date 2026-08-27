import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-BfCdonaA.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-BMOIxzHh.js
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
	let allOrders = [];
	let allOrderItems = [];
	let allReviews = [];
	let allQuestions = [];
	let allTickets = [];
	let allProducts = [];
	let allAlerts = [];
	try {
		allOrders = db.prepare("SELECT * FROM orders").all() ?? [];
	} catch {
		allOrders = [];
	}
	try {
		allOrderItems = db.prepare("SELECT * FROM order_items").all() ?? [];
	} catch {
		allOrderItems = [];
	}
	try {
		allReviews = db.prepare("SELECT * FROM reviews").all() ?? [];
	} catch {
		allReviews = [];
	}
	try {
		allQuestions = db.prepare("SELECT * FROM questions").all() ?? [];
	} catch {
		allQuestions = [];
	}
	try {
		allTickets = db.prepare("SELECT * FROM tickets").all() ?? [];
	} catch {
		allTickets = [];
	}
	try {
		allProducts = db.prepare("SELECT * FROM products").all() ?? [];
	} catch {
		allProducts = [];
	}
	try {
		allAlerts = db.prepare("SELECT * FROM stock_alerts").all() ?? [];
	} catch {
		allAlerts = [];
	}
	const totalOrders = allOrders.length;
	const totalRevenue = allOrders.filter((o) => o && o.status !== "cancelled").reduce((acc, o) => acc + (Number(o.total) || 0), 0);
	const ordersPlacedToday = allOrders.filter((o) => o && Number(o.created_at || 0) >= startOfTodayMs).length;
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
	for (const o of allOrders) if (o && o.status) ordersByStatus[o.status] = (ordersByStatus[o.status] ?? 0) + 1;
	const pendingReviewsCount = allReviews.filter((r) => r && r.status === "pending").length;
	const openQuestionsCount = allQuestions.filter((q) => q && (q.status === "pending" || !q.answer)).length;
	const openTicketsCount = allTickets.filter((t) => t && (t.status === "open" || t.status === "in_progress")).length;
	const lowStockProductsCount = allProducts.filter((p) => p && (!p.in_stock || p.stock_left !== null && p.stock_left !== void 0 && Number(p.stock_left) <= 5)).length;
	const stockAlertsCount = allAlerts.filter((a) => a && Number(a.notified) === 0).length;
	const recentOrders = [...allOrders].sort((a, b) => (Number(b.created_at) || 0) - (Number(a.created_at) || 0)).slice(0, 6).map((o) => {
		const count = allOrderItems.filter((i) => i && i.order_id === o.id).length;
		return {
			id: String(o.id || ""),
			createdAt: Number(o.created_at) || Date.now(),
			email: String(o.email || ""),
			total: Number(o.total) || 0,
			status: String(o.status || "placed"),
			itemCount: count || 1
		};
	});
	const recentSalesTrend = [];
	for (let i = 6; i >= 0; i--) {
		const d = /* @__PURE__ */ new Date();
		d.setDate(d.getDate() - i);
		const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0).getTime();
		const dayEnd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999).getTime();
		const dayOrders = allOrders.filter((o) => o && Number(o.created_at || 0) >= dayStart && Number(o.created_at || 0) <= dayEnd);
		const dayRev = dayOrders.filter((o) => o.status !== "cancelled").reduce((sum, o) => sum + (Number(o.total) || 0), 0);
		const dateLabel = d.toLocaleDateString("en-IN", {
			month: "short",
			day: "numeric"
		});
		recentSalesTrend.push({
			date: dateLabel,
			revenue: dayRev,
			orders: dayOrders.length
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
		recentSalesTrend
	};
});
//#endregion
export { adminGetDashboardStatsServerFn_createServerFn_handler };
