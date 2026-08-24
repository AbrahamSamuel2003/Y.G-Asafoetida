import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { RoutePending } from "./components/site/RoutePending";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    // Start fetching the route as soon as a finger/pointer touches the link, and
    // keep the preloaded result so the tap itself renders instantly.
    defaultPreloadDelay: 20,
    defaultPreloadStaleTime: 30_000,
    defaultPendingComponent: RoutePending,
    // Only show the skeleton if navigation is genuinely slow — avoids a flash.
    defaultPendingMs: 500,
    defaultPendingMinMs: 200,
  });

  return router;
};
