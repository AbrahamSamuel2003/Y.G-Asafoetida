import { createServerFn } from "@tanstack/react-start";
import { getDb } from "@/server/db";

export type DbTicket = {
  id: string;
  topic: string;
  order_id: string | null;
  message: string;
  contact: string;
  name: string | null;
  status: "open" | "in_progress" | "resolved" | "closed";
  reply: string | null;
  created_at: number;
  updated_at: number;
};

export const createTicketServerFn = createServerFn({ method: "POST" })
  .validator((data: {
    topic: string;
    orderId?: string | undefined;
    message: string;
    contact: string;
    name?: string | undefined;
  }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; ticket: DbTicket }> => {
    const db = getDb();
    const id = `TKT${Math.floor(10000 + Math.random() * 89999)}`;
    const now = Date.now();

    db.prepare(`
      INSERT INTO tickets (id, topic, order_id, message, contact, name, status, reply, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, 'open', NULL, ?, ?)
    `).run(
      id,
      data.topic,
      data.orderId ?? null,
      data.message.trim(),
      data.contact.trim(),
      data.name?.trim() ?? null,
      now,
      now
    );

    const ticket = db.prepare("SELECT * FROM tickets WHERE id = ?").get(id) as DbTicket;
    return { ok: true, ticket };
  });

export const adminListTicketsServerFn = createServerFn({ method: "GET" })
  .validator((data?: { status?: string; search?: string }) => ({
    status: data?.status ? String(data.status).trim() : undefined,
    search: data?.search ? String(data.search).trim() : undefined,
  }))
  .handler(async ({ data }): Promise<DbTicket[]> => {
    const db = getDb();
    let query = "SELECT * FROM tickets";
    const conditions: string[] = [];
    const params: string[] = [];

    if (data?.status && data.status !== "all") {
      conditions.push("status = ?");
      params.push(data.status);
    }
    if (data?.search) {
      conditions.push("(id LIKE ? OR contact LIKE ? OR message LIKE ? OR topic LIKE ?)");
      const term = `%${data.search}%`;
      params.push(term, term, term, term);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }
    query += " ORDER BY created_at DESC";

    return db.prepare(query).all(...params) as DbTicket[];
  });

export const adminUpdateTicketServerFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    status: "open" | "in_progress" | "resolved" | "closed";
    reply?: string | undefined;
  }) => data)
  .handler(async ({ data }) => {
    const db = getDb();
    const now = Date.now();
    db.prepare(`
      UPDATE tickets
      SET status = ?, reply = ?, updated_at = ?
      WHERE id = ?
    `).run(data.status, data.reply ?? null, now, data.id);
    return { ok: true };
  });
