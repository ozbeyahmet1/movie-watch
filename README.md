This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Run build:

```bash
yarn build
```

## Commit Standart

`commitlint` was used to enforce a certain standard for commits. Commits that do not follow the format
`[commit type: commit message]` will be flagged by commit lint. The possible commit types are as follows:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## Project File Structure and Functions

The fundamental file structure and component types used in this project are as follows:

```bash
.
├── ...
├── src
| ├── components
|   ├── Button
|     ├── index.tsx
|     ├── button.module.scss
|     ├── button.test.tsx
|     ├── button.stories.tsx
| ├── views
|   ├── Homepage
|     ├── index.tsx
|     ├── homepage.module.scss
| ├── pages
|   ├── index.tsx
└── ...
```

### `components`

This folder contains the core components of the project. Each component serves as a location where its structure is
created, tests are written, and prototyping is done using Storybook.

#### Example: `Button`

- `index.tsx`: The fundamental implementation of the Button component.
- `button.module.scss`: The style file for the Button component.
- `button.test.tsx`: The test file for the Button component.
- `button.stories.tsx`: The Storybook prototype file for the Button component.

### `views`

This folder is where components that create page views are combined, and the overall style of the page is designed.

#### Example: `Homepage`

- `index.tsx`: The main application file for the Homepage component.
- `homepage.module.scss`: The style file for the Homepage component.

### `pages`

This folder contains the main component that renders the entire page using components from the `views` folder.

#### Example: `index.tsx`

- `index.tsx`: The main file that renders the page.

This structure organizes the project files in a logical manner and describes the function of each component. This file
structure makes the project more understandable and well-organized for development and maintenance purposes.

## Naming Convention

In this project, we adhere to the BEM (Block Element Modifier) methodology as our class naming convention. BEM is a
methodology that helps us write more organized and maintainable CSS by naming CSS classes in a specific structure.

### Usage Examples

BEM includes the following basic rules:

- **Block:** Represents the main structure. For example, `button` or `header`.
- **Element:** Represents sub-elements within a block. For example, the `icon` inside a `button` block.
- **Modifier:** Modifies the appearance or behavior of a block or element. For example, the `primary` or `large`
  modifiers for a `button` block.

Example class naming:

```html
<div class="button button--primary">
  <span class="button__text">Click me</span>
</div>
```
