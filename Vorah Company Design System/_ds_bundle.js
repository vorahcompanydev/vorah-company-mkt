/* @ds-bundle: {"format":3,"namespace":"VorahCompanyDesignSystem_0977e7","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"272b1da31079","components/brand/SectionHeading.jsx":"f3fd45f0d23a","components/buttons/Button.jsx":"29f8fecb2af6","components/buttons/IconButton.jsx":"ed31498e79c4","components/data-display/Avatar.jsx":"c8b57a16db31","components/data-display/Badge.jsx":"995499b22497","components/data-display/Card.jsx":"f5d40ea487d2","components/data-display/Stat.jsx":"5a6ca906e0b0","components/data-display/Tag.jsx":"feccff7a0da4","components/forms/Checkbox.jsx":"346048599240","components/forms/Input.jsx":"37ffc09f6519","components/forms/Select.jsx":"35896d4c5312","components/forms/Textarea.jsx":"9b1f8664f6fe","ui_kits/website/About.jsx":"db9f024e262a","ui_kits/website/App.jsx":"6b0eaff0a18b","ui_kits/website/Contact.jsx":"20fca9e1df38","ui_kits/website/Differentials.jsx":"b4db5680a43e","ui_kits/website/Footer.jsx":"d3c182bc7a2f","ui_kits/website/Hero.jsx":"d8c38e59cc07","ui_kits/website/Nav.jsx":"7bca8deec5eb","ui_kits/website/Results.jsx":"3eff82bf5dba","ui_kits/website/Testimonials.jsx":"5414bd6623ea","ui_kits/website/WhatWeDo.jsx":"334f623e1935"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Input.jsx"},{"name":"labelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.VorahCompanyDesignSystem_0977e7 = window.VorahCompanyDesignSystem_0977e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vorah Company — Logo (text lockup).
 * Portable wordmark built from the brand fonts: "Vorah" in the display serif
 * + "COMPANY" in tracked caps. Use the PNG assets for pixel-exact placement;
 * use this where a live, recolorable lockup is handy (nav, footer, slides).
 */
function Logo({
  size = 28,
  tone = "ink",
  showCompany = true,
  ...rest
}) {
  const colors = {
    ink: {
      word: "var(--charcoal-900)",
      company: "var(--charcoal-900)"
    },
    cream: {
      word: "var(--cream-50)",
      company: "var(--cream-50)"
    },
    amber: {
      word: "var(--amber-500)",
      company: "var(--amber-600)"
    }
  };
  const c = colors[tone] || colors.ink;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      gap: size * 0.28,
      lineHeight: 1
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "-0.01em",
      color: c.word
    }
  }, "Vorah"), showCompany && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: size * 0.32,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: c.company
    }
  }, "Company"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
/**
 * Vorah Company — SectionHeading.
 * Eyebrow (tracked caps) + display-serif title + optional intro. The brand's
 * standard section opener.
 */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
  maxWidth = 640
}) {
  const titleColor = tone === "cream" ? "var(--cream-50)" : "var(--charcoal-900)";
  const introColor = tone === "cream" ? "rgba(250,247,241,0.78)" : "var(--ink-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth,
      marginInline: align === "center" ? "auto" : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-700)",
      marginBottom: "14px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: "var(--text-2xl)",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: titleColor,
      margin: 0,
      textWrap: "balance"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: introColor,
      marginTop: "16px",
      marginBottom: 0,
      textWrap: "pretty"
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vorah Company — Button
 * Pill-shaped, warm. Primary is amber-on-charcoal with a soft amber glow.
 */
