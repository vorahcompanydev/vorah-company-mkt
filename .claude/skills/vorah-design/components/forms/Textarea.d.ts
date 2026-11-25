import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  /** Visible rows. @default 4 */
  rows?: number;
}
/** Multi-line text field matching Input's styling. */
export function Textarea(props: TextareaProps): JSX.Element;
