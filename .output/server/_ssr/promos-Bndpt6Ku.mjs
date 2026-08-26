import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-DqClzGFy.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promos-Bndpt6Ku.js
var getPromosServerFn_createServerFn_handler = createServerRpc({
	id: "662d6f1c2bd68d6d29d35dcb66e4a46553ad3d21389a0de95d1ee49746475525",
	name: "getPromosServerFn",
	filename: "src/functions/promos.ts"
}, (opts) => getPromosServerFn.__executeServer(opts));
var getPromosServerFn = createServerFn({ method: "GET" }).handler(getPromosServerFn_createServerFn_handler, async () => {
	return getDb().prepare("SELECT * FROM promos WHERE is_active = 1 ORDER BY automatic DESC, created_at ASC").all();
});
var validatePromoServerFn_createServerFn_handler = createServerRpc({
	id: "f37bd6b19a3137ab3020ad613d20722b519d30360e8247fa9a08c56427c7ab36",
	name: "validatePromoServerFn",
	filename: "src/functions/promos.ts"
}, (opts) => validatePromoServerFn.__executeServer(opts));
var validatePromoServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	code: String(data?.code ?? "").trim().toUpperCase(),
	subtotal: Number(data?.subtotal ?? 0)
})).handler(validatePromoServerFn_createServerFn_handler, async ({ data }) => {
	if (!data.code) return {
		ok: false,
		message: "Enter a promo code"
	};
	const promo = getDb().prepare("SELECT * FROM promos WHERE code = ? AND is_active = 1").get(data.code);
	if (!promo) return {
		ok: false,
		message: `Promo code "${data.code}" is invalid or expired`
	};
	if (promo.min_subtotal && data.subtotal < promo.min_subtotal) return {
		ok: false,
		message: `Add ₹${promo.min_subtotal - data.subtotal} more to use code ${promo.code}`
	};
	return {
		ok: true,
		promo
	};
});
var adminListPromosServerFn_createServerFn_handler = createServerRpc({
	id: "4335de7d3123ebb8f481c1bb2656f1308f649d1323a6b1623293912011661f40",
	name: "adminListPromosServerFn",
	filename: "src/functions/promos.ts"
}, (opts) => adminListPromosServerFn.__executeServer(opts));
var adminListPromosServerFn = createServerFn({ method: "GET" }).handler(adminListPromosServerFn_createServerFn_handler, async () => {
	return getDb().prepare("SELECT * FROM promos ORDER BY created_at DESC").all();
});
var adminSavePromoServerFn_createServerFn_handler = createServerRpc({
	id: "2a42d7e7bed08cd5266ea2381ccb0759769ab26a7dd72308313256fd3f03078f",
	name: "adminSavePromoServerFn",
	filename: "src/functions/promos.ts"
}, (opts) => adminSavePromoServerFn.__executeServer(opts));
var adminSavePromoServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminSavePromoServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const code = data.code.trim().toUpperCase();
	const now = Date.now();
	if (db.prepare("SELECT code FROM promos WHERE code = ?").get(code)) db.prepare(`
        UPDATE promos SET
          label = ?, description = ?, percent_off = ?, amount_off = ?,
          min_subtotal = ?, free_shipping = ?, automatic = ?, is_active = ?
        WHERE code = ?
      `).run(data.label.trim(), data.description.trim(), data.percentOff ?? null, data.amountOff ?? null, data.minSubtotal ?? null, data.freeShipping ? 1 : 0, data.automatic ? 1 : 0, data.isActive ?? true ? 1 : 0, code);
	else db.prepare(`
        INSERT INTO promos (code, label, description, percent_off, amount_off, min_subtotal, free_shipping, automatic, is_active, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(code, data.label.trim(), data.description.trim(), data.percentOff ?? null, data.amountOff ?? null, data.minSubtotal ?? null, data.freeShipping ? 1 : 0, data.automatic ? 1 : 0, data.isActive ?? true ? 1 : 0, now);
	return {
		ok: true,
		code
	};
});
var adminTogglePromoServerFn_createServerFn_handler = createServerRpc({
	id: "a4bbf68444121a1d981eaffe7bd2b4341fd088f6a8916ebb724863c472b640df",
	name: "adminTogglePromoServerFn",
	filename: "src/functions/promos.ts"
}, (opts) => adminTogglePromoServerFn.__executeServer(opts));
var adminTogglePromoServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminTogglePromoServerFn_createServerFn_handler, async ({ data }) => {
	getDb().prepare("UPDATE promos SET is_active = ? WHERE code = ?").run(data.isActive ? 1 : 0, data.code);
	return { ok: true };
});
var adminDeletePromoServerFn_createServerFn_handler = createServerRpc({
	id: "faccef61049d8308c82b4d9551a0a2cc4ed1609d9ca39e1bc82af6dae7f0e7bc",
	name: "adminDeletePromoServerFn",
	filename: "src/functions/promos.ts"
}, (opts) => adminDeletePromoServerFn.__executeServer(opts));
var adminDeletePromoServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminDeletePromoServerFn_createServerFn_handler, async ({ data }) => {
	getDb().prepare("DELETE FROM promos WHERE code = ?").run(data.code);
	return { ok: true };
});
//#endregion
export { adminDeletePromoServerFn_createServerFn_handler, adminListPromosServerFn_createServerFn_handler, adminSavePromoServerFn_createServerFn_handler, adminTogglePromoServerFn_createServerFn_handler, getPromosServerFn_createServerFn_handler, validatePromoServerFn_createServerFn_handler };
