import * as React from "react";

export interface SectionHeadingProps {
  /** Small tracked-caps eyebrow above the title. */
  eyebrow?: React.ReactNode;
  /** Display-serif headline. */
  title: React.ReactNode;
  /** Optional intro paragraph. */
  intro?: React.ReactNode;
  /** Alignment. @default "left" */
  align?: "left" | "center";
  /** Color tone for dark vs light sections. @default "ink" */
  tone?: "ink" | "cream";
  /** Max width in px. @default 640 */
  maxWidth?: number;
}
/** Standard section opener: eyebrow + serif title + intro. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
