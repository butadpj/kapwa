# Token Architecture

Kapwa uses tokens to keep design and code speaking the same language.

Tokens name reusable decisions such as color, spacing, typography, motion, and state. Instead of handing off one-off values, designers and developers can agree on shared intent: strong text, supporting text, a surface background, a brand action, a focus border.

For the visual token inventory, use Storybook: <a href="/storybook/?path=/story/foundations-tokens--overview" target="_blank" rel="noreferrer">Open Tokens in Storybook</a>.

## What We Decided

- Tailwind CSS v4 is the styling engine.
- Kapwa tokens are CSS custom properties.
- `kapwa.css` is the token source of truth.
- `index.css` is the Tailwind integration layer.
- Components should prefer semantic tokens over raw values.
- Consumers load Kapwa styles through `@bettergov/kapwa/styles`.

## Why Tailwind

Tailwind gives Kapwa a practical shared language for layout, responsive behavior, variants, and component styling.

Kapwa keeps Tailwind's normal utility model available for product teams, then adds Kapwa's own token names and utilities on top. Tailwind is the implementation toolkit; Kapwa is the design language.

## How Tokens Are Organized

Kapwa uses three layers:

- **Primitive tokens** are raw values, such as brand colors, spacing steps, fonts, motion, and shadows.
- **Semantic tokens** describe intent, such as text strength, surfaces, borders, focus, success, danger, warning, and brand states.
- **Integration utilities** make common token combinations easier to use in components, such as Kapwa typography utilities.

Designers should usually talk in semantic intent. Developers should usually implement semantic tokens in components.

## Where Tokens Live

- `src/styles/kapwa.css` contains primitive and semantic tokens.
- `src/styles/index.css` imports Tailwind, imports Kapwa tokens, defines variants, and adds Kapwa utilities.
- `vite.config-lib.ts` copies the CSS files into `dist`.
- `package.json` exposes the published style entrypoint as `@bettergov/kapwa/styles`.

## Working Agreement

When changing tokens or component styling:

- name the design intent before choosing a value
- avoid hard-coded hex values in components
- use semantic tokens for component text, background, border, and state colors
- use Storybook to verify tokens in real component states
- document new patterns when they affect future component work

For installation details, read [Installation](/guides/installation).
