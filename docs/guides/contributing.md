# Contributing

This page is the fastest path for engineers contributing to Kapwa itself.

For broader community expectations, read the repository [Contributing Guide](https://github.com/bettergovph/kapwa/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/bettergovph/kapwa/blob/main/CODE_OF_CONDUCT.md). This page focuses on the repo-specific setup and workflow that contributors usually need first.

## Local Setup

Kapwa currently uses:

- Node.js 22 or newer
- npm

Install dependencies and copy the local environment file:

```bash
npm install
cp .env.example .env
```

The current `.env.example` sets:

```bash
VITE_STORYBOOK_HOST=http://localhost:6006
```

## Start The Project

Use the script that matches the surface you are working on:

```bash
npm run dev
```

This starts both:

- VitePress docs
- Storybook on port `6006`

You can also run them separately:

```bash
npm run dev:site
npm run dev:storybook
```

## Common Tasks

Use these commands when validating changes:

```bash
npm run lint
npm run build-lib
npm run build-site
npm run build:storybook
```

Use the smallest useful check for the change you made:

- docs-only changes usually need `npm run build-site`
- Storybook or component-example changes usually need `npm run dev:storybook` or `npm run build:storybook`
- library changes should at least pass `npm run build-lib` and `npm run lint`

## Where To Make Changes

As a rule of thumb:

- Change `src/lib/kapwa` when you are changing the package.
- Change colocated stories when you are documenting component behavior, variants, and edge cases.
- Change `docs` when you are improving contributor guidance, adoption guidance, or project context.
- Change `vite.config-lib.ts` and `scripts/generate-component-exports.mjs` only when the public package entrypoint rules need to change.

## Contribution Flow

Use this sequence for most changes:

1. Find the right place to edit using [Architecture](/guides/architecture).
2. Run the dev surface you need.
3. Make the change.
4. Run lint and the smallest relevant build command.
5. Open a pull request using the repository contribution process.
