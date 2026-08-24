import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type DbPromo = {
  code: string;
  label: string;
  description: string;
  percent_off: number | null;
  amount_off: number | null;
  min_subtotal: number | null;
  free_shipping: number;
  automatic: number;
  is_active: number;
  created_at: number;
};

export const getPromosServerFn = createServerFn({ method: "GET" })
  .handler(async (): Promise<DbPromo[]> => {
    const db = getDb();
    return db.prepare("SELECT * FROM promos WHERE is_active = 1 ORDER BY automatic DESC, created_at ASC").all() as DbPromo[];
  });

export const validatePromoServerFn = createServerFn({ method: "GET" })
  .validator((data: { code: string; subtotal: number }) => ({
    code: String(data?.code ?? "").trim().toUpperCase(),
    subtotal: Number(data?.subtotal ?? 0),
  }))
  .handler(async ({ data }): Promise<{ ok: boolean; promo?: DbPromo; message?: string }> => {
    if (!data.code) return { ok: false, message: "Enter a promo code" };
    const db = getDb();
    const promo = db.prepare("SELECT * FROM promos WHERE code = ? AND is_active = 1").get(data.code) as DbPromo | undefined;

    if (!promo) {
      return { ok: false, message: `Promo code "${data.code}" is invalid or expired` };
    }

    if (promo.min_subtotal && data.subtotal < promo.min_subtotal) {
      return { ok: false, message: `Add ₹${promo.min_subtotal - data.subtotal} more to use code ${promo.code}` };
    }

    return { ok: true, promo };
  });

export const adminListPromosServerFn = createServerFn({ method: "GET" })
  .handler(async (): Promise<DbPromo[]> => {
    const db = getDb();
    return db.prepare("SELECT * FROM promos ORDER BY created_at DESC").all() as DbPromo[];
  });

export const adminSavePromoServerFn = createServerFn({ method: "POST" })
  .validator((data: {
    code: string;
    label: string;
    description: string;
    percentOff?: number | null;
    amountOff?: number | null;
    minSubtotal?: number | null;
    freeShipping?: boolean;
    automatic?: boolean;
    isActive?: boolean;
  }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    const code = data.code.trim().toUpperCase();
    const now = Date.now();

    const existing = db.prepare("SELECT code FROM promos WHERE code = ?").get(code);
    if (existing) {
      db.prepare(`
        UPDATE promos SET
          label = ?, description = ?, percent_off = ?, amount_off = ?,
          min_subtotal = ?, free_shipping = ?, automatic = ?, is_active = ?
        WHERE code = ?
      `).run(
        data.label.trim(),
        data.description.trim(),
        data.percentOff ?? null,
        data.amountOff ?? null,
        data.minSubtotal ?? null,
        data.freeShipping ? 1 : 0,
        data.automatic ? 1 : 0,
        data.isActive ?? true ? 1 : 0,
        code
      );
    } else {
      db.prepare(`
        INSERT INTO promos (code, label, description, percent_off, amount_off, min_subtotal, free_shipping, automatic, is_active, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        code,
        data.label.trim(),
        data.description.trim(),
        data.percentOff ?? null,
        data.amountOff ?? null,
        data.minSubtotal ?? null,
        data.freeShipping ? 1 : 0,
        data.automatic ? 1 : 0,
        data.isActive ?? true ? 1 : 0,
        now
      );
    }
    return { ok: true, code };
  });

export const adminTogglePromoServerFn = createServerFn({ method: "POST" })
  .validator((data: { code: string; isActive: boolean }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("UPDATE promos SET is_active = ? WHERE code = ?").run(data.isActive ? 1 : 0, data.code);
    return { ok: true };
  });

export const adminDeletePromoServerFn = createServerFn({ method: "POST" })
  .validator((data: { code: string }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("DELETE FROM promos WHERE code = ?").run(data.code);
    return { ok: true };
  });