function Button({
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
    sm: {
      padding: "8px 16px",
      font: "13px",
      gap: "6px"
    },
    md: {
      padding: "12px 22px",
      font: "15px",
      gap: "8px"
    },
    lg: {
      padding: "16px 30px",
      font: "17px",
      gap: "10px"
    }
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
    transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--amber-500)",
      color: "var(--charcoal-900)",
      boxShadow: "var(--shadow-amber)"
    },
    secondary: {
      background: "var(--charcoal-900)",
      color: "var(--cream-50)"
    },
    outline: {
      background: "transparent",
      color: "var(--charcoal-900)",
      borderColor: "var(--charcoal-900)"
    },
    ghost: {
      background: "transparent",
      color: "var(--charcoal-900)"
    }
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
    }
  };
  const Tag = as;
  const handler = hoverByVariant[variant] || (() => {});
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary)
    },
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: e => !disabled && handler(e, true),
    onMouseLeave: e => !disabled && handler(e, false),
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.97)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = "scale(1)")
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vorah Company — IconButton
 * Circular icon-only button. Pass a Lucide icon node as children.
 */
function IconButton({
  children,
  variant = "soft",
  size = "md",
  label,
  disabled = false,
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size] || dims.md;
  const variants = {
    primary: {
      background: "var(--amber-500)",
      color: "var(--charcoal-900)"
    },
    soft: {
      background: "var(--cream-100)",
      color: "var(--charcoal-900)"
    },
    ghost: {
      background: "transparent",
      color: "var(--charcoal-900)"
    },
    dark: {
      background: "var(--charcoal-900)",
      color: "var(--cream-50)"
    }
  };
  const hover = {
    primary: "var(--amber-600)",
    soft: "var(--stone-200)",
    ghost: "var(--cream-100)",
    dark: "var(--ink-700)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      ...(variants[variant] || variants.soft)
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.background = hover[variant]),
    onMouseLeave: e => !disabled && (e.currentTarget.style.background = (variants[variant] || variants.soft).background),
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.92)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = "scale(1)")
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Avatar. Round image or initials chip. */
function Avatar({
  src = "",
  name = "",
  size = 44,
  ...rest
}) {
  const initials = name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      flex: "none"
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "•");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Badge. Small pill status/label chip. */
function Badge({
  children,
  tone = "amber",
  ...rest
}) {
  const tones = {
    amber: {
      background: "var(--amber-100)",
      color: "var(--amber-800)"
    },
    mint: {
      background: "var(--mint-300)",
      color: "var(--forest-700)"
    },
    forest: {
      background: "var(--forest-100)",
      color: "var(--forest-700)"
    },
    teal: {
      background: "var(--teal-100)",
      color: "var(--teal-800)"
    },
    neutral: {
      background: "var(--stone-100)",
      color: "var(--ink-700)"
    },
    dark: {
      background: "var(--charcoal-900)",
      color: "var(--amber-500)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      ...(tones[tone] || tones.amber)
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vorah Company — Card
 * Soft, rounded surface with a warm low-spread shadow. Optional hover-lift.
 */
function Card({
  children,
  tone = "paper",
  padding = "lg",
  hover = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "16px",
    md: "22px",
    lg: "28px",
    xl: "36px"
  };
  const tones = {
    paper: {
      background: "var(--white)",
      color: "var(--charcoal-900)",
      border: "1px solid var(--color-border)"
    },
    cream: {
      background: "var(--cream-100)",
      color: "var(--charcoal-900)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--charcoal-900)",
      color: "var(--cream-50)",
      border: "1px solid var(--color-border-dark)"
    },
    amber: {
      background: "var(--amber-500)",
      color: "var(--charcoal-900)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pads[padding] ?? pads.lg,
      boxShadow: "var(--shadow-sm)",
      transition: "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
      ...(tones[tone] || tones.paper),
      ...style
    },
    onMouseEnter: e => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.transform = "translateY(-3px)";
    },
    onMouseLeave: e => {
      if (!hover) return;
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
/**
 * Vorah Company — Stat. Big-number + small-label pair, the brand's
 * "impacto em números" device.
 */
function Stat({
  value,
  label,
  tone = "ink",
  align = "left"
}) {
  const colors = {
    ink: "var(--charcoal-900)",
    amber: "var(--amber-600)",
    cream: "var(--cream-50)"
  };
  const labelColor = tone === "cream" ? "rgba(250,247,241,0.7)" : "var(--ink-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--text-3xl)",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: colors[tone] || colors.ink
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "14px",
      marginTop: "8px",
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Tag. Soft outlined chip, optionally removable. */
function Tag({
  children,
  onRemove = null,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      border: "1px solid var(--color-border-strong)"
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remover",
    onClick: onRemove,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--stone-500)",
      fontSize: "14px",
      lineHeight: 1,
      padding: 0
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Checkbox. Custom box with amber checked state. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  ...rest
}) {
  const fieldId = id || (label ? "cb-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--charcoal-900)"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    style: {
      appearance: "none",
      width: "20px",
      height: "20px",
      borderRadius: "6px",
      border: checked ?? defaultChecked ? "1.5px solid var(--amber-500)" : "1.5px solid var(--color-border-strong)",
      background: checked ?? defaultChecked ? "var(--amber-500)" : "var(--white)",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    },
    onInput: e => {
      const on = e.currentTarget.checked;
      e.currentTarget.style.background = on ? "var(--amber-500)" : "var(--white)";
      e.currentTarget.style.borderColor = on ? "var(--amber-500)" : "var(--color-border-strong)";
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Input. Labelled text field with warm focus ring. */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: {
      ...controlStyle,
      borderColor: error ? "var(--danger)" : "var(--color-border-strong)",
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--amber-500)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--color-border-strong)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12.5px",
      color: error ? "var(--danger)" : "var(--ink-500)"
    }
  }, error || hint));
}
const labelStyle = {
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: "14px",
  color: "var(--charcoal-900)"
};
const controlStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  color: "var(--charcoal-900)",
  background: "var(--white)",
  padding: "12px 15px",
  borderRadius: "var(--radius-sm)",
  border: "1.5px solid var(--color-border-strong)",
  outline: "none",
  width: "100%",
  transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
};
Object.assign(__ds_scope, { Input, labelStyle, controlStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Select. Native dropdown styled to match Input. */
function Select({
  label,
  hint,
  id,
  children,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: __ds_scope.labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    style: {
      ...__ds_scope.controlStyle,
      appearance: "none",
      paddingRight: "40px",
      cursor: "pointer",
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--amber-500)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--color-border-strong)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--stone-500)",
      fontSize: "12px"
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12.5px",
      color: "var(--ink-500)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vorah Company — Textarea. Multi-line field matching Input. */
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: __ds_scope.labelStyle
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    style: {
      ...__ds_scope.controlStyle,
      resize: "vertical",
      lineHeight: 1.5,
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--amber-500)";
      e.currentTarget.style.boxShadow = "var(--shadow-focus)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--color-border-strong)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12.5px",
      color: "var(--ink-500)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* Vorah Company — "Sobre nós" */
const {
  Button: VKAboutBtn
} = window.VorahCompanyDesignSystem_0977e7;
const {
  PhotoPanel: VKPhotoPanel
} = window.VK;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vk-about",
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "88px 28px",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(VKPhotoPanel, {
    tone: "cocoa",
    tall: true,
    label: "Equipe Vorah"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-700)",
      marginBottom: "16px"
    }
  }, "Sobre n\xF3s"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(30px, 3.6vw, 46px)",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: "var(--charcoal-900)",
      margin: 0,
      textWrap: "balance"
    }
  }, "Conectamos marcas e pessoas com inten\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.65,
      color: "var(--ink-500)",
      margin: "22px 0 14px",
      maxWidth: "560px"
    }
  }, "Somos a Vorah, uma empresa especializada em comunica\xE7\xE3o estrat\xE9gica e marketing digital com foco comercial."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.65,
      color: "var(--ink-500)",
      margin: "0 0 30px",
      maxWidth: "560px"
    }
  }, "Acreditamos que vender \xE9 consequ\xEAncia de um bom posicionamento, processos bem definidos e uma presen\xE7a online verdadeira. Nosso objetivo \xE9 simples: ajudar voc\xEA a vender mais e se posicionar melhor no mercado."), /*#__PURE__*/React.createElement(VKAboutBtn, {
    as: "a",
    href: "#contato",
    size: "lg"
  }, "Vamos conversar"))));
}
window.VK = Object.assign(window.VK || {}, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Vorah Company — page composition */
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const {
    Nav,
    Hero,
    Differentials,
    WhatWeDo,
    Results,
    About,
    Testimonials,
    Contact,
    Footer
  } = window.VK;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    menuOpen: menuOpen,
    setMenuOpen: setMenuOpen
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Differentials, null), /*#__PURE__*/React.createElement(WhatWeDo, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Vorah Company — contact form (interactive, fake submit) */
const {
  Input: VKInput,
  Textarea: VKTextarea,
  Select: VKSelect,
  Button: VKContactBtn
} = window.VorahCompanyDesignSystem_0977e7;
function Contact() {
  const [form, setForm] = React.useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "Gestão de redes sociais",
    msg: ""
  });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    const err = {};
    if (!form.nome.trim()) err.nome = "Informe seu nome";
    if (!form.telefone.trim()) err.telefone = "Informe seu telefone";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "E-mail inválido";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      background: "var(--teal-800)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-symbol-amber.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-70px",
      bottom: "-70px",
      width: "300px",
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "vk-contact",
    style: {
      position: "relative",
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "88px 28px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "52px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-500)",
      marginBottom: "16px"
    }
  }, "Entre em contato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(30px,3.6vw,46px)",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: "var(--cream-50)",
      margin: "0 0 18px",
      textWrap: "balance"
    }
  }, "Vamos construir o seu crescimento, a quatro m\xE3os."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "rgba(250,247,241,0.8)",
      margin: 0
    }
  }, "Atendimento 100% online e 100% humano. Conte um pouco sobre o seu neg\xF3cio e retornamos com um plano sob medida.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream-50)",
      borderRadius: "var(--radius-xl)",
      padding: "32px",
      boxShadow: "var(--shadow-lg)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: "var(--radius-pill)",
      background: "var(--mint-300)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 18px",
      fontSize: "28px"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "26px",
      color: "var(--charcoal-900)",
      margin: "0 0 8px"
    }
  }, "Recebido, ", form.nome.split(" ")[0] || "tudo certo", "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--ink-500)",
      margin: 0
    }
  }, "Em breve entramos em contato. Obrigado pela confian\xE7a.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "grid",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(VKInput, {
    label: "Nome e Sobrenome*",
    placeholder: "Seu nome",
    value: form.nome,
    onChange: set("nome"),
    error: errors.nome
  }), /*#__PURE__*/React.createElement(VKInput, {
    label: "Telefone*",
    placeholder: "(11) 90000-0000",
    value: form.telefone,
    onChange: set("telefone"),
    error: errors.telefone
  })), /*#__PURE__*/React.createElement(VKInput, {
    label: "E-mail*",
    type: "email",
    placeholder: "voce@empresa.com",
    value: form.email,
    onChange: set("email"),
    error: errors.email
  }), /*#__PURE__*/React.createElement(VKSelect, {
    label: "Servi\xE7o de interesse",
    value: form.servico,
    onChange: set("servico")
  }, /*#__PURE__*/React.createElement("option", null, "Gest\xE3o de redes sociais"), /*#__PURE__*/React.createElement("option", null, "Site / landing page"), /*#__PURE__*/React.createElement("option", null, "Identidade visual"), /*#__PURE__*/React.createElement("option", null, "Diagn\xF3stico de perfil"), /*#__PURE__*/React.createElement("option", null, "Consultoria")), /*#__PURE__*/React.createElement(VKTextarea, {
    label: "Mensagem",
    rows: 3,
    placeholder: "Conte um pouco sobre o seu neg\xF3cio\u2026",
    value: form.msg,
    onChange: set("msg")
  }), /*#__PURE__*/React.createElement(VKContactBtn, {
    type: "submit",
    size: "lg",
    full: true
  }, "Enviar")))));
}
window.VK = Object.assign(window.VK || {}, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Differentials.jsx
try { (() => {
/* Vorah Company — "Nosso Diferencial" */
const {
  Card: VKDiffCard,
  SectionHeading: VKDiffHeading
} = window.VorahCompanyDesignSystem_0977e7;
function Differentials() {
  const items = [["💬", "Transparência total", "Feedbacks objetivos, diálogo aberto e alinhamento constante."], ["🤝", "Parceria de verdade", "Trabalhamos em equipe — aqui, o resultado é construído a quatro mãos."], ["🧭", "Processos definidos", "Cada etapa do trabalho é clara, organizada e feita sob medida."], ["🎯", "Foco em vendas", "Conteúdo bonito é bom, mas conteúdo com propósito é o que traz faturamento."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "88px 28px"
    }
  }, /*#__PURE__*/React.createElement(VKDiffHeading, {
    eyebrow: "Nosso diferencial",
    title: "Mais do que \u201Cfazer post\u201D \u2014 guiamos o seu crescimento",
    intro: "Na Vorah, n\xF3s guiamos o cliente com clareza, colaboramos com intelig\xEAncia e constru\xEDmos juntos caminhos de crescimento. Atendimento 100% online e 100% humano.",
    maxWidth: 680
  }), /*#__PURE__*/React.createElement("div", {
    className: "vk-diff-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "18px",
      marginTop: "48px"
    }
  }, items.map(([emoji, title, body]) => /*#__PURE__*/React.createElement(VKDiffCard, {
    key: title,
    tone: "cream",
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--white)",
      display: "grid",
      placeItems: "center",
      fontSize: "26px",
      boxShadow: "var(--shadow-xs)"
    }
  }, emoji), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "20px",
      color: "var(--charcoal-900)",
      margin: "18px 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "var(--ink-500)",
      margin: 0
    }
  }, body))))));
}
window.VK = Object.assign(window.VK || {}, {
  Differentials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Differentials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Vorah Company — footer */
const {
  Logo: VKFootLogo
} = window.VorahCompanyDesignSystem_0977e7;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--charcoal-900)",
      color: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vk-foot",
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "64px 28px 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VKFootLogo, {
    size: 26,
    tone: "cream"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "19px",
      color: "var(--cream-50)",
      margin: "20px 0 0",
      maxWidth: "320px"
    }
  }, "Conectamos marcas e pessoas com inten\xE7\xE3o.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FootHeading, null, "Navega\xE7\xE3o"), /*#__PURE__*/React.createElement(FootLink, {
    href: "#top"
  }, "Home"), /*#__PURE__*/React.createElement(FootLink, {
    href: "#servicos"
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement(FootLink, {
    href: "#sobre"
  }, "Sobre"), /*#__PURE__*/React.createElement(FootLink, {
    href: "#contato"
  }, "Contato")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FootHeading, null, "Contato"), /*#__PURE__*/React.createElement(FootLine, null, "Florian\xF3polis, SC"), /*#__PURE__*/React.createElement(FootLine, null, "(47) 99795-7541"), /*#__PURE__*/React.createElement(FootLine, null, "contato@vorahcompany.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      marginTop: "14px"
    }
  }, /*#__PURE__*/React.createElement(FootLink, {
    href: "#",
    inline: true
  }, "Instagram"), /*#__PURE__*/React.createElement(FootLink, {
    href: "#",
    inline: true
  }, "LinkedIn")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-border-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "20px 28px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--stone-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Vorah Company."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--stone-400)",
      textDecoration: "none"
    }
  }, "Pol\xEDtica de privacidade"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--stone-400)",
      textDecoration: "none"
    }
  }, "Pol\xEDtica de cookies")))));
}
function FootHeading({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--amber-500)",
      marginBottom: "16px"
    }
  }, children);
}
function FootLink({
  children,
  href,
  inline
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: inline ? "inline" : "block",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--cream-50)",
      textDecoration: "none",
      marginBottom: inline ? 0 : "10px"
    }
  }, children);
}
function FootLine({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "rgba(250,247,241,0.78)",
      marginBottom: "10px"
    }
  }, children);
}
window.VK = Object.assign(window.VK || {}, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Vorah Company — hero + pricing band */
const {
  Button: VKHeroBtn,
  Badge: VKHeroBadge
} = window.VorahCompanyDesignSystem_0977e7;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-symbol-amber.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-90px",
      top: "40px",
      width: "360px",
      opacity: 0.10,
      transform: "rotate(8deg)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "72px 28px 40px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "48px",
      alignItems: "center"
    },
    className: "vk-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-700)",
      marginBottom: "20px"
    }
  }, "Gest\xE3o de redes sociais"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(40px, 5.4vw, 72px)",
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      color: "var(--charcoal-900)",
      margin: 0,
      textWrap: "balance"
    }
  }, "Aumentar vendas nas redes sociais?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "19px",
      lineHeight: 1.6,
      color: "var(--ink-500)",
      maxWidth: "520px",
      margin: "22px 0 32px",
      textWrap: "pretty"
    }
  }, "Ajudamos pequenas e m\xE9dias empresas a se posicionar com clareza, atrair clientes e vender com consist\xEAncia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(VKHeroBtn, {
    as: "a",
    href: "#contato",
    size: "lg"
  }, "Entrar em contato"), /*#__PURE__*/React.createElement(VKHeroBtn, {
    as: "a",
    href: "#servicos",
    variant: "ghost",
    size: "lg"
  }, "O que fazemos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "26px",
      marginTop: "40px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(MiniStat, {
    value: "+430",
    label: "Posts no feed"
  }), /*#__PURE__*/React.createElement(MiniStat, {
    value: "3 anos",
    label: "de experi\xEAncia"
  }), /*#__PURE__*/React.createElement(MiniStat, {
    value: "85%",
    label: "taxa de sucesso"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(PhotoPanel, {
    tone: "forest",
    tall: true,
    label: "Cliente Vorah"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-22px",
      bottom: "30px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "16px 18px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--mint-300)",
      display: "grid",
      placeItems: "center",
      fontSize: "20px"
    }
  }, "\uD83D\uDCC8"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "20px",
      color: "var(--charcoal-900)",
      lineHeight: 1
    }
  }, "+38%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: "var(--ink-500)"
    }
  }, "vendas no trimestre"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 28px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--charcoal-900)",
      borderRadius: "var(--radius-xl)",
      padding: "30px 36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VKHeroBadge, {
    tone: "dark"
  }, "Planos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "28px",
      color: "var(--cream-50)",
      marginTop: "12px",
      lineHeight: 1.1
    }
  }, "A partir de ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amber-500)"
    }
  }, "R$ 1.200"), "/m\xEAs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--stone-400)",
      marginTop: "6px"
    }
  }, "Pacotes de acordo com a sua demanda e o est\xE1gio da sua empresa.")), /*#__PURE__*/React.createElement(VKHeroBtn, {
    as: "a",
    href: "#contato"
  }, "Ver pacotes"))));
}
function MiniStat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "30px",
      color: "var(--charcoal-900)",
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--ink-500)",
      marginTop: "5px"
    }
  }, label));
}

