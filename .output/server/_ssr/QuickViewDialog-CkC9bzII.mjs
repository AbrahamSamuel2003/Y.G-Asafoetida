import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Star } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CiapfthD.mjs";
import { t as SmartImage } from "./SmartImage-CZON1jhE.mjs";
import { n as formatPrice, t as formatLabels } from "./products--El95C0C.mjs";
import { n as useCart } from "./cart-CW0VkAaI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as WishlistButton } from "./ProductCard-DCV5pOR_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuickViewDialog-CkC9bzII.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Variant picker + add to cart without leaving the grid. */
function QuickViewDialog({ product, open, onOpenChange }) {
	const { add, setOpen: openCart } = useCart();
	const [variantId, setVariantId] = (0, import_react.useState)(product.variants[0].id);
	const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
	const soldOut = product.inStock === false;
	const addToCart = () => {
		add(product.slug, variant.id);
		onOpenChange(false);
		toast.success(`${product.name} added`, {
			description: `${variant.label} · ${formatPrice(variant.price)}`,
			action: {
				label: "View basket",
				onClick: () => openCart(true)
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto sm:max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl",
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: product.tagline })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					src: product.image,
					alt: product.name,
					sizes: "180px",
					fallbackLabel: product.name,
					wrapperClassName: "aspect-square w-full rounded-xl bg-white border border-border/80 p-2 flex items-center justify-center",
					className: "h-full w-full object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: product.rating
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"(",
									product.reviews,
									")"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatLabels[product.format] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 line-clamp-4 text-sm text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							role: "group",
							"aria-label": "Choose a pack size",
							children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setVariantId(v.id),
								"aria-pressed": v.id === variantId,
								className: `min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${v.id === variantId ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-secondary"}`,
								children: v.label
							}, v.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-semibold",
								children: formatPrice(variant.price)
							}), variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pb-1 text-sm text-muted-foreground line-through",
								children: formatPrice(variant.mrp)
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: addToCart,
									disabled: soldOut,
									className: "flex-1 sm:flex-none",
									children: soldOut ? "Sold out" : "Add to basket"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
									slug: product.slug,
									name: product.name,
									variant: "full"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: product.slug },
										onClick: () => onOpenChange(false),
										children: "Full details"
									})
								})
							]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { QuickViewDialog };
