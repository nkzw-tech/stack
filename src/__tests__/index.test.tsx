import { beforeEach, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Stack, { asStack, setDefaultGap, VStack } from '../index.tsx';
import { CSSProperties } from 'react';

beforeEach(() => {
  setDefaultGap(8);
});

test('renders with default props', () => {
  const { container } = render(<Stack>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with gap', () => {
  const { container } = render(<Stack gap={16}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px;"
    >
      Content
    </div>
  `);
});

test('renders with gap=true (uses default)', () => {
  const { container } = render(<Stack gap>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 8px;"
    >
      Content
    </div>
  `);
});

test('renders with vertical layout', () => {
  const { container } = render(<Stack vertical>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with reverse layout', () => {
  const { container } = render(<Stack reverse>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row-reverse; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with vertical reverse layout', () => {
  const { container } = render(
    <Stack reverse vertical>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: column-reverse; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with inline display', () => {
  const { container } = render(<Stack inline>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: inline-flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with wrap', () => {
  const { container } = render(<Stack wrap>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with alignStart', () => {
  const { container } = render(<Stack alignStart>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with alignCenter', () => {
  const { container } = render(<Stack alignCenter>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with alignEnd', () => {
  const { container } = render(<Stack alignEnd>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with center justification', () => {
  const { container } = render(<Stack center>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: center;"
    >
      Content
    </div>
  `);
});

test('renders with safe center justification', () => {
  const { container } = render(
    <Stack center safe>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: safe center;"
    >
      Content
    </div>
  `);
});

test('renders with safe end justification', () => {
  const { container } = render(
    <Stack end safe>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: safe flex-end;"
    >
      Content
    </div>
  `);
});

test('renders with between justification', () => {
  const { container } = render(<Stack between>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between;"
    >
      Content
    </div>
  `);
});

test('renders with end justification', () => {
  const { container } = render(<Stack end>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-end;"
    >
      Content
    </div>
  `);
});

test('renders with flex1', () => {
  const { container } = render(<Stack flex1>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; flex-basis: 0%;"
    >
      Content
    </div>
  `);
});

test('renders with stretch', () => {
  const { container } = render(<Stack stretch>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-grow: 1; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with self alignment start', () => {
  const { container } = render(<Stack self="start">Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-self: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with self alignment center', () => {
  const { container } = render(<Stack self="center">Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-self: center; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with padding and gap', () => {
  const { container } = render(
    <Stack gap={16} padding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding: 16px;"
    >
      Content
    </div>
  `);
});

test('renders with verticalPadding and gap', () => {
  const { container } = render(
    <Stack gap={24} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 24px; padding-bottom: 24px; padding-top: 24px;"
    >
      Content
    </div>
  `);
});

test('renders with horizontalPadding and gap', () => {
  const { container } = render(
    <Stack gap={32} horizontalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 32px; padding-right: 32px; padding-left: 32px;"
    >
      Content
    </div>
  `);
});

test('renders with custom style', () => {
  const { container } = render(
    <Stack style={{ backgroundColor: 'red', margin: 10 }}>Content</Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; background-color: red; margin: 10px;"
    >
      Content
    </div>
  `);
});

test('renders with className', () => {
  const { container } = render(<Stack className="custom-class">Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="custom-class"
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with multiple props combined', () => {
  const { container } = render(
    <Stack alignCenter flex1 gap={16} padding vertical wrap>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; justify-content: flex-start; gap: 16px; padding: 16px; flex-basis: 0%;"
    >
      Content
    </div>
  `);
});

test('passes through HTML attributes', () => {
  const { container } = render(
    <Stack data-testid="stack" onClick={() => {}}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      data-testid="stack"
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('changes default gap when gap=true', () => {
  setDefaultGap(24);
  const { container } = render(<Stack gap={true}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 24px;"
    >
      Content
    </div>
  `);
});

test('supports shrink0', () => {
  const { container } = render(<Stack shrink0>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-shrink: 0; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with around justification', () => {
  const { container } = render(<Stack around>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-around;"
    >
      Content
    </div>
  `);
});

test('renders with evenly justification', () => {
  const { container } = render(<Stack evenly>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-evenly;"
    >
      Content
    </div>
  `);
});

test('renders with baseline alignment', () => {
  const { container } = render(<Stack baseline>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="align-items: baseline; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('renders with rowGap only', () => {
  const { container } = render(<Stack rowGap={16}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; row-gap: 16px;"
    >
      Content
    </div>
  `);
});

test('renders with columnGap only', () => {
  const { container } = render(<Stack columnGap={20}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; column-gap: 20px;"
    >
      Content
    </div>
  `);
});

test('renders with both rowGap and columnGap', () => {
  const { container } = render(
    <Stack columnGap={24} rowGap={16}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; row-gap: 16px; column-gap: 24px;"
    >
      Content
    </div>
  `);
});

test('prefers rowGap/columnGap over gap when both are provided', () => {
  const { container } = render(
    <Stack columnGap={24} gap={8} rowGap={16}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; row-gap: 16px; column-gap: 24px;"
    >
      Content
    </div>
  `);
});

test('renders with verticalPadding=true using gap value', () => {
  const { container } = render(
    <Stack gap={16} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding-bottom: 16px; padding-top: 16px;"
    >
      Content
    </div>
  `);
});

test('renders with horizontalPadding=true using gap value', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding-right: 16px; padding-left: 16px;"
    >
      Content
    </div>
  `);
});

test('renders with verticalPadding=true using rowGap value', () => {
  const { container } = render(
    <Stack rowGap={20} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; row-gap: 20px; padding-bottom: 20px; padding-top: 20px;"
    >
      Content
    </div>
  `);
});

test('renders with horizontalPadding=true using columnGap value', () => {
  const { container } = render(
    <Stack columnGap={24} horizontalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; column-gap: 24px; padding-right: 24px; padding-left: 24px;"
    >
      Content
    </div>
  `);
});

test('renders with specific verticalPadding value', () => {
  const { container } = render(
    <Stack gap={16} verticalPadding={32}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding-bottom: 32px; padding-top: 32px;"
    >
      Content
    </div>
  `);
});

test('renders with specific horizontalPadding value', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding={28}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding-right: 28px; padding-left: 28px;"
    >
      Content
    </div>
  `);
});

test('renders with padding=true overriding other padding props', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding={28} padding verticalPadding={32}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding: 16px;"
    >
      Content
    </div>
  `);
});

test('renders with padding numeric value overriding other padding props', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding padding={40} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; gap: 16px; padding: 40px;"
    >
      Content
    </div>
  `);
});

test('renders with complex gap and padding combination', () => {
  const { container } = render(
    <Stack columnGap={20} horizontalPadding={32} rowGap={12} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; row-gap: 12px; column-gap: 20px; padding: 12px 32px;"
    >
      Content
    </div>
  `);
});

test('it renders with custom component', () => {
  const { container } = render(
    <Stack as="a" href="https://nkzw.tech">
      Content
    </Stack>,
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      href="https://nkzw.tech"
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </a>
  `);
});

test('it works with custom Link component', () => {
  type Route = '/banana' | '/apple';

  const Link = ({
    children,
    to,
    ...props
  }: {
    children: React.ReactNode;
    style?: CSSProperties;
    to: Route;
  }) => (
    <a href={to} {...props}>
      {children}
    </a>
  );

  const { container } = render(
    <Stack as={Link} to="/banana">
      Content
    </Stack>,
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      href="/banana"
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </a>
  `);
});

test('does not work if the component does not have a style prop', () => {
  const NoStyle = ({
    children,
    to,
  }: {
    children: React.ReactNode;
    to: string;
  }) => <a href={to}>{children}</a>;

  const { container } = render(
    // @ts-expect-error: NoStyle does not accept style prop.
    <Stack as={NoStyle} to="/banana">
      Content
    </Stack>,
  );

  expect(container.firstChild).toMatchInlineSnapshot(
    `
    <a
      href="/banana"
    >
      Content
    </a>
  `,
  );

  // @ts-expect-error
  asStack(NoStyle);
});

test('exports a VStack component that is vertical by default', () => {
  const { container } = render(<VStack>Content</VStack>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('VStack does not support a vertical prop', () => {
  // @ts-expect-error
  const { container } = render(<VStack vertical={false}>Content</VStack>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('supports the `ref` prop', () => {
  const ref = { current: null };
  const { container } = render(<Stack ref={ref}>Content</Stack>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Content
    </div>
  `);
});

test('supports an `asStack` function to turn a component into a Stack', () => {
  const Link = ({
    children,
    className,
    style,
    to,
  }: {
    children: React.ReactNode;
    className: string;
    style?: CSSProperties;
    to: string;
  }) => (
    <a className={className} href={to} style={style}>
      {children}
    </a>
  );

  const StackLink = asStack(Link);

  const { container } = render(
    <StackLink className="test-class" to="https://nakazawa.tech">
      Nakazawa Tech
    </StackLink>,
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      class="test-class"
      href="https://nakazawa.tech"
      style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;"
    >
      Nakazawa Tech
    </a>
  `);

  // @ts-expect-error
  const tsErrorA = <StackLink className="test-class">Nakazawa Tech</StackLink>;

  // @ts-expect-error
  const tsErrorB = (
    // @ts-expect-error
    <StackLink as="div" className="test-class" to="Test">
      Nakazawa Tech
    </StackLink>
  );
});
