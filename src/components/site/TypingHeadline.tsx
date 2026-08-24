import { useEffect, useRef, useState } from "react";

/**
 * Hero headline that types itself out in English, Tamil and Hindi on a loop.
 * The first phrase is rendered on the server so the LCP text is instant, and
 * the animation is skipped entirely for visitors who prefer reduced motion.
 */
const PHRASES = [
  { lang: "en", text: "The hing that South Indian kitchens grew up on" },
  { lang: "ta", text: "தென்னிந்திய சமையலறைகள் வளர்ந்த பெருங்காயம்" },
  { lang: "hi", text: "वह हींग जिस पर दक्षिण भारतीय रसोई पली-बढ़ी" },
] as const;

const TYPE_MS = 32;
const ERASE_MS = 14;
const HOLD_MS = 1200;

export function TypingHeadline({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(PHRASES[0].text.length);
  const [erasing, setErasing] = useState(false);
  const [animate, setAnimate] = useState(false);
  const timer = useRef<number | null>(null);

  // Only start animating after hydration, and never against the user's motion setting.
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setAnimate(true);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const full = PHRASES[index]!.text;

    const schedule = (fn: () => void, ms: number) => {
      timer.current = window.setTimeout(fn, ms);
    };

    if (!erasing && count < full.length) {
      schedule(() => setCount((c) => c + 1), TYPE_MS);
    } else if (!erasing && count === full.length) {
      schedule(() => setErasing(true), HOLD_MS);
    } else if (erasing && count > 0) {
      schedule(() => setCount((c) => c - 1), ERASE_MS);
    } else if (erasing) {
      schedule(() => {
        setErasing(false);
        setIndex((i) => (i + 1) % PHRASES.length);
      }, 260);
    }

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [animate, count, erasing, index]);

  const phrase = PHRASES[index]!;
  const shown = animate ? phrase.text.slice(0, count) : PHRASES[0].text;

  return (
    <h1 className={className}>
      {/* Reserves the tallest line box so the hero never jumps as languages change. */}
      <span className="grid">
        <span aria-hidden className="invisible col-start-1 row-start-1">
          {PHRASES.reduce((a, b) => (a.text.length >= b.text.length ? a : b)).text}
        </span>
        <span className="col-start-1 row-start-1" aria-live="polite" aria-atomic="true">
          <span lang={animate ? phrase.lang : "en"}>{shown}</span>
          
        </span>
      </span>
    </h1>
  );
}
