import * as React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Font size of the "Vorah" wordmark in px. @default 28 */
  size?: number;
  /** Color tone. @default "ink" */
  tone?: "ink" | "cream" | "amber";
  /** Show the "COMPANY" descriptor. @default true */
  showCompany?: boolean;
}
/** Live, recolorable text lockup of the Vorah Company wordmark. */
export function Logo(props: LogoProps): JSX.Element;
