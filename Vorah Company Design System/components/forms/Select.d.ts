import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  children?: React.ReactNode;
}
/** Native select styled to match Input, with a custom chevron. */
export function Select(props: SelectProps): JSX.Element;
