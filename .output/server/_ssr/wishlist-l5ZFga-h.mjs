import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as subscribeStockAlertServerFn } from "./alerts-CxPFKgTA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-l5ZFga-h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Saved items ("Kitchen list") and back-in-stock alerts.
* Device-local for now — swap the load/save pair for an API when a backend exists.
*/
var WISHLIST_KEY = "yg-wishlist-v1";
var ALERTS_KEY = "yg-stock-alerts-v1";
var WishlistContext = (0, import_react.createContext)(null);
function read(key, fallback) {
	try {
		const raw = window.localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function WishlistProvider({ children }) {
	const [slugs, setSlugs] = (0, import_react.useState)([]);
	const [alerts, setAlerts] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSlugs(read(WISHLIST_KEY, []));
		setAlerts(read(ALERTS_KEY, []));
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(slugs));
		} catch {}
	}, [slugs, hydrated]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(ALERTS_KEY, JSON.stringify(alerts));
		} catch {}
	}, [alerts, hydrated]);
	const has = (0, import_react.useCallback)((slug) => slugs.includes(slug), [slugs]);
	const toggle = (0, import_react.useCallback)((slug) => {
		let nowSaved = false;
		setSlugs((prev) => {
			nowSaved = !prev.includes(slug);
			return nowSaved ? [slug, ...prev] : prev.filter((s) => s !== slug);
		});
		return nowSaved;
	}, []);
	const remove = (0, import_react.useCallback)((slug) => {
		setSlugs((prev) => prev.filter((s) => s !== slug));
	}, []);
	const clear = (0, import_react.useCallback)(() => setSlugs([]), []);
	const hasAlert = (0, import_react.useCallback)((slug) => alerts.some((a) => a.slug === slug), [alerts]);
	const addAlert = (0, import_react.useCallback)((slug, contact) => {
		setAlerts((prev) => [...prev.filter((a) => a.slug !== slug), {
			slug,
			contact,
			createdAt: Date.now()
		}]);
		subscribeStockAlertServerFn({ data: {
			slug,
			contact
		} }).catch((err) => {
			console.warn("subscribeStockAlertServerFn error:", err);
		});
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		slugs,
		has,
		toggle,
		remove,
		clear,
		alerts,
		hasAlert,
		addAlert
	}), [
		slugs,
		has,
		toggle,
		remove,
		clear,
		alerts,
		hasAlert,
		addAlert
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistContext.Provider, {
		value,
		children
	});
}
function useWishlist() {
	const ctx = (0, import_react.useContext)(WishlistContext);
	if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
	return ctx;
}
//#endregion
export { useWishlist as n, WishlistProvider as t };
