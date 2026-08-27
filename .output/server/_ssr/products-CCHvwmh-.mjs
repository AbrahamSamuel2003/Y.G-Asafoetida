import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as getDb } from "./db-BfCdonaA.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CCHvwmh-.js
var getProductsServerFn_createServerFn_handler = createServerRpc({
	id: "6fd6047b094bad303fa9c409bc49cf6391980ab22bf5b5769556e54b026e49d9",
	name: "getProductsServerFn",
	filename: "src/functions/products.ts"
}, (opts) => getProductsServerFn.__executeServer(opts));
var getProductsServerFn = createServerFn({ method: "GET" }).handler(getProductsServerFn_createServerFn_handler, async () => {
	const db = getDb();
	const products = db.prepare("SELECT * FROM products ORDER BY bestseller DESC, created_at ASC").all();
	const variants = db.prepare("SELECT * FROM product_variants ORDER BY sort_order ASC").all();
	const variantMap = /* @__PURE__ */ new Map();
	for (const v of variants) {
		const list = variantMap.get(v.product_slug) ?? [];
		list.push(v);
		variantMap.set(v.product_slug, list);
	}
	return products.map((p) => ({
		...p,
		variants: variantMap.get(p.slug) ?? []
	}));
});
var getProductBySlugServerFn_createServerFn_handler = createServerRpc({
	id: "a98a3d54b8ba3103f1369966b7a6c5cd960326e04f9c8e356b865373cd860caf",
	name: "getProductBySlugServerFn",
	filename: "src/functions/products.ts"
}, (opts) => getProductBySlugServerFn.__executeServer(opts));
var getProductBySlugServerFn = createServerFn({ method: "GET" }).validator((data) => {
	return { slug: String(data?.slug ?? "").trim() };
}).handler(getProductBySlugServerFn_createServerFn_handler, async ({ data }) => {
	if (!data.slug) return null;
	const db = getDb();
	const product = db.prepare("SELECT * FROM products WHERE slug = ?").get(data.slug);
	if (!product) return null;
	const variants = db.prepare("SELECT * FROM product_variants WHERE product_slug = ? ORDER BY sort_order ASC").all(data.slug);
	return {
		...product,
		variants
	};
});
var adminSaveProductServerFn_createServerFn_handler = createServerRpc({
	id: "99ef867f772080863ab078c765e001f5ecb3be014eecc25afb3961fe20dd12d4",
	name: "adminSaveProductServerFn",
	filename: "src/functions/products.ts"
}, (opts) => adminSaveProductServerFn.__executeServer(opts));
var adminSaveProductServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminSaveProductServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const now = Date.now();
	if (db.prepare("SELECT slug FROM products WHERE slug = ?").get(data.slug)) db.prepare(`
        UPDATE products SET
          name = ?, tagline = ?, format = ?, gluten_free = ?, bestseller = ?,
          image = ?, gallery = ?, description = ?, ingredients = ?, usage = ?,
          shelf_life = ?, in_stock = ?, stock_left = ?, updated_at = ?
        WHERE slug = ?
      `).run(data.name, data.tagline, data.format, data.glutenFree ? 1 : 0, data.bestseller ? 1 : 0, data.image, JSON.stringify(data.gallery), data.description, data.ingredients, data.usage, data.shelfLife, data.inStock ? 1 : 0, data.stockLeft ?? null, now, data.slug);
	else db.prepare(`
        INSERT INTO products (
          slug, name, tagline, format, gluten_free, bestseller, image, gallery,
          description, ingredients, usage, shelf_life, in_stock, stock_left,
          rating, reviews, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 5.0, 0, ?, ?)
      `).run(data.slug, data.name, data.tagline, data.format, data.glutenFree ? 1 : 0, data.bestseller ? 1 : 0, data.image, JSON.stringify(data.gallery), data.description, data.ingredients, data.usage, data.shelfLife, data.inStock ? 1 : 0, data.stockLeft ?? null, now, now);
	db.prepare("DELETE FROM product_variants WHERE product_slug = ?").run(data.slug);
	const insertVariant = db.prepare(`
      INSERT INTO product_variants (id, product_slug, label, price, mrp, stock, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
	data.variants.forEach((v, idx) => {
		insertVariant.run(v.id, data.slug, v.label, v.price, v.mrp ?? null, v.stock ?? 100, idx);
	});
	return {
		ok: true,
		slug: data.slug
	};
});
var adminToggleProductStockServerFn_createServerFn_handler = createServerRpc({
	id: "034e15d47dd84df1260f2d3cf660fdb71ded4ebfcf1615ab2e8940f6099ed831",
	name: "adminToggleProductStockServerFn",
	filename: "src/functions/products.ts"
}, (opts) => adminToggleProductStockServerFn.__executeServer(opts));
var adminToggleProductStockServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminToggleProductStockServerFn_createServerFn_handler, async ({ data }) => {
	getDb().prepare("UPDATE products SET in_stock = ?, stock_left = ?, updated_at = ? WHERE slug = ?").run(data.inStock ? 1 : 0, data.stockLeft ?? null, Date.now(), data.slug);
	return { ok: true };
});
var adminDeleteProductServerFn_createServerFn_handler = createServerRpc({
	id: "6a3a3373e545a672fb65add9b5c5276c339bb9fca2cc32f2efd52dca0f3f4a4a",
	name: "adminDeleteProductServerFn",
	filename: "src/functions/products.ts"
}, (opts) => adminDeleteProductServerFn.__executeServer(opts));
var adminDeleteProductServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminDeleteProductServerFn_createServerFn_handler, async ({ data }) => {
	getDb().prepare("DELETE FROM products WHERE slug = ?").run(data.slug);
	return { ok: true };
});
//#endregion
export { adminDeleteProductServerFn_createServerFn_handler, adminSaveProductServerFn_createServerFn_handler, adminToggleProductStockServerFn_createServerFn_handler, getProductBySlugServerFn_createServerFn_handler, getProductsServerFn_createServerFn_handler };
