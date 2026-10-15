import * as React from "react";

export interface StatProps {
  /** The big number, e.g. "+430" or "85%". */
  value: React.ReactNode;
  /** Small descriptive label below. */
  label: React.ReactNode;
  /** Color tone. @default "ink" */
  tone?: "ink" | "amber" | "cream";
  /** Text alignment. @default "left" */
  align?: "left" | "center" | "right";
}
/** Big-number + label pair — the "impacto em números" device. */
export function Stat(props: StatProps): JSX.Element;
