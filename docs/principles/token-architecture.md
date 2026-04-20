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
- Consumers load Kapwa styles through `@bettergov/kapwa/kapwa.css`.

## Why Tailwind

Tailwind gives Kapwa a practical shared language for layout, responsive behavior, variants, and component styling.

Kapwa keeps Tailwind's normal utility model available for product teams, then adds Kapwa's design language through CSS tokens.

## Token Layers

Kapwa uses two token layers:

- **Primitive tokens** are raw values, such as brand colors, spacing steps, fonts, motion, and shadows.
- **Semantic tokens** describe intent, such as text strength, surfaces, borders, focus, success, danger, warning, and brand states.

Primitive tokens live in `@theme static` so Tailwind v4 can generate utilities from them:

```css
@theme static {
  --color-kapwa-brand-600: #005df5;
}
```

That gives developers utilities such as `bg-kapwa-brand-600` without manually writing `.bg-kapwa-brand-600`.

Semantic tokens live in `:root` and theme scopes because they are runtime contracts:

```css
:root {
  --color-kapwa-bg-brand-default: var(--color-kapwa-brand-600);
}

.dark {
  --color-kapwa-bg-brand-default: var(--color-kapwa-brand-500);
}
```

Components should prefer semantic tokens so themes can change without rewriting component classes.

## Where Tokens Live

- `src/styles/kapwa.css` is the token source of truth.
  Put primitive `@theme` tokens, semantic `:root` tokens, and theme overrides like `.dark` here.
- `src/styles/index.css` is the Tailwind integration layer.
  Put Tailwind imports, Kapwa token imports, variants, and curated composed utilities here.
- `vite.config-lib.ts` copies the CSS files into `dist`.
- `package.json` exposes the published style entrypoint as `@bettergov/kapwa/kapwa.css`.

Manual `@utility` definitions belong in `index.css` only when Tailwind cannot derive the pattern from one token. Typography presets are a good example because they combine font family, size, weight, line height, and letter spacing.

## Working Agreement

When changing tokens or component styling:

- name the design intent before choosing a value
- avoid hard-coded hex values in components
- use semantic tokens for component text, background, border, and state colors
- let Tailwind generate utilities from primitive `@theme` tokens
- add manual utilities only for composed patterns that Tailwind cannot generate from one token
- use Storybook to verify tokens in real component states
- document new patterns when they affect future component work

For installation details, read [Installation](/guides/installation).
