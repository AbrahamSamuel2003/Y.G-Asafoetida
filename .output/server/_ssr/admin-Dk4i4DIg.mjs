import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Plus, D as Package, G as LayoutDashboard, H as LifeBuoy, K as Layers, R as LogOut, S as RefreshCw, St as Bell, _ as ShieldCheck, c as TriangleAlert, d as Tag, f as Star, ft as CircleQuestionMark, g as ShoppingBag, it as Eye, l as TrendingUp, m as Sparkles, mt as CircleAlert, o as Upload, ot as DollarSign, p as SquarePen, q as KeyRound, r as X, u as Trash2, y as Search, yt as Check, z as Lock } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CiapfthD.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B5HttDjb.mjs";
import { n as adminNotifyStockAlertServerFn, t as adminListStockAlertsServerFn } from "./alerts-BePMvpvX.mjs";
import { n as formatPrice } from "./products--El95C0C.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as adminUpdateOrderStatusServerFn, i as adminProcessResolutionServerFn, n as adminDeleteOrderServerFn, r as adminListOrdersServerFn, t as adminClearAllOrdersServerFn } from "./orders-j_KE63Bh.mjs";
import { t as Input } from "./input-DYHYoj49.mjs";
import { t as Label } from "./label-B4PTMSG2.mjs";
import { t as Separator } from "./separator-CUvWI_2I.mjs";
import { t as Textarea } from "./textarea-Du_uAGq3.mjs";
import { n as adminUpdateTicketServerFn, t as adminListTicketsServerFn } from "./tickets-CQcQaZp6.mjs";
import { t as PRESET_PRODUCT_IMAGES } from "./admin-bs25vXF_.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { a as adminModerateReviewServerFn, i as adminListReviewsServerFn, n as adminDeleteQuestionServerFn, r as adminListQuestionsServerFn, t as adminAnswerQuestionServerFn } from "./questions-nZMiLJ94.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Dk4i4DIg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
async function compressImage(file, options = {}) {
	const { maxWidth = 1600, maxHeight = 1600, quality = .88, mimeType = "image/webp" } = options;
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => {
				let { width, height } = img;
				if (width > maxWidth || height > maxHeight) {
					const ratio = Math.min(maxWidth / width, maxHeight / height);
					width = Math.round(width * ratio);
					height = Math.round(height * ratio);
				}
				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				const ctx = canvas.getContext("2d", { alpha: mimeType !== "image/jpeg" });
				if (!ctx) {
					reject(/* @__PURE__ */ new Error("Unable to create 2D canvas context"));
					return;
				}
				ctx.imageSmoothingEnabled = true;
				ctx.imageSmoothingQuality = "high";
				ctx.drawImage(img, 0, 0, width, height);
				canvas.toBlob((blob) => {
					if (!blob) {
						reject(/* @__PURE__ */ new Error("Image compression failed to generate Blob"));
						return;
					}
					const dataUrl = canvas.toDataURL(mimeType, quality);
					const originalSize = file.size;
					const compressedSize = blob.size;
					const compressionRatio = Math.round((1 - compressedSize / originalSize) * 100);
					resolve({
						dataUrl,
						blob,
						name: file.name.replace(/\.[^/.]+$/, "") + (mimeType === "image/webp" ? ".webp" : ".jpg"),
						originalSize,
						compressedSize,
						width,
						height,
						compressionRatio: Math.max(0, compressionRatio)
					});
				}, mimeType, quality);
			};
			img.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load image "${file.name}"`));
			img.src = e.target?.result;
		};
		reader.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to read file "${file.name}"`));
		reader.readAsDataURL(file);
	});
}
async function compressMultipleImages(files, options = {}) {
	const fileArray = Array.from(files);
	const results = [];
	for (const file of fileArray) {
		if (!file.type.startsWith("image/")) continue;
		try {
			const res = await compressImage(file, options);
			results.push(res);
		} catch (err) {
			console.error(`Failed to compress image ${file.name}:`, err);
		}
	}
	return results;
}
var adminGetDashboardStatsServerFn = createServerFn({ method: "GET" }).handler(createSsrRpc("4bb1dab43d898ad41937fc37855b3500ee9698ac112d0a86e4517e4566bb288d"));
var getProductsServerFn = createServerFn({ method: "GET" }).handler(createSsrRpc("6fd6047b094bad303fa9c409bc49cf6391980ab22bf5b5769556e54b026e49d9"));
createServerFn({ method: "GET" }).validator((data) => {
	return { slug: String(data?.slug ?? "").trim() };
}).handler(createSsrRpc("a98a3d54b8ba3103f1369966b7a6c5cd960326e04f9c8e356b865373cd860caf"));
var adminSaveProductServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("99ef867f772080863ab078c765e001f5ecb3be014eecc25afb3961fe20dd12d4"));
var adminToggleProductStockServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("034e15d47dd84df1260f2d3cf660fdb71ded4ebfcf1615ab2e8940f6099ed831"));
var adminDeleteProductServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("6a3a3373e545a672fb65add9b5c5276c339bb9fca2cc32f2efd52dca0f3f4a4a"));
createServerFn({ method: "GET" }).handler(createSsrRpc("662d6f1c2bd68d6d29d35dcb66e4a46553ad3d21389a0de95d1ee49746475525"));
createServerFn({ method: "GET" }).validator((data) => ({
	code: String(data?.code ?? "").trim().toUpperCase(),
	subtotal: Number(data?.subtotal ?? 0)
})).handler(createSsrRpc("f37bd6b19a3137ab3020ad613d20722b519d30360e8247fa9a08c56427c7ab36"));
var adminListPromosServerFn = createServerFn({ method: "GET" }).handler(createSsrRpc("4335de7d3123ebb8f481c1bb2656f1308f649d1323a6b1623293912011661f40"));
var adminSavePromoServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("2a42d7e7bed08cd5266ea2381ccb0759769ab26a7dd72308313256fd3f03078f"));
var adminTogglePromoServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("a4bbf68444121a1d981eaffe7bd2b4341fd088f6a8916ebb724863c472b640df"));
var adminDeletePromoServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("faccef61049d8308c82b4d9551a0a2cc4ed1609d9ca39e1bc82af6dae7f0e7bc"));
function getDisplayImageUrl(keyOrUrl) {
	if (!keyOrUrl) return "/products/100g-gold-asafoetida-powder/img-1.jpg";
	if (keyOrUrl.startsWith("data:") || keyOrUrl.startsWith("http://") || keyOrUrl.startsWith("https://") || keyOrUrl.startsWith("/")) return keyOrUrl;
	const match = PRESET_PRODUCT_IMAGES.find((p) => p.key === keyOrUrl);
	return match ? match.url : "/products/100g-gold-asafoetida-powder/img-1.jpg";
}
function AdminDashboardPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [stats, setStats] = (0, import_react.useState)(null);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [products, setProducts] = (0, import_react.useState)([]);
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const [tickets, setTickets] = (0, import_react.useState)([]);
	const [promos, setPromos] = (0, import_react.useState)([]);
	const [alerts, setAlerts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isPending, startTransition] = (0, import_react.useTransition)();
	const [orderSearch, setOrderSearch] = (0, import_react.useState)("");
	const [orderStatusFilter, setOrderStatusFilter] = (0, import_react.useState)("all");
	const [selectedOrder, setSelectedOrder] = (0, import_react.useState)(null);
	const [productDialogOpen, setProductDialogOpen] = (0, import_react.useState)(false);
	const [editingProduct, setEditingProduct] = (0, import_react.useState)(null);
	const [newGalleryUrl, setNewGalleryUrl] = (0, import_react.useState)("");
	const [answeringQuestion, setAnsweringQuestion] = (0, import_react.useState)(null);
	const [answerText, setAnswerText] = (0, import_react.useState)("");
	const [respondingTicket, setRespondingTicket] = (0, import_react.useState)(null);
	const [ticketReplyText, setTicketReplyText] = (0, import_react.useState)("");
	const [ticketStatusVal, setTicketStatusVal] = (0, import_react.useState)("open");
	const [promoDialogOpen, setPromoDialogOpen] = (0, import_react.useState)(false);
	const [editingPromo, setEditingPromo] = (0, import_react.useState)({
		code: "",
		label: "",
		description: "",
		percentOff: "",
		amountOff: "",
		minSubtotal: "",
		freeShipping: false,
		automatic: false,
		isActive: true
	});
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") return sessionStorage.getItem("yg_admin_auth") === "true";
		return false;
	});
	const [loginUsername, setLoginUsername] = (0, import_react.useState)("");
	const [loginPassword, setLoginPassword] = (0, import_react.useState)("");
	const [loginError, setLoginError] = (0, import_react.useState)("");
	const handleLogin = (e) => {
		e.preventDefault();
		setLoginError("");
		if (loginUsername.trim() === "admin" && loginPassword === "admin123") {
			if (typeof window !== "undefined") sessionStorage.setItem("yg_admin_auth", "true");
			setIsAuthenticated(true);
			toast.success("Welcome, Administrator!");
		} else {
			setLoginError("Invalid username or password. Please try again.");
			toast.error("Invalid administrator credentials");
		}
	};
	const handleLogout = () => {
		if (typeof window !== "undefined") sessionStorage.removeItem("yg_admin_auth");
		setIsAuthenticated(false);
		setLoginPassword("");
		setLoginError("");
		toast.info("Logged out from Admin Panel");
	};
	const loadAllData = async () => {
		setLoading(true);
		try {
			const [dashStats, orderList, prodList, revList, qList, ticketList, promoList, alertList] = await Promise.all([
				adminGetDashboardStatsServerFn(),
				adminListOrdersServerFn({ data: {} }),
				getProductsServerFn(),
				adminListReviewsServerFn({ data: {} }),
				adminListQuestionsServerFn({ data: {} }),
				adminListTicketsServerFn({ data: {} }),
				adminListPromosServerFn(),
				adminListStockAlertsServerFn()
			]);
			setStats(dashStats);
			setOrders(orderList);
			setProducts(prodList);
			setReviews(revList);
			setQuestions(qList);
			setTickets(ticketList);
			setPromos(promoList);
			setAlerts(alertList);
		} catch (err) {
			console.error("Admin data fetch failed:", err);
			toast.error("Failed to fetch fresh data from database");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isAuthenticated) loadAllData();
	}, [isAuthenticated]);
	const handleUpdateOrderStatus = async (id, newStatus) => {
		try {
			await adminUpdateOrderStatusServerFn({ data: {
				id,
				status: newStatus
			} });
			toast.success(`Order ${id} status updated to ${newStatus}`);
			setOrders((prev) => prev.map((o) => o.id === id ? {
				...o,
				status: newStatus
			} : o));
			if (selectedOrder && selectedOrder.id === id) setSelectedOrder((prev) => prev ? {
				...prev,
				status: newStatus
			} : null);
		} catch (err) {
			toast.error("Failed to update status");
		}
	};
	const handleProcessResolution = async (id, action, note) => {
		try {
			await adminProcessResolutionServerFn({ data: {
				id,
				action,
				note
			} });
			toast.success(`Resolution ${action === "approve" ? "approved" : "rejected"}`);
			loadAllData();
			setSelectedOrder(null);
		} catch (err) {
			toast.error("Failed to process resolution");
		}
	};
	const handleDeleteOrder = async (id) => {
		if (!window.confirm(`Delete order ${id}?`)) return;
		try {
			await adminDeleteOrderServerFn({ data: { id } });
			toast.success(`Order ${id} deleted`);
			setOrders((prev) => prev.filter((o) => o.id !== id));
			if (selectedOrder && selectedOrder.id === id) setSelectedOrder(null);
			loadAllData();
		} catch {
			toast.error("Failed to delete order");
		}
	};
	const handleClearAllOrders = async () => {
		if (!window.confirm("Are you sure you want to clear all orders? This will delete all order history.")) return;
		try {
			await adminClearAllOrdersServerFn();
			toast.success("All test orders cleared");
			setOrders([]);
			setSelectedOrder(null);
			loadAllData();
		} catch {
			toast.error("Failed to clear orders");
		}
	};
	const handleOpenNewProduct = () => {
		setEditingProduct({
			slug: "",
			name: "",
			tagline: "",
			format: "powder",
			glutenFree: false,
			bestseller: false,
			image: "powder",
			gallery: ["powder", "hero"],
			description: "",
			ingredients: "",
			usage: "",
			shelfLife: "18 months from packing",
			inStock: true,
			stockLeft: null,
			variants: [{
				id: "50g",
				label: "50 g",
				price: 150,
				mrp: 180,
				stock: 100
			}]
		});
		setProductDialogOpen(true);
	};
	const handleEditProduct = (p) => {
		let gallery = [];
		try {
			gallery = JSON.parse(p.gallery);
		} catch {
			gallery = [p.image];
		}
		setEditingProduct({
			slug: p.slug,
			name: p.name,
			tagline: p.tagline,
			format: p.format,
			glutenFree: Boolean(p.gluten_free),
			bestseller: Boolean(p.bestseller),
			image: p.image,
			gallery,
			description: p.description,
			ingredients: p.ingredients,
			usage: p.usage,
			shelfLife: p.shelf_life,
			inStock: Boolean(p.in_stock),
			stockLeft: p.stock_left,
			variants: (p.variants || []).map((v) => ({
				id: v.id,
				label: v.label,
				price: v.price,
				mrp: v.mrp,
				stock: v.stock
			}))
		});
		setProductDialogOpen(true);
	};
	const handleImageFileUpload = async (e, isGallery = false) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const toastId = toast.loading("Compressing and optimizing image(s)...");
		try {
			if (!isGallery) {
				const file = files[0];
				if (!file) return;
				const res = await compressImage(file, {
					maxWidth: 1600,
					maxHeight: 1600,
					quality: .88,
					mimeType: "image/webp"
				});
				setEditingProduct((prev) => prev ? {
					...prev,
					image: res.dataUrl
				} : null);
				toast.success(`Cover image compressed: ${(res.originalSize / 1024).toFixed(0)}KB → ${(res.compressedSize / 1024).toFixed(0)}KB (-${res.compressionRatio}%)`, { id: toastId });
			} else {
				const results = await compressMultipleImages(files, {
					maxWidth: 1600,
					maxHeight: 1600,
					quality: .88,
					mimeType: "image/webp"
				});
				const newUrls = results.map((r) => r.dataUrl);
				setEditingProduct((prev) => {
					if (!prev) return null;
					const current = Array.isArray(prev.gallery) ? prev.gallery : [];
					return {
						...prev,
						gallery: [...current, ...newUrls]
					};
				});
				const savedKb = ((results.reduce((acc, r) => acc + r.originalSize, 0) - results.reduce((acc, r) => acc + r.compressedSize, 0)) / 1024).toFixed(0);
				toast.success(`${results.length} gallery image(s) compressed & added (saved ${savedKb}KB)`, { id: toastId });
			}
		} catch (err) {
			console.error("Image upload compression failed:", err);
			toast.error("Failed to compress image", { id: toastId });
		} finally {
			e.target.value = "";
		}
	};
	const handleSaveProduct = async () => {
		if (!editingProduct || !editingProduct.slug || !editingProduct.name) {
			toast.error("Slug and Name are required");
			return;
		}
		try {
			await adminSaveProductServerFn({ data: editingProduct });
			toast.success(`Product ${editingProduct.name} saved`);
			setProductDialogOpen(false);
			loadAllData();
		} catch (err) {
			toast.error("Failed to save product");
		}
	};
	const handleToggleStock = async (slug, currentInStock) => {
		try {
			await adminToggleProductStockServerFn({ data: {
				slug,
				inStock: !currentInStock,
				stockLeft: !currentInStock ? 50 : 0
			} });
			toast.success(`Stock status updated for ${slug}`);
			setProducts((prev) => prev.map((p) => p.slug === slug ? {
				...p,
				in_stock: currentInStock ? 0 : 1
			} : p));
		} catch (err) {
			toast.error("Failed to toggle stock");
		}
	};
	const handleDeleteProduct = async (slug) => {
		if (!confirm(`Are you sure you want to delete ${slug}?`)) return;
		try {
			await adminDeleteProductServerFn({ data: { slug } });
			toast.success("Product deleted");
			setProducts((prev) => prev.filter((p) => p.slug !== slug));
		} catch (err) {
			toast.error("Failed to delete product");
		}
	};
	const handleModerateReview = async (id, action) => {
		try {
			await adminModerateReviewServerFn({ data: {
				id,
				action
			} });
			toast.success(`Review ${action}ed`);
			if (action === "delete") setReviews((prev) => prev.filter((r) => r.id !== id));
			else {
				const newStatus = action === "publish" ? "published" : "rejected";
				setReviews((prev) => prev.map((r) => r.id === id ? {
					...r,
					status: newStatus
				} : r));
			}
		} catch (err) {
			toast.error("Failed to moderate review");
		}
	};
	const handleAnswerQuestion = async () => {
		if (!answeringQuestion || !answerText.trim()) return;
		try {
			await adminAnswerQuestionServerFn({ data: {
				id: answeringQuestion.id,
				answer: answerText.trim(),
				answeredBy: "Y.G team"
			} });
			toast.success("Answer published to product page!");
			setQuestions((prev) => prev.map((q) => q.id === answeringQuestion.id ? {
				...q,
				answer: answerText.trim(),
				answered_by: "Y.G team",
				status: "published"
			} : q));
			setAnsweringQuestion(null);
			setAnswerText("");
		} catch (err) {
			toast.error("Failed to submit answer");
		}
	};
	const handleDeleteQuestion = async (id) => {
		if (!confirm("Delete this question?")) return;
		try {
			await adminDeleteQuestionServerFn({ data: { id } });
			toast.success("Question deleted");
			setQuestions((prev) => prev.filter((q) => q.id !== id));
		} catch (err) {
			toast.error("Failed to delete question");
		}
	};
	const handleSaveTicketReply = async () => {
		if (!respondingTicket) return;
		try {
			await adminUpdateTicketServerFn({ data: {
				id: respondingTicket.id,
				status: ticketStatusVal,
				reply: ticketReplyText.trim() || void 0
			} });
			toast.success(`Ticket ${respondingTicket.id} updated`);
			setTickets((prev) => prev.map((t) => t.id === respondingTicket.id ? {
				...t,
				status: ticketStatusVal,
				reply: ticketReplyText.trim() || null
			} : t));
			setRespondingTicket(null);
		} catch (err) {
			toast.error("Failed to update ticket");
		}
	};
	const handleSavePromo = async () => {
		if (!editingPromo.code || !editingPromo.label) {
			toast.error("Code and label are required");
			return;
		}
		try {
			await adminSavePromoServerFn({ data: {
				code: editingPromo.code,
				label: editingPromo.label,
				description: editingPromo.description,
				percentOff: editingPromo.percentOff ? Number(editingPromo.percentOff) : null,
				amountOff: editingPromo.amountOff ? Number(editingPromo.amountOff) : null,
				minSubtotal: editingPromo.minSubtotal ? Number(editingPromo.minSubtotal) : null,
				freeShipping: editingPromo.freeShipping,
				automatic: editingPromo.automatic,
				isActive: editingPromo.isActive
			} });
			toast.success(`Promo code ${editingPromo.code} saved`);
			setPromoDialogOpen(false);
			loadAllData();
		} catch (err) {
			toast.error("Failed to save promo");
		}
	};
	const handleTogglePromo = async (code, currentActive) => {
		try {
			await adminTogglePromoServerFn({ data: {
				code,
				isActive: !currentActive
			} });
			toast.success(`Promo ${code} ${!currentActive ? "activated" : "deactivated"}`);
			setPromos((prev) => prev.map((pr) => pr.code === code ? {
				...pr,
				is_active: currentActive ? 0 : 1
			} : pr));
		} catch (err) {
			toast.error("Failed to toggle promo");
		}
	};
	const handleDeletePromo = async (code) => {
		if (!confirm(`Delete promo code ${code}?`)) return;
		try {
			await adminDeletePromoServerFn({ data: { code } });
			toast.success("Promo deleted");
			setPromos((prev) => prev.filter((pr) => pr.code !== code));
		} catch (err) {
			toast.error("Failed to delete promo");
		}
	};
	const handleNotifyAlert = async (id) => {
		try {
			await adminNotifyStockAlertServerFn({ data: { id } });
			toast.success("Marked as customer notified!");
			setAlerts((prev) => prev.map((a) => a.id === id ? {
				...a,
				notified: 1,
				notified_at: Date.now()
			} : a));
		} catch (err) {
			toast.error("Failed to update alert");
		}
	};
	const filteredOrders = orders.filter((o) => {
		const matchesStatus = orderStatusFilter === "all" || o.status === orderStatusFilter;
		const matchesSearch = !orderSearch || o.id.toLowerCase().includes(orderSearch.toLowerCase()) || o.email.toLowerCase().includes(orderSearch.toLowerCase()) || o.phone.includes(orderSearch);
		return matchesStatus && matchesSearch;
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[85vh] flex items-center justify-center px-4 py-12 bg-muted/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2 shadow-inner",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight text-foreground",
							children: "Admin Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Please enter your administrator credentials to manage Y.G Asafoetida works."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "space-y-4",
					children: [
						loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-xs font-medium border border-destructive/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loginError })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "admin-username",
								children: "Username"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "admin-username",
								type: "text",
								placeholder: "admin",
								value: loginUsername,
								onChange: (e) => setLoginUsername(e.target.value),
								required: true,
								autoFocus: true,
								className: "bg-background"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "admin-password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "admin-password",
								type: "password",
								placeholder: "••••••••",
								value: loginPassword,
								onChange: (e) => setLoginPassword(e.target.value),
								required: true,
								className: "bg-background"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full font-semibold shadow-md mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4 mr-2" }), "Sign In to Admin Panel"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2 text-center border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						className: "text-xs text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "← Return to Storefront"
						})
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-muted/20 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex h-16 items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold",
							children: "YG"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-base font-semibold leading-tight",
								children: "Y.G Admin Portal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase border-primary/30 text-primary",
								children: "SQLite Live"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Tirunelveli Works Management Hub"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: loadAllData,
								disabled: loading,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}` }), "Refresh"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "View Storefront"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleLogout,
								className: "gap-1.5 text-destructive hover:bg-destructive hover:text-destructive-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), "Log Out"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: setActiveTab,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid grid-cols-4 md:grid-cols-8 h-auto p-1 bg-muted/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "overview",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-3.5 w-3.5" }), " Overview"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "orders",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5" }),
										" Orders",
										orders.filter((o) => o.status === "placed" || o.status === "refund_requested").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-primary px-1.5 py-0.2 text-[10px] text-primary-foreground font-semibold",
											children: orders.filter((o) => o.status === "placed" || o.status === "refund_requested").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "products",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5" }), " Products"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "reviews",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5" }),
										" Reviews",
										reviews.filter((r) => r.status === "pending").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-amber-500 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: reviews.filter((r) => r.status === "pending").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "questions",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5" }),
										" Q&A",
										questions.filter((q) => q.status === "pending" || !q.answer).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-blue-500 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: questions.filter((q) => q.status === "pending" || !q.answer).length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "tickets",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-3.5 w-3.5" }),
										" Support",
										tickets.filter((t) => t.status === "open").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: tickets.filter((t) => t.status === "open").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "promos",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }), " Promos"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "alerts",
									className: "py-2.5 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" }),
										" Alerts",
										alerts.filter((a) => a.notified === 0).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-muted-foreground px-1.5 py-0.2 text-[10px] text-background font-semibold",
											children: alerts.filter((a) => a.notified === 0).length
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "overview",
							className: "space-y-6",
							children: stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Total Revenue"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: formatPrice(stats.totalRevenue)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														"From ",
														stats.totalOrders,
														" total orders"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Orders Today"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: stats.ordersPlacedToday
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: "New orders placed in last 24h"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Action Required"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: stats.pendingReviewsCount + stats.openQuestionsCount + stats.openTicketsCount
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														stats.pendingReviewsCount,
														" reviews · ",
														stats.openQuestionsCount,
														" Qs · ",
														stats.openTicketsCount,
														" tickets"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Inventory Watch"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-rose-500/10 text-rose-600",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: stats.lowStockProductsCount
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														"Low stock or sold out (",
														stats.stockAlertsCount,
														" alerts waiting)"
													]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-[1.5fr_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-base font-semibold",
												children: "7-Day Sales Trend"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Daily revenue from placed orders"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "secondary",
												className: "text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 mr-1" }), " Live"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 flex h-48 items-end gap-3 pt-4 border-b border-border",
											children: stats.recentSalesTrend.map((day, idx) => {
												const maxRev = Math.max(...stats.recentSalesTrend.map((d) => d.revenue), 1e3);
												const heightPct = Math.max(10, Math.round(day.revenue / maxRev * 100));
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 flex flex-col items-center gap-2 group",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity",
															children: formatPrice(day.revenue)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															style: { height: `${heightPct}%` },
															className: "w-full rounded-t-md bg-primary/80 group-hover:bg-primary transition-all duration-300 relative"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground font-medium",
															children: day.date
														})
													]
												}, idx);
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-base font-semibold",
												children: "Orders Pipeline"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mb-4",
												children: "Current order fulfillment stages"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-3",
												children: [
													{
														key: "placed",
														label: "New / Placed",
														color: "bg-blue-500"
													},
													{
														key: "packed",
														label: "Packed in Works",
														color: "bg-amber-500"
													},
													{
														key: "shipped",
														label: "Shipped with Courier",
														color: "bg-purple-500"
													},
													{
														key: "out",
														label: "Out for Delivery",
														color: "bg-indigo-500"
													},
													{
														key: "delivered",
														label: "Delivered",
														color: "bg-emerald-500"
													},
													{
														key: "refund_requested",
														label: "Refund Requested",
														color: "bg-rose-500"
													},
													{
														key: "cancelled",
														label: "Cancelled",
														color: "bg-zinc-500"
													}
												].map((st) => {
													const count = stats.ordersByStatus[st.key] ?? 0;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => {
															setOrderStatusFilter(st.key);
															setActiveTab("orders");
														},
														className: "flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2.5 w-2.5 rounded-full ${st.color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-sm font-medium",
																children: st.label
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: "outline",
															className: "font-mono text-xs",
															children: count
														})]
													}, st.key);
												})
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-base font-semibold",
											children: "Recent Orders"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Latest orders received across the store"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											onClick: () => setActiveTab("orders"),
											children: [
												"View all (",
												orders.length,
												")"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
												className: "border-b border-border text-xs uppercase text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Order ID"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Placed"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Customer"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Items"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Total"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Status"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium text-right",
														children: "Action"
													})
												] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-border/60",
												children: stats.recentOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													colSpan: 7,
													className: "py-8 text-center text-muted-foreground text-xs",
													children: "No orders yet. Live customer orders will appear here in real-time."
												}) }) : stats.recentOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "hover:bg-muted/30 transition-colors",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 font-mono font-semibold text-primary",
															children: o.id
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 text-xs text-muted-foreground",
															children: o.createdAt ? new Date(o.createdAt).toLocaleDateString("en-IN", {
																day: "numeric",
																month: "short",
																hour: "2-digit",
																minute: "2-digit"
															}) : "Recent"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3",
															children: o.email
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "py-3",
															children: [o.itemCount, " items"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 font-medium",
															children: formatPrice(o.total)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																variant: o.status === "delivered" ? "default" : o.status === "cancelled" ? "destructive" : "secondary",
																className: "capitalize text-xs",
																children: o.status.replace("_", " ")
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 text-right",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
																size: "sm",
																variant: "ghost",
																onClick: () => {
																	const full = orders.find((x) => x.id === o.id);
																	if (full) setSelectedOrder(full);
																},
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5 mr-1" }), " View"]
															})
														})
													]
												}, o.id))
											})]
										})
									})]
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "orders",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-4 sm:p-6 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative w-64",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												placeholder: "Search ID, email, phone...",
												value: orderSearch,
												onChange: (e) => setOrderSearch(e.target.value),
												className: "pl-9 text-xs"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: orderStatusFilter,
											onValueChange: setOrderStatusFilter,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "w-44 text-xs",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Status filter" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "all",
													children: "All statuses"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "placed",
													children: "Placed"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "packed",
													children: "Packed"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "shipped",
													children: "Shipped"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "out",
													children: "Out for delivery"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "delivered",
													children: "Delivered"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "refund_requested",
													children: "Refund requested"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "cancelled",
													children: "Cancelled"
												})
											] })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												"Showing ",
												filteredOrders.length,
												" of ",
												orders.length,
												" orders"
											]
										}), orders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-8 text-xs text-destructive hover:bg-destructive/10 border-destructive/30",
											onClick: handleClearAllOrders,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3 mr-1" }), " Clear Test Orders"]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto rounded-lg border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-muted/50 text-xs uppercase text-muted-foreground border-b border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Order"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Customer & Address"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Items"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Payment & Total"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Status & Flow"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium text-right",
													children: "Actions"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border",
											children: filteredOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 6,
												className: "p-8 text-center text-muted-foreground text-sm",
												children: "No orders in the database. New customer orders will appear here automatically."
											}) }) : filteredOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-muted/20 transition-colors",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 align-top",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono font-bold text-primary block",
																children: o.id
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs text-muted-foreground block",
																children: o.createdAt ? new Date(o.createdAt).toLocaleDateString("en-IN", {
																	day: "numeric",
																	month: "short",
																	hour: "2-digit",
																	minute: "2-digit"
																}) : "Recent"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
																variant: "outline",
																className: "mt-1 text-[10px] uppercase",
																children: [o.delivery, " delivery"]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 align-top max-w-xs",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "font-medium text-xs",
																children: [
																	o.address.firstName,
																	" ",
																	o.address.lastName
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs text-muted-foreground",
																children: o.email
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs text-muted-foreground",
																children: o.phone
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[11px] text-muted-foreground mt-1 line-clamp-1",
																children: [
																	o.address.line1,
																	", ",
																	o.address.city,
																	" ",
																	o.address.pin
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 align-top max-w-xs",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "space-y-1",
															children: o.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-xs flex items-center justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "line-clamp-1",
																	children: [
																		it.qty,
																		" × ",
																		it.name,
																		" (",
																		it.variantLabel,
																		")"
																	]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-muted-foreground font-mono",
																	children: formatPrice(it.price * it.qty)
																})]
															}, idx))
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 align-top",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "font-bold text-sm",
																children: formatPrice(o.totals.total)
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																variant: "secondary",
																className: "text-[10px] uppercase mt-1",
																children: o.payment
															}),
															o.promoCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[10px] text-emerald-600 font-medium mt-1",
																children: [
																	"Code: ",
																	o.promoCode,
																	" (-",
																	formatPrice(o.totals.discount),
																	")"
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 align-top",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1.5",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																	variant: o.status === "delivered" ? "default" : o.status === "cancelled" ? "destructive" : "secondary",
																	className: "capitalize text-xs block w-fit",
																	children: o.status.replace("_", " ")
																}),
																o.status === "placed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "packed"),
																	children: "Mark Packed →"
																}),
																o.status === "packed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "shipped"),
																	children: "Mark Shipped →"
																}),
																o.status === "shipped" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "out"),
																	children: "Mark Out for Delivery →"
																}),
																o.status === "out" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "delivered"),
																	children: "Mark Delivered ✓"
																}),
																o.resolution && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "text-[11px] text-rose-600 font-medium bg-rose-50 p-1.5 rounded border border-rose-200",
																	children: [
																		o.resolution.type === "cancellation" ? "Cancellation" : "Refund",
																		": ",
																		o.resolution.reason
																	]
																})
															]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 align-top text-right",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-end gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
																size: "sm",
																variant: "outline",
																className: "h-8 text-xs",
																onClick: () => setSelectedOrder(o),
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5 mr-1" }), " Details"]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																size: "icon",
																variant: "ghost",
																className: "h-8 w-8 text-muted-foreground hover:text-destructive",
																title: `Delete order ${o.id}`,
																onClick: () => handleDeleteOrder(o.id),
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
															})]
														})
													})
												]
											}, o.id))
										})]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "products",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Catalog & Inventory Management"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Manage products, format variants, prices, and stock status"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: handleOpenNewProduct,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Add Product"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
									children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-5 flex flex-col justify-between border border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-14 w-14 rounded-md overflow-hidden bg-muted border border-border shrink-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: getDisplayImageUrl(p.image),
														alt: p.name,
														className: "h-full w-full object-cover",
														onError: (e) => {
															e.target.style.display = "none";
														}
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: "secondary",
															className: "capitalize text-[10px] mb-1",
															children: p.format
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "font-semibold text-base leading-snug truncate",
															children: p.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-muted-foreground mt-0.5 line-clamp-1",
															children: p.tagline
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: p.in_stock ? "default" : "destructive",
													className: "text-[10px] shrink-0",
													children: p.in_stock ? "In Stock" : "Sold Out"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-1.5 border-t border-b border-border/60 py-3 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium text-muted-foreground mb-1",
												children: "Variants & Pricing:"
											}), (p.variants || []).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-mono",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-bold",
															children: formatPrice(v.price)
														}),
														v.mrp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground line-through ml-1.5",
															children: formatPrice(v.mrp)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-muted-foreground ml-2",
															children: [
																"(",
																v.stock,
																" in stock)"
															]
														})
													]
												})]
											}, v.id))]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 pt-3 border-t border-border flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: Boolean(p.in_stock),
													onCheckedChange: () => handleToggleStock(p.slug, Boolean(p.in_stock))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-muted-foreground",
													children: "In Stock"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => handleEditProduct(p),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3.5 w-3.5 mr-1" }), " Edit"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:bg-destructive/10",
													onClick: () => handleDeleteProduct(p.slug),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})]
											})]
										})]
									}, p.slug))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "reviews",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Customer Reviews Moderation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Approve or reject guest reviews submitted across products"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground p-8 text-center",
										children: "No reviews in database."
									}) : reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex text-amber-500",
															children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-sm",
															children: r.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: r.status === "published" ? "default" : r.status === "rejected" ? "destructive" : "secondary",
															className: "text-[10px] capitalize",
															children: r.status
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: r.comment
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] text-muted-foreground",
													children: [
														"By ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: r.name
														}),
														" (",
														r.city || "India",
														") · For product ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono font-medium text-primary",
															children: r.slug
														}),
														" · ",
														new Date(r.created_at).toLocaleDateString("en-IN")
													]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 shrink-0",
											children: [
												r.status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "default",
													onClick: () => handleModerateReview(r.id, "publish"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 mr-1" }), " Approve"]
												}),
												r.status !== "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => handleModerateReview(r.id, "reject"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 mr-1" }), " Reject"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:bg-destructive/10",
													onClick: () => handleModerateReview(r.id, "delete"),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})
											]
										})]
									}, r.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "questions",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Product Q&A Desk"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Answer visitor questions to publish official Tirunelveli team advice on product pages"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: questions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground p-8 text-center",
										children: "No questions submitted yet."
									}) : questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "font-mono text-[10px]",
														children: q.slug
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: q.answer ? "default" : "secondary",
														className: "text-[10px]",
														children: q.answer ? "Answered" : "Needs Answer"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-sm mt-1.5",
													children: q.question
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[11px] text-muted-foreground",
													children: [
														"Asked by ",
														q.asked_by,
														" on ",
														new Date(q.created_at).toLocaleDateString("en-IN")
													]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: q.answer ? "outline" : "default",
													onClick: () => {
														setAnsweringQuestion(q);
														setAnswerText(q.answer || "");
													},
													children: q.answer ? "Edit Answer" : "Write Answer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:bg-destructive/10",
													onClick: () => handleDeleteQuestion(q.id),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})]
											})]
										}), q.answer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg bg-primary/5 p-3 border border-primary/20 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-semibold text-primary mb-1 flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }),
													" Answer from ",
													q.answered_by || "Y.G team",
													":"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground",
												children: q.answer
											})]
										})]
									}, q.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "tickets",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Customer Support Desk"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Customer queries from contact form and order support dialog"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground p-8 text-center",
										children: "No support tickets found."
									}) : tickets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono font-bold text-sm text-primary",
															children: t.id
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-sm",
															children: t.topic
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: t.status === "resolved" ? "default" : t.status === "open" ? "destructive" : "secondary",
															className: "text-[10px] capitalize",
															children: t.status.replace("_", " ")
														}),
														t.order_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
															variant: "outline",
															className: "font-mono text-[10px]",
															children: ["Order ", t.order_id]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground line-clamp-2",
													children: t.message
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] text-muted-foreground",
													children: [
														"Contact: ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: t.contact
														}),
														" · Raised on ",
														t.created_at ? new Date(t.created_at).toLocaleString("en-IN") : "Recent"
													]
												}),
												t.reply && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs bg-muted/60 p-2 rounded mt-2 border border-border",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: "Reply/Note:"
														}),
														" ",
														t.reply
													]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												onClick: () => {
													setRespondingTicket(t);
													setTicketStatusVal(t.status);
													setTicketReplyText(t.reply || "");
												},
												children: "Respond / Update"
											})
										})]
									}, t.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "promos",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Promo Codes & Discounts"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Configure coupons, automatic basket discounts, and threshold rules"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => {
											setEditingPromo({
												code: "",
												label: "",
												description: "",
												percentOff: "",
												amountOff: "",
												minSubtotal: "",
												freeShipping: false,
												automatic: false,
												isActive: true
											});
											setPromoDialogOpen(true);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Create Promo"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
									children: promos.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono font-bold text-base text-primary",
													children: pr.code
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: pr.is_active ? "default" : "secondary",
													className: "text-[10px]",
													children: pr.is_active ? "Active" : "Inactive"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-medium text-sm mt-1",
												children: pr.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-1",
												children: pr.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 text-xs space-y-1 text-muted-foreground",
												children: [
													pr.percent_off && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														"• Discount: ",
														pr.percent_off,
														"% off"
													] }),
													pr.amount_off && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["• Flat off: ₹", pr.amount_off] }),
													pr.min_subtotal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["• Min order: ₹", pr.min_subtotal] }),
													Boolean(pr.free_shipping) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "• Free shipping included" }),
													Boolean(pr.automatic) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "text-[10px] mt-1",
														children: "Auto-applied"
													})
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-border flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												onClick: () => handleTogglePromo(pr.code, Boolean(pr.is_active)),
												children: pr.is_active ? "Deactivate" : "Activate"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "text-destructive hover:bg-destructive/10",
												onClick: () => handleDeletePromo(pr.code),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
											})]
										})]
									}, pr.code))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "alerts",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Back-in-Stock Alert Subscribers"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Customers who requested notifications when sold-out items return to inventory"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto rounded-lg border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-muted/50 text-xs uppercase text-muted-foreground border-b border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Product"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Customer Contact"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Registered Date"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium text-right",
													children: "Action"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border",
											children: alerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 5,
												className: "p-8 text-center text-muted-foreground text-sm",
												children: "No stock alerts registered."
											}) }) : alerts.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-muted/20 transition-colors",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 font-medium",
														children: [al.product_name || al.slug, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs text-muted-foreground font-mono",
															children: al.slug
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 font-mono text-xs",
														children: al.contact
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 text-xs text-muted-foreground",
														children: new Date(al.created_at).toLocaleDateString("en-IN", {
															day: "numeric",
															month: "short",
															year: "numeric"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: al.notified ? "default" : "secondary",
															className: "text-xs",
															children: al.notified ? "Notified" : "Waiting"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 text-right",
														children: !al.notified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															onClick: () => handleNotifyAlert(al.id),
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 mr-1" }), " Mark Notified"]
														})
													})
												]
											}, al.id))
										})]
									})
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(selectedOrder),
				onOpenChange: (open) => !open && setSelectedOrder(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
					children: selectedOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "font-mono text-xl text-primary font-bold",
							children: ["Order ", selectedOrder.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "capitalize text-xs",
							children: selectedOrder.status.replace("_", " ")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						"Placed on ",
						selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString("en-IN") : "Recent",
						" · ",
						selectedOrder.delivery,
						" shipping"
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4 bg-muted/40 p-4 rounded-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-1",
										children: "Customer Info"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-medium",
										children: [
											selectedOrder.address.firstName,
											" ",
											selectedOrder.address.lastName
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: selectedOrder.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: selectedOrder.phone
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-1",
										children: "Shipping Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										children: selectedOrder.address.line1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											selectedOrder.address.city,
											", ",
											selectedOrder.address.state,
											" ",
											selectedOrder.address.pin
										]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2",
								children: "Order Items"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border border rounded-lg overflow-hidden",
								children: selectedOrder.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: it.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											"Variant: ",
											it.variantLabel,
											" · Quantity: ",
											it.qty
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-semibold",
										children: formatPrice(it.price * it.qty)
									})]
								}, idx))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-muted/40 p-4 rounded-lg space-y-1.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.subtotal)
										})]
									}),
									selectedOrder.totals.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-emerald-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Discount (",
											selectedOrder.promoCode,
											"):"
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono",
											children: ["-", formatPrice(selectedOrder.totals.discount)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.shipping)
										})]
									}),
									selectedOrder.totals.giftWrap > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gift packaging:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.giftWrap)
										})]
									}),
									selectedOrder.totals.codFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COD Fee:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.codFee)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-1" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-sm font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grand Total:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary",
											children: formatPrice(selectedOrder.totals.total)
										})]
									})
								]
							}),
							selectedOrder.resolution && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-rose-50 rounded-lg border border-rose-200 text-rose-900 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "font-bold flex items-center gap-1.5 text-rose-700",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }),
											" Open ",
											selectedOrder.resolution.type === "cancellation" ? "Cancellation" : "Refund Request"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Reason:" }),
											" ",
											selectedOrder.resolution.reason
										]
									}),
									selectedOrder.resolution.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Customer Note:" }),
											" ",
											selectedOrder.resolution.note
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Amount:" }),
											" ",
											formatPrice(selectedOrder.resolution.amount)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "default",
											onClick: () => handleProcessResolution(selectedOrder.id, "approve"),
											children: "Approve Request"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => handleProcessResolution(selectedOrder.id, "reject", "Request declined after inspection"),
											children: "Decline Request"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold uppercase text-muted-foreground block mb-2",
									children: "Update Fulfillment Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"placed",
										"packed",
										"shipped",
										"out",
										"delivered",
										"cancelled"
									].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: selectedOrder.status === st ? "default" : "outline",
										className: "capitalize text-xs",
										onClick: () => handleUpdateOrderStatus(selectedOrder.id, st),
										children: st.replace("_", " ")
									}, st))
								})]
							})
						]
					})] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: productDialogOpen,
				onOpenChange: setProductDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingProduct?.slug && products.some((p) => p.slug === editingProduct.slug) ? "Edit Product" : "Add New Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Configure product details and variant options" })] }),
						editingProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-slug",
											children: "Slug (Unique ID)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-slug",
											value: editingProduct.slug,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												slug: e.target.value
											}),
											placeholder: "e.g. fresh-asafoetida-granules"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-name",
											children: "Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-name",
											value: editingProduct.name,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												name: e.target.value
											}),
											placeholder: "e.g. YG Special Hing"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-tagline",
											children: "Tagline"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-tagline",
											value: editingProduct.tagline,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												tagline: e.target.value
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-format",
											children: "Format"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: editingProduct.format,
											onValueChange: (val) => setEditingProduct({
												...editingProduct,
												format: val
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "prod-format",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "powder",
													children: "Powder"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "granules",
													children: "Granules"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "cake",
													children: "Cake"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "combo",
													children: "Combo"
												})
											] })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "prod-desc",
										children: "Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "prod-desc",
										rows: 3,
										value: editingProduct.description,
										onChange: (e) => setEditingProduct({
											...editingProduct,
											description: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-ing",
											children: "Ingredients"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-ing",
											value: editingProduct.ingredients,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												ingredients: e.target.value
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-usage",
											children: "Usage Instructions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-usage",
											value: editingProduct.usage,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												usage: e.target.value
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 pt-2 border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "font-semibold text-sm flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), " Product Images & Gallery"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Upload image files, enter URLs, or pick from heritage product presets"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/30 rounded-lg border border-border space-y-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-semibold text-foreground flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 text-amber-500 fill-amber-500" }), " Primary Cover Image"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground",
													children: "Main catalog image"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row items-start sm:items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-16 w-16 rounded-md overflow-hidden bg-background border border-border shrink-0 flex items-center justify-center relative shadow-xs",
													children: editingProduct.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: getDisplayImageUrl(editingProduct.image),
														alt: "Cover Preview",
														className: "h-full w-full object-cover",
														onError: (e) => {
															e.target.style.display = "none";
														}
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-muted-foreground",
														children: "No img"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 w-full space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															placeholder: "Image URL or preset (e.g. powder, /assets/...)",
															value: editingProduct.image,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																image: e.target.value
															}),
															className: "text-xs font-mono h-8"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
															className: "cursor-pointer",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "file",
																accept: "image/*",
																className: "hidden",
																onChange: (e) => handleImageFileUpload(e, false)
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																type: "button",
																size: "sm",
																variant: "outline",
																className: "h-8 text-xs shrink-0",
																asChild: true,
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5 mr-1" }), " Upload"] })
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center flex-wrap gap-1.5 pt-0.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground font-medium mr-1",
															children: "Presets:"
														}), PRESET_PRODUCT_IMAGES.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setEditingProduct({
																...editingProduct,
																image: preset.key
															}),
															className: `text-[10px] px-2 py-0.5 rounded border transition-colors ${editingProduct.image === preset.key || editingProduct.image === preset.url ? "bg-primary text-primary-foreground border-primary font-medium" : "bg-background text-muted-foreground hover:text-foreground border-border"}`,
															children: preset.label
														}, preset.key))]
													})]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/30 rounded-lg border border-border space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-semibold text-foreground flex items-center gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5 text-primary" }),
															" Additional Gallery Images (",
															editingProduct.gallery?.length || 0,
															")"
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "file",
															accept: "image/*",
															multiple: true,
															className: "hidden",
															onChange: (e) => handleImageFileUpload(e, true)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															type: "button",
															size: "sm",
															variant: "outline",
															className: "h-7 text-[11px]",
															asChild: true,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3 mr-1" }), " Upload Multiple"] })
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														placeholder: "Paste image URL or preset key to add...",
														value: newGalleryUrl,
														onChange: (e) => setNewGalleryUrl(e.target.value),
														onKeyDown: (e) => {
															if (e.key === "Enter") {
																e.preventDefault();
																if (newGalleryUrl.trim()) {
																	setEditingProduct({
																		...editingProduct,
																		gallery: [...editingProduct.gallery || [], newGalleryUrl.trim()]
																	});
																	setNewGalleryUrl("");
																}
															}
														},
														className: "text-xs font-mono h-8"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														type: "button",
														size: "sm",
														variant: "secondary",
														className: "h-8 text-xs shrink-0",
														onClick: () => {
															if (newGalleryUrl.trim()) {
																setEditingProduct({
																	...editingProduct,
																	gallery: [...editingProduct.gallery || [], newGalleryUrl.trim()]
																});
																setNewGalleryUrl("");
																toast.success("Image added to gallery");
															}
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Add"]
													})]
												}),
												editingProduct.gallery && editingProduct.gallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 pt-1",
													children: editingProduct.gallery.map((imgUrl, idx) => {
														const isCover = editingProduct.image === imgUrl;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: `group relative rounded-md overflow-hidden border aspect-square bg-background shadow-xs transition-all ${isCover ? "ring-2 ring-primary border-transparent" : "border-border"}`,
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: getDisplayImageUrl(imgUrl),
																	alt: `Gallery ${idx + 1}`,
																	className: "h-full w-full object-cover",
																	onError: (e) => {
																		e.target.style.display = "none";
																	}
																}),
																isCover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "absolute top-1 left-1 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm",
																	children: "Cover"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-1",
																	children: [!isCover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																		type: "button",
																		size: "sm",
																		variant: "secondary",
																		className: "h-6 text-[10px] px-1 py-0 w-full",
																		onClick: () => {
																			setEditingProduct({
																				...editingProduct,
																				image: imgUrl
																			});
																			toast.success("Set as main cover");
																		},
																		children: "Set Cover"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
																		type: "button",
																		size: "sm",
																		variant: "destructive",
																		className: "h-6 text-[10px] px-1 py-0 w-full",
																		onClick: () => {
																			setEditingProduct({
																				...editingProduct,
																				gallery: editingProduct.gallery.filter((_, i) => i !== idx)
																			});
																			toast.success("Removed from gallery");
																		},
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3 mr-1" }), " Remove"]
																	})]
																})
															]
														}, idx);
													})
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-center py-3 border border-dashed border-border rounded text-xs text-muted-foreground",
													children: "No additional gallery images yet"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-2 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Variants & Pricing"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											size: "sm",
											variant: "outline",
											onClick: () => {
												setEditingProduct({
													...editingProduct,
													variants: [...editingProduct.variants, {
														id: `var_${Date.now().toString(36)}`,
														label: "100 g",
														price: 299,
														mrp: 350,
														stock: 50
													}]
												});
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 mr-1" }), " Add Variant"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2",
										children: editingProduct.variants.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 bg-muted/40 p-2 rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Label",
													value: v.label,
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].label = e.target.value;
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/3 text-xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Price ₹",
													type: "number",
													value: v.price,
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].price = Number(e.target.value);
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/4 text-xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "MRP ₹",
													type: "number",
													value: v.mrp ?? "",
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].mrp = e.target.value ? Number(e.target.value) : null;
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/4 text-xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Stock",
													type: "number",
													value: v.stock ?? 50,
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].stock = Number(e.target.value);
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/4 text-xs"
												}),
												editingProduct.variants.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													type: "button",
													size: "sm",
													variant: "ghost",
													className: "text-destructive h-8 w-8 p-0",
													onClick: () => {
														setEditingProduct({
															...editingProduct,
															variants: editingProduct.variants.filter((_, idx) => idx !== i)
														});
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
												})
											]
										}, i))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between pt-2 border-t border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: editingProduct.glutenFree,
													onCheckedChange: (c) => setEditingProduct({
														...editingProduct,
														glutenFree: c
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "Gluten-Free"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: editingProduct.bestseller,
													onCheckedChange: (c) => setEditingProduct({
														...editingProduct,
														bestseller: c
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "Bestseller"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: editingProduct.inStock,
													onCheckedChange: (c) => setEditingProduct({
														...editingProduct,
														inStock: c
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "In Stock"
												})]
											})
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setProductDialogOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSaveProduct,
								children: "Save Product"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(answeringQuestion),
				onOpenChange: (open) => !open && setAnsweringQuestion(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Answer Customer Question" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							answeringQuestion?.question,
							" (Asked by ",
							answeringQuestion?.asked_by,
							")"
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q-answer",
								children: "Official Response (from Y.G team)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "q-answer",
								rows: 4,
								value: answerText,
								onChange: (e) => setAnswerText(e.target.value),
								placeholder: "Type your response here..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setAnsweringQuestion(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleAnswerQuestion,
							children: "Publish Answer"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(respondingTicket),
				onOpenChange: (open) => !open && setRespondingTicket(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Update Ticket ", respondingTicket?.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							respondingTicket?.topic,
							" · Contact: ",
							respondingTicket?.contact
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-muted/40 rounded text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold block mb-1",
										children: "Customer Message:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: respondingTicket?.message
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: ticketStatusVal,
										onValueChange: (v) => setTicketStatusVal(v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "open",
												children: "Open"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "in_progress",
												children: "In Progress"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "resolved",
												children: "Resolved"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "closed",
												children: "Closed"
											})
										] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "t-reply",
										children: "Response / Team Note"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "t-reply",
										rows: 3,
										value: ticketReplyText,
										onChange: (e) => setTicketReplyText(e.target.value),
										placeholder: "Add resolution or response note..."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setRespondingTicket(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleSaveTicketReply,
							children: "Update Ticket"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: promoDialogOpen,
				onOpenChange: setPromoDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create / Edit Promo Code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Define discount percentage, flat amount, or shipping rules" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "pr-code",
											children: "Code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "pr-code",
											placeholder: "e.g. SAVE20",
											value: editingPromo.code,
											onChange: (e) => setEditingPromo({
												...editingPromo,
												code: e.target.value.toUpperCase()
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "pr-label",
											children: "Label"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "pr-label",
											placeholder: "e.g. 20% off",
											value: editingPromo.label,
											onChange: (e) => setEditingPromo({
												...editingPromo,
												label: e.target.value
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pr-desc",
										children: "Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pr-desc",
										placeholder: "e.g. 20% off orders above ₹500",
										value: editingPromo.description,
										onChange: (e) => setEditingPromo({
											...editingPromo,
											description: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pr-pct",
												children: "% Off"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "pr-pct",
												type: "number",
												placeholder: "e.g. 20",
												value: editingPromo.percentOff,
												onChange: (e) => setEditingPromo({
													...editingPromo,
													percentOff: e.target.value
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pr-amt",
												children: "₹ Flat Off"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "pr-amt",
												type: "number",
												placeholder: "e.g. 50",
												value: editingPromo.amountOff,
												onChange: (e) => setEditingPromo({
													...editingPromo,
													amountOff: e.target.value
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pr-min",
												children: "Min Order ₹"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "pr-min",
												type: "number",
												placeholder: "e.g. 499",
												value: editingPromo.minSubtotal,
												onChange: (e) => setEditingPromo({
													...editingPromo,
													minSubtotal: e.target.value
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4 pt-2 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: editingPromo.freeShipping,
											onCheckedChange: (c) => setEditingPromo({
												...editingPromo,
												freeShipping: c
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "Free Shipping"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: editingPromo.automatic,
											onCheckedChange: (c) => setEditingPromo({
												...editingPromo,
												automatic: c
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "Auto Apply"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setPromoDialogOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSavePromo,
								children: "Save Promo"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminDashboardPage as component, getDisplayImageUrl };
