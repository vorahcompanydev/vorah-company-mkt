import * as React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label text beside the box. */
  label?: React.ReactNode;
}
/** Custom checkbox with an amber checked state. */
export function Checkbox(props: CheckboxProps): JSX.Element;
