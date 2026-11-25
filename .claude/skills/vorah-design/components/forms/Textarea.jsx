import React from "react";
import { labelStyle, controlStyle } from "./Input.jsx";

/** Vorah Company — Textarea. Multi-line field matching Input. */
export function Textarea({ label, hint, id, rows = 4, style = {}, ...rest }) {
  const fieldId = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", width: "100%" }}>
      {label && (
        <label htmlFor={fieldId} style={labelStyle}>
          {label}
        </label>
      )}
      <textarea
        id={fieldId}
        rows={rows}
        style={{ ...controlStyle, resize: "vertical", lineHeight: 1.5, ...style }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--amber-500)";
          e.currentTarget.style.boxShadow = "var(--shadow-focus)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border-strong)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {hint && <span style={{ fontSize: "12.5px", color: "var(--ink-500)" }}>{hint}</span>}
    </div>
  );
}
