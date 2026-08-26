import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { t as SUPPORT } from "./faq-CtCudbc5.mjs";
import { A as MessageCircle, C as Phone, G as Info, K as IndianRupee, P as Mail, at as Copy, ct as CircleSlash, g as ShieldCheck, s as TriangleAlert, ut as CircleCheck, xt as Ban, z as LifeBuoy } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CiapfthD.mjs";
import { n as formatPrice } from "./products--El95C0C.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as resolutionEligibility, d as useOrders, i as RESOLUTION_POLICY, l as resolutionRules, r as REFUND_REASONS, s as refundMethodLabel, t as CANCEL_REASONS } from "./orders-Crv4quJh.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-DxFv_HYm.mjs";
import { t as Textarea } from "./textarea-Du_uAGq3.mjs";
import { i as saveTicket, n as mailtoForOrder, r as orderDigest, t as TICKET_TOPICS } from "./support-D2JpxBuH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/OrderResolutionDialog-BChAegTS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icon = {
	pass: ShieldCheck,
	fail: CircleSlash,
	info: Info
};
var tone = {
	pass: "text-primary",
	fail: "text-destructive",
	info: "text-muted-foreground"
};
/** Shows the exact cancellation/refund rules and how this specific order measures against them. */
function PolicyRules({ order, className = "" }) {
	const rules = resolutionRules(order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-border bg-card p-4 sm:p-5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.18em] text-muted-foreground uppercase",
			children: "Cancellation & refund rules"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-3",
			children: rules.map((rule) => {
				const Icon = icon[rule.state];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: `mt-0.5 h-4 w-4 shrink-0 ${tone[rule.state]}`,
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: rule.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: rule.detail
					})] })]
				}, rule.label);
			})
		})]
	});
}
/**
* One-tap support ticket: every order detail is prefilled, the customer only picks a topic
* and (optionally) adds a line of context.
*/
function SupportTicketDialog({ order, defaultTopic = TICKET_TOPICS[0], label = "Get help with this order", size = "default", variant = "outline" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [topic, setTopic] = (0, import_react.useState)(defaultTopic);
	const [note, setNote] = (0, import_react.useState)("");
	const [ticketId, setTicketId] = (0, import_react.useState)(null);
	const digest = orderDigest(order);
	const submit = async () => {
		const ticket = await saveTicket({
			topic,
			orderId: order.id,
			message: note.trim(),
			contact: order.email || order.phone
		});
		setTicketId(ticket.id);
		toast.success(`Ticket ${ticket.id} raised — we reply within one working day.`);
	};
	const reset = () => {
		setOpen(false);
		window.setTimeout(() => {
			setTicketId(null);
			setNote("");
			setTopic(defaultTopic);
		}, 200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: (o) => o ? setOpen(true) : reset(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant,
				size,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "mr-1.5 h-4 w-4" }), label]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
			children: ticketId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }),
						" Ticket ",
						ticketId,
						" raised"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Our Tirunelveli team has your order ",
					order.id,
					" and all its details. We reply to",
					" ",
					order.email || order.phone,
					" within one working day."
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-lg bg-primary/5 p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "Need it faster?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: SUPPORT.phoneHref,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mr-1.5 h-4 w-4" }), " Call"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: SUPPORT.whatsappHref,
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-1.5 h-4 w-4" }), " WhatsApp"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: mailtoForOrder(order, topic, note),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-1.5 h-4 w-4" }), " Email with details"]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: SUPPORT.hours
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: reset,
					children: "Done"
				}) })
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Raise a support ticket" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Order ",
					order.id,
					" and its full details are attached automatically — just pick a topic."
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "What do you need help with?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: TICKET_TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTopic(t),
									"aria-pressed": topic === t,
									className: `min-h-9 rounded-full border px-3 text-xs font-medium transition-colors ${topic === t ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary hover:text-primary"}`,
									children: t
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `ticket-note-${order.id}`,
								children: "Add a line for our team (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: `ticket-note-${order.id}`,
								value: note,
								onChange: (e) => setNote(e.target.value),
								maxLength: 400,
								rows: 3,
								placeholder: "Describe your issue here"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "rounded-lg border border-border p-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
									className: "cursor-pointer font-medium",
									children: "Attached automatically — order details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "mt-3 max-h-40 overflow-auto text-xs whitespace-pre-wrap text-muted-foreground",
									children: digest
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									size: "sm",
									variant: "ghost",
									className: "mt-2",
									onClick: () => {
										navigator.clipboard?.writeText(digest);
										toast.success("Order details copied");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "mr-1.5 h-4 w-4" }), " Copy details"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: reset,
						children: "Close"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: submit,
						children: "Raise ticket"
					})]
				})
			] })
		})]
	});
}
function OrderResolutionDialog({ order, mode, size = "default" }) {
	const { cancelOrder, requestRefund } = useOrders();
	const [open, setOpen] = (0, import_react.useState)(false);
	const reasons = mode === "cancellation" ? CANCEL_REASONS : REFUND_REASONS;
	const [reason, setReason] = (0, import_react.useState)(reasons[0]);
	const [note, setNote] = (0, import_react.useState)("");
	const eligibility = resolutionEligibility(order);
	if (!(mode === "cancellation" ? eligibility.canCancel : eligibility.canRefund)) return null;
	const isCancel = mode === "cancellation";
	const submit = async () => {
		const res = await (isCancel ? cancelOrder(order.id, reason, note.trim() || void 0) : requestRefund(order.id, reason, note.trim() || void 0));
		if (!res) {
			toast.error("This order is no longer eligible — please contact support.");
			setOpen(false);
			return;
		}
		setOpen(false);
		toast.success(isCancel ? `Order ${order.id} cancelled${res.amount > 0 ? ` · ${formatPrice(res.amount)} refund initiated` : ""}` : `Refund request raised for ${order.id}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size,
				className: isCancel ? "text-destructive hover:text-destructive" : "",
				children: [isCancel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "mr-1.5 h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "mr-1.5 h-4 w-4" }), isCancel ? "Cancel order" : "Request refund"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: isCancel ? `Cancel order ${order.id}?` : `Request a refund for ${order.id}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: isCancel ? "We'll stop the parcel before it leaves our Tirunelveli works." : "Tell us what went wrong and our team will review within 24 hours." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Reason" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								value: reason,
								onValueChange: setReason,
								className: "space-y-2",
								children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: `flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border px-3 text-sm transition-colors ${reason === r ? "border-primary bg-primary/5" : "border-border"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
										value: r,
										id: `${order.id}-${mode}-${r}`
									}), r]
								}, r))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `${order.id}-${mode}-note`,
								children: "Anything else? (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: `${order.id}-${mode}-note`,
								value: note,
								onChange: (e) => setNote(e.target.value),
								maxLength: 300,
								placeholder: isCancel ? "Tell us how we could have done better (optional)" : "Add any details that help us check the refund (optional)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyRules, { order }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-primary/5 p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-primary" }), eligibility.refundAmount > 0 ? `${formatPrice(eligibility.refundAmount)} back to you` : "No amount was pre-paid on this order"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: eligibility.refundAmount > 0 ? `${refundMethodLabel(order.payment)} · within ${isCancel ? "3" : "7"} working days of approval.` : "Cash-on-delivery orders are simply stopped — nothing to refund."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setOpen(false),
						children: "Keep order"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: isCancel ? "destructive" : "default",
						onClick: submit,
						children: isCancel ? "Confirm cancellation" : "Submit refund request"
					})]
				})
			]
		})]
	});
}
function ResolutionBanner({ order }) {
	const r = order.resolution;
	if (!r) return null;
	const cancelled = r.type === "cancellation";
	const date = (t) => new Date(t).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-medium",
					children: [
						cancelled ? "Order cancelled" : "Refund request under review",
						" · ",
						date(r.requestedAt)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: ["Reason: ", r.reason]
				}),
				r.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: ["Note: ", r.note]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: r.amount > 0 ? `${formatPrice(r.amount)} to ${r.method.toLowerCase()} by ${date(r.refundBy)}.` : "Nothing was pre-paid, so no refund is due."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: cancelled ? `Cancellations apply instantly; any pre-paid amount is returned within ${RESOLUTION_POLICY.cancelRefundDays} working days.` : `Our team reviews refund requests within ${RESOLUTION_POLICY.reviewHours} hours, then releases the amount within ${RESOLUTION_POLICY.refundRefundDays} working days.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportTicketDialog, {
						order,
						size: "sm",
						defaultTopic: "Cancellation or refund help",
						label: "Get help with this request"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyRules, { order })]
	});
}
//#endregion
export { SupportTicketDialog as i, PolicyRules as n, ResolutionBanner as r, OrderResolutionDialog as t };
