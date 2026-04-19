# Token Architecture

Kapwa separates primitive tokens, semantic tokens, and integration behavior so the styling system stays easier to maintain, easier to adopt, and easier to explain.

## Core Model

- `kapwa.css` contains the token source of truth
- `index.css` contains the Tailwind-facing integration layer
- primitive tokens generate utilities
- semantic tokens express design intent and support runtime theming

## Why This Matters

- token changes should not require rebuilding a parallel utility catalog
- component styling should prefer semantic meaning when theme behavior matters
- teams should be able to understand the system without tracing multiple overlapping CSS files
