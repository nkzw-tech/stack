import { ComponentProps, ElementType, ReactNode } from 'react';
import { Gap } from './Gap.tsx';

export type AlignContent =
  /** Items packed to the start of the container */
  | 'start'
  /** Items packed to the end of the container */
  | 'end'
  /** Items centered along the container */
  | 'center'
  /** Items stretched to fill the container */
  | 'stretch'
  /** Items spaced evenly with first and last item at edges */
  | 'space-between'
  /** Items spaced with equal space around each */
  | 'space-around'
  /** Items spaced with equal space between and around */
  | 'space-evenly';

export type AlignSelf =
  /** Aligns this element to the center of the cross axis. */
  | 'center'
  /** Aligns this element to the end of the cross axis. */
  | 'end'
  /** Aligns this element to the start of the cross axis. */
  | 'start'
  /** Stretches this element to fill the container along the cross axis. */
  | 'stretch'
  /** Aligns this element based on its text baseline. */
  | 'baseline';

export type StackPropsInternal = {
  /** Aligns items to the center of the cross axis (`align-items: center`). */
  alignCenter?: boolean;
  /** Aligns items to the end of the cross axis (`align-items: flex-end`). */
  alignEnd?: boolean;
  /** Aligns items to the start of the cross axis (`align-items: flex-start`). */
  alignStart?: boolean;
  /** Distributes space evenly around items (`justify-content: space-around`). */
  around?: boolean;
  /** Aligns items based on their text baselines (`align-items: baseline`). */
  baseline?: boolean;
  /** Distributes items with space between them (`justify-content: space-between`). */
  between?: boolean;
  /** Centers items along the main axis (`justify-content: center`). */
  center?: boolean;
  children?: ReactNode;
  /** Sets spacing column gap elements (`column-gap: <Gap>`). Accepts 0–48px in steps of 4, or `true` to apply a default of 8px. */
  columnGap?: Gap;
  /** Defines how multiple rows align along the cross axis (`align-content: ...`). */
  content?: AlignContent;
  /** Aligns items to the end of the main axis (`justify-content: flex-end`). */
  end?: boolean;
  /** Evenly distributes items with equal space between and around (`justify-content: space-evenly`). */
  evenly?: boolean;
  /** Sets `flex: 1` to allow the container to grow and fill available space. */
  flex1?: boolean;
  /** Sets spacing between elements (`gap: <Gap>`). Accepts 0–48px in steps of 4, or `true` to apply a default of 8px. */
  gap?: Gap;
  /** Applies left and right padding (`padding-left: <Gap>; padding-right: <Gap>`). Accepts 0–48px in steps of 4, or `true` to apply a default of 8px. */
  horizontalPadding?: Gap;
  /** Displays as `inline-flex` instead of `flex` (web only). */
  inline?: boolean;
  /** Applies padding (`padding: <Gap>`). Accepts 0–48px in steps of 4, or `true` to apply a default of 8px. */
  padding?: Gap;
  /** Reverses the order of items along the main axis, respects `vertical` setting. */
  reverse?: boolean;
  /** Sets spacing row gap elements (`row-gap: <Gap>`). Accepts 0–48px in steps of 4, or `true` to apply a default of 8px. */
  rowGap?: Gap;
  /** Adds `safe` zone alignment to `center` or `end` (`justify-content: safe ...`). */
  safe?: boolean;
  /** Controls individual item alignment (`align-self: ...`). */
  self?: AlignSelf;
  /** Prevents items from shrinking (`flex-shrink: 0`). */
  shrink0?: boolean;
  /** Enables stretching to fill remaining space (`flex-grow: 1`). */
  stretch?: boolean;
  /** Stacks items vertically (`flex-direction: column`). */
  vertical?: boolean;
  /** Applies top and bottom padding (`padding-top: <Gap>; padding-bottom: <Gap>`). Accepts 0–48px in steps of 4, or `true` to apply a default of 8px. */
  verticalPadding?: Gap;
  /** Enables wrapping of items onto multiple lines (`flex-wrap: wrap`). */
  wrap?: boolean;
};

export type AcceptsStyle<C extends ElementType> =
  'style' extends keyof ComponentProps<C> ? C : never;

export type AsProp<Component extends ElementType> = {
  /** The element to render, defaults to `<div />` on the web, and `<View />` on React Native. */
  as?: Component;
};

export type PropsToOmit<
  Component extends ElementType,
  Props,
> = keyof (AsProp<Component> & Props);
