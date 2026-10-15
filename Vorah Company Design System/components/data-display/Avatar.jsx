import React from "react";

/** Vorah Company — Avatar. Round image or initials chip. */
export function Avatar({ src = "", name = "", size = 44, ...rest }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-pill)",
        overflow: "hidden",
        background: "var(--forest-100)",
        color: "var(--forest-700)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: size * 0.36,
        flex: "none",
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "•"
      )}
    </span>
  );
}
