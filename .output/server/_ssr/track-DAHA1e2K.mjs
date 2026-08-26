import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as PackageSearch, y as SearchX } from "../_libs/lucide-react.mjs";
import { d as useOrders } from "./orders-DrtyEZE8.mjs";
import { t as Input } from "./input-DYHYoj49.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-DAHA1e2K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackPage() {
	const { fetchOrder } = useOrders();
	const navigate = useNavigate();
	const [id, setId] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(false);
	const idInvalid = id.trim().length < 4;
	const emailInvalid = !/^\S+@\S+\.\S+$/.test(email.trim());
	const submit = async (e) => {
		e.preventDefault();
		setTouched(true);
		setError(null);
		if (idInvalid || emailInvalid) return;
		setChecking(true);
		try {
			const match = await fetchOrder(id.trim().toUpperCase(), email.trim());
			setChecking(false);
			if (!match) {
				setError("We couldn't find an order with that ID and email combination. Check the order number in your confirmation email, or contact support.");
				return;
			}
			navigate({
				to: "/order/$id",
				params: { id: match.id }
			});
		} catch {
			setChecking(false);
			setError("Lookup service temporarily unavailable. Please try again in a moment.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-page py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 place-items-center rounded-full bg-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageSearch, {
						className: "h-6 w-6 text-primary",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Where's my hing?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "No account needed. Enter the order number from your confirmation and the email you used at checkout."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "surface-card mt-8 space-y-5 p-6",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "track-id",
									children: "Order number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "track-id",
									value: id,
									onChange: (e) => setId(e.target.value),
									onBlur: () => setTouched(true),
									"aria-invalid": touched && idInvalid,
									placeholder: "Enter your order ID",
									autoComplete: "off"
								}),
								touched && idInvalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-destructive",
									children: "Order numbers look like YG123456 — check your confirmation email."
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "track-email",
									children: "Email used at checkout"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "track-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									onBlur: () => setTouched(true),
									"aria-invalid": touched && emailInvalid,
									placeholder: "Enter the email used at checkout",
									autoComplete: "email"
								}),
								touched && emailInvalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-destructive",
									children: "Enter the email address you ordered with."
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							disabled: checking,
							children: checking ? "Looking up…" : "Track order"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "alert",
							className: "flex gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-destructive",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted-foreground",
					children: [
						"Signed in on this device?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							className: "font-medium text-foreground underline",
							children: "See all your orders"
						}),
						". Still stuck?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "font-medium text-foreground underline",
							children: "Contact support"
						}),
						"."
					]
				})
			]
		})
	});
}
//#endregion
export { TrackPage as component };
