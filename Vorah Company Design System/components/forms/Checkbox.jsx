import React from "react";

/** Vorah Company — Checkbox. Custom box with amber checked state. */
export function Checkbox({ label, checked, defaultChecked, onChange, id, ...rest }) {
  const fieldId = id || (label ? "cb-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <label
      htmlFor={fieldId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        color: "var(--charcoal-900)",
      }}
    >
      <input
        id={fieldId}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        style={{
          appearance: "none",
          width: "20px",
          height: "20px",
          borderRadius: "6px",
          border: (checked ?? defaultChecked) ? "1.5px solid var(--amber-500)" : "1.5px solid var(--color-border-strong)",
          background: (checked ?? defaultChecked) ? "var(--amber-500)" : "var(--white)",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
        }}
        onInput={(e) => {
          const on = e.currentTarget.checked;
          e.currentTarget.style.background = on ? "var(--amber-500)" : "var(--white)";
          e.currentTarget.style.borderColor = on ? "var(--amber-500)" : "var(--color-border-strong)";
        }}
        {...rest}
      />
      {label}
    </label>
  );
}
