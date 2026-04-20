# Contributing

This guide is for people contributing to Kapwa itself: source code, component examples, documentation, translations, accessibility improvements, design guidance, and issue reports.

For community expectations, read the repository [Code of Conduct](https://github.com/bettergovph/kapwa/blob/main/CODE_OF_CONDUCT.md).

## Before You Start

Kapwa uses:

- Node.js 22.16 or newer
- npm 11 or newer
- Git

If you use `nvm` or `fnm`, switch to the repo's preferred Node.js version before installing dependencies:

```sh
nvm use
```

or:

```sh
fnm use
```

## Fork And Clone

Fork the repository to your GitHub account, then clone your fork:

```sh
git clone git@github.com:<your-github-username>/kapwa.git
cd kapwa
```

Add the main Kapwa repository as `upstream`:

```sh
git remote add upstream git@github.com:bettergovph/kapwa.git
git remote -v
```

Your remotes should now be:

- `origin`, pointing to your fork
- `upstream`, pointing to `bettergovph/kapwa`

GitHub has a step-by-step guide for [forking a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

## Local Setup

Install dependencies:

```sh
npm install
```

Create your local `.env` file from `.env.example`:

```sh
cp .env.example .env
```

The current required variable is:

```text
VITE_STORYBOOK_HOST=http://localhost:6006
```

This value is used by the docs and demo navigation so the local Storybook link points to your Storybook server. If `.env` is missing, Storybook links can look broken even when the app is running correctly.

## Start The Project

Run the docs site and Storybook together:

```sh
npm run dev
```

Default local URLs:

- Docs site: `http://localhost:5173`
- Storybook: `http://localhost:6006`

You can also run each surface separately:

```sh
npm run dev:site
npm run dev:storybook
```

## Where To Make Changes

Use the smallest relevant part of the repo for the change you are making:

- Change `src/lib/kapwa` when updating the component library.
- Change colocated Storybook stories when documenting component behavior, variants, and edge cases.
- Change `docs` when improving contributor guidance, adoption guidance, design principles, or project context.
- Change `vite.config-lib.ts` and `scripts/generate-component-exports.mjs` only when package build or public entrypoint rules need to change.
- Change files under `public/r` when updating generated shadcn registry output.

Read [Architecture](/guides/architecture) if you need more context before editing.

## Sync Often

Pull the latest updates from the main repository before starting new work and before opening a pull request:

```sh
git checkout main
git pull upstream main
git push origin main
```

This keeps your forked `main` branch current with the main Kapwa repository.

## Create A Branch

Create your working branch from your synced `main` branch:

```sh
git checkout main
git pull upstream main
git checkout -b fix/short-description
```

Use a short, descriptive, kebab-case branch name:

```text
<prefix>/<short-description>
```

Examples:

```sh
feature/add-login-form
fix/navbar-responsive-issue
docs/add-contributing-guide
```

## Commit Messages

Kapwa follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

Use this format:

```text
<type>[optional scope]: <short description>
```

Common types:

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation only changes
- `style`: code style or formatting changes with no logic change
- `refactor`: code restructuring with no feature or bug fix
- `test`: adding or updating tests
- `chore`: maintenance tasks, build changes, or dependency updates

Examples:

```sh
feat(button): add primary button variant
fix(navbar): correct mobile menu toggle
docs: clarify local setup
```

## Validate Changes

Use the smallest useful check for the change you made:

```sh
npm run lint
npm run build-lib
npm run build-site
npm run build:storybook
```

Suggested checks:

- Docs-only changes usually need `npm run build-site`.
- Storybook or component example changes usually need `npm run dev:storybook` or `npm run build:storybook`.
- Library changes should at least pass `npm run build-lib` and `npm run lint`.
- Registry changes should be reviewed against the generated files under `public/r`.

## Open A Pull Request

Push your branch to your fork:

```sh
git push -u origin <branch-name>
```

Open a pull request to `bettergovph/kapwa:main`, unless maintainers ask for a different base branch.

In your pull request:

- Use a clear title.
- Explain what changed and why.
- Link related issues, such as `Closes #12`.
- Mention the checks you ran.
- Add screenshots or Storybook links for visual changes.

If `main` changes while your PR is open, update your branch:

```sh
git checkout <branch-name>
git pull upstream main
git push origin <branch-name>
```

Make requested changes by committing to the same branch. The pull request updates automatically.

Maintainers merge pull requests after review. Do not merge your own PR unless a maintainer explicitly says to.

## Share Ideas

For ideas, bugs, and documentation improvements:

- Open an issue in the [Kapwa repository](https://github.com/bettergovph/kapwa/issues/new).
- Join the BetterGov community on [Discord](https://discord.gg/mHtThpN8bT).
- Email [volunteers@bettergov.ph](mailto:volunteers@bettergov.ph) for volunteer questions.

## Related Guides

- [Installation](/guides/installation)
- [Using Storybook](/guides/using-storybook)
- [Architecture](/guides/architecture)
