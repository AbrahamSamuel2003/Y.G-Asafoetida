import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Package, I as MapPin, a as UserRound, u as Trash2, x as RotateCcw } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-CZON1jhE.mjs";
import { n as formatPrice } from "./products--El95C0C.mjs";
import { n as useCart } from "./cart-CW0VkAaI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as currentStatus, c as resolutionEligibility, d as useOrders } from "./orders-C0nOgnCU.mjs";
import { t as Input } from "./input-DYHYoj49.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Separator } from "./separator-CUvWI_2I.mjs";
import { i as SupportTicketDialog, n as PolicyRules, r as ResolutionBanner, t as OrderResolutionDialog } from "./OrderResolutionDialog-CtUSJ3ze.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-DvK-emJN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const { profile, signIn, signOut, orders, addresses, removeAddress, setDefaultAddress } = useOrders();
	const cart = useCart();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold sm:text-4xl",
				children: "Your account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Orders, tracking and saved addresses — kept on this device so guest checkout stays fast."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[1fr_1.6fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-lg font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-5 w-5 text-primary" }), " Profile"]
						}), profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: profile.name || "Guest"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: profile.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: profile.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4",
									onClick: signOut,
									children: "Sign out"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 space-y-3",
							onSubmit: (e) => {
								e.preventDefault();
								signIn({
									name,
									email,
									phone
								});
								toast.success("You're signed in on this device");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "acc-name",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "acc-name",
										value: name,
										onChange: (e) => setName(e.target.value),
										required: true,
										className: "min-h-11",
										placeholder: "Enter your name",
										autoComplete: "name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "acc-email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "acc-email",
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										required: true,
										className: "min-h-11",
										placeholder: "Enter your email address",
										autoComplete: "email"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "acc-phone",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "acc-phone",
										type: "tel",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										required: true,
										className: "min-h-11",
										placeholder: "Enter your 10-digit mobile number",
										autoComplete: "tel"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full",
									children: "Save profile"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "surface-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-lg font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary" }), " Saved addresses"]
						}), addresses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Addresses you save at checkout appear here."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-lg border border-border p-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-medium",
											children: [
												a.firstName,
												" ",
												a.lastName,
												a.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] tracking-wide text-primary uppercase",
													children: "Default"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												a.line1,
												", ",
												a.city,
												", ",
												a.state,
												" ",
												a.pin
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: a.phone
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Remove address",
										onClick: () => removeAddress(a.id),
										className: "text-muted-foreground hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								}), !a.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDefaultAddress(a.id),
									className: "mt-2 text-xs text-primary underline",
									children: "Make default"
								})]
							}, a.id))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "surface-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-lg font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5 text-primary" }), " Order history"]
					}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No orders yet."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								children: "Start shopping"
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: orders.map((order) => {
							const status = currentStatus(order);
							const eligibility = resolutionEligibility(order);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-border p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: order.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												new Date(order.createdAt).toLocaleDateString("en-IN", {
													day: "numeric",
													month: "short",
													year: "numeric"
												}),
												" ",
												"· ",
												order.items.reduce((n, i) => n + i.qty, 0),
												" items"
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
											children: status.label
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3",
										children: [order.items.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: item.image,
											alt: item.name,
											width: 200,
											height: 200,
											wrapperClassName: "h-12 w-12 shrink-0 rounded-md border border-border",
											className: "h-full w-full object-cover"
										}, `${item.slug}-${item.variantId}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto text-sm font-semibold",
											children: formatPrice(order.totals.total)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/order/$id",
													params: { id: order.id },
													children: "Track order"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "ghost",
												onClick: () => {
													order.items.forEach((i) => cart.add(i.slug, i.variantId, i.qty));
													toast.success("Items added back to your basket");
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-4 w-4" }), " Reorder"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderResolutionDialog, {
												order,
												mode: "cancellation",
												size: "sm"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderResolutionDialog, {
												order,
												mode: "refund",
												size: "sm"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportTicketDialog, {
												order,
												size: "sm",
												variant: "ghost",
												label: "Get help"
											})
										]
									}),
									order.resolution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolutionBanner, { order })
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
										className: "mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
											className: "cursor-pointer text-xs text-muted-foreground",
											children: [eligibility.reason, " · see the exact rules"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyRules, {
											order,
											className: "mt-2"
										})]
									})
								]
							}, order.id);
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { AccountPage as component };
