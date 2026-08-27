import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-BfCdonaA.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-26aGsMXU.js
var getProductReviewsServerFn_createServerFn_handler = createServerRpc({
	id: "8e5043662c086483cd737a8f1c69e85a3e154d5b44f3b6afc700a0fd80bc0d6c",
	name: "getProductReviewsServerFn",
	filename: "src/functions/reviews.ts"
}, (opts) => getProductReviewsServerFn.__executeServer(opts));
var getProductReviewsServerFn = createServerFn({ method: "GET" }).validator((data) => ({ slug: String(data?.slug ?? "").trim() })).handler(getProductReviewsServerFn_createServerFn_handler, async ({ data }) => {
	if (!data.slug) return [];
	return getDb().prepare(`
      SELECT * FROM reviews
      WHERE slug = ? AND status = 'published'
      ORDER BY created_at DESC
    `).all(data.slug);
});
var submitReviewServerFn_createServerFn_handler = createServerRpc({
	id: "a51633ae714f150ce08118589e6de10d0e814164bfa9139085440e56319fc489",
	name: "submitReviewServerFn",
	filename: "src/functions/reviews.ts"
}, (opts) => submitReviewServerFn.__executeServer(opts));
var submitReviewServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(submitReviewServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const id = `rev_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
	const now = Date.now();
	db.prepare(`
      INSERT INTO reviews (
        id, slug, rating, title, comment, name, city, email, phone, contact_opt_in, created_at, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `).run(id, data.slug, data.rating, data.title, data.comment, data.name, data.city ?? null, data.email ?? null, data.phone ?? null, data.contactOptIn ? 1 : 0, now);
	return {
		ok: true,
		review: db.prepare("SELECT * FROM reviews WHERE id = ?").get(id)
	};
});
var adminListReviewsServerFn_createServerFn_handler = createServerRpc({
	id: "ebb0f906b5b901fe0ffebbae00ebba4b5b3fa68d35280b759b33d6f0827ed58d",
	name: "adminListReviewsServerFn",
	filename: "src/functions/reviews.ts"
}, (opts) => adminListReviewsServerFn.__executeServer(opts));
var adminListReviewsServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	slug: data?.slug ? String(data.slug).trim() : void 0
})).handler(adminListReviewsServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	let query = "SELECT * FROM reviews";
	const conditions = [];
	const params = [];
	if (data?.status && data.status !== "all") {
		conditions.push("status = ?");
		params.push(data.status);
	}
	if (data?.slug && data.slug !== "all") {
		conditions.push("slug = ?");
		params.push(data.slug);
	}
	if (conditions.length > 0) query += " WHERE " + conditions.join(" AND ");
	query += " ORDER BY created_at DESC";
	return db.prepare(query).all(...params);
});
var adminModerateReviewServerFn_createServerFn_handler = createServerRpc({
	id: "20c069086689ace61e7564a26d0c6056a924e9fe5b8d417bb75c835bc1235ea4",
	name: "adminModerateReviewServerFn",
	filename: "src/functions/reviews.ts"
}, (opts) => adminModerateReviewServerFn.__executeServer(opts));
var adminModerateReviewServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminModerateReviewServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	if (data.action === "delete") db.prepare("DELETE FROM reviews WHERE id = ?").run(data.id);
	else {
		const newStatus = data.action === "publish" ? "published" : "rejected";
		db.prepare("UPDATE reviews SET status = ? WHERE id = ?").run(newStatus, data.id);
	}
	return { ok: true };
});
//#endregion
export { adminListReviewsServerFn_createServerFn_handler, adminModerateReviewServerFn_createServerFn_handler, getProductReviewsServerFn_createServerFn_handler, submitReviewServerFn_createServerFn_handler };
