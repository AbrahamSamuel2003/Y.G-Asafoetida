import { useCallback, useEffect, useState } from "react";
import { getProductReviewsServerFn, submitReviewServerFn, type DbReview } from "@/functions/reviews";

export type ReviewStatus = "pending" | "published" | "rejected";

export type GuestReview = {
  id: string;
  slug: string;
  rating: number;
  title: string;
  comment: string;
  name: string;
  city?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  contactOptIn: boolean;
  createdAt: number;
  status: ReviewStatus;
};

export type ReviewDraft = Omit<GuestReview, "id" | "createdAt" | "status">;

export function formatReviewDate(ts: number) {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function mapDbReview(r: DbReview): GuestReview {
  return {
    id: r.id,
    slug: r.slug,
    rating: r.rating,
    title: r.title,
    comment: r.comment,
    name: r.name,
    city: r.city ?? undefined,
    email: r.email ?? undefined,
    phone: r.phone ?? undefined,
    contactOptIn: Boolean(r.contact_opt_in),
    createdAt: r.created_at,
    status: r.status,
  };
}

/** Reviews loaded from backend + local optimistic submissions */
export function useGuestReviews(slug: string) {
  const [reviews, setReviews] = useState<GuestReview[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      const list = await getProductReviewsServerFn({ data: { slug } });
      setReviews(list.map(mapDbReview));
    } catch (err) {
      console.warn("Failed to fetch server reviews:", err);
    } finally {
      setHydrated(true);
    }
  }, [slug]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const submitReview = useCallback(
    async (draft: ReviewDraft): Promise<GuestReview> => {
      try {
        const res = await submitReviewServerFn({
          data: {
            slug: draft.slug,
            rating: draft.rating,
            title: draft.title,
            comment: draft.comment,
            name: draft.name,
            city: draft.city,
            email: draft.email,
            phone: draft.phone,
            contactOptIn: draft.contactOptIn,
          },
        });
        const mapped = mapDbReview(res.review);
        setReviews((prev) => [mapped, ...prev]);
        return mapped;
      } catch (err) {
        console.error("submitReviewServerFn failed, using fallback:", err);
        const fallback: GuestReview = {
          ...draft,
          id: `rev_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
          createdAt: Date.now(),
          status: "pending",
        };
        setReviews((prev) => [fallback, ...prev]);
        return fallback;
      }
    },
    [],
  );

  const remove = useCallback((id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const sortedReviews = [...reviews].sort((a, b) => b.createdAt - a.createdAt);

  const average =
    sortedReviews.length > 0
      ? Math.round((sortedReviews.reduce((s, r) => s + r.rating, 0) / sortedReviews.length) * 10) / 10
      : 0;

  return { reviews: sortedReviews, average, hydrated, submitReview, remove, refresh: fetchReviews };
}
