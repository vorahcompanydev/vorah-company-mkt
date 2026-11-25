import React from "react";

/**
 * Vorah Company — SectionHeading.
 * Eyebrow (tracked caps) + display-serif title + optional intro. The brand's
 * standard section opener.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
  maxWidth = 640,
}) {
  const titleColor = tone === "cream" ? "var(--cream-50)" : "var(--charcoal-900)";
  const introColor = tone === "cream" ? "rgba(250,247,241,0.78)" : "var(--ink-500)";
  return (
    <div style={{ textAlign: align, maxWidth, marginInline: align === "center" ? "auto" : undefined }}>
      {eyebrow && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--amber-700)",
            marginBottom: "14px",
          }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-title)",
          fontWeight: 600,
          fontSize: "var(--text-2xl)",
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          color: titleColor,
          margin: 0,
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "17px",
            lineHeight: 1.6,
            color: introColor,
            marginTop: "16px",
            marginBottom: 0,
            textWrap: "pretty",
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
