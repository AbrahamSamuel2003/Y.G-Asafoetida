import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-BNsCoVsy.js
var $$splitComponentImporter = () => import("./order._id-DANgkin8.mjs");
var Route = createFileRoute("/order/$id")({
	head: ({ params }) => ({ meta: [
		{ title: `Track order ${params.id} — Y.G Asafoetida` },
		{
			name: "description",
			content: "Follow your Y.G Asafoetida hing order from our Tirunelveli works to your door."
		},
		{
			property: "og:title",
			content: "Track your order — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Live status for your heritage hing delivery."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
