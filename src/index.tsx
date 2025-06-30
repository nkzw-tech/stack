import { ComponentProps, CSSProperties, ElementType, useMemo } from 'react';
import {
  AcceptsStyle,
  AsProp,
  PropsToOmit,
  StackPropsInternal,
} from './Types.js';
import { resolveGap } from './Gap.tsx';
import { resolveAlignment } from './Alignment.tsx';
export { setDefaultGap, type Gap } from './Gap.tsx';

export type StackProps<Component extends ElementType = 'div'> =
  AcceptsStyle<Component> extends never
    ? never
    : AsProp<Component> &
        StackPropsInternal &
        Omit<
          ComponentProps<Component>,
          PropsToOmit<Component, StackPropsInternal>
        >;

export default function Stack<Component extends ElementType = 'div'>({
  alignCenter,
  alignEnd,
  alignStart,
  around,
  as,
  baseline,
  between,
  center,
  columnGap: _columnGap,
  content,
  end,
  evenly,
  flex1,
  gap: _gap,
  horizontalPadding,
  inline,
  padding,
  reverse,
  rowGap: _rowGap,
  safe,
  self,
  shrink0,
  stretch,
  style,
  vertical,
  verticalPadding,
  wrap,
  ...props
}: StackProps<Component>) {
  const baseStyle = useMemo(() => {
    const baseStyle: CSSProperties = {
      alignContent: resolveAlignment(content),
      alignItems: alignStart
        ? 'flex-start'
        : alignCenter
          ? 'center'
          : alignEnd
            ? 'flex-end'
            : baseline
              ? 'baseline'
              : undefined,
      alignSelf: resolveAlignment(self),
      display: inline ? 'inline-flex' : 'flex',
      flex: flex1 ? 1 : undefined,
      flexDirection: vertical
        ? reverse
          ? 'column-reverse'
          : 'column'
        : reverse
          ? 'row-reverse'
          : 'row',
      flexGrow: stretch ? 1 : undefined,
      flexShrink: shrink0 ? 0 : undefined,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      justifyContent: center
        ? `${safe ? 'safe ' : ''}center`
        : end
          ? `${safe ? 'safe ' : ''}flex-end`
          : between
            ? 'space-between'
            : evenly
              ? 'space-evenly'
              : around
                ? 'space-around'
                : 'flex-start',
    };

    const gap = resolveGap(_gap);
    const rowGap = resolveGap(_rowGap);
    const columnGap = resolveGap(_columnGap);

    if (rowGap != null) {
      baseStyle.rowGap = rowGap;
    }
    if (columnGap != null) {
      baseStyle.columnGap = columnGap;
    }
    if (gap != null && rowGap == null && columnGap == null) {
      baseStyle.gap = gap;
    }

    const vGap = rowGap ?? gap;
    const hGap = columnGap ?? gap;
    if (padding === true) {
      if (vGap != null) {
        baseStyle.paddingTop = baseStyle.paddingBottom = vGap;
      }
      if (hGap != null) {
        baseStyle.paddingLeft = baseStyle.paddingRight = hGap;
      }
    } else if (padding != null) {
      baseStyle.padding = padding;
    } else {
      if (verticalPadding != null || vGap != null) {
        const paddingValue = verticalPadding === true ? vGap : verticalPadding;
        baseStyle.paddingTop = baseStyle.paddingBottom = paddingValue;
      }

      if (horizontalPadding != null || hGap != null) {
        const paddingValue =
          horizontalPadding === true ? hGap : horizontalPadding;
        baseStyle.paddingLeft = baseStyle.paddingRight = paddingValue;
      }
    }

    return baseStyle;
  }, [
    _columnGap,
    _gap,
    _rowGap,
    alignCenter,
    alignEnd,
    alignStart,
    around,
    baseline,
    between,
    center,
    content,
    end,
    evenly,
    flex1,
    horizontalPadding,
    inline,
    padding,
    reverse,
    safe,
    self,
    shrink0,
    stretch,
    vertical,
    verticalPadding,
    wrap,
  ]);

  const Component = as || 'div';
  return <Component style={{ ...baseStyle, ...style }} {...props} />;
}
