/**
 * Client-Side Source Protection & Anti-Tamper Guard
 *
 * 100% Comprehensive Security Suite:
 * 1. F12 and DevTools inspect shortcuts (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Cmd+Option+I, etc.)
 * 2. "View Page Source" shortcut (Ctrl+U / Cmd+Option+U)
 * 3. "Save Page" shortcut (Ctrl+S / Cmd+S)
 * 4. Context menu (Right-Click) inspection on images and content
 * 5. Drag-and-drop asset/media scraping protection
 * 6. Anti-Clickjacking / Iframe isolation protection
 * 7. DOM MutationObserver Self-Healing Guard for Developer Attribution
 * 8. Console reverse-engineering security banner
 */

export function initAntiTamperProtection(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  // 1. Anti-Clickjacking / Iframe Isolation
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = window.self.location.href;
    }
  } catch {
    // Cross-origin iframe protection
  }

  // 2. Prevent Right-Click Context Menu
  const handleContextMenu = (e: MouseEvent): void => {
    const target = e.target as HTMLElement | null;
    if (
      target &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable)
    ) {
      return;
    }
    e.preventDefault();
  };

  // 3. Block Inspect & DevTools Shortcuts
  const handleKeyDown = (e: KeyboardEvent): void => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;

    // F12 -> DevTools
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl+Shift+I / Cmd+Option+I -> Inspect Element
    if (ctrlOrCmd && (e.shiftKey || (isMac && e.altKey)) && (e.key === "I" || e.key === "i" || e.keyCode === 73)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl+Shift+J / Cmd+Option+J -> Console
    if (ctrlOrCmd && (e.shiftKey || (isMac && e.altKey)) && (e.key === "J" || e.key === "j" || e.keyCode === 74)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl+Shift+C / Cmd+Option+C -> Element Picker
    if (ctrlOrCmd && (e.shiftKey || (isMac && e.altKey)) && (e.key === "C" || e.key === "c" || e.keyCode === 67)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl+U / Cmd+Option+U -> View Source
    if (ctrlOrCmd && (e.key === "U" || e.key === "u" || e.keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl+S / Cmd+S -> Save Page
    if (ctrlOrCmd && (e.key === "S" || e.key === "s" || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };

  // 4. Prevent Dragging Media / Image Asset Scraping
  const handleDragStart = (e: DragEvent): void => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === "IMG" || target.tagName === "VIDEO" || target.tagName === "A")) {
      e.preventDefault();
    }
  };

  // 5. DOM MutationObserver Self-Healing Guard for Developer Attribution
  let observer: MutationObserver | null = null;
  const initSelfHealingGuard = () => {
    const checkAttribution = () => {
      const el = document.getElementById("ss40-attribution");
      if (el) {
        // Ensure not hidden via inline styles or CSS tampering
        if (
          el.style.display === "none" ||
          el.style.visibility === "hidden" ||
          el.style.opacity === "0"
        ) {
          el.style.display = "block";
          el.style.visibility = "visible";
          el.style.opacity = "0.8";
        }
      }
    };

    if (typeof MutationObserver !== "undefined") {
      observer = new MutationObserver(() => {
        checkAttribution();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class", "hidden"],
      });
    }

    checkAttribution();
  };

  // 6. Print Security Notice in Console
  const printSecurityBanner = (): void => {
    console.log(
      "%c STOP! %c Proprietary Application Code & Digital Assets %c All source code, designs, and assets are protected by SS40 NETWORK PRIVATE LIMITED and Y.G Asafoetida. Unauthorized scraping, extraction, decompilation, or duplication is strictly prohibited.",
      "background: #dc2626; color: #ffffff; font-size: 16px; font-weight: bold; padding: 6px 12px; border-radius: 4px;",
      "background: #1e293b; color: #f59e0b; font-size: 13px; font-weight: bold; padding: 6px 12px;",
      "color: #64748b; font-size: 11px; padding: 4px;"
    );
  };

  document.addEventListener("contextmenu", handleContextMenu, { capture: true });
  window.addEventListener("keydown", handleKeyDown, { capture: true });
  document.addEventListener("dragstart", handleDragStart, { capture: true });
  printSecurityBanner();
  initSelfHealingGuard();

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
    window.removeEventListener("keydown", handleKeyDown, { capture: true });
    document.removeEventListener("dragstart", handleDragStart, { capture: true });
    observer?.disconnect();
  };
}
