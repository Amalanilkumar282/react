React Todo — Basics

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

What you will find in this project

- `index.html` — single HTML entry file.
- `src/main.jsx` — React entry that mounts `App`.
- `src/App.jsx` — top-level component that holds state and handlers.
- `src/components/TodoForm.jsx` — input form for adding todos.
- `src/components/TodoList.jsx` — renders a list of todos.
- `src/components/TodoItem.jsx` — single todo row (toggle/delete).

Beginner concepts explained (brief)

- Components: Reusable UI pieces (functions that return JSX).
- Props: Data passed into components (e.g., `todos`, `onAdd`).
- State: Component-held values that change over time (`useState`).
- Hooks: `useState` for state, `useEffect` for side-effects (we use it to persist to `localStorage`).
- Lifting state up: `App` keeps `todos` state and passes handlers down as props.
- Event handling: Forms and buttons call functions to update state.

Why this structure?

Keeping state in `App` and passing handlers avoids duplication and makes the app predictable. Each component focuses on a single responsibility (adding, listing, rendering one item).

If you want, I can now:

- Walk through each file line-by-line and explain it simply.
- Run the app here (if you want me to run `npm install` and `npm run dev`).
- Add more features (edit todo, filters, tests).
