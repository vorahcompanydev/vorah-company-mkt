import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials when empty. */
  src?: string;
  /** Full name — used for initials and alt text. */
  name?: string;
  /** Pixel diameter. @default 44 */
  size?: number;
}
/** Round avatar showing a photo or derived initials. */
export function Avatar(props: AvatarProps): JSX.Element;
