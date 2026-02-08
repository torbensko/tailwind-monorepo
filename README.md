# Tailwind Monorepo Demo

Demonstrates the Tailwind v4 CSS culling problem in monorepos and how to fix it.

## The problem

Tailwind only generates CSS for classes it can statically detect in the files it scans. In a monorepo, a Vite app scanning only its own source will miss classes defined in shared packages — those classes get silently culled from the production build.

## The fix

The app's CSS uses Tailwind v4's `@source` directive to scan the shared package source alongside its own:

```css
@import "tailwindcss";

@source "../../packages/shared/src";
```

This produces a single `@layer utilities` block containing classes from both packages, avoiding cascade conflicts that occur when importing two separate Tailwind CSS builds.

## Structure

```
apps/webapp/          — Vite + React app with local components
packages/shared/      — Shared component library with its own Tailwind classes
```

## Usage

```sh
pnpm install
pnpm dev       # dev server at http://localhost:5173
pnpm build     # production build
```

The debug page renders components from both packages so you can visually verify that all CSS classes are preserved.
