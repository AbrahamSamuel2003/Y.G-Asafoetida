import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { t as getDb } from "./db-CPz3PJoi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tickets-DkS093NU.js
var createTicketServerFn_createServerFn_handler = createServerRpc({
	id: "c3fecf55cc7b7916e509d7c6d547884f16b71fca3b22f3faedfac47bdbe64fa0",
	name: "createTicketServerFn",
	filename: "src/functions/tickets.ts"
}, (opts) => createTicketServerFn.__executeServer(opts));
var createTicketServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createTicketServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const id = `TKT${Math.floor(1e4 + Math.random() * 89999)}`;
	const now = Date.now();
	db.prepare(`
      INSERT INTO tickets (id, topic, order_id, message, contact, name, status, reply, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, 'open', NULL, ?, ?)
    `).run(id, data.topic, data.orderId ?? null, data.message.trim(), data.contact.trim(), data.name?.trim() ?? null, now, now);
	return {
		ok: true,
		ticket: db.prepare("SELECT * FROM tickets WHERE id = ?").get(id)
	};
});
var adminListTicketsServerFn_createServerFn_handler = createServerRpc({
	id: "dd636231c74f7c74c8f0b9ca0db4ff9b9973a8e14b6ad8ea9aee73ea124c3f33",
	name: "adminListTicketsServerFn",
	filename: "src/functions/tickets.ts"
}, (opts) => adminListTicketsServerFn.__executeServer(opts));
var adminListTicketsServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	search: data?.search ? String(data.search).trim() : void 0
})).handler(adminListTicketsServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	let query = "SELECT * FROM tickets";
	const conditions = [];
	const params = [];
	if (data?.status && data.status !== "all") {
		conditions.push("status = ?");
		params.push(data.status);
	}
	if (data?.search) {
		conditions.push("(id LIKE ? OR contact LIKE ? OR message LIKE ? OR topic LIKE ?)");
		const term = `%${data.search}%`;
		params.push(term, term, term, term);
	}
	if (conditions.length > 0) query += " WHERE " + conditions.join(" AND ");
	query += " ORDER BY created_at DESC";
	return db.prepare(query).all(...params);
});
var adminUpdateTicketServerFn_createServerFn_handler = createServerRpc({
	id: "676054e73ed60c9dbab89a05f5481cd148ce9c4d7611d2270324187caa931696",
	name: "adminUpdateTicketServerFn",
	filename: "src/functions/tickets.ts"
}, (opts) => adminUpdateTicketServerFn.__executeServer(opts));
var adminUpdateTicketServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(adminUpdateTicketServerFn_createServerFn_handler, async ({ data }) => {
	const db = getDb();
	const now = Date.now();
	db.prepare(`
      UPDATE tickets
      SET status = ?, reply = ?, updated_at = ?
      WHERE id = ?
    `).run(data.status, data.reply ?? null, now, data.id);
	return { ok: true };
});
//#endregion
export { adminListTicketsServerFn_createServerFn_handler, adminUpdateTicketServerFn_createServerFn_handler, createTicketServerFn_createServerFn_handler };
