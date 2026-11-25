import React from "react";
import { labelStyle, controlStyle } from "./Input.jsx";

/** Vorah Company — Select. Native dropdown styled to match Input. */
export function Select({ label, hint, id, children, style = {}, ...rest }) {
  const fieldId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={labelStyle}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={fieldId}
          style={{
            ...controlStyle,
            appearance: "none",
            paddingRight: "40px",
            cursor: "pointer",
            ...style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--amber-500)";
            e.currentTarget.style.boxShadow = "var(--shadow-focus)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border-strong)";
            e.currentTarget.style.boxShadow = "none";
          }}
          {...rest}
        >
          {children}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--stone-500)",
            fontSize: "12px",
          }}
        >
          ▼
        </span>
      </div>
      {hint && <span style={{ fontSize: "12.5px", color: "var(--ink-500)" }}>{hint}</span>}
    </div>
  );
}
