import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type DbVariant = {
  id: string;
  product_slug: string;
  label: string;
  price: number;
  mrp: number | null;
  stock: number;
  sort_order: number;
};

export type DbProduct = {
  slug: string;
  name: string;
  tagline: string;
  format: "powder" | "granules" | "cake" | "combo";
  gluten_free: number;
  bestseller: number;
  image: string;
  gallery: string;
  description: string;
  ingredients: string;
  usage: string;
  shelf_life: string;
  in_stock: number;
  stock_left: number | null;
  rating: number;
  reviews: number;
  created_at: number;
  updated_at: number;
  variants?: DbVariant[];
};

export const getProductsServerFn = createServerFn({ method: "GET" })
  .handler(async (): Promise<DbProduct[]> => {
    const db = getDb();
    const products = db.prepare("SELECT * FROM products ORDER BY bestseller DESC, created_at ASC").all() as unknown as DbProduct[];
    const variants = db.prepare("SELECT * FROM product_variants ORDER BY sort_order ASC").all() as unknown as DbVariant[];

    const variantMap = new Map<string, DbVariant[]>();
    for (const v of variants) {
      const list = variantMap.get(v.product_slug) ?? [];
      list.push(v);
      variantMap.set(v.product_slug, list);
    }

    return products.map((p) => ({
      ...p,
      variants: variantMap.get(p.slug) ?? [],
    }));
  });

export const getProductBySlugServerFn = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => {
    return { slug: String(data?.slug ?? "").trim() };
  })
  .handler(async ({ data }): Promise<DbProduct | null> => {
    if (!data.slug) return null;
    const db = getDb();
    const product = db.prepare("SELECT * FROM products WHERE slug = ?").get(data.slug) as unknown as DbProduct | undefined;
    if (!product) return null;

    const variants = db.prepare("SELECT * FROM product_variants WHERE product_slug = ? ORDER BY sort_order ASC").all(data.slug) as unknown as DbVariant[];
    return {
      ...product,
      variants,
    };
  });

export type AdminProductInput = {
  slug: string;
  name: string;
  tagline: string;
  format: "powder" | "granules" | "cake" | "combo";
  glutenFree: boolean;
  bestseller: boolean;
  image: string;
  gallery: string[];
  description: string;
  ingredients: string;
  usage: string;
  shelfLife: string;
  inStock: boolean;
  stockLeft: number | null;
  variants: Array<{
    id: string;
    label: string;
    price: number;
    mrp?: number | null;
    stock?: number;
  }>;
};

export const adminSaveProductServerFn = createServerFn({ method: "POST" })
  .validator((data: AdminProductInput) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    const now = Date.now();

    const existing = db.prepare("SELECT slug FROM products WHERE slug = ?").get(data.slug);

    if (existing) {
      // Update
      db.prepare(`
        UPDATE products SET
          name = ?, tagline = ?, format = ?, gluten_free = ?, bestseller = ?,
          image = ?, gallery = ?, description = ?, ingredients = ?, usage = ?,
          shelf_life = ?, in_stock = ?, stock_left = ?, updated_at = ?
        WHERE slug = ?
      `).run(
        data.name,
        data.tagline,
        data.format,
        data.glutenFree ? 1 : 0,
        data.bestseller ? 1 : 0,
        data.image,
        JSON.stringify(data.gallery),
        data.description,
        data.ingredients,
        data.usage,
        data.shelfLife,
        data.inStock ? 1 : 0,
        data.stockLeft ?? null,
        now,
        data.slug
      );
    } else {
      // Insert
      db.prepare(`
        INSERT INTO products (
          slug, name, tagline, format, gluten_free, bestseller, image, gallery,
          description, ingredients, usage, shelf_life, in_stock, stock_left,
          rating, reviews, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 5.0, 0, ?, ?)
      `).run(
        data.slug,
        data.name,
        data.tagline,
        data.format,
        data.glutenFree ? 1 : 0,
        data.bestseller ? 1 : 0,
        data.image,
        JSON.stringify(data.gallery),
        data.description,
        data.ingredients,
        data.usage,
        data.shelfLife,
        data.inStock ? 1 : 0,
        data.stockLeft ?? null,
        now,
        now
      );
    }

    // Replace variants
    db.prepare("DELETE FROM product_variants WHERE product_slug = ?").run(data.slug);
    const insertVariant = db.prepare(`
      INSERT INTO product_variants (id, product_slug, label, price, mrp, stock, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    data.variants.forEach((v, idx) => {
      insertVariant.run(v.id, data.slug, v.label, v.price, v.mrp ?? null, v.stock ?? 100, idx);
    });

    return { ok: true, slug: data.slug };
  });

export const adminToggleProductStockServerFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string; inStock: boolean; stockLeft?: number | null }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("UPDATE products SET in_stock = ?, stock_left = ?, updated_at = ? WHERE slug = ?").run(
      data.inStock ? 1 : 0,
      data.stockLeft ?? null,
      Date.now(),
      data.slug
    );
    return { ok: true };
  });

export const adminDeleteProductServerFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("DELETE FROM products WHERE slug = ?").run(data.slug);
    return { ok: true };
  });
