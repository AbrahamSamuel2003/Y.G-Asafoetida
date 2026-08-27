import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as resolveOrderServerFn, o as createOrderServerFn, s as getOrderByIdServerFn } from "./orders-O7ncABW_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-C0nOgnCU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CANCEL_REASONS = [
	"Ordered by mistake",
	"Found a better price",
	"Delivery is taking too long",
	"Want to change the address or variant",
	"Other reason"
];
var REFUND_REASONS = [
	"Package arrived damaged",
	"Wrong item or variant delivered",
	"Seal broken / quality concern",
	"Item never arrived",
	"Other reason"
];
var PROFILE_KEY = "yg-profile-v1";
var ADDRESS_KEY = "yg-addresses-v1";
var ORDERS_KEY = "yg-orders-v1";
var HOUR = 36e5;
/** Deterministic tracking timeline derived from order time + delivery speed. */
function trackingSteps(order, now = Date.now()) {
	const fast = order.delivery === "express";
	return [
		[
			"placed",
			"Order placed",
			"We received your order and payment details.",
			0
		],
		[
			"packed",
			"Packed in Tirunelveli",
			"Sealed fresh from our 1932 works.",
			fast ? 3 : 8
		],
		[
			"shipped",
			"Shipped",
			"Handed to our courier partner.",
			fast ? 8 : 24
		],
		[
			"out",
			"Out for delivery",
			"Arriving with you today.",
			fast ? 30 : 84
		],
		[
			"delivered",
			"Delivered",
			"Enjoy your hing.",
			fast ? 40 : 110
		]
	].map(([key, label, description, hours]) => {
		const at = order.createdAt + hours * HOUR;
		return {
			key,
			label,
			description,
			at,
			done: now >= at
		};
	});
}
function currentStatus(order, now = Date.now()) {
	if (order.resolution) {
		const r = order.resolution;
		const label = r.status === "cancelled" ? "Cancelled" : r.status === "refunded" ? "Refunded" : "Refund requested";
		return {
			key: r.status,
			label,
			description: r.status === "cancelled" ? "This order was cancelled before dispatch." : "Our team is reviewing your refund request.",
			at: r.requestedAt,
			done: true
		};
	}
	const steps = trackingSteps(order, now);
	const done = steps.filter((s) => s.done);
	return done[done.length - 1] ?? steps[0];
}
var REFUND_WINDOW_DAYS = 7;
/** Cancel until dispatch; request a refund from dispatch until 7 days after delivery. */
function resolutionEligibility(order, now = Date.now()) {
	const steps = trackingSteps(order, now);
	const shipped = steps.find((s) => s.key === "shipped").done;
	const delivered = steps.find((s) => s.key === "delivered").done;
	const windowOpen = now <= steps.find((s) => s.key === "delivered").at + 168 * HOUR;
	const refundAmount = order.payment === "cod" ? 0 : order.totals.total;
	if (order.resolution) return {
		canCancel: false,
		canRefund: false,
		reason: order.resolution.type === "cancellation" ? "This order is already cancelled." : "A refund request is already open for this order.",
		refundAmount
	};
	if (!shipped) return {
		canCancel: true,
		canRefund: false,
		reason: "Free cancellation until dispatch.",
		refundAmount
	};
	if (windowOpen) return {
		canCancel: false,
		canRefund: true,
		reason: delivered ? `Refund requests accepted within ${REFUND_WINDOW_DAYS} days of delivery.` : "Order already dispatched — you can raise a refund request instead.",
		refundAmount
	};
	return {
		canCancel: false,
		canRefund: false,
		reason: `The ${REFUND_WINDOW_DAYS}-day refund window for this order has closed. Contact support for help.`,
		refundAmount
	};
}
var RESOLUTION_POLICY = {
	refundWindowDays: REFUND_WINDOW_DAYS,
	cancelRefundDays: 3,
	refundRefundDays: 7,
	reviewHours: 24
};
/**
* The exact rules that decide cancellation/refund eligibility, evaluated against this order
* so the customer can see *why* an action is or isn't available.
*/
function resolutionRules(order, now = Date.now()) {
	const steps = trackingSteps(order, now);
	const shippedStep = steps.find((s) => s.key === "shipped");
	const windowEnds = steps.find((s) => s.key === "delivered").at + 168 * HOUR;
	const d = (t) => new Date(t).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return [
		{
			label: "Cancel free until dispatch",
			detail: shippedStep.done ? `Dispatched on ${d(shippedStep.at)} — cancellation is closed for this order.` : `Not dispatched yet. You can cancel at no cost until roughly ${d(shippedStep.at)}.`,
			state: shippedStep.done ? "fail" : "pass"
		},
		{
			label: `Refunds within ${REFUND_WINDOW_DAYS} days of delivery`,
			detail: !shippedStep.done ? "Opens once the parcel is dispatched — until then, cancel instead." : now <= windowEnds ? `Window open until ${d(windowEnds)}.` : `Window closed on ${d(windowEnds)}. Our support team can still review exceptions.`,
			state: !shippedStep.done ? "info" : now <= windowEnds ? "pass" : "fail"
		},
		{
			label: "One open request per order",
			detail: order.resolution ? `A ${order.resolution.type === "cancellation" ? "cancellation" : "refund request"} was already raised on ${d(order.resolution.requestedAt)}.` : "No request raised yet on this order.",
			state: order.resolution ? "fail" : "pass"
		},
		{
			label: "How the money comes back",
			detail: order.payment === "cod" ? "Cash on delivery is not pre-paid, so a cancellation simply stops the parcel. A post-delivery refund is paid by bank transfer." : `${refundMethodLabel(order.payment)} — within ${RESOLUTION_POLICY.cancelRefundDays} working days for cancellations, ${RESOLUTION_POLICY.refundRefundDays} for approved refunds.`,
			state: "info"
		},
		{
			label: "Review time",
			detail: `Refund requests are reviewed by our Tirunelveli team within ${RESOLUTION_POLICY.reviewHours} hours. Cancellations apply instantly.`,
			state: "info"
		}
	];
}
function refundMethodLabel(payment) {
	if (payment === "cod") return "Bank transfer to your registered account";
	if (payment === "upi") return "Original UPI account";
	if (payment === "card") return "Original card";
	if (payment === "netbanking") return "Original bank account";
	return "Original Paytm payment method";
}
function estimatedDelivery(order) {
	return trackingSteps(order).at(-1).at;
}
var OrdersContext = (0, import_react.createContext)(null);
function read(key, fallback) {
	try {
		const raw = window.localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function OrdersProvider({ children }) {
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [addresses, setAddresses] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setProfile(read(PROFILE_KEY, null));
		setAddresses(read(ADDRESS_KEY, []));
		setOrders(read(ORDERS_KEY, []));
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			if (profile) window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
			else window.localStorage.removeItem(PROFILE_KEY);
			window.localStorage.setItem(ADDRESS_KEY, JSON.stringify(addresses));
			window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
		} catch {}
	}, [
		profile,
		addresses,
		orders,
		hydrated
	]);
	const saveAddress = (0, import_react.useCallback)((input) => {
		const id = input.id ?? `addr_${Math.random().toString(36).slice(2, 9)}`;
		const address = {
			...input,
			id
		};
		setAddresses((prev) => {
			const next = prev.some((a) => a.id === id) ? prev.map((a) => a.id === id ? address : a) : [...prev, address];
			return address.isDefault ? next.map((a) => ({
				...a,
				isDefault: a.id === id
			})) : next;
		});
		return address;
	}, []);
	const removeAddress = (0, import_react.useCallback)((id) => {
		setAddresses((prev) => prev.filter((a) => a.id !== id));
	}, []);
	const setDefaultAddress = (0, import_react.useCallback)((id) => {
		setAddresses((prev) => prev.map((a) => ({
			...a,
			isDefault: a.id === id
		})));
	}, []);
	const placeOrder = (0, import_react.useCallback)(async (input) => {
		try {
			const serverOrder = await createOrderServerFn({ data: input });
			const order = {
				...serverOrder,
				resolution: serverOrder.resolution ?? null
			};
			setOrders((prev) => [order, ...prev.filter((o) => o.id !== order.id)]);
			return order;
		} catch (err) {
			console.error("Server order creation failed, falling back to local:", err);
			const fallbackOrder = {
				...input,
				id: `YG${Math.floor(1e5 + Math.random() * 899999)}`,
				createdAt: Date.now()
			};
			setOrders((prev) => [fallbackOrder, ...prev]);
			return fallbackOrder;
		}
	}, []);
	const fetchOrder = (0, import_react.useCallback)(async (id, verify) => {
		try {
			const res = await getOrderByIdServerFn({ data: {
				id,
				verify
			} });
			if (res) {
				setOrders((prev) => [res, ...prev.filter((o) => o.id !== res.id)]);
				return res;
			}
		} catch (err) {
			console.warn("fetchOrder from server failed:", err);
		}
		return orders.find((o) => o.id === id) ?? null;
	}, [orders]);
	const resolve = (0, import_react.useCallback)(async (id, type, reason, note) => {
		const order = orders.find((o) => o.id === id);
		if (!order) return null;
		const eligibility = resolutionEligibility(order);
		if (type === "cancellation" ? !eligibility.canCancel : !eligibility.canRefund) return null;
		try {
			const res = await resolveOrderServerFn({ data: {
				id,
				type,
				reason,
				note
			} });
			if (res.ok && res.resolution) {
				setOrders((prev) => prev.map((o) => o.id === id ? {
					...o,
					resolution: res.resolution
				} : o));
				return res.resolution;
			}
		} catch (err) {
			console.error("resolveOrderServerFn error:", err);
		}
		const now = Date.now();
		const resolution = {
			type,
			status: type === "cancellation" ? "cancelled" : "refund_requested",
			reason,
			note,
			requestedAt: now,
			amount: eligibility.refundAmount,
			refundBy: now + (type === "cancellation" ? 3 : 7) * 24 * HOUR,
			method: refundMethodLabel(order.payment)
		};
		setOrders((prev) => prev.map((o) => o.id === id ? {
			...o,
			resolution
		} : o));
		return resolution;
	}, [orders]);
	const value = (0, import_react.useMemo)(() => ({
		profile,
		signIn: setProfile,
		signOut: () => setProfile(null),
		addresses,
		saveAddress,
		removeAddress,
		setDefaultAddress,
		orders,
		placeOrder,
		getOrder: (id) => orders.find((o) => o.id === id),
		fetchOrder,
		cancelOrder: (id, reason, note) => resolve(id, "cancellation", reason, note),
		requestRefund: (id, reason, note) => resolve(id, "refund", reason, note)
	}), [
		profile,
		addresses,
		orders,
		saveAddress,
		removeAddress,
		setDefaultAddress,
		placeOrder,
		fetchOrder,
		resolve
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersContext.Provider, {
		value,
		children
	});
}
function useOrders() {
	const ctx = (0, import_react.useContext)(OrdersContext);
	if (!ctx) throw new Error("useOrders must be used inside OrdersProvider");
	return ctx;
}
//#endregion
export { currentStatus as a, resolutionEligibility as c, useOrders as d, RESOLUTION_POLICY as i, resolutionRules as l, OrdersProvider as n, estimatedDelivery as o, REFUND_REASONS as r, refundMethodLabel as s, CANCEL_REASONS as t, trackingSteps as u };
