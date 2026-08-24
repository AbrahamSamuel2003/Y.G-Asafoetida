import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";
import type { Address, OrderItem, OrderTotals, Resolution } from "@/lib/orders";

export type DbOrderRow = {
  id: string;
  created_at: number;
  email: string;
  phone: string;
  subtotal: number;
  discount: number;
  shipping: number;
  gift_wrap: number;
  cod_fee: number;
  total: number;
  promo_code: string | null;
  address_json: string;
  payment: string;
  delivery: "standard" | "express";
  status: string;
  notes: string | null;
  gift: number;
  gift_message: string | null;
  resolution_json: string | null;
  updated_at: number;
};

export type DbOrderItemRow = {
  id: string;
  order_id: string;
  slug: string;
  variant_id: string;
  name: string;
  variant_label: string;
  image: string;
  qty: number;
  price: number;
};

export type FullOrder = {
  id: string;
  createdAt: number;
  email: string;
  phone: string;
  items: OrderItem[];
  totals: OrderTotals;
  promoCode?: string | null | undefined;
  address: Address;
  payment: string;
  delivery: "standard" | "express";
  status: string;
  notes?: string | undefined;
  gift: boolean;
  giftMessage?: string | undefined;
  resolution?: Resolution | null | undefined;
};

function mapRowToOrder(row: DbOrderRow, items: DbOrderItemRow[]): FullOrder {
  let address: Address;
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
      phone: row.phone,
    };
  }

  let resolution: Resolution | null = null;
  if (row.resolution_json) {
    try {
      resolution = JSON.parse(row.resolution_json);
    } catch {
      resolution = null;
    }
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
      price: i.price,
    })),
    totals: {
      subtotal: row.subtotal,
      discount: row.discount,
      shipping: row.shipping,
      giftWrap: row.gift_wrap,
      codFee: row.cod_fee,
      total: row.total,
    },
    promoCode: row.promo_code,
    address,
    payment: row.payment,
    delivery: row.delivery,
    status: row.status,
    notes: row.notes ?? undefined,
    gift: Boolean(row.gift),
    giftMessage: row.gift_message ?? undefined,
    resolution,
  };
}

