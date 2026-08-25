import { useCallback, useEffect, useRef, useState } from "react";
import { ImageOff, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { srcSetFor } from "@/assets/images";

type SmartImageProps = {
  src?: string | undefined;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  /** Hint for how wide the image renders, so the browser picks the smallest file. */
  sizes?: string;
  /** Marks the LCP image: decodes it ahead of other requests. */
  priority?: boolean;
  /** Short caption shown inside the fallback tile when the image cannot load. */
  fallbackLabel?: string;
};

/**
 * Image with a shimmer placeholder while loading and a branded fallback tile
 * when the file is missing or the network drops. Prevents layout shift by
 * keeping the wrapper sized by the caller.
 */
export function SmartImage({
  src,
  alt,
  className,
  wrapperClassName,
  width,
  height,
  loading = "lazy",
  sizes,
  priority,
  fallbackLabel,
}: SmartImageProps) {

  const [state, setState] = useState<"loading" | "ready" | "error">(src ? "loading" : "error");
  // Bumped by the retry button so the browser re-requests a failed image.
  const [attempt, setAttempt] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setState(src ? "loading" : "error");
  }, [src]);

  const retry = useCallback(() => {
    setState("loading");
    setAttempt((a) => a + 1);
  }, []);


  // Images restored from cache or streamed during SSR can finish before React
  // attaches onLoad, which would leave the placeholder stuck. Re-check on mount.
  const attach = useCallback((node: HTMLImageElement | null) => {
    imgRef.current = node;
    if (node?.complete) setState(node.naturalWidth > 0 ? "ready" : "error");
  }, []);

  useEffect(() => {
    const node = imgRef.current;
    if (node?.complete) setState(node.naturalWidth > 0 ? "ready" : "error");
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-white", wrapperClassName)}>
      {/* Warm shimmer skeleton — never an empty box while bytes are in flight. */}
      {state === "loading" ? (
        <div
          aria-hidden
          className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,var(--secondary)_20%,var(--muted)_45%,var(--secondary)_70%)]"
        />
      ) : null}

      {state === "error" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary px-3 text-center">
          <ImageOff className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <span className="text-[10px] leading-tight font-medium tracking-wide text-muted-foreground uppercase">
            {fallbackLabel ?? "Image unavailable"}
          </span>
          <button
            type="button"
            onClick={retry}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <RefreshCw className="h-3 w-3" aria-hidden="true" />
            Retry
          </button>
        </div>
      ) : (
        <img
          key={attempt}
          ref={attach}
          src={src}
          alt={alt}
          {...(srcSetFor(src) ? { srcSet: srcSetFor(src), sizes: sizes ?? "100vw" } : {})}
          {...(width ? { width } : {})}
          {...(height ? { height } : {})}
          loading={priority ? "eager" : loading}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          onLoad={() => setState("ready")}
          onError={() => setState("error")}
          className={cn(
            // Above-the-fold images paint the instant bytes arrive — no fade-in
            // delay and no blank frame before React marks them ready.
            priority ? "opacity-100" : "transition-opacity duration-300",
            !priority && state !== "ready" ? "opacity-0" : "opacity-100",
            className,
          )}
        />
      )}
    </div>
  );
}
