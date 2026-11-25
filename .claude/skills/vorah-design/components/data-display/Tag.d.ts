import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** When provided, renders a remove (✕) button calling this handler. */
  onRemove?: (() => void) | null;
  children?: React.ReactNode;
}
/** Outlined chip for filters / selected items, optionally removable. */
export function Tag(props: TagProps): JSX.Element;
