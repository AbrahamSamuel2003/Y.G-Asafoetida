import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as Heart, bt as BellRing, l as Trash2 } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as useWishlist } from "./wishlist-ldWImUuO.mjs";
import { n as formatPrice, r as getProduct } from "./products--El95C0C.mjs";
import { n as useCart } from "./cart-CW0VkAaI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as RecentlyViewed } from "./RecentlyViewed-D5RwvSpV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-DkvCS1PI.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { slugs, remove, alerts } = useWishlist();
	const { add } = useCart();
	const items = slugs.map(getProduct).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Saved by you"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
				children: "Your kitchen list"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted-foreground",
				children: "Nothing here expires and nothing is shared. Move anything to the basket when you're ready to cook."
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card mt-8 flex flex-col items-center px-6 py-14 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "h-6 w-6 text-muted-foreground",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-lg font-semibold",
						children: "Your list is empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm text-muted-foreground",
						children: "Tap the heart on any product to keep it here — handy when you're deciding between the powder, the granules and the cake."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Browse the range"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((p) => {
					const variant = p.variants[0];
					const soldOut = p.inStock === false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "surface-card flex gap-4 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: p.slug },
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: p.image,
								alt: p.name,
								sizes: "96px",
								fallbackLabel: p.name,
								wrapperClassName: "h-24 w-24 rounded-lg",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: p.slug },
									className: "line-clamp-2 font-medium hover:text-primary",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										formatPrice(variant.price),
										" · ",
										variant.label
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex flex-wrap gap-2 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										disabled: soldOut,
										onClick: () => add(p.slug, variant.id),
										children: soldOut ? "Sold out" : "Add to basket"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => {
											remove(p.slug);
											toast(`${p.name} removed from your list`);
										},
										"aria-label": `Remove ${p.name} from your list`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "h-4 w-4",
											"aria-hidden": true
										})
									})]
								})
							]
						})]
					}, p.slug);
				})
			}),
			alerts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				"aria-labelledby": "alerts",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "alerts",
					className: "flex items-center gap-2 text-lg font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {
						className: "h-4 w-4 text-primary",
						"aria-hidden": true
					}), " Back-in-stock alerts"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: alerts.map((a) => {
						const p = getProduct(a.slug);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "surface-card flex items-center justify-between gap-3 p-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-medium",
									children: p?.name ?? a.slug
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-muted-foreground",
									children: ["We'll message ", a.contact]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
								children: "Watching"
							})]
						}, a.slug);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, {})
		]
	});
}
//#endregion
export { WishlistPage as component };
