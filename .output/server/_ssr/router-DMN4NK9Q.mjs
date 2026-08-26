import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Phone, M as Menu, N as MapPin, P as Mail, Y as Heart, ft as ChevronUp, h as ShoppingBag, i as UserRound, l as Trash2, n as X, v as Search } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as useWishlist, t as WishlistProvider } from "./wishlist-CrEmIO6O.mjs";
import { i as products, n as formatPrice } from "./products-lbbj4Auw.mjs";
import { n as useCart, t as CartProvider } from "./cart-BIp114_Q.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as OrdersProvider } from "./orders-Crv4quJh.mjs";
import { n as Route$10 } from "./admin-Cjiodc_V.mjs";
import { t as Route$11 } from "./order-confirmed-upaBfMSR.mjs";
import { t as Route$12 } from "./order._id-0ngkscdN.mjs";
import { t as Route$13 } from "./policies._slug-CAjdWI3y.mjs";
import { n as Route$14, t as QuantityStepper } from "./product._slug-BApE4rI3.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DMN4NK9Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B9UDE8fw.css";
var THEME_STORAGE_KEY = "yg-palette-theme-v1";
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("saffron");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
			if (stored && (stored === "saffron" || stored === "sage" || stored === "rose" || stored === "amber")) {
				setThemeState(stored);
				document.documentElement.setAttribute("data-theme", stored);
			} else document.documentElement.setAttribute("data-theme", "saffron");
		} catch {
			document.documentElement.setAttribute("data-theme", "saffron");
		}
		document.documentElement.classList.remove("dark");
		document.documentElement.style.colorScheme = "light";
		setReady(true);
	}, []);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		document.documentElement.setAttribute("data-theme", next);
		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, next);
		} catch {}
	}, []);
	const cycleTheme = (0, import_react.useCallback)(() => {
		const list = [
			"saffron",
			"sage",
			"rose",
			"amber"
		];
		const next = list[(list.indexOf(theme) + 1) % list.length] ?? "saffron";
		setTheme(next);
	}, [theme, setTheme]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme,
		cycleTheme,
		ready
	}), [
		theme,
		setTheme,
		cycleTheme,
		ready
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var SearchDialog = (0, import_react.lazy)(() => import("./SearchDialog-Ch0Bki2F.mjs").then((m) => ({ default: m.SearchDialog })));
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/custom-branding",
		label: "Custom Branding"
	},
	{
		to: "/story",
		label: "Our Story"
	},
	{
		to: "/contact",
		label: "Contact"
	},
	{
		to: "/account",
		label: "Orders"
	}
];
var PROMO_MESSAGES = [
	"Free shipping across India on orders above ₹499",
	"BULK15 auto-applies — 15% off orders above ₹999",
	"Dispatched from Tirunelveli within 24 hours",
	"Compounded by the same family since 1932"
];
function Header() {
	const cart = useCart();
	const wishlist = useWishlist();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [promoIndex, setPromoIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setSearchOpen((o) => !o);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		let done = false;
		const warm = () => {
			if (done) return;
			done = true;
			for (const item of nav) router.preloadRoute({ to: item.to });
		};
		const w = window;
		const id = w.requestIdleCallback ? w.requestIdleCallback(warm) : window.setTimeout(warm, 1200);
		window.addEventListener("pointerdown", warm, {
			once: true,
			passive: true
		});
		return () => {
			window.removeEventListener("pointerdown", warm);
			if (!w.requestIdleCallback) window.clearTimeout(id);
		};
	}, [router]);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setPromoIndex((i) => (i + 1) % PROMO_MESSAGES.length), 4e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary/95 py-1 text-center text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-in fade-in slide-in-from-bottom-1 px-4 text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase duration-500",
					"aria-live": "polite",
					children: PROMO_MESSAGES[promoIndex]
				}, promoIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex h-14 sm:h-16 items-center justify-between gap-1.5 sm:gap-4 px-2.5 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center md:hidden shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open: menuOpen,
							onOpenChange: setMenuOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": "Open menu",
									className: "h-8 w-8 text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
								side: "left",
								className: "w-72 p-5 sm:p-6 flex flex-col justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 pb-4 border-b border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.png",
										alt: "Y.G Asafoetida Logo",
										className: "h-9 w-9 rounded-full object-contain shadow-xs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
										className: "font-display text-base font-bold leading-tight",
										children: "Y.G Asafoetida"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground tracking-wider uppercase",
										children: "Tirunelveli · Est. 1932"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "mt-5 flex flex-col gap-1",
									children: [
										nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: item.to,
											preload: "render",
											onClick: () => setMenuOpen(false),
											className: "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary flex items-center justify-between",
											activeProps: { className: "bg-secondary font-bold text-primary" },
											children: item.label
										}, item.to)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/wishlist",
											onClick: () => setMenuOpen(false),
											className: "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary flex items-center justify-between",
											activeProps: { className: "bg-secondary font-bold text-primary" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saved Wishlist" }), wishlist.slugs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/10 text-primary text-xs font-bold px-2 py-0.5",
												children: wishlist.slugs.length
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/track",
											onClick: () => setMenuOpen(false),
											className: "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary",
											activeProps: { className: "bg-secondary font-bold text-primary" },
											children: "Track an Order"
										})
									]
								})] })
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-1.5 sm:gap-2.5 leading-none group shrink min-w-0 pr-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "Y.G Logo",
							className: "h-8 w-8 sm:h-10 sm:w-10 rounded-full object-contain ring-1 ring-border/80 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm sm:text-lg font-bold tracking-tight text-foreground truncate",
								children: "Y.G Asafoetida"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] sm:text-[9px] tracking-[0.16em] sm:tracking-[0.2em] text-muted-foreground uppercase truncate hidden xs:block",
								children: "Tirunelveli · Est. 1932"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-6 lg:gap-8 md:flex",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							preload: "render",
							className: "text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
							activeProps: { className: "text-primary font-bold" },
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-0.5 sm:gap-1.5 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 sm:h-9 sm:w-9 text-foreground",
								"aria-label": "Search products",
								onClick: () => setSearchOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 sm:h-9 sm:w-9 relative hidden sm:inline-flex text-foreground",
								"aria-label": `Your saved list, ${wishlist.slugs.length} items`,
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/wishlist",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }), wishlist.slugs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground",
										children: wishlist.slugs.length
									}) : null]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 sm:h-9 sm:w-9 text-foreground",
								"aria-label": "Your account",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/account",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-4 w-4" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8 sm:h-9 sm:w-9 relative text-foreground",
								"aria-label": `Open basket, ${cart.count} items`,
								onClick: () => cart.setOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cart.count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground",
									children: cart.count
								}) : null]
							})
						]
					})
				]
			}),
			searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
					open: searchOpen,
					onOpenChange: setSearchOpen
				})
			}) : null
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-clove text-clove-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "Y.G Asafoetida Logo",
						className: "h-10 w-10 rounded-full object-contain ring-1 ring-white/20 shadow-xs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold",
						children: "Y.G Asafoetida"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-clove-foreground/70",
					children: "Compounded hing from Tirunelveli, made by the same family since 1932. Formulated for South Indian kitchens."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] uppercase opacity-60",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "All products"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: "gold-asafoetida-powder" },
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Gold hing powder"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: "gluten-free-asafoetida-powder" },
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Gluten-free hing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: "asafoetida-gold-cake" },
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Gold asafoetida cake"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] uppercase opacity-60",
					children: "Brand"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/story",
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Our story"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/custom-branding",
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "White Labelling & Branding"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Contact & support"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/track",
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Track an order"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wishlist",
							className: "opacity-80 transition-opacity hover:opacity-100",
							children: "Your saved list"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] uppercase opacity-60",
					children: "Reach us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm opacity-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Y.G Asafoetida Works, Tirunelveli, Tamil Nadu 627001" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 462 000 1932" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "care@ygasafoetida.in" })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-clove-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-3 py-5 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Y.G Asafoetida. All rights reserved."
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Policies",
					className: "flex flex-wrap gap-x-4 gap-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "shipping" },
							className: "hover:opacity-100 transition-opacity",
							children: "Shipping"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "returns" },
							className: "hover:opacity-100 transition-opacity",
							children: "Returns & refunds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "privacy" },
							className: "hover:opacity-100 transition-opacity",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/policies/$slug",
							params: { slug: "terms" },
							className: "hover:opacity-100 transition-opacity",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "opacity-60",
							children: "FSSAI licensed"
						})
					]
				})]
			})
		})]
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function CartDrawer() {
	const cart = useCart();
	const remaining = Math.max(cart.freeShippingThreshold - cart.subtotal, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cart.isOpen,
		onOpenChange: cart.setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col gap-0 p-0 sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
				className: "border-b border-border px-5 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "font-display text-xl",
					children: ["Your basket ", cart.count > 0 ? `(${cart.count})` : ""]
				})
			}), cart.resolved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Your basket is empty. Start with our 1932 classic hing powder."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						onClick: () => cart.setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Shop all hing"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border bg-secondary/60 px-5 py-3",
					children: [remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Add ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: formatPrice(remaining)
							}),
							" ",
							"more for free shipping"
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-foreground",
						children: "You've unlocked free shipping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						className: "mt-2 h-1.5",
						value: Math.min(cart.subtotal / cart.freeShippingThreshold * 100, 100)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-4 overflow-y-auto px-5 py-4",
					children: cart.resolved.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: line.product.image,
								alt: line.product.name,
								width: 1e3,
								height: 1e3,
								wrapperClassName: "h-20 w-20 shrink-0 rounded-lg border border-border",
								className: "h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: line.product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: line.variant.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityStepper, {
											small: true,
											qty: line.qty,
											onChange: (q) => cart.setQty(line.slug, line.variantId, q)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold",
											children: formatPrice(line.lineTotal)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Remove item",
								onClick: () => cart.remove(line.slug, line.variantId),
								className: "self-start text-muted-foreground transition-colors hover:text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})
						]
					}, `${line.slug}-${line.variantId}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-border px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: formatPrice(cart.subtotal)
							})]
						}),
						cart.appliedPromo && cart.totalSavings > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 rounded-lg bg-primary/5 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Promo ",
									cart.appliedPromo.code,
									cart.promoIsAutomatic ? " (auto)" : ""
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(cart.totalSavings)] })]
							}), cart.discountLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(line.amount)] })]
							}, line.label))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Shipping"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: cart.shipping === 0 ? "Free" : formatPrice(cart.shipping)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-t border-border pt-3 text-base font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(cart.total) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							size: "lg",
							asChild: true,
							onClick: () => cart.setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								children: "Checkout"
							})
						})
					]
				})
			] })]
		})
	});
}
/** Sticky mobile mini-cart: shows what's in the basket and opens the full drawer. */
function MobileCartBar() {
	const cart = useCart();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const hiddenRoute = pathname.startsWith("/checkout") || pathname.startsWith("/product/") || pathname.startsWith("/order");
	const visible = cart.resolved.length > 0 && !hiddenRoute;
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const apply = () => {
			if (visible && window.innerWidth < 1024) root.style.setProperty("--fab-offset", "4.75rem");
			else root.style.removeProperty("--fab-offset");
		};
		apply();
		window.addEventListener("resize", apply);
		return () => {
			window.removeEventListener("resize", apply);
			root.style.removeProperty("--fab-offset");
		};
	}, [visible]);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => cart.setOpen(true),
			"aria-label": `Open basket, ${cart.count} item${cart.count === 1 ? "" : "s"}, total ${formatPrice(cart.total)}`,
			className: "flex w-full items-center gap-3 rounded-xl bg-primary px-3 py-2 text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex -space-x-2",
					children: [cart.resolved.slice(0, 3).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: line.product.image,
						alt: line.product.name,
						width: 200,
						height: 200,
						wrapperClassName: "h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-primary-foreground/70",
						className: "h-full w-full object-cover"
					}, `${line.slug}-${line.variantId}`)), cart.resolved.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-foreground/70 bg-primary text-[11px] font-semibold",
						children: ["+", cart.resolved.length - 3]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: [
							cart.count,
							" item",
							cart.count === 1 ? "" : "s",
							" · ",
							formatPrice(cart.total)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] opacity-80",
						children: "Tap to view full basket"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 text-xs font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}),
						"View",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var FaqBot = (0, import_react.lazy)(() => import("./FaqBot-DPAXQK0w.mjs").then((m) => ({ default: m.FaqBot })));
/** Mounts children only once the browser is idle, after the page is interactive. */
function DeferUntilIdle({ children }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const w = window;
		const run = () => setReady(true);
		if (w.requestIdleCallback) {
			const id = w.requestIdleCallback(run);
			return () => window.cancelIdleCallback?.(id);
		}
		const t = window.setTimeout(run, 1200);
		return () => window.clearTimeout(t);
	}, []);
	return ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children
	}) : null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Est. 1932 · Tirunelveli"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-7xl leading-none font-bold text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-2xl font-semibold",
				children: "This shelf is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm text-muted-foreground",
				children: "The page you're looking for doesn't exist, or it moved while we were grinding a fresh batch. Try one of these instead."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-2",
				children: [
					{
						to: "/shop",
						label: "Shop all hing"
					},
					{
						to: "/story",
						label: "Our story since 1932"
					},
					{
						to: "/contact",
						label: "Contact support"
					},
					{
						to: "/account",
						label: "Your orders"
					}
				].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "surface-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary",
					children: l.label
				}, l.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
				children: "Back to home"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-page flex min-h-[60vh] flex-col items-center justify-center py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end — your basket and orders are safe. Try again, or reach us at care@ygasafoetida.in if it keeps happening."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Products Since 1932" },
			{
				name: "description",
				content: "Compounded artisanal asafoetida powder, pure gold hing cake, gluten-free hing, wood-roasted traditional health mix (sathu maavu), and pure temple benzoin sambrani from Tirunelveli since 1932."
			},
			{
				name: "keywords",
				content: "Y.G Asafoetida, YG Hing, buy hing online, asafoetida powder, pure bandhani hing, hing cake, gluten free hing, traditional health mix, sathu maavu, pure benzoin sambrani, loban, Tirunelveli hing, authentic Indian spices"
			},
			{
				name: "author",
				content: "Y.G Asafoetida"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#c25e00"
			},
			{
				property: "og:site_name",
				content: "Y.G Asafoetida"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Products Since 1932"
			},
			{
				property: "og:description",
				content: "Compounded artisanal asafoetida powder, pure gold hing cake, gluten-free hing, traditional health mix (sathu maavu), and pure temple benzoin sambrani from Tirunelveli since 1932."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				property: "og:image:alt",
				content: "Y.G Asafoetida Logo"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing Since 1932"
			},
			{
				name: "twitter:description",
				content: "Artisanal compounded hing powder, gold cakes, traditional sathu maavu and pure benzoin sambrani from Tirunelveli."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "geo.region",
				content: "IN-TN"
			},
			{
				name: "geo.placename",
				content: "Tirunelveli, Tamil Nadu, India"
			},
			{
				name: "geo.position",
				content: "8.7139;77.7567"
			},
			{
				name: "ICBM",
				content: "8.7139, 77.7567"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://ygasafoetida.in"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				"@id": "https://ygasafoetida.in/#organization",
				"name": "Y.G Asafoetida",
				"alternateName": [
					"YG Hing",
					"Y.G Products",
					"Y.G Traditional Products"
				],
				"url": "https://ygasafoetida.in",
				"logo": "https://ygasafoetida.in/logo.png",
				"image": "https://ygasafoetida.in/logo.png",
				"description": "Compounded and artisanal asafoetida powder, cakes, granules, traditional health mix, and pure benzoin sambrani made in Tirunelveli since 1932.",
				"foundingDate": "1932",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Town Car Street",
					"addressLocality": "Tirunelveli",
					"addressRegion": "Tamil Nadu",
					"postalCode": "627006",
					"addressCountry": "IN"
				},
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": 8.7139,
					"longitude": 77.7567
				},
				"telephone": "+91 98765 43210",
				"email": "care@ygasafoetida.in",
				"priceRange": "₹85 - ₹999",
				"openingHours": "Mo-Sa 09:00-19:00",
				"sameAs": ["https://www.facebook.com/ygasafoetida", "https://www.instagram.com/ygasafoetida"]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#main",
						className: "sr-only rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50",
						children: "Skip to main content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "main",
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCartBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeferUntilIdle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqBot, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		] }) }) }) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-DtutiF_R.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Y.G Asafoetida — Artisanal Hing, Sathu Maavu & Sambrani Since 1932" },
			{
				name: "description",
				content: "Buy authentic compounded asafoetida powder, pure gold hing cake, gluten-free hing, wood-roasted traditional health mix (sathu maavu), and pure temple benzoin sambrani online from Tirunelveli since 1932."
			},
			{
				name: "keywords",
				content: "buy hing online, asafoetida powder, Y.G Asafoetida, pure gold hing cake, gluten free hing, traditional health mix, sathu maavu online, pure benzoin sambrani, loban resin, Tirunelveli hing store"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/"
			},
			{
				property: "og:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Store Since 1932"
			},
			{
				property: "og:description",
				content: "Artisanal hing preparations, stone-ground Sathu Maavu health mix, and pure benzoin sambrani compounded in Tirunelveli."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing Since 1932"
			},
			{
				name: "twitter:description",
				content: "Artisanal compounded hing powder, gluten-free hing, traditional sathu maavu, and pure pooja sambrani from Tirunelveli."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": "Y.G Asafoetida",
				"url": "https://ygasafoetida.in",
				"potentialAction": {
					"@type": "SearchAction",
					"target": "https://ygasafoetida.in/shop?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "What makes Y.G Asafoetida different from commercial hing?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Y.G has been compounding hing in Tirunelveli since 1932 using high-grade mountain Ferula oleoresin and natural carriers, stone-milled in small batches without artificial colors, chemical preservatives, or synthetic aromas."
						}
					},
					{
						"@type": "Question",
						"name": "Do you have a gluten-free asafoetida option?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Yes! Our Y.G Gluten-Free Asafoetida Powder is formulated with 100% pure rice starch in a dedicated celiac-safe line."
						}
					},
					{
						"@type": "Question",
						"name": "What is the shelf life of Y.G Asafoetida?",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Our compounded powders retain their robust aroma for 18 months from packing. Solid cakes and granules can last up to 24 months when stored airtight in a cool, dry cupboard."
						}
					}
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./account-Dom7pQi5.mjs");
var Route$7 = createFileRoute("/account")({
	head: () => ({ meta: [
		{ title: "Your Account — Y.G Asafoetida" },
		{
			name: "description",
			content: "View your Y.G Asafoetida orders, track deliveries, reorder hing and manage saved addresses."
		},
		{
			property: "og:title",
			content: "Your Account — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Orders, tracking and saved addresses in one place."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./checkout-m-Gw-VuH.mjs");
var Route$6 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — Y.G Asafoetida" },
		{
			name: "description",
			content: "Complete your Y.G Asafoetida order with secure shipping details and payment."
		},
		{
			property: "og:title",
			content: "Checkout — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Complete your hing order from Tirunelveli."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-DrqcDvDP.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Y.G Asafoetida — Customer Support & Bulk Enquiries | Tirunelveli" },
			{
				name: "description",
				content: "Reach the Y.G Asafoetida team in Tirunelveli. Get direct help with orders, tracking, culinary recommendations, and bulk wholesale supply. Phone: +91 98765 43210."
			},
			{
				name: "keywords",
				content: "contact Y.G Asafoetida, YG Hing customer care, bulk hing supply, Tirunelveli spices contact, wholesale asafoetida, hing export enquiry"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/contact"
			},
			{
				property: "og:title",
				content: "Contact Y.G Asafoetida — Customer Care & Bulk Supply"
			},
			{
				property: "og:description",
				content: "Order help, bulk enquiries, and product questions — we reply within a working day."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact Y.G Asafoetida Support"
			},
			{
				name: "twitter:description",
				content: "Customer care and wholesale enquiries in Tirunelveli, Tamil Nadu."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				"name": "Contact Y.G Asafoetida",
				"url": "https://ygasafoetida.in/contact",
				"description": "Customer support, order resolutions, and wholesale bulk enquiries for Y.G Asafoetida.",
				"mainEntity": {
					"@type": "LocalBusiness",
					"name": "Y.G Asafoetida",
					"telephone": "+91 98765 43210",
					"email": "care@ygasafoetida.in",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Town Car Street",
						"addressLocality": "Tirunelveli",
						"addressRegion": "Tamil Nadu",
						"postalCode": "627006",
						"addressCountry": "IN"
					}
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./custom-branding-BFEvF6WX.mjs");
var Route$4 = createFileRoute("/custom-branding")({
	head: () => ({
		meta: [
			{ title: "White Labelling & Custom Branding — Private Label Asafoetida & Spices | Y.G Asafoetida" },
			{
				name: "description",
				content: "Partner with Y.G Asafoetida for premium white labelling, contract manufacturing, and private label custom packaging. High-potency hing powders, solid cakes, idli podis, and millet blends crafted with your brand identity."
			},
			{
				name: "keywords",
				content: "white labelling hing, private label asafoetida, contract spice manufacturing India, custom branding spices, bulk hing manufacturer, Tirunelveli asafoetida wholesale, OEM spice packaging"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/custom-branding"
			},
			{
				property: "og:title",
				content: "White Labelling & Custom Branding — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Turnkey private label manufacturing, formulation tuning, and custom branded packaging for gourmet brands, exporters, and supermarket chains."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Private Label & White Labelling — Y.G Asafoetida"
			},
			{
				name: "twitter:description",
				content: "Turnkey OEM spice compounding, custom formulation, and bespoke packaging for food brands worldwide."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/custom-branding"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				"name": "Y.G Asafoetida White Labelling & Private Label Contract Manufacturing",
				"serviceType": "Spice Manufacturing & Custom Branding",
				"provider": {
					"@type": "Organization",
					"name": "Y.G Asafoetida",
					"url": "https://ygasafoetida.in",
					"logo": "https://ygasafoetida.in/logo.png"
				},
				"areaServed": [
					"India",
					"United States",
					"United Kingdom",
					"United Arab Emirates",
					"Singapore",
					"Malaysia",
					"Australia"
				],
				"description": "Custom white labelling, bespoke recipe compounding, private branding, and wholesale packaging for spices and asafoetida."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./shop-CHC1jj1w.mjs");
var Route$3 = createFileRoute("/shop")({
	head: () => ({
		meta: [
			{ title: "Buy Authentic Hing Online — Powders, Cakes, Health Mix & Sambrani | Y.G Asafoetida" },
			{
				name: "description",
				content: "Explore 11 authentic heritage products: Gold & Premium Hing Powder, Gluten-Free Hing, Solid Cakes, Granules, Traditional Sathu Maavu, and Pure Benzoin Pooja Sambrani. Fast shipping across India."
			},
			{
				name: "keywords",
				content: "buy hing online, asafoetida powder price, pure gold hing cake, gluten free hing powder, traditional health mix, sathu maavu online, pure benzoin pooja sambrani, buy hing in India"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/shop"
			},
			{
				property: "og:title",
				content: "Buy Authentic Hing, Health Mix & Sambrani — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Explore 11 authentic heritage products: Gold & Premium Hing Powder, Gluten-Free Hing, Solid Cakes, Granules, Traditional Sathu Maavu, and Pure Benzoin Pooja Sambrani."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Shop Authentic Heritage Hing — Y.G Asafoetida"
			},
			{
				name: "twitter:description",
				content: "Explore 11 authentic heritage preparations: Hing powders, solid cakes, gluten-free, health mix, and sambrani."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/shop"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				"name": "Y.G Asafoetida & Traditional Products Store",
				"description": "Authentic compounded hing powders, solid cakes, traditional health mix, and pooja sambrani.",
				"url": "https://ygasafoetida.in/shop",
				"breadcrumb": {
					"@type": "BreadcrumbList",
					"itemListElement": [{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://ygasafoetida.in/"
					}, {
						"@type": "ListItem",
						"position": 2,
						"name": "Shop",
						"item": "https://ygasafoetida.in/shop"
					}]
				},
				"mainEntity": {
					"@type": "ItemList",
					"itemListElement": products.map((p, index) => ({
						"@type": "ListItem",
						"position": index + 1,
						"name": p.name,
						"url": `https://ygasafoetida.in/product/${p.slug}`,
						"image": `https://ygasafoetida.in/products/${p.slug}/img-1.jpg`
					}))
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./story-cGWKdLlU.mjs");
var Route$2 = createFileRoute("/story")({
	head: () => ({
		meta: [
			{ title: "Our Heritage Since 1932 — Three Generations of Tirunelveli Hing | Y.G Asafoetida" },
			{
				name: "description",
				content: "The 92-year journey of Y.G Asafoetida from a small shop on South Car Street in Tirunelveli to India's most trusted heritage hing house. Learn our artisanal stone-milling compounding craft."
			},
			{
				name: "keywords",
				content: "Y.G Asafoetida history, Tirunelveli hing history, heritage asafoetida, traditional hing compounding, South Indian spices history, 1932 spices brand"
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/story"
			},
			{
				property: "og:title",
				content: "Our Heritage Since 1932 — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Ninety-two years of stone-compounding pure hing in Tirunelveli, preserved across three generations."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Our 1932 Heritage — Y.G Asafoetida"
			},
			{
				name: "twitter:description",
				content: "The 92-year journey of Y.G Asafoetida compounding in Tirunelveli, Tamil Nadu."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/story"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				"name": "The Y.G Asafoetida Heritage Story",
				"description": "The 92-year history and artisanal compounding craft of Y.G Asafoetida in Tirunelveli since 1932.",
				"url": "https://ygasafoetida.in/story",
				"publisher": {
					"@type": "Organization",
					"name": "Y.G Asafoetida",
					"logo": "https://ygasafoetida.in/logo.png"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./track-C0fprrT-.mjs");
var Route$1 = createFileRoute("/track")({
	head: () => ({ meta: [
		{ title: "Track your order — Y.G Asafoetida" },
		{
			name: "description",
			content: "Enter your order number and email to follow your hing from our Tirunelveli works to your kitchen — no account needed."
		},
		{
			property: "og:title",
			content: "Track your order — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Guest order lookup with live packing and dispatch status."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wishlist-Bic8nlV2.mjs");
var Route = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Your kitchen list — Y.G Asafoetida" },
		{
			name: "description",
			content: "The hing you saved for later, plus the back-in-stock alerts you asked for. Move anything to your basket in one tap."
		},
		{
			property: "og:title",
			content: "Your kitchen list — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Saved hing, gift boxes and back-in-stock alerts, ready when you are."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AccountRoute: Route$7.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$9
	}),
	AdminRoute: Route$10.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$9
	}),
	CheckoutRoute: Route$6.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	CustomBrandingRoute: Route$4.update({
		id: "/custom-branding",
		path: "/custom-branding",
		getParentRoute: () => Route$9
	}),
	OrderConfirmedRoute: Route$11.update({
		id: "/order-confirmed",
		path: "/order-confirmed",
		getParentRoute: () => Route$9
	}),
	ShopRoute: Route$3.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$9
	}),
	StoryRoute: Route$2.update({
		id: "/story",
		path: "/story",
		getParentRoute: () => Route$9
	}),
	TrackRoute: Route$1.update({
		id: "/track",
		path: "/track",
		getParentRoute: () => Route$9
	}),
	WishlistRoute: Route.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$9
	}),
	OrderIdRoute: Route$12.update({
		id: "/order/$id",
		path: "/order/$id",
		getParentRoute: () => Route$9
	}),
	PoliciesSlugRoute: Route$13.update({
		id: "/policies/$slug",
		path: "/policies/$slug",
		getParentRoute: () => Route$9
	}),
	ProductSlugRoute: Route$14.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
/** Skeleton shown while a route resolves, so navigation never flashes blank. */
function RoutePending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-12",
		role: "status",
		"aria-live": "polite",
		"aria-busy": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Loading page…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-24 animate-pulse rounded-full bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-10 w-2/3 animate-pulse rounded-lg bg-muted sm:w-1/2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-4 w-full max-w-xl animate-pulse rounded bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square w-full animate-pulse bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-3/4 animate-pulse rounded bg-muted" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/2 animate-pulse rounded bg-muted" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-9 w-full animate-pulse rounded-lg bg-muted" })
						]
					})]
				}, i))
			})
		]
	});
}
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadDelay: 20,
		defaultPreloadStaleTime: 3e4,
		defaultPendingComponent: RoutePending,
		defaultPendingMs: 500,
		defaultPendingMinMs: 200
	});
};
//#endregion
export { getRouter };
