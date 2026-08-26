import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as ArrowRight, L as LoaderCircle, N as MapPin, Q as Flame, b as RotateCcw, bt as BellRing, d as Star, g as ShieldCheck, gt as Check, h as ShoppingBag, j as MessageCircleQuestionMark, k as MessageSquarePlus, mt as ChevronLeft, o as Truck, ot as Clock3, p as Sparkles, pt as ChevronRight, t as Zap, ut as CircleCheck, w as Pencil } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CiapfthD.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as useWishlist } from "./wishlist-CrEmIO6O.mjs";
import { i as products, n as formatPrice, t as formatLabels } from "./products--El95C0C.mjs";
import { n as useCart } from "./cart-CW0VkAaI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as WishlistButton, t as ProductCard } from "./ProductCard-D3oSsY45.mjs";
import { t as Input } from "./input-DYHYoj49.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Textarea } from "./textarea-Du_uAGq3.mjs";
import { c as getProductReviewsServerFn, l as submitReviewServerFn, o as askQuestionServerFn, s as getProductQuestionsServerFn } from "./questions-Vwvu7vkj.mjs";
import { t as lookupPincode } from "./pincode.functions-CuEvZV_z.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-DMoxE41r.mjs";
import { n as Route, t as QuantityStepper } from "./product._slug-C7heYyVL.mjs";
import { n as useRecentlyViewed, t as RecentlyViewed } from "./RecentlyViewed-D5RwvSpV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DmzHdfep.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatReviewDate(ts) {
	return new Date(ts).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function mapDbReview(r) {
	return {
		id: r.id,
		slug: r.slug,
		rating: r.rating,
		title: r.title,
		comment: r.comment,
		name: r.name,
		city: r.city ?? void 0,
		email: r.email ?? void 0,
		phone: r.phone ?? void 0,
		contactOptIn: Boolean(r.contact_opt_in),
		createdAt: r.created_at,
		status: r.status
	};
}
/** Reviews loaded from backend + local optimistic submissions */
function useGuestReviews(slug) {
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const fetchReviews = (0, import_react.useCallback)(async () => {
		try {
			const list = await getProductReviewsServerFn({ data: { slug } });
			setReviews(list.map(mapDbReview));
		} catch (err) {
			console.warn("Failed to fetch server reviews:", err);
		} finally {
			setHydrated(true);
		}
	}, [slug]);
	(0, import_react.useEffect)(() => {
		fetchReviews();
	}, [fetchReviews]);
	const submitReview = (0, import_react.useCallback)(async (draft) => {
		try {
			const mapped = mapDbReview((await submitReviewServerFn({ data: {
				slug: draft.slug,
				rating: draft.rating,
				title: draft.title,
				comment: draft.comment,
				name: draft.name,
				city: draft.city,
				email: draft.email,
				phone: draft.phone,
				contactOptIn: draft.contactOptIn
			} })).review);
			setReviews((prev) => [mapped, ...prev]);
			return mapped;
		} catch (err) {
			console.error("submitReviewServerFn failed, using fallback:", err);
			const fallback = {
				...draft,
				id: `rev_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
				createdAt: Date.now(),
				status: "pending"
			};
			setReviews((prev) => [fallback, ...prev]);
			return fallback;
		}
	}, []);
	const remove = (0, import_react.useCallback)((id) => {
		setReviews((prev) => prev.filter((r) => r.id !== id));
	}, []);
	const sortedReviews = [...reviews].sort((a, b) => b.createdAt - a.createdAt);
	return {
		reviews: sortedReviews,
		average: sortedReviews.length > 0 ? Math.round(sortedReviews.reduce((s, r) => s + r.rating, 0) / sortedReviews.length * 10) / 10 : 0,
		hydrated,
		submitReview,
		remove,
		refresh: fetchReviews
	};
}
var MAX_COMMENT = 600;
var empty = {
	rating: 5,
	title: "",
	comment: "",
	name: "",
	city: "",
	email: "",
	phone: "",
	contactOptIn: false
};
function Stars({ value, className = "h-3.5 w-3.5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-0.5 text-amber-500",
		"aria-label": `${value} out of 5 stars`,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			className: `${className} ${n <= Math.round(value) ? "fill-amber-500 text-amber-500" : "text-border"}`,
			"aria-hidden": true
		}, n))
	});
}
function ProductReviews({ product }) {
	const { reviews, average, hydrated, submitReview, remove } = useGuestReviews(product.slug);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(empty);
	const [touched, setTouched] = (0, import_react.useState)({});
	const [hover, setHover] = (0, import_react.useState)(0);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const formRef = (0, import_react.useRef)(null);
	const set = (key) => (e) => setForm((f) => ({
		...f,
		[key]: e.target.value
	}));
	const blur = (key) => () => setTouched((t) => ({
		...t,
		[key]: true
	}));
	const errors = (0, import_react.useMemo)(() => {
		const e = {};
		if (form.rating < 1) e.rating = "Pick a star rating";
		if (form.name.trim().length < 2) e.name = "Tell us what to call you";
		if (form.comment.trim().length < 10) e.comment = "Write at least 10 characters";
		if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address";
		const digits = form.phone.replace(/\D/g, "");
		if (form.phone.trim() && digits.length < 10) e.phone = "Enter a 10-digit mobile number";
		if (form.contactOptIn && !form.email.trim() && !form.phone.trim()) e.contactOptIn = "Add an email or phone so we can reply";
		return e;
	}, [form]);
	const errorFor = (key) => touched[key] ? errors[key] : void 0;
	const valid = Object.keys(errors).length === 0;
	const openForm = () => {
		setOpen(true);
		setDone(false);
		requestAnimationFrame(() => formRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		}));
	};
	const submit = async (e) => {
		e.preventDefault();
		setTouched({
			rating: true,
			name: true,
			comment: true,
			email: true,
			phone: true,
			contactOptIn: true
		});
		if (!valid) {
			toast.error("Please complete the required fields.");
			return;
		}
		setSending(true);
		try {
			await submitReview({
				slug: product.slug,
				rating: form.rating,
				title: form.title,
				comment: form.comment,
				name: form.name,
				city: form.city.trim() || void 0,
				email: form.email.trim() || void 0,
				phone: form.phone.trim() || void 0,
				contactOptIn: form.contactOptIn
			});
			setForm(empty);
			setTouched({});
			setOpen(false);
			setDone(true);
			toast.success("Thank you! Your verified review has been recorded.");
		} catch {
			toast.error("Could not post review. Please try again.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-12 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4 space-y-2 text-center md:text-left border-b md:border-b-0 md:border-r border-border/70 pb-5 md:pb-0 md:pr-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Verified Kitchen Feedback"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-center md:justify-start gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight",
										children: product.rating.toFixed(1)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-muted-foreground",
										children: "/ 5.0"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center md:justify-start pt-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
										value: product.rating,
										className: "h-4 w-4"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground pt-1",
									children: [
										"Based on ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: (product.reviews ?? 0).toLocaleString("en-IN")
										}),
										" verified buyers across India"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-5 space-y-1.5 text-xs text-muted-foreground px-0 md:px-3",
							children: [
								{
									star: 5,
									pct: "92%"
								},
								{
									star: 4,
									pct: "6%"
								},
								{
									star: 3,
									pct: "2%"
								},
								{
									star: 2,
									pct: "0%"
								},
								{
									star: 1,
									pct: "0%"
								}
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-6 font-mono text-right",
										children: [b.star, "★"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-2 flex-1 rounded-full bg-muted overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-amber-500 rounded-full",
											style: { width: b.pct }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-[11px] font-mono text-muted-foreground/80",
										children: b.pct
									})
								]
							}, b.star))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 text-center md:text-right space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: openForm,
								variant: open ? "outline" : "default",
								size: "sm",
								className: "w-full font-semibold gap-1.5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "h-3.5 w-3.5" }), "Write a Review"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "No account required · 100% verified guest review"
							})]
						})
					]
				})
			}),
			done && !open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-foreground",
					children: "Thank you for sharing your experience!"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Your feedback is live and helps other traditional cooks make authentic choices."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: formRef,
				children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "surface-card mt-5 space-y-4 p-5 sm:p-6 rounded-2xl border border-border/90",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold text-foreground flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
									" Share Your Cooking Experience with ",
									product.name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(false),
								className: "text-xs font-semibold text-muted-foreground hover:text-foreground",
								children: "Close"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs",
								children: ["Your Rating ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								onMouseLeave: () => setHover(0),
								children: [[
									1,
									2,
									3,
									4,
									5
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Rate ${n} star${n > 1 ? "s" : ""}`,
									onMouseEnter: () => setHover(n),
									onClick: () => {
										setForm((f) => ({
											...f,
											rating: n
										}));
										setTouched((t) => ({
											...t,
											rating: true
										}));
									},
									className: "p-1 transition-transform hover:scale-115",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-6 w-6 ${n <= (hover || form.rating) ? "fill-amber-500 text-amber-500" : "text-muted-foreground/30"}` })
								}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 text-xs font-bold text-foreground",
									children: [form.rating, " of 5 Stars"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rev-title",
								className: "text-xs",
								children: "Headline / Summary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "rev-title",
								value: form.title,
								onChange: set("title"),
								maxLength: 80,
								className: "h-8 text-xs",
								placeholder: "e.g. Unbelievable aroma in morning rasam"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									htmlFor: "rev-comment",
									className: "text-xs",
									children: ["Your Detailed Feedback ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "rev-comment",
									value: form.comment,
									onChange: set("comment"),
									onBlur: blur("comment"),
									maxLength: MAX_COMMENT,
									rows: 4,
									className: "text-xs",
									placeholder: "How did this hing bloom in your ghee/oil? Which recipes did you cook with it?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-[10px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: errorFor("comment")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											form.comment.length,
											"/",
											MAX_COMMENT
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									htmlFor: "rev-name",
									className: "text-xs",
									children: ["Your Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "rev-name",
									value: form.name,
									onChange: set("name"),
									onBlur: blur("name"),
									className: "h-8 text-xs",
									placeholder: "e.g. Sowmya Raman"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "rev-city",
									className: "text-xs",
									children: "City & State (optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "rev-city",
									value: form.city,
									onChange: set("city"),
									className: "h-8 text-xs",
									placeholder: "e.g. Chennai, TN"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "sm",
								className: "h-8 text-xs font-semibold px-4",
								disabled: sending,
								children: [sending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin mr-1" }) : null, "Submit Review"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "h-8 text-xs",
								onClick: () => setOpen(false),
								children: "Cancel"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3.5",
				children: [hydrated && reviews.length === 0 && !open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex flex-col items-center gap-2 p-8 text-center rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-5 w-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold text-sm text-foreground",
							children: ["Be the first to review ", product.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-xs text-muted-foreground",
							children: "Share your thoughts on how this artisan hing blooms in your kitchen."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "mt-2 text-xs",
							onClick: openForm,
							children: "Write a Review"
						})
					]
				}), reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card p-4 sm:p-5 rounded-xl border border-border/80 hover:border-primary/30 transition-colors shadow-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: r.rating }), r.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs sm:text-sm font-bold text-foreground",
									children: r.title
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified Buyer" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-foreground/90 leading-relaxed",
							children: r.comment
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 pt-2.5 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: r.name
									}),
									r.city ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", r.city] }) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", formatReviewDate(r.createdAt)] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-[10px] text-muted-foreground/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "South Indian Cuisine" })
							})]
						})
					]
				}, r.id))]
			})
		]
	});
}
function mapDbQuestion(q) {
	return {
		id: q.id,
		slug: q.slug,
		question: q.question,
		answer: q.answer ?? void 0,
		askedBy: q.asked_by,
		answeredBy: q.answered_by ?? void 0,
		createdAt: q.created_at,
		pending: q.status === "pending" || !q.answer
	};
}
function useProductQuestions(slug) {
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const fetchQuestions = (0, import_react.useCallback)(async () => {
		try {
			const list = await getProductQuestionsServerFn({ data: { slug } });
			setQuestions(list.map(mapDbQuestion));
		} catch (err) {
			console.warn("Failed to fetch server questions:", err);
		}
	}, [slug]);
	(0, import_react.useEffect)(() => {
		fetchQuestions();
	}, [fetchQuestions]);
	const ask = (0, import_react.useCallback)(async (question, askedBy) => {
		try {
			const mapped = mapDbQuestion((await askQuestionServerFn({ data: {
				slug,
				question,
				askedBy
			} })).question);
			setQuestions((prev) => [mapped, ...prev.filter((q) => q.id !== mapped.id)]);
			return mapped;
		} catch (err) {
			console.error("askQuestionServerFn failed, using fallback:", err);
			const fallback = {
				id: `q-${Date.now()}`,
				slug,
				question: question.trim(),
				askedBy: askedBy.trim() || "Guest",
				createdAt: Date.now(),
				pending: true
			};
			setQuestions((prev) => [fallback, ...prev]);
			return fallback;
		}
	}, [slug]);
	return {
		questions,
		answeredCount: questions.filter((q) => !q.pending && q.answer).length,
		ask,
		refresh: fetchQuestions
	};
}
var MAX = 240;
/** Ask-a-question block on the product page. Answers come from the Y.G team. */
function ProductQuestions({ slug }) {
	const { questions, answeredCount, ask } = useProductQuestions(slug);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const invalid = question.trim().length < 8;
	const submit = async (e) => {
		e.preventDefault();
		setTouched(true);
		if (invalid) return;
		setSending(true);
		await new Promise((r) => setTimeout(r, 500));
		ask(question, name);
		setSending(false);
		setQuestion("");
		setName("");
		setTouched(false);
		setOpen(false);
		toast.success("Question sent", { description: "We usually answer within one working day, right here on this page." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border py-10",
		"aria-labelledby": "questions",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "questions",
					className: "font-display text-2xl font-semibold",
					children: ["Questions & answers", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 align-middle text-sm font-normal text-muted-foreground",
						children: [answeredCount, " answered"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: open ? "ghost" : "outline",
					onClick: () => setOpen((o) => !o),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, {
						className: "mr-2 h-4 w-4",
						"aria-hidden": true
					}), open ? "Cancel" : "Ask a question"]
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "surface-card mt-6 space-y-4 p-5",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q-text",
								children: "Your question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "q-text",
								rows: 3,
								maxLength: MAX,
								value: question,
								onChange: (e) => setQuestion(e.target.value),
								onBlur: () => setTouched(true),
								"aria-invalid": touched && invalid,
								placeholder: "Type your question about this product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: touched && invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "Add a little more detail so we can answer properly."
								}) : "Answered publicly by our Tirunelveli team." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									question.length,
									"/",
									MAX
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "q-name",
							children: "Your name (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "q-name",
							value: name,
							autoComplete: "name",
							onChange: (e) => setName(e.target.value),
							placeholder: "Enter your name (optional)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: sending,
						children: sending ? "Sending…" : "Send question"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-border",
				children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: q.question
						}),
						q.answer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: q.answer
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
								className: "h-3.5 w-3.5",
								"aria-hidden": true
							}), " Awaiting an answer from the Y.G team"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								"Asked by ",
								q.askedBy,
								q.answeredBy ? ` · answered by ${q.answeredBy}` : ""
							]
						})
					]
				}, q.id))
			})
		]
	});
}
var CONTACT_RE = /^(\S+@\S+\.\S+|[6-9]\d{9})$/;
/** "Notify me" capture for sold-out products. Accepts an email or a 10-digit mobile. */
function BackInStockDialog({ slug, name, className }) {
	const { addAlert, hasAlert } = useWishlist();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [contact, setContact] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const invalid = !CONTACT_RE.test(contact.trim());
	const registered = hasAlert(slug);
	const submit = async (e) => {
		e.preventDefault();
		setTouched(true);
		if (invalid) return;
		setSaving(true);
		await new Promise((r) => setTimeout(r, 450));
		addAlert(slug, contact.trim());
		setSaving(false);
		setOpen(false);
		setContact("");
		setTouched(false);
		toast.success("We'll tell you the moment it's back", { description: `${name} — one message only, no marketing.` });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: registered ? "outline" : "default",
				className,
				size: "lg",
				children: registered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4" }), " Alert set"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "mr-2 h-4 w-4" }), " Notify me when back"] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Tell me when it's back" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [name, " is being packed in the next batch. Leave an email or mobile number and we'll send exactly one message when it returns."] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "stock-contact",
						children: "Email or mobile number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "stock-contact",
						value: contact,
						autoComplete: "email",
						onChange: (e) => setContact(e.target.value),
						onBlur: () => setTouched(true),
						"aria-invalid": touched && invalid,
						placeholder: "Enter your email or mobile number"
					}),
					touched && invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: "Enter a valid email address or a 10-digit Indian mobile number."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: saving,
							className: "w-full sm:w-auto",
							children: saving ? "Saving…" : "Notify me"
						})
					})
				]
			})]
		})]
	});
}
function ProductPage() {
	const { product } = Route.useLoaderData();
	const { add, count, setOpen: setCartOpen } = useCart();
	const navigate = useNavigate();
	useRecentlyViewed(product.slug);
	const [variantId, setVariantId] = (0, import_react.useState)(product.variants[0].id);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [activeImage, setActiveImage] = (0, import_react.useState)(0);
	const touchStartX = (0, import_react.useRef)(null);
	const touchEndX = (0, import_react.useRef)(null);
	const thumbContainerRef = (0, import_react.useRef)(null);
	const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
	const nextImage = () => {
		setActiveImage((prev) => (prev + 1) % gallery.length);
	};
	const prevImage = () => {
		setActiveImage((prev) => (prev - 1 + gallery.length) % gallery.length);
	};
	const handleTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0]?.clientX ?? null;
	};
	const handleTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0]?.clientX ?? null;
	};
	const handleTouchEnd = () => {
		if (touchStartX.current !== null && touchEndX.current !== null) {
			const diff = touchStartX.current - touchEndX.current;
			if (diff > 35) nextImage();
			else if (diff < -35) prevImage();
		}
		touchStartX.current = null;
		touchEndX.current = null;
	};
	const [pinInput, setPinInput] = (0, import_react.useState)("");
	const [pinResult, setPinResult] = (0, import_react.useState)(null);
	const [isCheckingPin, startPinTransition] = (0, import_react.useTransition)();
	const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
	const soldOut = product.inStock === false;
	const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const apply = () => {
			root.style.setProperty("--fab-offset", window.innerWidth < 1024 ? "4.5rem" : "0px");
		};
		apply();
		window.addEventListener("resize", apply);
		return () => {
			window.removeEventListener("resize", apply);
			root.style.removeProperty("--fab-offset");
		};
	}, []);
	const handleCheckPincode = (e) => {
		e.preventDefault();
		const pin = pinInput.trim();
		if (!/^\d{6}$/.test(pin)) {
			toast.error("Please enter a valid 6-digit Indian PIN code");
			return;
		}
		startPinTransition(async () => {
			try {
				const res = await lookupPincode({ data: { pin } });
				setPinResult(res);
				if (res.ok) toast.success(`Express delivery available to ${res.city}, ${res.state}!`);
				else toast.error(res.message ?? "PIN code not serviceable for express courier");
			} catch {
				toast.error("Unable to check delivery right now");
			}
		});
	};
	const handleBuyNow = () => {
		add(product.slug, variant.id, qty);
		navigate({ to: "/checkout" });
	};
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		brand: {
			"@type": "Brand",
			name: "Y.G Asafoetida"
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: product.rating,
			reviewCount: product.reviews
		},
		offers: {
			"@type": "Offer",
			price: variant.price,
			priceCurrency: "INR",
			availability: soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-32 lg:pb-12 space-y-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-muted/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page py-2.5 sm:py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-foreground shrink-0",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-3 w-3 text-muted-foreground/60 shrink-0",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "hover:text-foreground shrink-0",
								children: "Shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-3 w-3 text-muted-foreground/60 shrink-0",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "capitalize text-muted-foreground shrink-0",
								children: product.format
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-3 w-3 text-muted-foreground/60 shrink-0",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-current": "page",
								className: "truncate font-medium text-foreground min-w-0",
								children: product.name
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-4 sm:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden space-y-1.5 pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [formatLabels[product.format], " · Estd. 1932"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
								slug: product.slug,
								name: product.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl sm:text-2xl font-bold tracking-tight text-foreground",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center text-amber-500",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-amber-500 text-amber-500" : "text-border"}` }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: product.rating
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground text-[11px]",
									children: [
										"(",
										product.reviews,
										" reviews)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground/60",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-primary font-medium flex items-center gap-1 text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " FSSAI Certified"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:gap-8 lg:grid-cols-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 space-y-2.5 sm:space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onTouchStart: handleTouchStart,
							onTouchMove: handleTouchMove,
							onTouchEnd: handleTouchEnd,
							className: "surface-card group relative overflow-hidden rounded-2xl border border-border bg-white p-3 sm:p-6 flex items-center justify-center touch-pan-y select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
									src: gallery[activeImage] ?? product.image,
									alt: `${product.name} - View ${activeImage + 1}`,
									width: 800,
									height: 800,
									priority: true,
									sizes: "(min-width: 1024px) 45vw, 100vw",
									fallbackLabel: product.name,
									wrapperClassName: "aspect-square sm:aspect-4/3 max-h-[340px] sm:max-h-[460px] w-full flex items-center justify-center",
									className: "h-full w-full object-contain transition-all duration-300 group-hover:scale-103"
								}, gallery[activeImage] ?? product.image),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1.5 z-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-card/95 backdrop-blur px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-foreground uppercase border border-border/60 shadow-xs",
											children: formatLabels[product.format]
										}),
										product.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-primary-foreground uppercase shadow-xs",
											children: "Bestseller"
										}) : null,
										product.glutenFree ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-amber-500 text-slate-950 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase shadow-xs",
											children: "Gluten-Free"
										}) : null
									]
								}),
								gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-foreground/80 backdrop-blur-md text-background px-2 py-0.5 rounded-full text-[10px] font-bold shadow-xs z-10",
									children: [
										activeImage + 1,
										" / ",
										gallery.length
									]
								}) : null,
								gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.stopPropagation();
										prevImage();
									},
									"aria-label": "Previous image",
									className: "absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/95 border border-border/80 text-foreground flex items-center justify-center shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95 z-10 opacity-80 sm:opacity-0 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.stopPropagation();
										nextImage();
									},
									"aria-label": "Next image",
									className: "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/95 border border-border/80 text-foreground flex items-center justify-center shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95 z-10 opacity-80 sm:opacity-0 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
								})] }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 flex items-center justify-between pointer-events-none z-10",
									children: [gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full border border-border/70 shadow-xs pointer-events-auto",
										children: gallery.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActiveImage(i),
											"aria-label": `Go to slide ${i + 1}`,
											className: `h-1.5 rounded-full transition-all duration-300 ${activeImage === i ? "w-4 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"}`
										}, i))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-background/90 backdrop-blur px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-border text-[9px] sm:text-[10px] text-muted-foreground flex items-center gap-1 shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stone-Compounded" })]
									})]
								})
							]
						}), gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: thumbContainerRef,
							className: "flex gap-2 overflow-x-auto pb-1 scrollbar-none scroll-smooth",
							role: "group",
							"aria-label": "Product images",
							children: gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveImage(i),
								"aria-label": `View photo ${i + 1}`,
								className: `h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl border-2 p-1 bg-white transition-all ${activeImage === i ? "border-primary shadow-xs scale-102 ring-2 ring-primary/20" : "border-border/70 hover:border-primary/40 opacity-70 hover:opacity-100"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
									src: img,
									alt: "",
									wrapperClassName: "h-full w-full flex items-center justify-center",
									className: "h-full w-full object-contain"
								})
							}, img + i))
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 space-y-4 sm:space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden lg:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "eyebrow",
											children: [formatLabels[product.format], " · Estd. 1932"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
											slug: product.slug,
											name: product.name
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-1 text-3xl font-bold tracking-tight text-foreground",
										children: product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 flex items-center gap-2 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center text-amber-500",
												children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-amber-500 text-amber-500" : "text-border"}` }, i))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-foreground",
												children: product.rating
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground",
												children: [
													"(",
													product.reviews,
													" verified reviews)"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground/60",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-primary font-medium flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " FSSAI Certified"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lg:hidden text-xs text-muted-foreground leading-relaxed",
								children: product.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/80 bg-muted/20 p-3 sm:p-3.5 flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl sm:text-3xl font-bold text-foreground",
											children: formatPrice(variant.price)
										}),
										variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground line-through",
											children: formatPrice(variant.mrp)
										}) : null,
										variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-bold",
											children: [
												"Save ",
												Math.round((variant.mrp - variant.price) / variant.mrp * 100),
												"%"
											]
										}) : null
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground mt-0.5",
									children: "Inclusive of all GST · Free delivery over ₹499"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold px-2 py-1 bg-card rounded-md border border-border text-foreground",
									children: variant.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold uppercase tracking-wider text-foreground block",
									children: "Select Pack Size / Weight:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setVariantId(v.id),
										className: `flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${v.id === variantId ? "border-primary bg-primary/10 text-primary shadow-xs font-bold" : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"}`,
										children: [
											v.id === variantId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.label }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "opacity-75",
												children: ["· ", formatPrice(v.price)]
											})
										]
									}, v.id))
								})]
							}),
							soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-4 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "This batch is currently sold out. Leave your details for instant restock notice."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackInStockDialog, {
										slug: product.slug,
										name: product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
										slug: product.slug,
										name: product.name,
										variant: "full"
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5 sm:space-y-3",
								children: [
									product.stockLeft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] font-semibold text-primary flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
											"Only ",
											product.stockLeft,
											" packs remaining from this fresh Tirunelveli batch"
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityStepper, {
											qty,
											label: `Quantity of ${product.name}`,
											min: 1,
											max: 20,
											onChange: (q) => setQty(Math.max(1, Math.min(q, 20)))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											className: "h-11 sm:h-10 flex-1 font-bold gap-1.5 sm:gap-2 shadow-xs text-xs sm:text-sm",
											onClick: () => {
												add(product.slug, variant.id, qty);
												toast.success(`Added ${qty} × ${product.name} to your basket!`);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Add to Basket · ", formatPrice(variant.price * qty)] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "w-full h-10 sm:h-10 font-bold gap-1.5 shadow-xs border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
										onClick: handleBuyNow,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 fill-primary group-hover:fill-primary-foreground" }), "Instant Checkout · Buy Now"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/80 bg-card p-3.5 space-y-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-foreground flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5" }), " Culinary Characteristics"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-muted/40 p-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] text-muted-foreground/80 font-medium",
											children: "Aroma Strength"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground text-xs",
											children: product.format === "cake" ? "Intense (5/5)" : product.format === "granules" ? "Roasted Nutty (4/5)" : "Sharp Classic (4.5/5)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-muted/40 p-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[10px] text-muted-foreground/80 font-medium",
											children: "Bloom Speed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground text-xs",
											children: product.format === "granules" ? "Slow-Release" : product.format === "cake" ? "Solid Dissolve" : "Instant in Hot Ghee"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/80 bg-card p-3.5 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs font-semibold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), " Delivery & Pincode Check"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "Dispatches in 24h"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleCheckPincode,
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "text",
											maxLength: 6,
											placeholder: "Enter 6-digit Pincode",
											value: pinInput,
											onChange: (e) => setPinInput(e.target.value.replace(/\D/g, "")),
											className: "h-8 text-xs font-mono"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											size: "sm",
											variant: "outline",
											className: "h-8 text-xs shrink-0",
											disabled: isCheckingPin,
											children: isCheckingPin ? "Checking..." : "Check"
										})]
									}),
									pinResult && pinResult.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 shrink-0" }),
											"Express delivery to ",
											pinResult.city,
											", ",
											pinResult.state,
											" in 2-4 business days."
										]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium text-muted-foreground border-t border-border/60 pt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-1 rounded-lg bg-muted/40 py-1.5 px-1 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: "Free > ₹499"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-1 rounded-lg bg-muted/40 py-1.5 px-1 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: "FSSAI Certified"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-1 rounded-lg bg-muted/40 py-1.5 px-1 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: "7-Day Replace"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
								type: "single",
								collapsible: true,
								className: "mt-2 text-xs border border-border/70 rounded-xl overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "ingredients",
										className: "border-b px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5",
											children: "Ingredients & Carrier Base"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: product.ingredients
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "usage",
										className: "border-b px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5",
											children: "Grandmother's Culinary Usage Guide"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: product.usage
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "shelf",
										className: "border-b px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5",
											children: "Shelf Life & Storage Instructions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: product.shelfLife
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "shipping",
										className: "px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5",
											children: "Shipping, Packaging & Returns"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: "Dispatched from our Tirunelveli works within 24 hours. Sealed in airtight containers to preserve essential terpenes. Damaged packs are replaced free upon photo submission."
										})]
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-secondary/15 py-8 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductQuestions, { slug: product.slug })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-8 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductReviews, { product })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-muted/20 py-10 sm:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Other Formulations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-bold text-foreground",
							children: "Explore Alternative Y.G Textures"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "text-xs",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3 w-3" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product: p,
							mode: "compact"
						}, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, { currentSlug: product.slug }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "region",
				"aria-label": "Add to basket",
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-3.5 pt-2 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md lg:hidden shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] text-muted-foreground",
							children: variant.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-bold text-foreground",
							children: formatPrice(variant.price * qty)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setCartOpen(true),
							"aria-label": `Open basket, ${count} items`,
							className: "relative grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground",
								children: count
							})]
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "h-9 px-4 text-xs font-bold gap-1",
							disabled: soldOut,
							onClick: () => {
								add(product.slug, variant.id, qty);
								toast.success(`Added to basket!`);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), soldOut ? "Sold Out" : "Add to Basket"]
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { ProductPage as component };
