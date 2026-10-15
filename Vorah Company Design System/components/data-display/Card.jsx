import React from "react";

/**
 * Vorah Company — Card
 * Soft, rounded surface with a warm low-spread shadow. Optional hover-lift.
 */
export function Card({
  children,
  tone = "paper",
  padding = "lg",
  hover = false,
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: "16px", md: "22px", lg: "28px", xl: "36px" };
  const tones = {
    paper: { background: "var(--white)", color: "var(--charcoal-900)", border: "1px solid var(--color-border)" },
    cream: { background: "var(--cream-100)", color: "var(--charcoal-900)", border: "1px solid transparent" },
    dark: { background: "var(--charcoal-900)", color: "var(--cream-50)", border: "1px solid var(--color-border-dark)" },
    amber: { background: "var(--amber-500)", color: "var(--charcoal-900)", border: "1px solid transparent" },
  };

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding: pads[padding] ?? pads.lg,
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
        ...(tones[tone] || tones.paper),
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