export const createOrderServerFn = createServerFn({ method: "POST" })
  .validator((data: {
    email: string;
    phone: string;
    items: OrderItem[];
    totals: OrderTotals;
    promoCode?: string | null | undefined;
    address: Address;
    payment: string;
    delivery: "standard" | "express";
    status?: string | undefined;
    notes?: string | undefined;
    gift?: boolean | undefined;
    giftMessage?: string | undefined;
    resolution?: Resolution | null | undefined;
  }) => data)
  .handler(async ({ data }): Promise<FullOrder> => {
    const db = getDb();
    const now = Date.now();
    const orderId = `YG${Math.floor(100000 + Math.random() * 899999)}`;

    const insertOrder = db.prepare(`
      INSERT INTO orders (
        id, created_at, email, phone, subtotal, discount, shipping, gift_wrap,
        cod_fee, total, promo_code, address_json, payment, delivery, status,
        notes, gift, gift_message, resolution_json, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'placed', ?, ?, ?, NULL, ?)
    `);

    insertOrder.run(
      orderId,
      now,
      data.email.trim(),
      data.phone.trim(),
      data.totals.subtotal,
      data.totals.discount,
      data.totals.shipping,
      data.totals.giftWrap,
      data.totals.codFee,
      data.totals.total,
      data.promoCode ?? null,
      JSON.stringify(data.address),
      data.payment,
      data.delivery,
      data.notes ?? null,
      data.gift ? 1 : 0,
      data.giftMessage ?? null,
      now
    );

    const insertItem = db.prepare(`
      INSERT INTO order_items (id, order_id, slug, variant_id, name, variant_label, image, qty, price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const orderItems: DbOrderItemRow[] = [];
    for (let i = 0; i < data.items.length; i++) {
      const item = data.items[i]!;
      const itemId = `item_${orderId}_${i + 1}`;
      insertItem.run(
        itemId,
        orderId,
        item.slug,
        item.variantId,
        item.name,
        item.variantLabel,
        item.image,
        item.qty,
        item.price
      );
      orderItems.push({
        id: itemId,
        order_id: orderId,
        slug: item.slug,
        variant_id: item.variantId,
        name: item.name,
        variant_label: item.variantLabel,
        image: item.image,
        qty: item.qty,
        price: item.price,
      });

      // Optionally deduct variant stock
      try {
        db.prepare(`
          UPDATE product_variants
          SET stock = MAX(0, stock - ?)
          WHERE product_slug = ? AND id = ?
        `).run(item.qty, item.slug, item.variantId);
      } catch {
        /* ignore stock deduction errors */
      }
    }

    const createdRow = db.prepare("SELECT * FROM orders WHERE id = ?").get(orderId) as DbOrderRow;
    return mapRowToOrder(createdRow, orderItems);
  });

export const getOrderByIdServerFn = createServerFn({ method: "GET" })
  .validator((data: { id: string; verify?: string | undefined }) => {
    return {
      id: String(data?.id ?? "").trim(),
      verify: data?.verify ? String(data.verify).trim() : undefined,
    };
  })
  .handler(async ({ data }): Promise<FullOrder | null> => {
    if (!data.id) return null;
    const db = getDb();
    const row = db.prepare("SELECT * FROM orders WHERE id = ?").get(data.id) as DbOrderRow | undefined;
    if (!row) return null;

    if (data.verify) {
      const v = data.verify.toLowerCase().replace(/\s+/g, "");
      const emailMatches = row.email.toLowerCase() === v;
      const phoneMatches = row.phone.replace(/\D/g, "").endsWith(v.replace(/\D/g, ""));
      if (!emailMatches && !phoneMatches) {
        return null;
      }
    }

    const items = db.prepare("SELECT * FROM order_items WHERE order_id = ?").all(data.id) as DbOrderItemRow[];
    return mapRowToOrder(row, items);
  });

export const listUserOrdersServerFn = createServerFn({ method: "GET" })
  .validator((data: { email?: string | undefined; phone?: string | undefined }) => ({
    email: data?.email ? String(data.email).trim() : undefined,
    phone: data?.phone ? String(data.phone).trim() : undefined,
  }))
  .handler(async ({ data }): Promise<FullOrder[]> => {
    if (!data.email && !data.phone) return [];
    const db = getDb();

    let rows: DbOrderRow[] = [];
    if (data.email && data.phone) {
      rows = db.prepare("SELECT * FROM orders WHERE email = ? OR phone = ? ORDER BY created_at DESC").all(data.email, data.phone) as DbOrderRow[];
    } else if (data.email) {
      rows = db.prepare("SELECT * FROM orders WHERE email = ? ORDER BY created_at DESC").all(data.email) as DbOrderRow[];
    } else if (data.phone) {
      rows = db.prepare("SELECT * FROM orders WHERE phone = ? ORDER BY created_at DESC").all(data.phone) as DbOrderRow[];
    }

    const result: FullOrder[] = [];
    const itemStmt = db.prepare("SELECT * FROM order_items WHERE order_id = ?");
    for (const r of rows) {
      const items = itemStmt.all(r.id) as DbOrderItemRow[];
      result.push(mapRowToOrder(r, items));
    }
    return result;
  });

export const resolveOrderServerFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    type: "cancellation" | "refund";
    reason: string;
    note?: string | undefined;
  }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; resolution: Resolution | null; error?: string }> => {
    const db = getDb();
    const row = db.prepare("SELECT * FROM orders WHERE id = ?").get(data.id) as DbOrderRow | undefined;
    if (!row) return { ok: false, resolution: null, error: "Order not found" };

    const now = Date.now();
    const isCancel = data.type === "cancellation";
    const amount = row.payment === "cod" ? 0 : row.total;

    const resolution: Resolution = {
      type: data.type,
      status: isCancel ? "cancelled" : "refund_requested",
      reason: data.reason,
      note: data.note,
      requestedAt: now,
      amount,
      refundBy: now + (isCancel ? 3 : 7) * 24 * 60 * 60 * 1000,
      method: row.payment === "cod" ? "Bank transfer" : `Original ${row.payment.toUpperCase()} payment`,
    };

    const newStatus = isCancel ? "cancelled" : row.status;

    db.prepare(`
      UPDATE orders
      SET resolution_json = ?, status = ?, updated_at = ?
      WHERE id = ?
    `).run(JSON.stringify(resolution), newStatus, now, data.id);

    return { ok: true, resolution };
  });

export const adminListOrdersServerFn = createServerFn({ method: "GET" })
  .validator((data?: { status?: string; search?: string; limit?: number }) => ({
    status: data?.status ? String(data.status).trim() : undefined,
    search: data?.search ? String(data.search).trim() : undefined,
    limit: data?.limit ? Number(data.limit) : 100,
  }))
  .handler(async ({ data }): Promise<FullOrder[]> => {
    const db = getDb();
    let query = "SELECT * FROM orders";
    const params: (string | number)[] = [];
    const conditions: string[] = [];

    if (data?.status && data.status !== "all") {
      conditions.push("status = ?");
      params.push(data.status);
    }

    if (data?.search) {
      conditions.push("(id LIKE ? OR email LIKE ? OR phone LIKE ?)");
      const term = `%${data.search}%`;
      params.push(term, term, term);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " ORDER BY created_at DESC LIMIT ?";
    params.push(data?.limit ?? 100);

    const rows = db.prepare(query).all(...params) as DbOrderRow[];
    const result: FullOrder[] = [];
    const itemStmt = db.prepare("SELECT * FROM order_items WHERE order_id = ?");

    for (const r of rows) {
      const items = itemStmt.all(r.id) as DbOrderItemRow[];
      result.push(mapRowToOrder(r, items));
    }
    return result;
  });

export const adminUpdateOrderStatusServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; status: string }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    const now = Date.now();
    db.prepare("UPDATE orders SET status = ?, updated_at = ? WHERE id = ?").run(data.status, now, data.id);
    return { ok: true, id: data.id, status: data.status };
  });

export const adminProcessResolutionServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; action: "approve" | "reject"; note?: string | undefined }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    const row = db.prepare("SELECT * FROM orders WHERE id = ?").get(data.id) as DbOrderRow | undefined;
    if (!row || !row.resolution_json) return { ok: false, error: "No open resolution found" };

    const resolution: Resolution = JSON.parse(row.resolution_json);
    const now = Date.now();

    if (data.action === "approve") {
      resolution.status = resolution.type === "cancellation" ? "cancelled" : "refunded";
      if (data.note) resolution.note = `${resolution.note ? `${resolution.note} — ` : ""}Admin note: ${data.note}`;
      db.prepare(`
        UPDATE orders
        SET resolution_json = ?, status = ?, updated_at = ?
        WHERE id = ?
      `).run(JSON.stringify(resolution), resolution.status, now, data.id);
    } else {
      // Reject resolution, clear resolution
      db.prepare(`
        UPDATE orders
        SET resolution_json = NULL, updated_at = ?
        WHERE id = ?
      `).run(now, data.id);
    }

    return { ok: true, resolution };
  });

export const adminDeleteOrderServerFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    db.prepare("DELETE FROM order_items WHERE order_id = ?").run(data.id);
    db.prepare("DELETE FROM orders WHERE id = ?").run(data.id);
    return { ok: true, id: data.id };
  });

export const adminClearAllOrdersServerFn = createServerFn({ method: "POST" })
  .handler(async () => {
    const db = getDb();
    db.exec("DELETE FROM order_items; DELETE FROM orders;");
    return { ok: true };
  });
