import React from "react";

/**
 * Vorah Company — IconButton
 * Circular icon-only button. Pass a Lucide icon node as children.
 */
export function IconButton({
  children,
  variant = "soft",
  size = "md",
  label,
  disabled = false,
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 52 };
  const d = dims[size] || dims.md;

  const variants = {
    primary: { background: "var(--amber-500)", color: "var(--charcoal-900)" },
    soft: { background: "var(--cream-100)", color: "var(--charcoal-900)" },
    ghost: { background: "transparent", color: "var(--charcoal-900)" },
    dark: { background: "var(--charcoal-900)", color: "var(--cream-50)" },
  };

  const hover = {
    primary: "var(--amber-600)",
    soft: "var(--stone-200)",
    ghost: "var(--cream-100)",
    dark: "var(--ink-700)",
  };

  return (
    <button
      aria-label={label}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: d,
        height: d,
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition:
          "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
        ...(variants[variant] || variants.soft),
      }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = hover[variant])}
      onMouseLeave={(e) =>
        !disabled && (e.currentTarget.style.background = (variants[variant] || variants.soft).background)
      }
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.92)")}
      onMouseUp={(e) => !disabled && (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      {children}
    </button>
  );
}
