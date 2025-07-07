import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentType,
  ElementType,
  useMemo,
} from 'react';
import { resolveGap } from './Gap.tsx';
import { View, ViewStyle } from 'react-native';
import {
  AcceptsStyle,
  AsProp,
  PropsToOmit,
  StackPropsInternal,
} from './Types.js';
import { resolveAlignment } from './Alignment.tsx';
export { setDefaultGap, type Gap } from './Gap.tsx';

type BaseStackProps<Component extends ElementType> = StackPropsInternal &
  Omit<ComponentProps<Component>, PropsToOmit<Component, StackPropsInternal>> &
  Partial<Pick<ComponentPropsWithRef<Component>, 'ref'>>;

export type StackProps<Component extends ElementType = typeof View> =
  AcceptsStyle<Component> extends never
    ? never
    : AsProp<Component> & BaseStackProps<Component>;

let Stack = function Stack<Component extends ElementType = typeof View>({
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
}: StackProps<Component> & { className?: string }) {
  const baseStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
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
        ? 'center'
        : end
          ? 'flex-end'
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
    padding,
    reverse,
    self,
    shrink0,
    stretch,
    vertical,
    verticalPadding,
    wrap,
  ]);

  const Component = as || View;
  return <Component style={[baseStyle, style]} {...props} />;
};

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { cssInterop } = require('nativewind');

  Stack = cssInterop(Stack, {
    className: {
      target: 'style',
    },
  });
} catch {
  /* empty */
}

export default Stack;

export const VStack = <Component extends ElementType = 'div'>(
  props: StackProps<Component> & { vertical?: never },
) => <Stack {...props} vertical />;

export const asStack = <Component extends ElementType = 'div'>(
  Component: AcceptsStyle<Component>,
): ComponentType<BaseStackProps<Component>> => {
  const StackComponent = (props: BaseStackProps<Component>) => (
    <Stack {...(props as StackProps<Component>)} as={Component} />
  );

  const name =
    typeof Component === 'string'
      ? Component
      : ('displayName' in (Component as ComponentType<unknown>) &&
          Component.displayName) ||
        ('name' in (Component as ComponentType<unknown>) && Component.name);
  StackComponent.displayName = name ? `Stack(${name})` : `Stack`;

  return StackComponent;
};
