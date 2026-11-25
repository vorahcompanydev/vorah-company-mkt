import React from "react";

/**
 * Vorah Company — Logo (text lockup).
 * Portable wordmark built from the brand fonts: "Vorah" in the display serif
 * + "COMPANY" in tracked caps. Use the PNG assets for pixel-exact placement;
 * use this where a live, recolorable lockup is handy (nav, footer, slides).
 */
export function Logo({ size = 28, tone = "ink", showCompany = true, ...rest }) {
  const colors = {
    ink: { word: "var(--charcoal-900)", company: "var(--charcoal-900)" },
    cream: { word: "var(--cream-50)", company: "var(--cream-50)" },
    amber: { word: "var(--amber-500)", company: "var(--amber-600)" },
  };
  const c = colors[tone] || colors.ink;
  return (
    <span style={{ display: "inline-flex", flexDirection: "row", alignItems: "center", gap: size * 0.28, lineHeight: 1 }} {...rest}>
      <span
        style={{
          fontFamily: "var(--font-title)",
          fontWeight: 600,
          fontSize: size,
          letterSpacing: "-0.01em",
          color: c.word,
        }}
      >
        Vorah
      </span>
      {showCompany && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: size * 0.32,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: c.company,
          }}
        >
          Company
        </span>
      )}
    </span>
  );
}
