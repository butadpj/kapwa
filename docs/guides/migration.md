# Migration

Kapwa is designed to help teams move toward a clearer, more consistent approach to digital public service design.

This migration path is not only about code structure. It is about giving products a stronger foundation for clarity, consistency, and trust.

## Current Direction

- `kapwa.css` is the token source of truth
- `index.css` is the Tailwind-facing integration layer
- semantic tokens should drive theme-aware component styling
- Storybook is the component reference
- VitePress is where migration guidance and design rationale live

## What This Means For Teams

- adopt Kapwa through the documented CSS entrypoint and package exports
- prefer semantic styling when component intent should adapt by theme
- use Storybook for examples, states, and component-level usage
- use this site for principles, architecture, and implementation guidance

## What Success Looks Like

Teams using Kapwa should be able to:

- ship more consistent public-facing interfaces
- explain design choices more clearly
- reuse tokens and components without guesswork
- reduce the friction people experience when using online government services

## Technical Direction

At the implementation level, the direction remains consistent:

- keep `kapwa.css` as the token source of truth
- keep `index.css` as the Tailwind-facing integration layer
- prefer semantic tokens where component meaning should adapt by theme
- keep component examples and states in Storybook
