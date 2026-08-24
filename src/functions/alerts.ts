import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type DbAlert = {
  id: string;
  slug: string;
  contact: string;
  created_at: number;
  notified: number;
  notified_at: number | null;
  product_name?: string;
};

export const subscribeStockAlertServerFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string; contact: string }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    const db = getDb();
    const id = `alt_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
    const now = Date.now();

    // Check if already subscribed
    const existing = db.prepare("SELECT id FROM stock_alerts WHERE slug = ? AND contact = ?").get(data.slug, data.contact.trim());
    if (!existing) {
      db.prepare(`
        INSERT INTO stock_alerts (id, slug, contact, created_at, notified, notified_at)
        VALUES (?, ?, ?, ?, 0, NULL)
      `).run(id, data.slug, data.contact.trim(), now);
    }
    return { ok: true };
  });

export const adminListStockAlertsServerFn = createServerFn({ method: "GET" })
  .handler(async (): Promise<DbAlert[]> => {
    const db = getDb();
    return db.prepare(`
      SELECT sa.*, p.name as product_name
      FROM stock_alerts sa
      LEFT JOIN products p ON sa.slug = p.slug
      ORDER BY sa.created_at DESC
    `).all() as DbAlert[];
  });

export const adminNotifyStockAlertServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("UPDATE stock_alerts SET notified = 1, notified_at = ? WHERE id = ?").run(Date.now(), data.id);
    return { ok: true };
  });
