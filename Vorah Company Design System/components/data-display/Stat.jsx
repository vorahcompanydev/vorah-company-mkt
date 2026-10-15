import React from "react";

/**
 * Vorah Company — Stat. Big-number + small-label pair, the brand's
 * "impacto em números" device.
 */
export function Stat({ value, label, tone = "ink", align = "left" }) {
  const colors = { ink: "var(--charcoal-900)", amber: "var(--amber-600)", cream: "var(--cream-50)" };
  const labelColor = tone === "cream" ? "rgba(250,247,241,0.7)" : "var(--ink-500)";
  return (
    <div style={{ textAlign: align }}>
      <div
        style={{
          fontFamily: "var(--font-title)",
          fontWeight: 700,
          fontSize: "var(--text-3xl)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: colors[tone] || colors.ink,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "14px",
          marginTop: "8px",
          color: labelColor,
        }}
      >
        {label}
      </div>
    </div>
  );
}
