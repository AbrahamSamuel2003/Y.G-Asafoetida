import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-BfCdonaA.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alerts-BVq7LW3n.js
var subscribeStockAlertServerFn_createServerFn_handler = createServerRpc({
	id: "126c54026198195dc0ac76ee0c3b09b726dc7cc97c5f4c13e451d8b5a4206d59",
	name: "subscribeStockAlertServerFn",
	filename: "src/functions/alerts.ts"
}, (opts) => subscribeStockAlertServerFn.__executeServer(opts));
var subscribeStockAlertServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(subscribeStockAlertServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const id = `alt_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
	const now = Date.now();
	if (!db.prepare("SELECT id FROM stock_alerts WHERE slug = ? AND contact = ?").get(data.slug, data.contact.trim())) db.prepare(`
        INSERT INTO stock_alerts (id, slug, contact, created_at, notified, notified_at)
        VALUES (?, ?, ?, ?, 0, NULL)
      `).run(id, data.slug, data.contact.trim(), now);
	return { ok: true };
});
var adminListStockAlertsServerFn_createServerFn_handler = createServerRpc({
	id: "aec148f7d6271b05e3d0f9154e305e72e7a305f4f94620ded3cc4a485445ee1e",
	name: "adminListStockAlertsServerFn",
	filename: "src/functions/alerts.ts"
}, (opts) => adminListStockAlertsServerFn.__executeServer(opts));
var adminListStockAlertsServerFn = createServerFn({ method: "GET" }).handler(adminListStockAlertsServerFn_createServerFn_handler, async () => {
	return getDb().prepare(`
      SELECT sa.*, p.name as product_name
      FROM stock_alerts sa
      LEFT JOIN products p ON sa.slug = p.slug
      ORDER BY sa.created_at DESC
    `).all();
});
var adminNotifyStockAlertServerFn_createServerFn_handler = createServerRpc({
	id: "579f932c9185d201f5223618d08ff0a6699aa8e2a3f1667b36c426726418f027",
	name: "adminNotifyStockAlertServerFn",
	filename: "src/functions/alerts.ts"
}, (opts) => adminNotifyStockAlertServerFn.__executeServer(opts));
var adminNotifyStockAlertServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminNotifyStockAlertServerFn_createServerFn_handler, async ({ data }) => {
	getDb().prepare("UPDATE stock_alerts SET notified = 1, notified_at = ? WHERE id = ?").run(Date.now(), data.id);
	return { ok: true };
});
//#endregion
export { adminListStockAlertsServerFn_createServerFn_handler, adminNotifyStockAlertServerFn_createServerFn_handler, subscribeStockAlertServerFn_createServerFn_handler };
