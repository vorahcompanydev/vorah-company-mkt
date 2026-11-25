import React from "react";

/** Vorah Company — Input. Labelled text field with warm focus ring. */
export function Input({ label, hint, error, id, style = {}, ...rest }) {
  const fieldId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={labelStyle}>
          {label}
        </label>
      )}
      <input
        id={fieldId}
        style={{
          ...controlStyle,
          borderColor: error ? "var(--danger)" : "var(--color-border-strong)",
          ...style,
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--amber-500)";
          e.currentTarget.style.boxShadow = "var(--shadow-focus)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--color-border-strong)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: "12.5px", color: error ? "var(--danger)" : "var(--ink-500)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}

export const labelStyle = {
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: "14px",
  color: "var(--charcoal-900)",
};

export const controlStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  color: "var(--charcoal-900)",
  background: "var(--white)",
  padding: "12px 15px",
  borderRadius: "var(--radius-sm)",
  border: "1.5px solid var(--color-border-strong)",
  outline: "none",
  width: "100%",
  transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
};
