import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Leaf, Ct as ArrowRight, St as Award, d as Star, mt as ChevronLeft, o as Truck, p as Sparkles, pt as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as storyShopImage, t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { i as products } from "./products--El95C0C.mjs";
import { t as ProductCard } from "./ProductCard-CYe909vP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BdS4jJfY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", action }) {
	const centered = align === "center";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col gap-4 ${centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: centered ? "max-w-2xl" : "max-w-xl",
			children: [
				eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: eyebrow
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl leading-tight font-semibold sm:text-4xl",
					children: title
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base text-muted-foreground",
					children: description
				}) : null
			]
		}), action]
	});
}
var trustPillars = [
	{
		icon: Award,
		title: "92+ Years Legacy",
		body: "Compounded in Tirunelveli since 1932."
	},
	{
		icon: Leaf,
		title: "100% Celiac Safe",
		body: "Dedicated pure rice-starch carrier."
	},
	{
		icon: Sparkles,
		title: "High Resin Purity",
		body: "Rich natural Ferula oleoresin concentration."
	},
	{
		icon: Truck,
		title: "Free Shipping",
		body: "On orders above ₹499 across India."
	}
];
var formatGuides = [
	{
		slug: "gold-asafoetida-powder",
		format: "Powder",
		title: "Gold & Premium Powder",
		tagline: "Instant Dissolving · Daily Tadka",
		description: "Dissolves instantly in hot ghee or sesame oil for fragrant sambar, rasam, and dal tadka.",
		bestFor: "Sambar, Rasam, Dal",
		image: "/products/100g-gold-asafoetida-powder/img-1.jpg",
		price: "From ₹175"
	},
	{
		slug: "hing-chips",
		format: "Granules & Chips",
		title: "Crunchy Pellets & Chips",
		tagline: "Slow-Blooming · Non-Burning",
		description: "Coarse granules that bloom slowly without scorching in curds and rice dishes.",
		bestFor: "Curd Rice, Pickles",
		image: "/products/hing-pellets/img-1.jpg",
		price: "From ₹250"
	},
	{
		slug: "asafoetida-gold-cake",
		format: "Cake & Lump",
		title: "Pure Gold Cake & Raw Lump",
		tagline: "Concentrated · Traditional Strength",
		description: "Solid block. Shave a pea-sized piece into oil or dissolve in warm water for festive gravies.",
		bestFor: "Festive Kuzhambu, Pickles",
		image: "/products/100g-asafoetida-gold-cake/img-1.jpg",
		price: "From ₹240"
	},
	{
		slug: "all-product-heritage-combo",
		format: "Gift & Combo",
		title: "Heritage Box & Glass Jars",
		tagline: "Collector's Sets · Gifting",
		description: "4-in-1 collection box with brass spoon and hermetic glass bottle jars to seal aroma.",
		bestFor: "Gourmet Gifting",
		image: "/products/all-product/img-1.jpg",
		price: "From ₹380"
	}
];
var verifiedReviews = [
	{
		rating: 5,
		title: "Authentic Paati's Rasam Aroma",
		comment: "Takes me straight back to my grandmother's kitchen in Tirunelveli. Standard store brands smell synthetic compared to this deep, wholesome aroma.",
		name: "Sowmya Raman",
		city: "Chennai",
		product: "Gold Powder"
	},
	{
		rating: 5,
		title: "Life-Saver for Celiac Cooking",
		comment: "Finding truly wheat-free hing that still has authentic strength was impossible until I found Y.G's rice-starch formula. Safe and fragrant.",
		name: "Karthik Sundaram",
		city: "Bengaluru",
		product: "Gluten-Free Hing"
	},
	{
		rating: 5,
		title: "Pellets in Curd Rice are Perfection",
		comment: "The Hing Pellets don't burn like fine powders do. They puff slightly in mustard oil, giving a delicate crunch and sustained aroma.",
		name: "Meenakshi V.",
		city: "Madurai",
		product: "Hing Pellets"
	},
	{
		rating: 5,
		title: "Gold Cake for Temple Kuzhambu",
		comment: "Shaving a small piece of the Pindi Hing into hot gingelly oil gives the authentic tangy aroma needed for traditional vathal kuzhambu.",
		name: "Dr. K. Raghavan",
		city: "Coimbatore",
		product: "Gold Cake"
	},
	{
		rating: 5,
		title: "Glass Jar Locks Aroma Completely",
		comment: "The airtight rubber gasket jar is gorgeous on the kitchen counter and keeps the fragrance locked in. You need only a tiny pinch.",
		name: "Anita Deshmukh",
		city: "Mumbai",
		product: "Bottle Jar"
	},
	{
		rating: 5,
		title: "Exquisite Heritage 4-in-1 Box",
		comment: "Ordered the combo box as a housewarming gift. The engraved brass spoon and assortment of powder, cake, chips, and pellets delighted our hosts.",
		name: "Sridhar K.",
		city: "Hyderabad",
		product: "Heritage Box"
	}
];
var HERO_VIDEOS = [
	{
		src: "/hero-video-slide2.mp4",
		title: "Heritage Tradition"
	},
	{
		src: "/hero-video-factory.mp4",
		title: "Generational Works"
	},
	{
		src: "/hero-video-gold.mp4",
		title: "Gold Hing Collection"
	},
	{
		src: "/hero-video.mp4",
		title: "Artisanal Compounding"
	}
];
function HomePage() {
	const [activeCatalogTab, setActiveCatalogTab] = (0, import_react.useState)("all");
	const [currentVideoIndex, setCurrentVideoIndex] = (0, import_react.useState)(0);
	const soundPlayCountRef = (0, import_react.useRef)(0);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = isMuted;
		video.volume = 1;
		video.currentTime = 0;
		video.play().catch(() => {});
	}, [currentVideoIndex, isMuted]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = true;
		video.play().catch(() => {});
		const activateSound = () => {
			if (video && soundPlayCountRef.current < 2) {
				video.muted = false;
				video.volume = 1;
				setIsMuted(false);
				video.play().catch(() => {});
			}
		};
		window.addEventListener("click", activateSound, { once: true });
		window.addEventListener("touchstart", activateSound, { once: true });
		window.addEventListener("pointerdown", activateSound, { once: true });
		window.addEventListener("keydown", activateSound, { once: true });
		return () => {
			window.removeEventListener("click", activateSound);
			window.removeEventListener("touchstart", activateSound);
			window.removeEventListener("pointerdown", activateSound);
			window.removeEventListener("keydown", activateSound);
		};
	}, []);
	const handleVideoEnded = () => {
		const video = videoRef.current;
		if (!video) return;
		if (currentVideoIndex === HERO_VIDEOS.length - 1) {
			if (!isMuted) {
				soundPlayCountRef.current += 1;
				if (soundPlayCountRef.current >= 2) {
					video.muted = true;
					setIsMuted(true);
				}
			}
		}
		setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
	};
	const nextVideo = () => {
		if (soundPlayCountRef.current < 2) setIsMuted(false);
		setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
	};
	const prevVideo = () => {
		if (soundPlayCountRef.current < 2) setIsMuted(false);
		setCurrentVideoIndex((prev) => (prev - 1 + HERO_VIDEOS.length) % HERO_VIDEOS.length);
	};
	const selectVideo = (index) => {
		if (soundPlayCountRef.current < 2) setIsMuted(false);
		setCurrentVideoIndex(index);
	};
	const displayedProducts = products.filter((p) => {
		if (activeCatalogTab === "all") return true;
		return p.format === activeCatalogTab;
	});
	const currentVideo = HERO_VIDEOS[currentVideoIndex] ?? HERO_VIDEOS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "group relative overflow-hidden border-b border-border aspect-[16/9] sm:aspect-[21/9] max-h-[75vh] w-full bg-black select-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						autoPlay: true,
						playsInline: true,
						muted: isMuted,
						onEnded: handleVideoEnded,
						className: "h-full w-full object-cover object-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: currentVideo.src,
							type: "video/mp4"
						})
					}, currentVideo.src),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: prevVideo,
						"aria-label": "Previous video",
						className: "absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg transition-all hover:bg-black/70 hover:scale-110 active:scale-95 z-20 opacity-80 sm:opacity-0 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: nextVideo,
						"aria-label": "Next video",
						className: "absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg transition-all hover:bg-black/70 hover:scale-110 active:scale-95 z-20 opacity-80 sm:opacity-0 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 sm:bottom-4 inset-x-0 flex justify-center items-center gap-2 z-20 pointer-events-auto",
						children: HERO_VIDEOS.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => selectVideo(i),
							"aria-label": `Switch to video ${i + 1}`,
							className: `h-1.5 sm:h-2 rounded-full transition-all duration-300 ${currentVideoIndex === i ? "w-8 sm:w-10 bg-amber-400 shadow-md" : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"}`
						}, v.src))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page grid gap-3 py-4 grid-cols-2 md:grid-cols-4",
					children: trustPillars.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 p-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-foreground truncate",
								children: t.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground truncate",
								children: t.body
							})]
						})]
					}, t.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-8 sm:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Formulations & Uses",
					title: "Engineered for Every Culinary Style",
					description: "Different culinary traditions call for different bloom speeds and carrier bases.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: formatGuides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-4/3 w-full overflow-hidden bg-white p-2 flex items-center justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: guide.image,
									alt: guide.title,
									className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-2 left-2 bg-card/90 backdrop-blur px-2 py-0.5 rounded-full text-[9px] font-bold text-foreground border border-border",
									children: guide.format
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-2 right-2 bg-background/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-primary",
									children: guide.price
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-primary uppercase tracking-wider",
									children: guide.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors",
									children: guide.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground leading-relaxed line-clamp-2",
									children: guide.description
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 pt-0 border-t border-border/40 mt-2 flex items-center justify-between text-[10px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground truncate max-w-[130px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "For: "
								}), guide.bestFor]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: guide.slug },
								className: "inline-flex items-center font-bold text-primary hover:underline shrink-0",
								children: ["View ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-0.5 h-2.5 w-2.5" })]
							})]
						})]
					}, guide.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-secondary/25 py-8 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "The Complete Collection"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-0.5 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight",
									children: "Authentic Y.G Heritage Range"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Hand-compounded hing, roasted sathu maavu, and sacred natural sambrani resins."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1 p-0.5 bg-muted/60 rounded-lg border border-border w-fit",
								children: [
									{
										id: "all",
										label: `All (${products.length})`
									},
									{
										id: "powder",
										label: "Powder"
									},
									{
										id: "granules",
										label: "Granules"
									},
									{
										id: "cake",
										label: "Cake"
									},
									{
										id: "combo",
										label: "Gift Sets"
									},
									{
										id: "wellness",
										label: "Health Mix"
									},
									{
										id: "pooja",
										label: "Sambrani"
									}
								].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveCatalogTab(tab.id),
									className: `px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${activeCatalogTab === tab.id ? "bg-card text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"}`,
									children: tab.label
								}, tab.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4",
							children: displayedProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
								product: p,
								priority: i < 5,
								mode: "compact"
							}, p.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "text-xs font-semibold",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									children: ["Explore Full Shop with Filters & Sorting ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })]
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-clove text-clove-foreground py-10 sm:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page grid items-center gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 relative max-w-sm mx-auto lg:max-w-none w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: storyShopImage,
								alt: "Shri P. Subramanian compounding artisanal hing in 1932 Tirunelveli",
								width: 1200,
								height: 900,
								sizes: "(min-width: 1024px) 40vw, 95vw",
								fallbackLabel: "Estd. 1932",
								wrapperClassName: "h-full w-full",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-2 -left-2 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-lg text-[10px] shadow-md",
							children: "Estd. 1932 · Tirunelveli"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 space-y-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold tracking-widest uppercase text-amber-400",
								children: "Preserving A 90-Year Craft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl sm:text-2xl lg:text-3xl font-bold leading-tight",
								children: "Started by Shri P. Subramanian. Mastered across three generations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm opacity-85 leading-relaxed",
								children: "In 1932, near the banks of the Thamirabarani river, Shri P. Subramanian perfected the art of stone-compounding imported mountain ferula resin with pure starches. Today, his grandchildren continue the same strict formula without shortcuts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 pt-2 border-t border-white/10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg sm:text-xl font-extrabold text-amber-400",
										children: "1932"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "opacity-75 text-[10px]",
										children: "Founding Year"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg sm:text-xl font-extrabold text-amber-400",
										children: "100%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "opacity-75 text-[10px]",
										children: "Natural Ferula"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg sm:text-xl font-extrabold text-amber-400",
										children: "0%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "opacity-75 text-[10px]",
										children: "Chemical Additives"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									className: "font-semibold text-slate-950 text-xs",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/story",
										children: "Read Our Full 1932 Story"
									})
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-10 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Customer Testimonials",
						title: "Trusted Across 1k+ Kitchens",
						description: "Real verified experiences from traditional cooks and culinary enthusiasts.",
						align: "center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-nowrap overflow-x-auto gap-3.5 pb-4 pt-1 px-4 -mx-4 scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:p-0 md:m-0 md:gap-4",
						children: verifiedReviews.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink surface-card flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-border shadow-xs hover:border-primary/40 transition-all bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex text-amber-500",
										children: Array.from({ length: rev.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-500 text-amber-500" }, i))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] px-2 py-0.5 bg-primary/10 text-primary font-bold rounded-full",
										children: "Verified Purchase"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-2.5 text-sm font-bold text-foreground leading-snug",
									children: rev.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
									children: [
										"“",
										rev.comment,
										"”"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-2.5 border-t border-border/60 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-xs",
									children: rev.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[11px]",
									children: rev.city
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-primary text-[11px] bg-primary/5 px-2 py-0.5 rounded border border-primary/15",
									children: rev.product
								})]
							})]
						}, rev.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex md:hidden items-center justify-center gap-1.5 pt-2 text-[11px] font-medium text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "← Swipe horizontally to view more reviews →" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-10 sm:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden gradient-gold rounded-2xl p-6 sm:p-10 text-center text-primary-foreground shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl mx-auto space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block px-2.5 py-0.5 bg-black/20 rounded-full text-[10px] font-bold uppercase tracking-wider",
								children: "Special Code: HERITAGE10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl sm:text-3xl font-bold tracking-tight",
								children: "Ninety Years of Culinary Purity, One Pinch at a Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm opacity-90 leading-relaxed",
								children: "Free delivery on orders above ₹499 with same-day dispatch from Tirunelveli."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 flex flex-wrap items-center justify-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "secondary",
									className: "font-bold text-slate-950 px-5 shadow-xs",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										children: "Shop the 9 Formulations"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									className: "bg-transparent border-white/40 text-white hover:bg-white/10 text-xs",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Ask Specialists"
									})
								})]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { HomePage as component };
