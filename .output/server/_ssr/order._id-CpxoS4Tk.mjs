import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as LoaderCircle, T as Package, Z as Gift, b as RotateCcw, gt as Check } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as formatPrice } from "./products-lbbj4Auw.mjs";
import { n as useCart } from "./cart-BIp114_Q.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as currentStatus, c as resolutionEligibility, d as useOrders, o as estimatedDelivery, u as trackingSteps } from "./orders-DrtyEZE8.mjs";
import { t as Separator } from "./separator-CUvWI_2I.mjs";
import { i as SupportTicketDialog, n as PolicyRules, r as ResolutionBanner, t as OrderResolutionDialog } from "./OrderResolutionDialog-DDxYNAq7.mjs";
import { t as Route } from "./order._id-CNg7sJbK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-CpxoS4Tk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderTrackingPage() {
	const { id } = Route.useParams();
	const { getOrder, fetchOrder } = useOrders();
	const cart = useCart();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [fetchedOrder, setFetchedOrder] = (0, import_react.useState)(null);
	const localOrder = getOrder(id);
	const order = fetchedOrder ?? localOrder;
	(0, import_react.useEffect)(() => {
		let active = true;
		fetchOrder(id).then((res) => {
			if (active) {
				if (res) setFetchedOrder(res);
				setLoading(false);
			}
		});
		return () => {
			active = false;
		};
	}, [id, fetchOrder]);
	if (loading && !order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[50vh] flex-col items-center justify-center text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted-foreground",
			children: [
				"Finding order ",
				id,
				"…"
			]
		})]
	});
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[50vh] flex-col items-center justify-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-12 w-12 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 text-3xl font-semibold",
				children: "Order not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-md text-muted-foreground",
				children: [
					"We couldn't find order ",
					id,
					". Check the order number in your confirmation email, or track using your email."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/track",
						children: "Track another order"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						children: "Go to account"
					})
				})]
			})
		]
	});
	const steps = trackingSteps(order);
	const status = currentStatus(order);
	const eta = estimatedDelivery(order);
	const eligibility = resolutionEligibility(order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
				children: ["Order ", order.id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold sm:text-4xl",
				children: status.label
			}),
			order.resolution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: order.resolution.type === "cancellation" ? "This order will not be delivered." : "Delivery completed — refund under review."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [
					"Estimated delivery",
					" ",
					new Date(eta).toLocaleDateString("en-IN", {
						weekday: "short",
						day: "numeric",
						month: "long"
					}),
					" · ",
					order.delivery === "express" ? "Express" : "Standard",
					" shipping"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderResolutionDialog, {
						order,
						mode: "cancellation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderResolutionDialog, {
						order,
						mode: "refund"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportTicketDialog, { order }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: eligibility.reason
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: order.resolution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolutionBanner, { order }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyRules, { order })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "surface-card p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "Tracking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 space-y-6",
							children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `flex h-8 w-8 items-center justify-center rounded-full border ${step.done ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`,
										children: step.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-current" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 w-px flex-1 bg-border last:hidden" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pb-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-medium ${step.done ? "" : "text-muted-foreground"}`,
											children: step.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: step.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[11px] text-muted-foreground",
											children: new Date(step.at).toLocaleString("en-IN", {
												day: "numeric",
												month: "short",
												hour: "numeric",
												minute: "2-digit"
											})
										})
									]
								})]
							}, step.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 text-sm sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Delivering to"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-medium",
									children: [
										order.address.firstName,
										" ",
										order.address.lastName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										order.address.line1,
										", ",
										order.address.city,
										", ",
										order.address.state,
										" ",
										order.address.pin
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: order.phone
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium capitalize",
									children: order.payment
								}),
								order.gift && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center gap-1.5 text-xs text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3.5 w-3.5" }), " Gift wrapped"]
								}),
								order.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: ["Note: ", order.notes]
								})
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "surface-card h-fit p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "Order summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-4",
							children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
										src: item.image,
										alt: item.name,
										width: 200,
										height: 200,
										wrapperClassName: "h-14 w-14 shrink-0 rounded-lg border border-border",
										className: "h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												item.variantLabel,
												" × ",
												item.qty
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: formatPrice(item.price * item.qty)
									})
								]
							}, `${item.slug}-${item.variantId}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: formatPrice(order.totals.subtotal)
								}),
								order.totals.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `Discount${order.promoCode ? ` (${order.promoCode})` : ""}`,
									value: `−${formatPrice(order.totals.discount)}`,
									accent: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Shipping",
									value: order.totals.shipping === 0 ? "Free" : formatPrice(order.totals.shipping)
								}),
								order.totals.giftWrap > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Gift wrap",
									value: formatPrice(order.totals.giftWrap)
								}),
								order.totals.codFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "COD handling",
									value: formatPrice(order.totals.codFee)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-base font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(order.totals.total) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-6 w-full",
							variant: "outline",
							onClick: () => {
								order.items.forEach((i) => cart.add(i.slug, i.variantId, i.qty));
								toast.success("Items added back to your basket");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-4 w-4" }), " Reorder these items"]
						})
					]
				})]
			})
		]
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between ${accent ? "text-primary" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: accent ? "" : "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
//#endregion
export { OrderTrackingPage as component };
