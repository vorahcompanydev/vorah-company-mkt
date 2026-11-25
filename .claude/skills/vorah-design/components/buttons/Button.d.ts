import * as React from "react";

/**
 * Button props.
 * @startingPoint section="Buttons" subtitle="Pill CTA in all variants" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill container width. @default false */
  full?: boolean;
  /** Disabled state (button only). @default false */
  disabled?: boolean;
  /** Node rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Element/tag to render as — e.g. "a" for links. @default "button" */
  as?: any;
  children?: React.ReactNode;
}

/**
 * Pill-shaped Vorah button. Primary = amber on charcoal with a soft amber glow;
 * the default CTA across the brand ("Entrar em contato").
 */
export function Button(props: ButtonProps): JSX.Element;
