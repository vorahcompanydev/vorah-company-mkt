import * as React from "react";

/**
 * Input props.
 * @startingPoint section="Forms" subtitle="Inputs, select, textarea & checkbox" viewport="700x420"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
}

/**
 * Labelled text input with the warm amber focus ring. Pairs with Textarea,
 * Select and Checkbox to build forms like the site's "Entre em contato".
 */
export function Input(props: InputProps): JSX.Element;
