import { t as SUPPORT } from "./faq-CtCudbc5.mjs";
import { n as formatPrice } from "./products--El95C0C.mjs";
import { r as createTicketServerFn } from "./tickets-CQcQaZp6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support-9SSMsRu1.js
var TICKETS_KEY = "yg-tickets-v1";
var TICKET_TOPICS = [
	"Where is my order?",
	"Damaged or wrong item",
	"Cancellation or refund help",
	"Change address or delivery date",
	"Product or usage question",
	"Something else"
];
function readTickets() {
	try {
		const raw = window.localStorage.getItem(TICKETS_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
async function saveTicket(input) {
	try {
		const res = await createTicketServerFn({ data: {
			topic: input.topic,
			orderId: input.orderId,
			message: input.message,
			contact: input.contact
		} });
		const ticket = {
			id: res.ticket.id,
			topic: res.ticket.topic,
			orderId: res.ticket.order_id ?? void 0,
			message: res.ticket.message,
			contact: res.ticket.contact,
			createdAt: res.ticket.created_at
		};
		try {
			window.localStorage.setItem(TICKETS_KEY, JSON.stringify([ticket, ...readTickets()]));
		} catch {}
		return ticket;
	} catch (err) {
		console.error("createTicketServerFn failed, fallback:", err);
		const fallbackTicket = {
			...input,
			id: `TKT${Math.floor(1e4 + Math.random() * 89999)}`,
			createdAt: Date.now()
		};
		try {
			window.localStorage.setItem(TICKETS_KEY, JSON.stringify([fallbackTicket, ...readTickets()]));
		} catch {}
		return fallbackTicket;
	}
}
/** Human-readable order digest used to prefill a support ticket, so nothing is typed twice. */
function orderDigest(order) {
	const items = order.items.map((i) => `• ${i.qty} × ${i.name} (${i.variantLabel}) — ${formatPrice(i.price * i.qty)}`).join("\n");
	const placed = order.createdAt ? new Date(order.createdAt).toLocaleString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit"
	}) : "Recent";
	const resolution = order.resolution ? `\nOpen request: ${order.resolution.type === "cancellation" ? "Cancellation" : "Refund"} — ${order.resolution.reason}` : "";
	return [
		`Order ID: ${order.id}`,
		`Placed: ${placed}`,
		`Payment: ${order.payment.toUpperCase()} · ${order.delivery === "express" ? "Express" : "Standard"} shipping`,
		`Total: ${formatPrice(order.totals.total)}`,
		`Deliver to: ${order.address.firstName} ${order.address.lastName}, ${order.address.line1}, ${order.address.city}, ${order.address.state} ${order.address.pin}`,
		`Contact: ${order.email} · ${order.phone}`,
		"",
		"Items:",
		items,
		resolution
	].join("\n").trim();
}
/** Pre-composed mailto so a customer can escalate without retyping order details. */
function mailtoForOrder(order, topic, note) {
	const subject = `[${order.id}] ${topic}`;
	const body = `${note ? `${note}\n\n` : ""}--- Order details ---\n${orderDigest(order)}`;
	return `mailto:${SUPPORT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
//#endregion
export { saveTicket as i, mailtoForOrder as n, orderDigest as r, TICKET_TOPICS as t };
