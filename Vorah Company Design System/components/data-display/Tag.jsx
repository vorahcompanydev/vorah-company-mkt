import React from "react";

/** Vorah Company — Tag. Soft outlined chip, optionally removable. */
export function Tag({ children, onRemove = null, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: "13px",
        color: "var(--ink-700)",
        padding: "6px 13px",
        borderRadius: "var(--radius-pill)",
        background: "var(--white)",
        border: "1px solid var(--color-border-strong)",
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          aria-label="Remover"
          onClick={onRemove}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "var(--stone-500)",
            fontSize: "14px",
            lineHeight: 1,
            padding: 0,
          }}
        >
          ✕
        </button>
      )}
    </span>
  );
}
