import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type PaletteThemeId = "saffron" | "sage" | "rose" | "amber";

export type PaletteThemeInfo = {
  id: PaletteThemeId;
  name: string;
  subtitle: string;
  dotColor: string; // CSS color for UI preview
  bgPreview: string;
};

export const PALETTE_THEMES: PaletteThemeInfo[] = [
  {
    id: "saffron",
    name: "Saffron Sandal",
    subtitle: "Pure White & Rich Heritage Terracotta",
    dotColor: "#C25E00",
    bgPreview: "#FFFFFF",
  },
  {
    id: "sage",
    name: "Herbal Sage",
    subtitle: "Pure White & Deep Botanical Emerald",
    dotColor: "#1B7A46",
    bgPreview: "#FFFFFF",
  },
  {
    id: "rose",
    name: "Rosewater Silk",
    subtitle: "Pure White & Royal Kumkum Ruby",
    dotColor: "#B51A38",
    bgPreview: "#FFFFFF",
  },
  {
    id: "amber",
    name: "Temple Amber",
    subtitle: "Pure White & Bold Golden Ochre",
    dotColor: "#B36600",
    bgPreview: "#FFFFFF",
  },
];

type ThemeContextValue = {
  theme: PaletteThemeId;
  setTheme: (t: PaletteThemeId) => void;
  cycleTheme: () => void;
  ready: boolean;
};

const THEME_STORAGE_KEY = "yg-palette-theme-v1";
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PaletteThemeId>("saffron");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as PaletteThemeId | null;
      if (stored && (stored === "saffron" || stored === "sage" || stored === "rose" || stored === "amber")) {
        setThemeState(stored);
        document.documentElement.setAttribute("data-theme", stored);
      } else {
        document.documentElement.setAttribute("data-theme", "saffron");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "saffron");
    }
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
    setReady(true);
  }, []);

  const setTheme = useCallback((next: PaletteThemeId) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const cycleTheme = useCallback(() => {
    const list: PaletteThemeId[] = ["saffron", "sage", "rose", "amber"];
    const idx = list.indexOf(theme);
    const next = list[(idx + 1) % list.length] ?? "saffron";
    setTheme(next);
  }, [theme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, cycleTheme, ready }),
    [theme, setTheme, cycleTheme, ready],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
