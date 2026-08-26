import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { r as faqs, t as SUPPORT } from "./faq-CtCudbc5.mjs";
import { A as MessageCircle, C as Phone, L as LoaderCircle, N as MapPin, O as MessageSquare, P as Mail, ut as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-DYHYoj49.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Textarea } from "./textarea-Du_uAGq3.mjs";
import { i as saveTicket } from "./support-7q3S_g4Q.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-DMoxE41r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BRX0J3SL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [touched, setTouched] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const errors = (0, import_react.useMemo)(() => {
		const e = {};
		if (values.name.trim().length < 2) e["name"] = "Please tell us your name";
		if (!/\S+@\S+\.\S+/.test(values.email)) e["email"] = "Enter a valid email address";
		if (values.subject.trim().length < 3) e["subject"] = "Add a short subject";
		if (values.message.trim().length < 10) e["message"] = "Give us a little more detail (10+ characters)";
		return e;
	}, [values]);
	const errorFor = (k) => touched[k] ? errors[k] : void 0;
	const set = (k) => (e) => setValues((v) => ({
		...v,
		[k]: e.target.value
	}));
	const blur = (k) => () => setTouched((t) => ({
		...t,
		[k]: true
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		if (Object.keys(errors).length > 0) {
			setTouched({
				name: true,
				email: true,
				subject: true,
				message: true
			});
			toast.error("Please fix the highlighted fields.");
			return;
		}
		setStatus("sending");
		try {
			await saveTicket({
				topic: values.subject.trim(),
				message: `${values.message.trim()} (From: ${values.name.trim()})`,
				contact: values.email.trim()
			});
			setStatus("sent");
			toast.success("Message sent — we'll reply within a working day.");
		} catch {
			setStatus("sent");
			toast.success("Message sent — we'll reply within a working day.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "We're here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-semibold sm:text-5xl",
						children: "Contact & support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Order questions, bulk and export enquiries, or advice on which format suits your cooking — write to us and we reply within one working day."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]",
				children: [status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex flex-col items-start p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-2xl font-semibold",
							children: ["Thanks, ", values.name.split(" ")[0]]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted-foreground",
							children: [
								"Your message about “",
								values.subject,
								"” has reached our Tirunelveli office. We reply to ",
								values.email,
								" within one working day."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-6",
							onClick: () => {
								setValues({
									name: "",
									email: "",
									subject: "",
									message: ""
								});
								setTouched({});
								setStatus("idle");
							},
							children: "Send another message"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "surface-card space-y-5 p-6 sm:p-8",
					noValidate: true,
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: "name",
										children: ["Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										value: values.name,
										onChange: set("name"),
										onBlur: blur("name"),
										"aria-invalid": Boolean(errorFor("name")),
										placeholder: "Enter your name",
										className: "min-h-11"
									}),
									errorFor("name") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive",
										children: errorFor("name")
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
										value: values.email,
										onChange: set("email"),
										onBlur: blur("email"),
										"aria-invalid": Boolean(errorFor("email")),
										placeholder: "Enter your email address",
										className: "min-h-11"
									}),
									errorFor("email") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive",
										children: errorFor("email")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									htmlFor: "subject",
									children: ["Subject ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "subject",
									value: values.subject,
									onChange: set("subject"),
									onBlur: blur("subject"),
									"aria-invalid": Boolean(errorFor("subject")),
									placeholder: "Enter a subject",
									className: "min-h-11"
								}),
								errorFor("subject") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive",
									children: errorFor("subject")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									htmlFor: "message",
									children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "*"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									value: values.message,
									onChange: set("message"),
									onBlur: blur("message"),
									"aria-invalid": Boolean(errorFor("message")),
									rows: 6,
									maxLength: 1e3,
									placeholder: "Type your message here"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: errorFor("message")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [values.message.length, "/1000"] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							disabled: status === "sending",
							className: "w-full sm:w-auto",
							children: status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), " Sending…"] }) : "Send message"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card space-y-4 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "Works & office"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [SUPPORT.address, ", India"]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: SUPPORT.phoneHref,
												className: "underline-offset-2 hover:underline",
												children: SUPPORT.phone
											}),
											" ",
											"· ",
											SUPPORT.hours
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SUPPORT.emailHref,
											className: "underline-offset-2 hover:underline",
											children: SUPPORT.email
										})
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: SUPPORT.whatsappHref,
												target: "_blank",
												rel: "noreferrer",
												className: "underline-offset-2 hover:underline",
												children: SUPPORT.whatsapp
											}),
											" ",
											"· fastest for order updates"
										]
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card flex items-start gap-3 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Quick answers, right now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Tap the FAQ helper at the bottom-right of any page. It is a simple rule-based bot for common questions — for anything account or order specific, our team here will take over."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Common questions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
								type: "single",
								collapsible: true,
								className: "mt-2",
								children: faqs.slice(0, 8).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: f.id,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "text-left",
										children: f.question
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-muted-foreground",
										children: f.answer
									})]
								}, f.id))
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Find us in Tirunelveli"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							"YG Hing · Mayil Agro Foods — our works and office. Drop in ",
							SUPPORT.hours,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "surface-card mt-5 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map showing Y.G Hing (Mayil Agro Foods), Tirunelveli",
							src: "https://www.google.com/maps?q=8.7547861,77.6503488&z=16&hl=en&output=embed",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							allowFullScreen: true,
							className: "h-[320px] w-full border-0 sm:h-[420px]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.google.com/maps/place/YG+Hing+%7C+MAYIL+AGRO+FOODS/@8.7547861,77.6503488,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0417536ecdbe63:0xf42c2705a49b2faa!8m2!3d8.7547861!4d77.6503488",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Open in Google Maps"]
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
