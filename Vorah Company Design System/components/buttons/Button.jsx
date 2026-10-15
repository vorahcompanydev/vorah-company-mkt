import React from "react";

/**
 * Vorah Company — Button
 * Pill-shaped, warm. Primary is amber-on-charcoal with a soft amber glow.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", font: "13px", gap: "6px" },
    md: { padding: "12px 22px", font: "15px", gap: "8px" },
    lg: { padding: "16px 30px", font: "17px", gap: "10px" },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: s.font,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: full ? "100%" : "auto",
    textDecoration: "none",
    transition:
      "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: {
      background: "var(--amber-500)",
      color: "var(--charcoal-900)",
      boxShadow: "var(--shadow-amber)",
    },
    secondary: {
      background: "var(--charcoal-900)",
      color: "var(--cream-50)",
    },
    outline: {
      background: "transparent",
      color: "var(--charcoal-900)",
      borderColor: "var(--charcoal-900)",
    },
    ghost: {
      background: "transparent",
      color: "var(--charcoal-900)",
    },
  };

  const hoverByVariant = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--amber-600)" : "var(--amber-500)";
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--ink-700)" : "var(--charcoal-900)";
    },
    outline: (e, on) => {
      e.currentTarget.style.background = on ? "var(--charcoal-900)" : "transparent";
      e.currentTarget.style.color = on ? "var(--cream-50)" : "var(--charcoal-900)";
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? "var(--cream-100)" : "transparent";
    },
  };

  const Tag = as;
  const handler = hoverByVariant[variant] || (() => {});

  return (
    <Tag
      style={{ ...base, ...(variants[variant] || variants.primary) }}
      disabled={as === "button" ? disabled : undefined}
      onMouseEnter={(e) => !disabled && handler(e, true)}
      onMouseLeave={(e) => !disabled && handler(e, false)}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => !disabled && (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
