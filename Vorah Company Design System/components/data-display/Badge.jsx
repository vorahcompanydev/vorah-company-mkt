import React from "react";

/** Vorah Company — Badge. Small pill status/label chip. */
export function Badge({ children, tone = "amber", ...rest }) {
  const tones = {
    amber: { background: "var(--amber-100)", color: "var(--amber-800)" },
    mint: { background: "var(--mint-300)", color: "var(--forest-700)" },
    forest: { background: "var(--forest-100)", color: "var(--forest-700)" },
    teal: { background: "var(--teal-100)", color: "var(--teal-800)" },
    neutral: { background: "var(--stone-100)", color: "var(--ink-700)" },
    dark: { background: "var(--charcoal-900)", color: "var(--amber-500)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        ...(tones[tone] || tones.amber),
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
