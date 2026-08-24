import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PALETTE_THEMES, useTheme, type PaletteThemeId } from "@/lib/theme";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const current = PALETTE_THEMES.find((t) => t.id === theme) ?? PALETTE_THEMES[0]!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`relative h-8 sm:h-9 px-1.5 sm:px-2.5 rounded-full border border-border/60 hover:bg-secondary/60 transition-all shrink-0 ${className}`}
          title={`Active Theme: ${current.name} (Click to change)`}
          aria-label="Select Palette Color Theme"
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full ring-1 ring-background shadow-xs shrink-0 transition-transform"
              style={{ backgroundColor: current.dotColor }}
            />
            <Palette className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span className="hidden md:inline-block text-[11px] font-medium text-foreground whitespace-nowrap">
              {current.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-1.5 shadow-lg border-border">
        <DropdownMenuLabel className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Mild Heritage Palettes
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-1" />

        {PALETTE_THEMES.map((item) => {
          const active = item.id === theme;
          return (
            <DropdownMenuItem
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                active ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-3.5 w-3.5 rounded-full ring-1 ring-border shadow-xs shrink-0"
                  style={{ backgroundColor: item.dotColor }}
                />
                <div>
                  <p className="text-xs font-semibold leading-tight text-foreground">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
              {active && <Check className="h-3.5 w-3.5 text-primary shrink-0 ml-1" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
