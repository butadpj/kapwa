# Installation

Use the npm package for application adoption.

That keeps consumers connected to future Kapwa component, style, and token updates through normal package upgrades. The shadcn registry path copies component source into the consumer app, so those copied files do not automatically receive future design system fixes.

## Recommended: npm Package

Install Kapwa:

```bash
npm install @bettergov/kapwa@latest
```

If you want animation utilities:

```bash
npm install -D tw-animate-css
```

Add Kapwa to your CSS entrypoint:

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@source './node_modules/@bettergov/kapwa';
@import '@bettergov/kapwa/styles';
```

The `@bettergov/kapwa/styles` import loads Kapwa tokens and utilities. The `@source` line is required so Tailwind can detect the classes used inside Kapwa's published components.

Import components from the package:

```tsx
import { Button } from '@bettergov/kapwa/button';
```

You can also import from the root package export:

```tsx
import { Button } from '@bettergov/kapwa';
```

## Not Recommended Yet: shadcn Registry

The shadcn registry path is not the main installation path for Kapwa right now.

Use the registry only if you intentionally want to copy component source into your app and own those files yourself. That tradeoff matters: once copied, the app does not automatically receive future Kapwa component fixes, accessibility improvements, token changes, or visual updates through a package upgrade.

The current registry is also incomplete for normal consumer use. It can copy registry item files, but it does not yet provide a Kapwa `registry:base` or `registry:style` item that writes the shared design tokens and global CSS into the consuming app. Without the package style import, copied components can miss required Kapwa styles.

If you are testing the registry, the app still needs the Kapwa CSS entrypoint:

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@source './node_modules/@bettergov/kapwa';
@import '@bettergov/kapwa/styles';
```

## Fonts

Kapwa expects consuming applications to load fonts on their side.

That keeps font loading aligned with the host framework and gives teams control over how fonts are hosted, preloaded, subsetted, or replaced. If you need implementation examples, refer to the project [README](https://github.com/bettergovph/kapwa/blob/main/README.md).

## Where To Look Next

- Use [Using Storybook](/guides/using-storybook) to choose components and inspect states.
- Use [Architecture](/guides/architecture) if you need to understand how the package and docs are structured.
- Use [Contributing](/guides/contributing) if you need to work on Kapwa itself instead of only consuming it.