/* Reusable on-brand image placeholder */
function PhotoPanel({
  tone = "teal",
  label = "",
  tall = false
}) {
  const bg = {
    teal: "var(--teal-800)",
    forest: "var(--forest-700)",
    cocoa: "var(--cocoa-700)",
    amber: "var(--amber-500)"
  }[tone] || "var(--teal-800)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: bg,
      borderRadius: "var(--radius-xl)",
      aspectRatio: tall ? "4 / 5" : "4 / 3",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-symbol-amber.svg",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-40px",
      bottom: "-40px",
      width: "200px",
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "18px",
      bottom: "16px",
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "rgba(250,247,241,0.6)"
    }
  }, label || "imagem"));
}
window.VK = Object.assign(window.VK || {}, {
  Hero,
  PhotoPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Vorah Company — site nav */
const {
  Logo: VKLogo,
  Button: VKButton
} = window.VorahCompanyDesignSystem_0977e7;
function Nav({
  menuOpen,
  setMenuOpen
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["Home", "#top"], ["Serviços", "#servicos"], ["Sobre", "#sobre"], ["Contato", "#contato"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(250,247,241,0.86)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      transition: "background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "16px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(VKLogo, {
    size: 26,
    tone: "ink"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "vk-desktop-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px"
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--charcoal-900)",
      textDecoration: "none"
    }
  }, label)), /*#__PURE__*/React.createElement(VKButton, {
    as: "a",
    href: "#contato",
    size: "sm"
  }, "Entrar em contato")), /*#__PURE__*/React.createElement("button", {
    className: "vk-mobile-toggle",
    "aria-label": "Menu",
    onClick: () => setMenuOpen(v => !v),
    style: {
      display: "none",
      border: "none",
      background: "var(--charcoal-900)",
      color: "var(--cream-50)",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      fontSize: "18px",
      cursor: "pointer"
    }
  }, menuOpen ? "✕" : "≡")), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "vk-mobile-menu",
    style: {
      display: "none",
      flexDirection: "column",
      gap: "4px",
      padding: "8px 28px 22px",
      background: "var(--cream-50)",
      borderBottom: "1px solid var(--color-border)"
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    onClick: () => setMenuOpen(false),
    style: {
      padding: "12px 0",
      fontWeight: 600,
      fontSize: "17px",
      color: "var(--charcoal-900)",
      textDecoration: "none",
      borderBottom: "1px solid var(--stone-100)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px"
    }
  }, /*#__PURE__*/React.createElement(VKButton, {
    as: "a",
    href: "#contato",
    full: true,
    onClick: () => setMenuOpen(false)
  }, "Entrar em contato"))));
}
window.VK = Object.assign(window.VK || {}, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Results.jsx
try { (() => {
/* Vorah Company — "Resultados" stats band (dark) */
const {
  Stat: VKStat
} = window.VorahCompanyDesignSystem_0977e7;
function Results() {
  const stats = [["+430", "Posts no feed para clientes"], ["3M+", "Interações geradas"], ["3 anos", "de experiência"], ["85%", "Taxa de sucesso"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--charcoal-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(../../assets/pattern-v.png)",
      backgroundSize: "120px",
      opacity: 0.05,
      filter: "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "76px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-500)",
      marginBottom: "10px"
    }
  }, "Nosso impacto em n\xFAmeros"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-2xl)",
      color: "var(--cream-50)",
      margin: "0 0 44px",
      letterSpacing: "-0.02em"
    }
  }, "Resultados que sustentam a estrat\xE9gia"), /*#__PURE__*/React.createElement("div", {
    className: "vk-results-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "24px"
    }
  }, stats.map(([value, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      paddingTop: "20px",
      borderTop: "2px solid var(--amber-500)"
    }
  }, /*#__PURE__*/React.createElement(VKStat, {
    value: value,
    label: label,
    tone: "cream"
  }))))));
}
window.VK = Object.assign(window.VK || {}, {
  Results
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Results.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
/* Vorah Company — testimonials */
const {
  Card: VKTCard,
  Avatar: VKTAvatar
} = window.VorahCompanyDesignSystem_0977e7;
function Testimonials() {
  const quotes = [["A Vorah trouxe clareza e método para a nossa presença online — hoje vendemos com consistência.", "Ana Martins", "Pet Shop Lumi"], ["Atendimento humano de verdade. Sentimos que o resultado é construído junto, a quatro mãos.", "Rafael Costa", "Costa Consultoria"], ["Saímos do “postar por postar” para uma estratégia com foco em faturamento.", "Juliana Reis", "Studio JR"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "88px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--amber-700)",
      marginBottom: "10px"
    }
  }, "O que nossos clientes dizem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-2xl)",
      color: "var(--charcoal-900)",
      margin: "0 0 44px",
      letterSpacing: "-0.02em",
      maxWidth: "640px",
      textWrap: "balance"
    }
  }, "Marcas que cresceram com estrat\xE9gia, leveza e parceria"), /*#__PURE__*/React.createElement("div", {
    className: "vk-testi-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px"
    }
  }, quotes.map(([quote, name, org]) => /*#__PURE__*/React.createElement(VKTCard, {
    key: name,
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      color: "var(--amber-500)",
      lineHeight: 1,
      marginBottom: "6px"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "19px",
      fontStyle: "italic",
      lineHeight: 1.4,
      color: "var(--charcoal-900)",
      margin: "0 0 24px"
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(VKTAvatar, {
    name: name
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "14px",
      color: "var(--charcoal-900)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      color: "var(--ink-500)"
    }
  }, org))))))));
}
window.VK = Object.assign(window.VK || {}, {
  Testimonials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhatWeDo.jsx
try { (() => {
/* Vorah Company — "O que fazemos" (numbered) + "O que oferecemos" (services) */
const {
  SectionHeading: VKWWDHeading,
  Button: VKWWDBtn,
  Badge: VKWWDBadge
} = window.VorahCompanyDesignSystem_0977e7;
function WhatWeDo() {
  const outcomes = [["01", "Aumentar sua autoridade online"], ["02", "Atrair novos clientes com consistência"], ["03", "Postar com mais estratégia e frequência"], ["04", "Melhorar o posicionamento da sua marca"], ["05", "Elevar o faturamento com conteúdo estratégico"]];
  const services = ["Análise completa do seu perfil", "Conteúdo baseado em metas", "Acompanhamento de métricas", "Reuniões de alinhamento", "Relatórios de desempenho claros", "Curadoria de conteúdo relevante", "Modelos visuais para postagens", "Criação de posts com legendas"];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicos",
    style: {
      background: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "88px 28px"
    }
  }, /*#__PURE__*/React.createElement(VKWWDHeading, {
    eyebrow: "O que fazemos",
    title: "Gest\xE3o estrat\xE9gica de redes sociais com foco em crescimento comercial real",
    intro: "Atendemos empresas em todo o Brasil.",
    maxWidth: 720
  }), /*#__PURE__*/React.createElement("div", {
    className: "vk-wwd",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      marginTop: "48px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, outcomes.map(([num, text]) => /*#__PURE__*/React.createElement("li", {
    key: num,
    style: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      padding: "18px 0",
      borderBottom: "1px solid var(--stone-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "26px",
      color: "var(--amber-600)",
      width: "46px",
      flex: "none"
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "21px",
      color: "var(--charcoal-900)",
      lineHeight: 1.25
    }
  }, text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderRadius: "var(--radius-xl)",
      padding: "32px",
      boxShadow: "var(--shadow-sm)",
      border: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement(VKWWDBadge, {
    tone: "forest"
  }, "O que oferecemos"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--ink-500)",
      margin: "14px 0 22px"
    }
  }, "Unimos estrat\xE9gia + execu\xE7\xE3o, com foco em resultados. Um processo claro, colaborativo e pensado para gerar valor real para o seu neg\xF3cio."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px 18px"
    }
  }, services.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      fontFamily: "var(--font-sans)",
      fontSize: "14.5px",
      color: "var(--charcoal-900)",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--amber-600)",
      fontWeight: 700,
      flex: "none"
    }
  }, "\u2726"), s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement(VKWWDBtn, {
    as: "a",
    href: "#contato",
    full: true
  }, "Entrar em contato"))))));
}
window.VK = Object.assign(window.VK || {}, {
  WhatWeDo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhatWeDo.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
