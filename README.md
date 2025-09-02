# `@nkzw/stack`

_Zero-dependency, type-safe Stack component for streamlining flexbox usage in React & React Native._

You always end up with visual clutter and boilerplate when using flexbox, no matter which styling solution you choose. `<Stack />` supports all flexbox properties directly as named props, making your flexbox components visually cleaner and easier to read. For most use cases, you'll only need prop shorthands like `gap`, `vertical`, `center`, and `padding`:

```tsx
import Stack from '@nkzw/stack';

const Component = () => (
  <Stack vertical gap center>
    <div>Apple</div> {/* Works on the web */}
    <View>Banana</View> {/* Works in React Native */}
    <Item>Kiwi</Item>
  </Stack>
);
```

Other benefits include:

- **Minimal API:** Easily control direction, spacing, alignment, and more using shorthand props.
- **Sensible Defaults:** Ships with sensible cross-platform defaults for React & React Native.
- **Consistent spacing:** Enforces 4px grid for gap & padding values via TypeScript.
- **Flexible padding:** Automatically derives padding from gap or accepts custom values.
- **Polymorphic by design:** Render as any HTML or custom component via the `as` prop while maintaining full type safety.

## Installation

```bash
npm install @nkzw/stack
```

## Flexbox Defaults

Using a `<Stack />` component without any props renders it like this:

```tsx
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
  }}
/>
```

Unlike the default flexbox styles on web, `justify-content` is using `flex-start` instead of `start`. Flexbox on web and on React Natie use different default values for `flexDirection`, `alignContent` and `flexShrink`. `<Stack />` uses these defaults for both platforms:

- `flexDirection: 'row'`
- `alignContent: 'flex-start'`

`flexShrink` is set to `1` by default on web and `0` on React Native.

## Props

Props for `<Stack /> are meant to be mostly static and passed as shorthand only, without any values.

```tsx
type StackProps = {
  alignCenter?: boolean; // `align-items: center`
  alignEnd?: boolean; // `align-items: flex-end`
  alignStart?: boolean; // `align-items: center`
  around?: boolean; // `justify-content: space-around`
  as: ElementType; // The element to render, defaults to `<div />` on the web, and `<View />` on React Native.
  baseline?: boolean; // `align-items: baseline`
  between?: boolean; // `justify-content: space-between`
  center?: boolean; // `justify-content: center`
  children?: ReactNode;
  columnGap?: Gap; // `column-gap: <Gap>`
  content?: AlignContent; // `align-content: start | end | center | stretch | space-between | space-around | space-evenly`
  end?: boolean; // `justify-content: flex-end`
  evenly?: boolean; // `justify-content: space-evenly`
  flex1?: boolean; // `flex: 1`
  gap?: Gap; // `gap: <Gap>`
  horizontalPadding?: Gap; // `padding-left` and `padding-right` set to the same value as `gap` when boolean or a <Gap> value.
  inline?: boolean; // `display: inline-flex` (*web only*)
  padding?: Gap; // `padding: <Gap>` or `padding: 8px` when `gap` is `true`.
  reverse?: boolean; // `flex-direction: row-reverse` or `flex-direction: column-reverse` when `vertical` is `true`.
  rowGap?: Gap; // `row-gap: <Gap>`
  safe?: boolean; // When used with `center` or `end`: `justify-content: safe center | safe flex-end`
  self?: AlignSelf; // `align-self: center | end | start | stretch | baseline`
  shrink0?: boolean; // `flex-shrink: 0`
  stretch?: boolean; // `flex-grow: 1`
  vertical?: boolean; // `flex-direction: column`
  verticalPadding?: Gap; // `padding-top` and `padding-bottom` set to the same value as `gap` when true or a <Gap> value.
  wrap?: boolean; // `flex-wrap: wrap`
};
```

## Usage

### Vertical Layout and Gap

```tsx
import Stack from '@nkzw/stack';

// Horizontal layout (default).
<Stack gap={16}>
  <div>Apple</div>
  <div>Banana</div>
  <div>Kiwi</div>
</Stack>

// Vertical layout.
<Stack vertical gap={16}>
  <div>Apple</div>
  <div>Banana</div>
  <div>Kiwi</div>
</Stack>

// Using boolean gap (uses default gap of 8px).
<Stack vertical gap>
  <div>Apple</div>
  <div>Banana</div>
</Stack>
```

Or with React Native:

```tsx
<Stack vertical gap={16}>
  <Text>Apple</Text>
  <Text>Banana</Text>
  <Text>Kiwi</Text>
</Stack>
```

If you are using NativeWind, `<Stack />` will automatically support `className`:

```tsx
<Stack vertical gap={16} className="rounded-md border border-gray-300">
  <Text>Apple</Text>
  <Text>Banana</Text>
  <Text>Kiwi</Text>
</Stack>
```

There is also a shorthand for vertical stacks:

```tsx
import { VStack } from '@nkzw/stack';

<VStack gap={16}>
  <div>Apple</div>
  <div>Banana</div>
  <div>Kiwi</div>
</VStack>;

// Same as `<Stack vertical gap={16}>`.
```

### Padding

```tsx
// Add padding equal to the gap.
<Stack gap={16} padding>
  <div>Content</div>
</Stack>

// Custom padding value.
<Stack gap={16} padding={24}>
  <div>Content</div>
</Stack>

// Padding using the default gap value.
<Stack gap padding>
  <div>Content</div>
</Stack>
```

## Advanced Gap Control

### Row and Column Gaps

```tsx
// Different gaps for rows and columns.
<Stack rowGap={8} columnGap={16}>
  <div>Apple</div>
  <div>Banana</div>
  <div>Kiwi</div>
  <div>Item 4</div>
