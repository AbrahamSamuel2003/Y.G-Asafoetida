import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type DbReview = {
  id: string;
  slug: string;
  rating: number;
  title: string;
  comment: string;
  name: string;
  city: string | null;
  email: string | null;
  phone: string | null;
  contact_opt_in: number;
  created_at: number;
  status: "pending" | "published" | "rejected";
};

export const getProductReviewsServerFn = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => ({ slug: String(data?.slug ?? "").trim() }))
  .handler(async ({ data }): Promise<DbReview[]> => {
    if (!data.slug) return [];
    const db = getDb();
    return db.prepare(`
      SELECT * FROM reviews
      WHERE slug = ? AND status = 'published'
      ORDER BY created_at DESC
    `).all(data.slug) as DbReview[];
  });

export const submitReviewServerFn = createServerFn({ method: "POST" })
  .validator((data: {
    slug: string;
    rating: number;
    title: string;
    comment: string;
    name: string;
    city?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    contactOptIn?: boolean | undefined;
  }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; review: DbReview }> => {
    const db = getDb();
    const id = `rev_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
    const now = Date.now();

    db.prepare(`
      INSERT INTO reviews (
        id, slug, rating, title, comment, name, city, email, phone, contact_opt_in, created_at, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `).run(
      id,
      data.slug,
      data.rating,
      data.title,
      data.comment,
      data.name,
      data.city ?? null,
      data.email ?? null,
      data.phone ?? null,
      data.contactOptIn ? 1 : 0,
      now
    );

    const review = db.prepare("SELECT * FROM reviews WHERE id = ?").get(id) as DbReview;
    return { ok: true, review };
  });

export const adminListReviewsServerFn = createServerFn({ method: "GET" })
  .validator((data?: { status?: string; slug?: string }) => ({
    status: data?.status ? String(data.status).trim() : undefined,
    slug: data?.slug ? String(data.slug).trim() : undefined,
  }))
  .handler(async ({ data }): Promise<DbReview[]> => {
    const db = getDb();
    let query = "SELECT * FROM reviews";
    const conditions: string[] = [];
    const params: string[] = [];

    if (data?.status && data.status !== "all") {
      conditions.push("status = ?");
      params.push(data.status);
    }
    if (data?.slug && data.slug !== "all") {
      conditions.push("slug = ?");
      params.push(data.slug);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }
    query += " ORDER BY created_at DESC";

    return db.prepare(query).all(...params) as DbReview[];
  });

export const adminModerateReviewServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; action: "publish" | "reject" | "delete" }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    if (data.action === "delete") {
      db.prepare("DELETE FROM reviews WHERE id = ?").run(data.id);
    } else {
      const newStatus = data.action === "publish" ? "published" : "rejected";
      db.prepare("UPDATE reviews SET status = ? WHERE id = ?").run(newStatus, data.id);
    }
    return { ok: true };
  });
