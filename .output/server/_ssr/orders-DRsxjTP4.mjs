import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-DqClzGFy.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-DRsxjTP4.js
function mapRowToOrder(row, items) {
	let address;
	try {
		address = JSON.parse(row.address_json);
	} catch {
		address = {
			id: "addr_fallback",
			label: "Default",
			firstName: "",
			lastName: "",
			line1: "",
			city: "",
			state: "",
			pin: "",
			phone: row.phone
		};
	}
	let resolution = null;
	if (row.resolution_json) try {
		resolution = JSON.parse(row.resolution_json);
	} catch {
		resolution = null;
	}
	return {
		id: row.id,
		createdAt: row.created_at,
		email: row.email,
		phone: row.phone,
		items: items.map((i) => ({
			slug: i.slug,
			variantId: i.variant_id,
			name: i.name,
			variantLabel: i.variant_label,
			image: i.image,
			qty: i.qty,
			price: i.price
		})),
		totals: {
			subtotal: row.subtotal,
			discount: row.discount,
			shipping: row.shipping,
			giftWrap: row.gift_wrap,
			codFee: row.cod_fee,
			total: row.total
		},
		promoCode: row.promo_code,
		address,
		payment: row.payment,
		delivery: row.delivery,
		status: row.status,
		notes: row.notes ?? void 0,
		gift: Boolean(row.gift),
		giftMessage: row.gift_message ?? void 0,
		resolution
	};
}
var createOrderServerFn_createServerFn_handler = createServerRpc({
	id: "575047d67d894c265c103aab089c753ea67766147e633e5434034cf9f0f045aa",
	name: "createOrderServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => createOrderServerFn.__executeServer(opts));
var createOrderServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createOrderServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const now = Date.now();
	const orderId = `YG${Math.floor(1e5 + Math.random() * 899999)}`;
	db.prepare(`
      INSERT INTO orders (
        id, created_at, email, phone, subtotal, discount, shipping, gift_wrap,
        cod_fee, total, promo_code, address_json, payment, delivery, status,
        notes, gift, gift_message, resolution_json, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'placed', ?, ?, ?, NULL, ?)
    `).run(orderId, now, data.email.trim(), data.phone.trim(), data.totals.subtotal, data.totals.discount, data.totals.shipping, data.totals.giftWrap, data.totals.codFee, data.totals.total, data.promoCode ?? null, JSON.stringify(data.address), data.payment, data.delivery, data.notes ?? null, data.gift ? 1 : 0, data.giftMessage ?? null, now);
	const insertItem = db.prepare(`
      INSERT INTO order_items (id, order_id, slug, variant_id, name, variant_label, image, qty, price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
	const orderItems = [];
	for (let i = 0; i < data.items.length; i++) {
		const item = data.items[i];
		const itemId = `item_${orderId}_${i + 1}`;
		insertItem.run(itemId, orderId, item.slug, item.variantId, item.name, item.variantLabel, item.image, item.qty, item.price);
		orderItems.push({
			id: itemId,
			order_id: orderId,
			slug: item.slug,
			variant_id: item.variantId,
			name: item.name,
			variant_label: item.variantLabel,
			image: item.image,
			qty: item.qty,
			price: item.price
		});
		try {
			db.prepare(`
          UPDATE product_variants
          SET stock = MAX(0, stock - ?)
          WHERE product_slug = ? AND id = ?
        `).run(item.qty, item.slug, item.variantId);
		} catch {}
	}
	return mapRowToOrder(db.prepare("SELECT * FROM orders WHERE id = ?").get(orderId), orderItems);
});
var getOrderByIdServerFn_createServerFn_handler = createServerRpc({
	id: "866a21b1cb57c3c6af314d27a74bbe61dda9f7d1dd1363b4ae3a5752e8f44076",
	name: "getOrderByIdServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => getOrderByIdServerFn.__executeServer(opts));
var getOrderByIdServerFn = createServerFn({ method: "GET" }).validator((data) => {
	return {
		id: String(data?.id ?? "").trim(),
		verify: data?.verify ? String(data.verify).trim() : void 0
	};
}).handler(getOrderByIdServerFn_createServerFn_handler, async ({ data }) => {
	if (!data.id) return null;
	const db = getDb();
	const row = db.prepare("SELECT * FROM orders WHERE id = ?").get(data.id);
	if (!row) return null;
	if (data.verify) {
		const v = data.verify.toLowerCase().replace(/\s+/g, "");
		const emailMatches = row.email.toLowerCase() === v;
		const phoneMatches = row.phone.replace(/\D/g, "").endsWith(v.replace(/\D/g, ""));
		if (!emailMatches && !phoneMatches) return null;
	}
	return mapRowToOrder(row, db.prepare("SELECT * FROM order_items WHERE order_id = ?").all(data.id));
});
var listUserOrdersServerFn_createServerFn_handler = createServerRpc({
	id: "fc80778c43c3088479a09a711c07ddfd76343932dbbd64a4996cf771622733e8",
	name: "listUserOrdersServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => listUserOrdersServerFn.__executeServer(opts));
var listUserOrdersServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	email: data?.email ? String(data.email).trim() : void 0,
	phone: data?.phone ? String(data.phone).trim() : void 0
})).handler(listUserOrdersServerFn_createServerFn_handler, async ({ data }) => {
	if (!data.email && !data.phone) return [];
	const db = getDb();
	let rows = [];
	if (data.email && data.phone) rows = db.prepare("SELECT * FROM orders WHERE email = ? OR phone = ? ORDER BY created_at DESC").all(data.email, data.phone);
	else if (data.email) rows = db.prepare("SELECT * FROM orders WHERE email = ? ORDER BY created_at DESC").all(data.email);
	else if (data.phone) rows = db.prepare("SELECT * FROM orders WHERE phone = ? ORDER BY created_at DESC").all(data.phone);
	const result = [];
	const itemStmt = db.prepare("SELECT * FROM order_items WHERE order_id = ?");
	for (const r of rows) {
		const items = itemStmt.all(r.id);
		result.push(mapRowToOrder(r, items));
	}
	return result;
});
var resolveOrderServerFn_createServerFn_handler = createServerRpc({
	id: "78612f084a89e41ee9e462513c82222bcef059540bfa966e7f8c62d0f952dda6",
	name: "resolveOrderServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => resolveOrderServerFn.__executeServer(opts));
var resolveOrderServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(resolveOrderServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const row = db.prepare("SELECT * FROM orders WHERE id = ?").get(data.id);
	if (!row) return {
		ok: false,
		resolution: null,
		error: "Order not found"
	};
	const now = Date.now();
	const isCancel = data.type === "cancellation";
	const amount = row.payment === "cod" ? 0 : row.total;
	const resolution = {
		type: data.type,
		status: isCancel ? "cancelled" : "refund_requested",
		reason: data.reason,
		note: data.note,
		requestedAt: now,
		amount,
		refundBy: now + (isCancel ? 3 : 7) * 24 * 60 * 60 * 1e3,
		method: row.payment === "cod" ? "Bank transfer" : `Original ${row.payment.toUpperCase()} payment`
	};
	const newStatus = isCancel ? "cancelled" : row.status;
	db.prepare(`
      UPDATE orders
      SET resolution_json = ?, status = ?, updated_at = ?
      WHERE id = ?
    `).run(JSON.stringify(resolution), newStatus, now, data.id);
	return {
		ok: true,
		resolution
	};
});
var adminListOrdersServerFn_createServerFn_handler = createServerRpc({
	id: "03969ccbf709d58844a0a811fd5e363a101a7ed883b781a42afe172541b4976d",
	name: "adminListOrdersServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => adminListOrdersServerFn.__executeServer(opts));
var adminListOrdersServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	search: data?.search ? String(data.search).trim() : void 0,
	limit: data?.limit ? Number(data.limit) : 100
})).handler(adminListOrdersServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	let query = "SELECT * FROM orders";
	const params = [];
	const conditions = [];
	if (data?.status && data.status !== "all") {
		conditions.push("status = ?");
		params.push(data.status);
	}
	if (data?.search) {
		conditions.push("(id LIKE ? OR email LIKE ? OR phone LIKE ?)");
		const term = `%${data.search}%`;
		params.push(term, term, term);
	}
	if (conditions.length > 0) query += " WHERE " + conditions.join(" AND ");
	query += " ORDER BY created_at DESC LIMIT ?";
	params.push(data?.limit ?? 100);
	const rows = db.prepare(query).all(...params);
	const result = [];
	const itemStmt = db.prepare("SELECT * FROM order_items WHERE order_id = ?");
	for (const r of rows) {
		const items = itemStmt.all(r.id);
		result.push(mapRowToOrder(r, items));
	}
	return result;
});
var adminUpdateOrderStatusServerFn_createServerFn_handler = createServerRpc({
	id: "e35a133ec1de0373db21cb754a2e42a0a5bafedb761341bb870fa4e0af42b2b1",
	name: "adminUpdateOrderStatusServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => adminUpdateOrderStatusServerFn.__executeServer(opts));
var adminUpdateOrderStatusServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminUpdateOrderStatusServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const now = Date.now();
	db.prepare("UPDATE orders SET status = ?, updated_at = ? WHERE id = ?").run(data.status, now, data.id);
	return {
		ok: true,
		id: data.id,
		status: data.status
	};
});
var adminProcessResolutionServerFn_createServerFn_handler = createServerRpc({
	id: "75320d427faed7bb519ca6b272ea119162e058ebf9eb60cb32363ce5dd062b18",
	name: "adminProcessResolutionServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => adminProcessResolutionServerFn.__executeServer(opts));
var adminProcessResolutionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminProcessResolutionServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const row = db.prepare("SELECT * FROM orders WHERE id = ?").get(data.id);
	if (!row || !row.resolution_json) return {
		ok: false,
		error: "No open resolution found"
	};
	const resolution = JSON.parse(row.resolution_json);
	const now = Date.now();
	if (data.action === "approve") {
		resolution.status = resolution.type === "cancellation" ? "cancelled" : "refunded";
		if (data.note) resolution.note = `${resolution.note ? `${resolution.note} — ` : ""}Admin note: ${data.note}`;
		db.prepare(`
        UPDATE orders
        SET resolution_json = ?, status = ?, updated_at = ?
        WHERE id = ?
      `).run(JSON.stringify(resolution), resolution.status, now, data.id);
	} else db.prepare(`
        UPDATE orders
        SET resolution_json = NULL, updated_at = ?
        WHERE id = ?
      `).run(now, data.id);
	return {
		ok: true,
		resolution
	};
});
var adminDeleteOrderServerFn_createServerFn_handler = createServerRpc({
	id: "b56c43b918719dd2ed567b4e2252e54b5a782a5a65bd53b3c3743063780f2769",
	name: "adminDeleteOrderServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => adminDeleteOrderServerFn.__executeServer(opts));
var adminDeleteOrderServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminDeleteOrderServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	db.prepare("DELETE FROM order_items WHERE order_id = ?").run(data.id);
	db.prepare("DELETE FROM orders WHERE id = ?").run(data.id);
	return {
		ok: true,
		id: data.id
	};
});
var adminClearAllOrdersServerFn_createServerFn_handler = createServerRpc({
	id: "7f71670ce8c24aabe2d638ad62ca2ece630e7153bc7c13e4bc8b8d67dd776588",
	name: "adminClearAllOrdersServerFn",
	filename: "src/functions/orders.ts"
}, (opts) => adminClearAllOrdersServerFn.__executeServer(opts));
var adminClearAllOrdersServerFn = createServerFn({ method: "POST" }).handler(adminClearAllOrdersServerFn_createServerFn_handler, async () => {
	getDb().exec("DELETE FROM order_items; DELETE FROM orders;");
	return { ok: true };
});
//#endregion
export { adminClearAllOrdersServerFn_createServerFn_handler, adminDeleteOrderServerFn_createServerFn_handler, adminListOrdersServerFn_createServerFn_handler, adminProcessResolutionServerFn_createServerFn_handler, adminUpdateOrderStatusServerFn_createServerFn_handler, createOrderServerFn_createServerFn_handler, getOrderByIdServerFn_createServerFn_handler, listUserOrdersServerFn_createServerFn_handler, resolveOrderServerFn_createServerFn_handler };
