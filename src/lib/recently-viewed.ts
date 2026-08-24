import { useCallback, useEffect, useState } from "react";

const KEY = "yg-recently-viewed-v1";
const MAX = 6;

function read(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/**
 * Tracks the last few product slugs the visitor opened, so we can show a
 * "Recently viewed" strip. Runs entirely after hydration to avoid SSR mismatch.
 */
export function useRecentlyViewed(currentSlug?: string) {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const stored = read();
    setSlugs(stored);
    if (!currentSlug) return;
    const next = [currentSlug, ...stored.filter((s) => s !== currentSlug)].slice(0, MAX);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, [currentSlug]);

  const clear = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    setSlugs([]);
  }, []);

  // Never suggest the page you are already on.
  return { slugs: slugs.filter((s) => s !== currentSlug), clear };
}
