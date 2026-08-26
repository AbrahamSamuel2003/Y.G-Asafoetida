import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { O as isRedirect, _ as useNavigate, g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Lock, L as LoaderCircle, N as MapPin, Z as Gift, gt as Check, mt as ChevronLeft, o as Truck, t as Zap, w as Pencil } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as formatPrice } from "./products-lbbj4Auw.mjs";
import { n as useCart } from "./cart-BIp114_Q.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as useOrders } from "./orders-Crv4quJh.mjs";
import { t as Input } from "./input-DYHYoj49.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Separator } from "./separator-CUvWI_2I.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-DxFv_HYm.mjs";
import { t as Textarea } from "./textarea-Du_uAGq3.mjs";
import { t as lookupPincode } from "./pincode.functions-CuEvZV_z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-m-Gw-VuH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var EXPRESS_FEE = 99;
var GIFT_FEE = 49;
var COD_FEE = 20;
var steps = [
	"Details",
	"Delivery",
	"Payment"
];
var payments = [
	{
		id: "paytm",
		label: "Paytm",
		hint: "UPI, wallet & cards via Paytm gateway"
	},
	{
		id: "upi",
		label: "UPI",
		hint: "GPay, PhonePe, BHIM"
	},
	{
		id: "card",
		label: "Card",
		hint: "Credit or debit card"
	},
	{
		id: "netbanking",
		label: "Net banking",
		hint: "All major Indian banks"
	},
	{
		id: "cod",
		label: "Cash on delivery",
		hint: `₹${COD_FEE} handling fee`
	}
];
var emptyForm = {
	email: "",
	phone: "",
	firstName: "",
	lastName: "",
	line1: "",
	city: "",
	state: "",
	pin: ""
};
function CheckoutPage() {
	const cart = useCart();
	const navigate = useNavigate();
	const { profile, addresses, orders, saveAddress, placeOrder, signIn } = useOrders();
	const [step, setStep] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [selectedAddress, setSelectedAddress] = (0, import_react.useState)("new");
	const [saveForNext, setSaveForNext] = (0, import_react.useState)(true);
	const [delivery, setDelivery] = (0, import_react.useState)("standard");
	const [gift, setGift] = (0, import_react.useState)(false);
	const [giftMessage, setGiftMessage] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [payment, setPayment] = (0, import_react.useState)("paytm");
	const [placing, setPlacing] = (0, import_react.useState)(false);
	const [promoInput, setPromoInput] = (0, import_react.useState)("");
	const [promoMsg, setPromoMsg] = (0, import_react.useState)(null);
	const [touched, setTouched] = (0, import_react.useState)({});
	const blur = (key) => () => setTouched((t) => ({
		...t,
		[key]: true
	}));
	const runLookup = useServerFn(lookupPincode);
	const [pinState, setPinState] = (0, import_react.useState)("idle");
	const [pinInfo, setPinInfo] = (0, import_react.useState)(null);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const fieldsRef = (0, import_react.useRef)(null);
	const lastPin = (0, import_react.useRef)("");
	const [prefilled, setPrefilled] = (0, import_react.useState)(false);
	if (!prefilled && (profile || addresses.length)) {
		const def = addresses.find((a) => a.isDefault) ?? addresses[0];
		setForm((f) => ({
			...f,
			email: profile?.email ?? f.email,
			phone: def?.phone ?? profile?.phone ?? f.phone,
			firstName: def?.firstName ?? f.firstName,
			lastName: def?.lastName ?? f.lastName,
			line1: def?.line1 ?? f.line1,
			city: def?.city ?? f.city,
			state: def?.state ?? f.state,
			pin: def?.pin ?? f.pin
		}));
		if (def) setSelectedAddress(def.id);
		setPrefilled(true);
	}
	const set = (key) => (e) => setForm((f) => ({
		...f,
		[key]: e.target.value
	}));
	const pickAddress = (a) => {
		setSelectedAddress(a.id);
		setEditingId(null);
		setForm((f) => ({
			...f,
			firstName: a.firstName,
			lastName: a.lastName,
			line1: a.line1,
			city: a.city,
			state: a.state,
			pin: a.pin,
			phone: a.phone
		}));
	};
	const editAddress = (a) => {
		pickAddress(a);
		setEditingId(a.id);
		requestAnimationFrame(() => fieldsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		}));
	};
	(0, import_react.useEffect)(() => {
		const pin = form.pin.trim();
		if (!/^\d{6}$/.test(pin)) {
			setPinState("idle");
			setPinInfo(null);
			lastPin.current = "";
			return;
		}
		if (lastPin.current === pin) return;
		let cancelled = false;
		setPinState("loading");
		const t = setTimeout(() => {
			runLookup({ data: { pin } }).then((res) => {
				if (cancelled) return;
				lastPin.current = pin;
				setPinInfo(res);
				setPinState(res.ok ? "ok" : "error");
				if (res.ok) setForm((f) => f.pin === pin ? {
					...f,
					city: res.city || f.city,
					state: res.state || f.state
				} : f);
			}).catch(() => {
				if (!cancelled) setPinState("error");
			});
		}, 450);
		return () => {
			cancelled = true;
			clearTimeout(t);
		};
	}, [form.pin, runLookup]);
	const applyArea = (area) => {
		setForm((f) => {
			const has = f.line1.toLowerCase().includes(area.toLowerCase());
			const base = f.line1.trim().replace(/,\s*$/, "");
			return {
				...f,
				line1: has ? f.line1 : base ? `${base}, ${area}` : area
			};
		});
	};
	const expressFee = delivery === "express" ? EXPRESS_FEE : 0;
	const giftFee = gift ? GIFT_FEE : 0;
	const codFee = payment === "cod" ? COD_FEE : 0;
	const grandTotal = cart.total + expressFee + giftFee + codFee;
	const fieldErrors = (0, import_react.useMemo)(() => {
		const e = {};
		if (!form.email.trim()) e.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address";
		const digits = form.phone.replace(/\D/g, "");
		if (!digits) e.phone = "Phone number is required";
		else if (digits.length < 10) e.phone = "Enter a 10-digit mobile number";
		if (form.firstName.trim().length < 2) e.firstName = "Enter your first name";
		if (form.line1.trim().length < 5) e.line1 = "Add house no., street and area";
		if (!form.city.trim()) e.city = "City is required";
		if (!form.state.trim()) e.state = "State is required";
		if (!/^\d{6}$/.test(form.pin)) e.pin = "Enter a 6-digit PIN code";
		return e;
	}, [form]);
	const errorFor = (key) => touched[key] ? fieldErrors[key] : void 0;
	const detailsValid = (0, import_react.useMemo)(() => /\S+@\S+\.\S+/.test(form.email) && form.phone.replace(/\D/g, "").length >= 10 && form.firstName.trim().length > 1 && form.line1.trim().length > 4 && form.city.trim().length > 1 && form.state.trim().length > 1 && /^\d{6}$/.test(form.pin), [form]);
	const lastOrder = orders[0];
	const useLastOrderDetails = () => {
		if (!lastOrder) return;
		const a = lastOrder.address;
		setSelectedAddress(a.id);
		setEditingId(null);
		setForm({
			email: lastOrder.email,
			phone: lastOrder.phone || a.phone,
			firstName: a.firstName,
			lastName: a.lastName,
			line1: a.line1,
			city: a.city,
			state: a.state,
			pin: a.pin
		});
		setTouched({});
		toast.success("Details filled from your last order");
	};
	if (cart.resolved.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[50vh] flex-col items-center justify-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold",
				children: "Your basket is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Add some hing before checking out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					children: "Shop all products"
				})
			})
		]
	});
	const submit = async () => {
		if (!detailsValid) {
			toast.error("Some delivery details are missing.");
			setStep(0);
			return;
		}
		setPlacing(true);
		try {
			const address = {
				id: selectedAddress !== "new" ? selectedAddress : `addr_${Math.random().toString(36).slice(2, 9)}`,
				label: `${form.city} address`,
				firstName: form.firstName,
				lastName: form.lastName,
				line1: form.line1,
				city: form.city,
				state: form.state,
				pin: form.pin,
				phone: form.phone,
				isDefault: addresses.length === 0
			};
			if (saveForNext) saveAddress(address);
			if (!profile) signIn({
				name: `${form.firstName} ${form.lastName}`.trim(),
				email: form.email,
				phone: form.phone
			});
			const order = await placeOrder({
				email: form.email,
				phone: form.phone,
				items: cart.resolved.map((l) => ({
					slug: l.slug,
					variantId: l.variantId,
					name: l.product.name,
					variantLabel: l.variant.label,
					image: l.product.image,
					qty: l.qty,
					price: l.variant.price
				})),
				totals: {
					subtotal: cart.subtotal,
					discount: cart.discount,
					shipping: cart.shipping + expressFee,
					giftWrap: giftFee,
					codFee,
					total: grandTotal
				},
				promoCode: cart.appliedPromo?.code ?? null,
				address,
				payment,
				delivery,
				notes,
				gift,
				giftMessage
			});
			cart.clear();
			toast.success(`Order ${order.id} placed`);
			navigate({
				to: "/order-confirmed",
				search: {
					order: order.id,
					total: order.totals.total
				}
			});
		} catch (err) {
			console.error(err);
			setPlacing(false);
			toast.error("We couldn't place your order. Please try again.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: "h-4 w-4",
					"aria-hidden": true
				}), " Continue shopping"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-3xl font-semibold sm:text-4xl",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 flex items-center gap-2 text-sm",
				"aria-label": "Checkout progress",
				children: steps.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-1 items-center gap-2",
					"aria-current": i === step ? "step" : void 0,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: i >= step,
							"aria-label": `Step ${i + 1} of ${steps.length}: ${label}${i < step ? " — completed, go back" : i === step ? " — current step" : ""}`,
							onClick: () => i < step && setStep(i),
							className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${i < step ? "border-primary bg-primary text-primary-foreground" : i === step ? "border-primary text-primary" : "border-border text-muted-foreground"}`,
							children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "h-4 w-4",
								"aria-hidden": true
							}) : i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: i === step ? "font-medium" : "text-muted-foreground",
							children: label
						}),
						i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px flex-1 bg-border sm:block" })
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-8",
					children: [
						step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Contact & delivery address"
								}),
								lastOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: useLastOrderDetails,
									className: "mt-4 flex w-full items-center gap-3 rounded-xl border border-primary/40 bg-primary/5 px-4 py-3 text-left transition-colors hover:bg-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
										className: "h-5 w-5 shrink-0 text-primary",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium",
											children: "Express fill — use my last order’s details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs text-muted-foreground",
											children: [
												lastOrder.address.firstName,
												" · ",
												lastOrder.address.city,
												" ",
												lastOrder.address.pin,
												" ·",
												" ",
												lastOrder.email
											]
										})]
									})]
								}),
								addresses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-widest text-muted-foreground uppercase",
											children: "Saved addresses"
										}),
										addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flex items-center gap-2 rounded-lg border px-4 py-3 text-sm transition-colors ${selectedAddress === a.id ? "border-primary bg-primary/5" : "border-border"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => pickAddress(a),
												"aria-pressed": selectedAddress === a.id,
												"aria-label": `Deliver to ${a.firstName} ${a.lastName}, ${a.line1}, ${a.city} ${a.pin}`,
												className: "flex-1 rounded-md text-left",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-medium",
													children: [
														a.firstName,
														" ",
														a.lastName,
														editingId === a.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-2 text-xs text-primary",
															children: "editing"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block text-xs text-muted-foreground",
													children: [
														a.line1,
														", ",
														a.city,
														", ",
														a.state,
														" ",
														a.pin,
														" · ",
														a.phone
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												"aria-label": `Edit address of ${a.firstName}`,
												onClick: () => editAddress(a),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
													className: "h-4 w-4",
													"aria-hidden": true
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only sm:not-sr-only sm:ml-1",
													children: "Edit"
												})]
											})]
										}, a.id)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setSelectedAddress("new");
												setForm((f) => ({
													...f,
													firstName: "",
													lastName: "",
													line1: "",
													city: "",
													state: "",
													pin: ""
												}));
											},
											"aria-pressed": selectedAddress === "new",
											className: `block min-h-11 w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${selectedAddress === "new" ? "border-primary bg-primary/5" : "border-border"}`,
											children: "+ Use a new address"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: fieldsRef,
									className: "mt-5 grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "email",
													children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "email",
													type: "email",
													autoComplete: "email",
													value: form.email,
													onChange: set("email"),
													onBlur: blur("email"),
													"aria-invalid": Boolean(errorFor("email")),
													"aria-describedby": errorFor("email") ? "email-error" : void 0,
													className: "min-h-11",
													placeholder: "Enter your email address"
												}),
												errorFor("email") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "email-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("email")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "phone",
													children: ["Phone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "phone",
													type: "tel",
													autoComplete: "tel",
													value: form.phone,
													onChange: set("phone"),
													onBlur: blur("phone"),
													"aria-invalid": Boolean(errorFor("phone")),
													"aria-describedby": errorFor("phone") ? "phone-error" : void 0,
													className: "min-h-11",
													placeholder: "Enter your 10-digit mobile number"
												}),
												errorFor("phone") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "phone-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("phone")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "first",
													children: ["First name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "first",
													"aria-describedby": errorFor("firstName") ? "first-error" : void 0,
													autoComplete: "given-name",
													value: form.firstName,
													onChange: set("firstName"),
													onBlur: blur("firstName"),
													"aria-invalid": Boolean(errorFor("firstName")),
													className: "min-h-11",
													placeholder: "Enter your first name"
												}),
												errorFor("firstName") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "first-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("firstName")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "last",
												children: "Last name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "last",
												autoComplete: "family-name",
												value: form.lastName,
												onChange: set("lastName"),
												className: "min-h-11",
												placeholder: "Enter your last name"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "pin",
													children: ["PIN code ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															id: "pin",
															autoComplete: "postal-code",
															value: form.pin,
															onChange: (e) => setForm((f) => ({
																...f,
																pin: e.target.value.replace(/\D/g, "").slice(0, 6)
															})),
															onBlur: blur("pin"),
															"aria-invalid": Boolean(errorFor("pin")),
															inputMode: "numeric",
															maxLength: 6,
															className: "min-h-11 pr-10",
															placeholder: "Enter your 6-digit PIN code"
														}),
														pinState === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
															className: "absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground",
															"aria-hidden": true
														}),
														pinState === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
															className: "absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-primary",
															"aria-hidden": true
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "sr-only",
													role: "status",
													"aria-live": "polite",
													children: pinState === "loading" ? "Looking up your PIN code" : pinState === "ok" && pinInfo ? `PIN matched ${pinInfo.district}, ${pinInfo.state}. City and state auto-filled.` : pinState === "error" ? "We couldn't look up that PIN code." : ""
												}),
												pinState === "ok" && pinInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "flex items-center gap-1.5 text-xs text-muted-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
																className: "h-3.5 w-3.5 text-primary",
																"aria-hidden": true
															}),
															pinInfo.district,
															", ",
															pinInfo.state,
															" — auto-filled"
														]
													}), pinInfo.areas.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-2",
														role: "group",
														"aria-label": "Pick your area to fill the address",
														children: pinInfo.areas.slice(0, 8).map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => applyArea(area),
															"aria-label": `Use area ${area}`,
															className: "min-h-11 rounded-full border border-border px-3 text-xs transition-colors hover:border-primary hover:bg-primary/5",
															children: area
														}, area))
													})]
												}),
												errorFor("pin") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "pin-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("pin")
												}),
												pinState === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													role: "alert",
													className: "text-xs text-destructive",
													children: pinInfo?.message ?? "Couldn't look up that PIN — please fill city and state manually."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "address",
													children: ["Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "address",
													"aria-describedby": errorFor("line1") ? "address-error" : void 0,
													autoComplete: "address-line1",
													value: form.line1,
													onChange: set("line1"),
													onBlur: blur("line1"),
													"aria-invalid": Boolean(errorFor("line1")),
													className: "min-h-11",
													placeholder: "Enter house no., street and area"
												}),
												errorFor("line1") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "address-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("line1")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "city",
													children: ["City ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "city",
													"aria-describedby": errorFor("city") ? "city-error" : void 0,
													autoComplete: "address-level2",
													value: form.city,
													onChange: set("city"),
													onBlur: blur("city"),
													"aria-invalid": Boolean(errorFor("city")),
													className: "min-h-11",
													placeholder: "Enter your city"
												}),
												errorFor("city") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "city-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("city")
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													htmlFor: "state",
													children: ["State ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													id: "state",
													"aria-describedby": errorFor("state") ? "state-error" : void 0,
													autoComplete: "address-level1",
													value: form.state,
													onChange: set("state"),
													onBlur: blur("state"),
													"aria-invalid": Boolean(errorFor("state")),
													className: "min-h-11",
													placeholder: "Enter your state"
												}),
												errorFor("state") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													id: "state-error",
													role: "alert",
													className: "text-xs text-destructive",
													children: errorFor("state")
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-5 flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: saveForNext,
										onCheckedChange: (v) => setSaveForNext(Boolean(v))
									}), "Save this address for faster checkout next time"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-6 w-full sm:w-auto",
									size: "lg",
									onClick: () => {
										if (detailsValid) {
											setStep(1);
											return;
										}
										setTouched({
											email: true,
											phone: true,
											firstName: true,
											line1: true,
											city: true,
											state: true,
											pin: true
										});
										toast.error("Please complete the highlighted fields.");
										fieldsRef.current?.scrollIntoView({
											behavior: "smooth",
											block: "start"
										});
									},
									children: "Continue to delivery"
								}),
								!detailsValid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: "Fill in email, phone, name, address and a 6-digit PIN to continue."
								})
							]
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Delivery speed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									"aria-label": "Delivery speed",
									value: delivery,
									onValueChange: (v) => setDelivery(v),
									className: "mt-4 space-y-3",
									children: [{
										id: "standard",
										icon: Truck,
										label: "Standard",
										hint: "2–6 working days",
										fee: cart.shipping
									}, {
										id: "express",
										icon: Zap,
										label: "Express",
										hint: "1–2 working days",
										fee: EXPRESS_FEE
									}].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: opt.id,
										className: `flex min-h-16 cursor-pointer items-center gap-3 rounded-lg border px-4 transition-colors ${delivery === opt.id ? "border-primary bg-primary/5" : "border-border"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												value: opt.id,
												id: opt.id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(opt.icon, {
												className: "h-5 w-5 text-primary",
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm font-medium",
													children: opt.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-muted-foreground",
													children: opt.hint
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium",
												children: opt.fee === 0 ? "Free" : formatPrice(opt.fee)
											})
										]
									}, opt.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Gifting & notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-4 flex items-start gap-3 rounded-lg border border-border px-4 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: gift,
										onCheckedChange: (v) => setGift(Boolean(v)),
										className: "mt-0.5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {
												className: "h-4 w-4 text-primary",
												"aria-hidden": true
											}), " Heritage gift wrap"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-xs text-muted-foreground",
											children: ["Khadi wrap, wax seal and a handwritten note — ", formatPrice(GIFT_FEE)]
										})]
									})]
								}),
								gift && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: giftMessage,
									onChange: (e) => setGiftMessage(e.target.value),
									maxLength: 200,
									placeholder: "Write your gift message (optional)",
									className: "mt-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "notes",
										children: "Delivery instructions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "notes",
										value: notes,
										onChange: (e) => setNotes(e.target.value),
										maxLength: 300,
										placeholder: "Add landmark, preferred time or gate details (optional)"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "lg",
										onClick: () => setStep(0),
										children: "Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										className: "flex-1 sm:flex-none",
										onClick: () => setStep(2),
										children: "Continue to payment"
									})]
								})
							]
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									"aria-label": "Payment method",
									value: payment,
									onValueChange: setPayment,
									className: "mt-4 space-y-3",
									children: payments.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: opt.id,
										className: `flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border px-4 transition-colors ${payment === opt.id ? "border-primary bg-primary/5" : "border-border"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
											value: opt.id,
											id: opt.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-medium",
												children: opt.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-muted-foreground",
												children: opt.hint
											})]
										})]
									}, opt.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
										className: "h-3.5 w-3.5",
										"aria-hidden": true
									}), " Payments are collected via Paytm. The live gateway connects at launch — this checkout records your order without charging you."]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold",
									children: "Review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "shrink-0 text-muted-foreground",
												children: "Ship to"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "min-w-0 sm:text-right",
												children: [
													form.firstName,
													" ",
													form.lastName,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "block text-xs text-muted-foreground",
														children: [
															form.line1,
															", ",
															form.city,
															", ",
															form.state,
															" ",
															form.pin
														]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "shrink-0 text-muted-foreground",
												children: "Contact"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "min-w-0 break-words sm:text-right",
												children: [form.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-muted-foreground",
													children: form.phone
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Delivery"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: delivery === "express" ? "Express, 1–2 days" : "Standard, 2–6 days" })]
										}),
										gift && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Gift wrap"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Yes" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "lg",
										onClick: () => setStep(1),
										children: "Back"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										className: "flex-1",
										disabled: placing,
										onClick: submit,
										children: placing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											className: "mr-2 h-4 w-4 animate-spin",
											"aria-hidden": true
										}), " Placing order…"] }) : `Pay ${formatPrice(grandTotal)}`
									})]
								})
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "min-w-0 lg:sticky lg:top-28 lg:self-start",
					"aria-labelledby": "order-summary-heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "order-summary-heading",
								className: "text-lg font-semibold",
								children: "Order summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-4",
								children: cart.resolved.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: line.product.image,
											alt: line.product.name,
											width: 1e3,
											height: 1e3,
											wrapperClassName: "h-16 w-16 shrink-0 rounded-lg border border-border",
											className: "h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-medium",
												children: line.product.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													line.variant.label,
													" × ",
													line.qty
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: formatPrice(line.lineTotal)
										})
									]
								}, `${line.slug}-${line.variantId}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "promo",
										className: "text-sm",
										children: "Promo code"
									}),
									cart.appliedPromo && !cart.promoIsAutomatic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-lg border border-primary/40 bg-primary/5 px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: cart.appliedPromo.code
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												cart.removePromo();
												setPromoInput("");
												setPromoMsg(null);
											},
											"aria-label": `Remove promo code ${cart.appliedPromo.code}`,
											className: "min-h-11 px-2 text-xs text-muted-foreground underline",
											children: "Remove"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "promo",
											value: promoInput,
											maxLength: 24,
											onChange: (e) => setPromoInput(e.target.value.toUpperCase()),
											placeholder: "Enter your promo code",
											className: "min-h-11"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											className: "min-h-11",
											onClick: () => {
												const res = cart.applyPromo(promoInput);
												setPromoMsg(res.ok ? {
													ok: true,
													text: `${res.promo.label} applied.`
												} : {
													ok: false,
													text: res.reason
												});
											},
											children: "Apply"
										})]
									}),
									promoMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										role: "status",
										"aria-live": "polite",
										className: `text-xs ${promoMsg.ok ? "text-primary" : "text-destructive"}`,
										children: promoMsg.text
									}),
									cart.promoIsAutomatic && cart.appliedPromo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-primary",
										children: ["Auto-applied: ", cart.appliedPromo.description]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(cart.subtotal) })]
									}),
									cart.appliedPromo && cart.totalSavings > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 rounded-lg bg-primary/5 px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between font-medium text-primary",
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
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Shipping"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cart.shipping === 0 ? "Free" : formatPrice(cart.shipping) })]
									}),
									expressFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Express delivery"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(expressFee) })]
									}),
									giftFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Gift wrap"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(giftFee) })]
									}),
									codFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "COD handling"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(codFee) })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-base font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(grandTotal) })]
							})
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { CheckoutPage as component };
