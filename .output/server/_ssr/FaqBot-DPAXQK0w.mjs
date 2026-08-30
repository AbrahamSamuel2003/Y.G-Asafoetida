import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { i as quickQuestions, n as answerQuestion, t as SUPPORT } from "./faq-CtCudbc5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as MessageSquare, L as Mail, r as X, v as Send, w as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FaqBot-DPAXQK0w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INTRO = {
	id: 0,
	from: "bot",
	text: "Vanakkam! I'm the Y.G helper — a basic FAQ bot built only for quick clarity, not a real agent. Ask about products, delivery, offers, cancellations or refunds.",
	followUps: quickQuestions
};
/** Rule-based FAQ assistant. No network, no model — keyword matching only. */
function FaqBot() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([INTRO]);
	const [input, setInput] = (0, import_react.useState)("");
	const listRef = (0, import_react.useRef)(null);
	const nextId = (0, import_react.useRef)(1);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		listRef.current?.scrollTo({
			top: listRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, open]);
	const ask = (text) => {
		const question = text.trim();
		if (!question) return;
		const reply = answerQuestion(question);
		setMessages((prev) => [
			...prev,
			{
				id: nextId.current++,
				from: "user",
				text: question
			},
			{
				id: nextId.current++,
				from: "bot",
				text: reply.text,
				escalate: !reply.matched,
				followUps: reply.followUps
			}
		]);
		setInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen((o) => !o),
		"aria-expanded": open,
		"aria-label": open ? "Close the FAQ helper" : "Open the FAQ helper",
		style: { bottom: "calc(1rem + var(--fab-offset, 0px))" },
		className: "fixed right-3 z-40 flex h-11 w-11 sm:h-12 sm:w-auto items-center justify-center sm:justify-start gap-2 rounded-full bg-primary p-0 sm:px-4 text-sm font-medium text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:right-6",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: open ? "Close" : "FAQ helper"
		})]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-label": "Y.G FAQ helper",
		style: { bottom: "calc(5rem + var(--fab-offset, 0px))" },
		className: "fixed inset-x-3 z-40 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lift sm:inset-x-auto sm:right-6 sm:w-96",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border bg-primary/5 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-semibold",
					children: "Y.G FAQ helper"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Rule-based answers only · built for quick clarity"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: listRef,
				className: "flex-1 space-y-4 overflow-y-auto px-4 py-4",
				children: messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: m.from === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground",
					children: m.text
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[92%] text-sm leading-relaxed text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.text }),
						m.escalate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-xl border border-border bg-primary/5 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium",
									children: "Please contact our support team — they can help properly:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-2 space-y-1.5 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "underline-offset-2 hover:underline",
													href: SUPPORT.phoneHref,
													children: SUPPORT.phone
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", SUPPORT.hours] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												className: "underline-offset-2 hover:underline",
												href: SUPPORT.whatsappHref,
												target: "_blank",
												rel: "noreferrer",
												children: ["WhatsApp ", SUPPORT.whatsapp]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "underline-offset-2 hover:underline",
												href: SUPPORT.emailHref,
												children: SUPPORT.email
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "mt-3",
									onClick: () => setOpen(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Open the support page"
									})
								})
							]
						}),
						m.followUps && m.followUps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: m.followUps.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => ask(f),
								className: "min-h-8 rounded-full border border-border px-3 text-xs transition-colors hover:border-primary hover:text-primary",
								children: f
							}, f))
						})
					]
				}) }, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex items-center gap-2 border-t border-border p-3",
				onSubmit: (e) => {
					e.preventDefault();
					ask(input);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Type your question here",
					"aria-label": "Ask the FAQ helper a question",
					className: "min-h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus-visible:border-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "icon",
					className: "h-10 w-10 shrink-0 rounded-full",
					"aria-label": "Send",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			})
		]
	})] });
}
//#endregion
export { FaqBot };
