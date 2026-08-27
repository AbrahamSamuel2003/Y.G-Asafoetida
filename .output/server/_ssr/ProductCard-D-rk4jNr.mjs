import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as Heart, d as Star, h as ShoppingBag, tt as Eye } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as useWishlist } from "./wishlist-DuQsLsNf.mjs";
import { n as formatPrice } from "./products--El95C0C.mjs";
import { n as useCart } from "./cart-CW0VkAaI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-D-rk4jNr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Heart toggle used on cards and product pages. Confirms with an undo toast so
* an accidental tap is never destructive.
*/
function WishlistButton({ slug, name, className, variant = "icon" }) {
	const { has, toggle } = useWishlist();
	const saved = has(slug);
	const onClick = () => {
		if (toggle(slug)) toast.success(`${name} saved to your list`, { action: {
			label: "Undo",
			onClick: () => toggle(slug)
		} });
		else toast(`${name} removed from your list`, { action: {
			label: "Undo",
			onClick: () => toggle(slug)
		} });
	};
	if (variant === "full") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-pressed": saved,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary", saved && "border-primary/40 bg-primary/5 text-primary", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: cn("h-4 w-4", saved && "fill-primary"),
			"aria-hidden": true
		}), saved ? "Saved" : "Save for later"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-label": saved ? `Remove ${name} from your list` : `Save ${name} for later`,
		"aria-pressed": saved,
		className: cn("grid h-9 w-9 place-items-center rounded-full border border-border bg-card/90 backdrop-blur transition-colors hover:bg-card", saved && "border-primary/40 text-primary", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: cn("h-4 w-4", saved && "fill-primary"),
			"aria-hidden": true
		})
	});
}
var QuickViewDialog = (0, import_react.lazy)(() => import("./QuickViewDialog-Cy0mGsgJ.mjs").then((m) => ({ default: m.QuickViewDialog })));
function ProductCard({ product, priority, mode = "default" }) {
	const { add } = useCart();
	const [quickView, setQuickView] = (0, import_react.useState)(false);
	const variant = product.variants[0];
	const soldOut = product.inStock === false;
	if (mode === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group surface-card relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 transition-all duration-300 hover:shadow-md hover:border-primary/40 bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "relative block overflow-hidden bg-white aspect-square w-full p-2.5 flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					priority: priority ?? false,
					sizes: "(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 48vw",
					src: product.image,
					alt: product.name,
					width: 600,
					height: 600,
					fallbackLabel: product.name,
					wrapperClassName: "h-full w-full flex items-center justify-center",
					className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-2 left-2 flex flex-wrap gap-1",
					children: [
						product.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold tracking-wider text-primary-foreground uppercase shadow-xs",
							children: "Best"
						}) : null,
						product.glutenFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-card/95 backdrop-blur px-2 py-0.5 text-[9px] font-bold tracking-wider text-foreground uppercase border border-border/50 shadow-xs",
							children: "GF"
						}) : null,
						soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted/90 px-2 py-0.5 text-[9px] font-bold tracking-wider text-muted-foreground uppercase shadow-xs",
							children: "Sold out"
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-2 right-2 flex flex-col items-center gap-1.5 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
					slug: product.slug,
					name: product.name,
					className: "pointer-events-auto h-7.5 w-7.5 shadow-xs border-border/80 bg-white/95 text-muted-foreground hover:text-foreground transition-all hover:scale-105 active:scale-95"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						setQuickView(true);
					},
					"aria-label": `Quick view ${product.name}`,
					className: "pointer-events-auto grid h-7.5 w-7.5 place-items-center rounded-full border border-border/80 bg-white/95 backdrop-blur text-muted-foreground hover:text-foreground transition-all hover:scale-105 active:scale-95 shadow-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-1 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-gold text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: product.rating
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] text-muted-foreground/80",
							children: [
								"(",
								product.reviews,
								")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xs sm:text-sm font-semibold leading-tight line-clamp-1 group-hover:text-primary transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							children: product.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[10px] sm:text-[11px] text-muted-foreground line-clamp-1",
						children: product.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2.5 flex items-baseline justify-between border-t border-border/50 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm sm:text-base font-bold text-foreground",
								children: formatPrice(variant.price)
							}), variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] sm:text-[11px] text-muted-foreground line-through",
								children: formatPrice(variant.mrp)
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground font-medium",
							children: variant.label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2.5 pt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "h-7 sm:h-8 w-full text-xs font-semibold gap-1.5 shadow-xs",
							disabled: soldOut,
							onClick: () => add(product.slug, variant.id),
							"aria-label": `Add ${product.name} to cart`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), soldOut ? "Sold out" : "Add to Cart"]
						})
					})
				]
			}),
			quickView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewDialog, {
					product,
					open: quickView,
					onOpenChange: setQuickView
				})
			}) : null
		]
	});
	if (mode === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group surface-card relative flex flex-col sm:flex-row items-center gap-4 p-3.5 sm:p-4 rounded-xl border border-border/80 transition-all duration-300 hover:shadow-md hover:border-primary/40 bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "relative block overflow-hidden rounded-lg bg-white h-28 w-28 sm:h-36 sm:w-36 shrink-0 p-2 flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					priority: priority ?? false,
					sizes: "150px",
					src: product.image,
					alt: product.name,
					width: 400,
					height: 400,
					fallbackLabel: product.name,
					wrapperClassName: "h-full w-full flex items-center justify-center",
					className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
				}), product.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-2 left-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground uppercase shadow-xs",
					children: "Bestseller"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col justify-between w-full min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capitalize font-medium text-foreground px-1.5 py-0.5 bg-muted rounded text-[10px]",
							children: product.format
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-gold text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: product.rating
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"(",
									product.reviews,
									" reviews)"
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm sm:text-base font-bold leading-tight group-hover:text-primary transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							children: product.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground line-clamp-2",
						children: product.description
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-2.5 border-t border-border/50 flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-bold text-foreground",
								children: formatPrice(variant.price)
							}),
							variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: formatPrice(variant.mrp)
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-muted-foreground",
								children: [
									"(",
									variant.label,
									")"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "h-8 text-xs font-semibold px-3",
							onClick: () => setQuickView(true),
							children: "Quick View"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "h-8 text-xs font-semibold px-4",
							disabled: soldOut,
							onClick: () => add(product.slug, variant.id),
							children: soldOut ? "Sold out" : "Add to cart"
						})]
					})]
				})]
			}),
			quickView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewDialog, {
					product,
					open: quickView,
					onOpenChange: setQuickView
				})
			}) : null
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group surface-card relative flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lift rounded-xl border border-border/80 bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "relative block overflow-hidden bg-white aspect-square w-full p-3.5 flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					priority: priority ?? false,
					sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
					src: product.image,
					alt: product.name,
					width: 1e3,
					height: 1e3,
					fallbackLabel: product.name,
					wrapperClassName: "aspect-square w-full flex items-center justify-center",
					className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 flex flex-wrap gap-1.5",
					children: [
						product.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-primary-foreground uppercase shadow-xs",
							children: "Bestseller"
						}) : null,
						product.glutenFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-card/95 backdrop-blur px-2 py-0.5 text-[10px] font-bold tracking-wide text-foreground uppercase border border-border/50 shadow-xs",
							children: "Gluten-free"
						}) : null,
						soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold tracking-wide text-muted-foreground uppercase shadow-xs",
							children: "Sold out"
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-3 right-3 flex flex-col items-center gap-1.5 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
					slug: product.slug,
					name: product.name,
					className: "pointer-events-auto h-8.5 w-8.5 shadow-xs border-border/80 bg-white/95 text-muted-foreground hover:text-foreground transition-all hover:scale-105 active:scale-95"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						setQuickView(true);
					},
					"aria-label": `Quick view ${product.name}`,
					className: "pointer-events-auto grid h-8.5 w-8.5 place-items-center rounded-full border border-border/80 bg-white/95 backdrop-blur text-muted-foreground hover:text-foreground transition-all hover:scale-105 active:scale-95 shadow-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: product.rating
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"(",
								product.reviews,
								")"
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1.5 text-base font-bold leading-snug",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							children: product.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground line-clamp-1",
						children: product.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-baseline gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-bold text-foreground",
								children: formatPrice(variant.price)
							}),
							variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: formatPrice(variant.mrp)
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-muted-foreground",
								children: ["/ ", variant.label]
							})
						]
					}),
					product.stockLeft && !soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-xs font-medium text-primary",
						children: [
							"Only ",
							product.stockLeft,
							" left from this batch"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3.5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "flex-1 font-semibold text-xs h-8.5",
							disabled: soldOut,
							onClick: () => add(product.slug, variant.id),
							"aria-label": `Add ${product.name} to cart`,
							children: soldOut ? "Sold out" : "Add to cart"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							className: "text-xs h-8.5 px-3",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: product.slug },
								children: "Details"
							})
						})]
					})
				]
			}),
			quickView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewDialog, {
					product,
					open: quickView,
					onOpenChange: setQuickView
				})
			}) : null
		]
	});
}
//#endregion
export { WishlistButton as n, ProductCard as t };
