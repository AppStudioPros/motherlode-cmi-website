"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#platform", label: "Platform" },
  { href: "#flywheel", label: "Data Flywheel" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact", primary: true },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close the menu on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger trigger, mobile-only */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="md:hidden flex items-center justify-center w-11 h-11 rounded text-gold hover:bg-gold/10 transition-colors"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu sheet, slide-in from the right */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Sheet, anchored top-right under the sticky header */}
          <nav
            className="absolute top-16 right-0 left-0 mx-4 rounded-2xl border border-gold/30 bg-ink/95 backdrop-blur-md p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      item.primary
                        ? "block px-4 py-3 rounded-lg text-center font-semibold text-ink bg-gradient-to-r from-gold to-copper hover:opacity-90 transition-opacity"
                        : "block px-4 py-3 rounded-lg text-light hover:bg-white/5 hover:text-gold transition-colors"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
