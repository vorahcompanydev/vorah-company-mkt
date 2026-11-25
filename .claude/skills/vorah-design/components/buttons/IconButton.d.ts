import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "soft" */
  variant?: "primary" | "soft" | "ghost" | "dark";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accessible label (required — icon-only). */
  label: string;
  /** Icon node (e.g. a Lucide SVG). */
  children?: React.ReactNode;
}

/** Circular icon-only button for toolbars, nav and cards. */
export function IconButton(props: IconButtonProps): JSX.Element;
