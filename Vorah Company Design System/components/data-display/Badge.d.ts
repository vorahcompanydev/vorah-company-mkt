import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "amber" */
  tone?: "amber" | "mint" | "forest" | "teal" | "neutral" | "dark";
  children?: React.ReactNode;
}
/** Small uppercase pill for statuses and category labels. */
export function Badge(props: BadgeProps): JSX.Element;
