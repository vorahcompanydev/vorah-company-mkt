import * as React from "react";

/**
 * Card props.
 * @startingPoint section="Surfaces" subtitle="Rounded warm card, 4 tones" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface tone. @default "paper" */
  tone?: "paper" | "cream" | "dark" | "amber";
  /** Inner padding. @default "lg" */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Lift on hover. @default false */
  hover?: boolean;
  children?: React.ReactNode;
}

/**
 * Soft rounded surface with a warm low-spread shadow — the base container
 * for feature blocks, testimonials and pricing.
 */
export function Card(props: CardProps): JSX.Element;