</Stack>

// Vertical layout with row gap.
<Stack vertical rowGap={20}>
  <div>Apple</div>
  <div>Banana</div>
</Stack>
```

### Directional Padding

```tsx
// Vertical padding only.
<Stack gap={16} verticalPadding>
  <div>Content</div>
</Stack>

// Horizontal padding only.
<Stack gap={16} horizontalPadding>
  <div>Content</div>
</Stack>

// Custom directional padding.
<Stack verticalPadding={24} horizontalPadding={32}>
  <div>Content</div>
</Stack>

// Mix with gaps.
<Stack rowGap={12} columnGap={20} verticalPadding horizontalPadding={32}>
  <div>Content</div>
</Stack>
```

## Justification (Main Axis)

```tsx
// Center items.
<Stack center>
  <div>Centered</div>
</Stack>

// Align to end.
<Stack end>
  <div>At end</div>
</Stack>

// Space around items.
<Stack around>
  <div>Apple</div>
  <div>Banana</div>
</Stack>

// Align between.
<Stack between>
  <div>Between</div>
</Stack>

// Space evenly.
<Stack evenly>
  <div>Apple</div>
  <div>Banana</div>
</Stack>

// Space between (default).
<Stack>
  <div>Apple</div>
  <div>Banana</div>
</Stack>
```

On web, the `safe` prop is supported too:

```tsx
// Renders with `justify-content: safe center`.
<Stack center safe>
  <div>Centered</div>
</Stack>

// Renders with `justify-content: safe flex-end`.
<Stack end safe>
  <div>At end</div>
</Stack>
```

## Alignment (Cross Axis)

```tsx
// Center align items.
<Stack alignCenter>
  <div>Centered</div>
</Stack>

// Align to start.
<Stack alignStart>
  <div>At start</div>
</Stack>

// Align to end.
<Stack alignEnd>
  <div>At end</div>
</Stack>

// Baseline alignment.
<Stack baseline>
  <div style={{ fontSize: '12px' }}>Small</div>
  <div style={{ fontSize: '24px' }}>Large</div>
</Stack>
```

## Flex Properties

```tsx
// Take all available space.
<Stack flex1>
  <div>Full width/height</div>
</Stack>

// Grow to fill container.
<Stack stretch>
  <div>Stretched</div>
</Stack>

// Prevent shrinking.
<Stack shrink0>
  <div>Won't shrink</div>
</Stack>
```

## Self Alignment

```tsx
// Align self to center.
<Stack self="center">
  <div>Self-centered</div>
</Stack>

// Other self alignment options.
<Stack self="start">
  <div>Self at start</div>
</Stack>

<Stack self="end">
  <div>Self at end</div>
</Stack>

<Stack self="stretch">
  <div>Self stretched</div>
</Stack>
```

## Content Alignment

```tsx
<Stack content="center">
  <div>Content</div>
</Stack>

<Stack content="start">
  <div>Content</div>
</Stack>
```

## Layout Options

```tsx
// Inline flex.
<Stack inline>
  <div>Inline flex</div>
</Stack>

// Reverse direction.
<Stack reverse>
  <div>Apple (appears last)</div>
  <div>Banana (appears first)</div>
</Stack>

// Vertical reverse.
<Stack vertical reverse>
  <div>Apple (appears at bottom)</div>
  <div>Banana (appears at top)</div>
</Stack>

// Wrap (`flex-wrap: nowrap` is the default).
<Stack wrap>
  <div>Apple</div>
  <div>Banana</div>
  <div>Kiwi</div>
</Stack>
```

## Gap Values

Available gap values: `1`, `2`, `4`, `8`, `12`, `16`, `20`, `24`, `28`, `32`, `36`, `40`, `44`, `48`, or `true` for default.

You can set the default gap value globally:

```tsx
import { setDefaultGap } from '@nkzw/stack';

setDefaultGap(12); // Now gap={true} will use 12px.
```

## Render as different elements or custom commponents

```tsx
<Stack as="section" gap={16}>
  <div>Content</div>
</Stack>
```

Stack carries over component props from custom components in a type-safe manner:

```tsx
<Stack as="nav" center gap={24}>
  <Stack as={Link} to="/home">Home</Stack>
  <Stack as={Link} to="/about">About</a>
</Stack>
```

## Use `asStack` to convert any component to a Stack

You can use the `asStack` utility to convert any component into a Stack component, allowing you to use all Stack props seamlessly:

```tsx
import { asStack } from '@nkzw/stack';

const Link = asStack(({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
));

<Link to="/home" center gap={16}>
  Home
</Link>;
```

_**Note:** Components wrapped with `asStack` or when used with `as` must support a `style` prop._

## Examples

### Card Layout

```tsx
<Stack
  vertical
  gap={16}
  padding={24}
  style={{ border: '1px solid #ccc', borderRadius: '16px' }}
>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
  <Stack gap={8}>
    <button>Action 1</button>
    <button>Action 2</button>
  </Stack>
</Stack>
```

### Navigation Bar

```tsx
<Stack alignCenter padding={16} style={{ backgroundColor: '#f5f5f5' }}>
  <h1>Logo</h1>
  <Stack gap={24} flex1 center>
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </Stack>
  <button>Sign In</button>
</Stack>
```

### Form Layout

```tsx
<Stack as="form" vertical gap={16} padding={24}>
  <Stack vertical gap>
    <label>Name</label>
    <input type="text" />
  </Stack>
  <Stack vertical gap>
    <label>Email</label>
    <input type="email" />
  </Stack>
  <Stack gap end>
    <button type="button">Cancel</button>
    <button type="submit">Submit</button>
  </Stack>
</Stack>
```
