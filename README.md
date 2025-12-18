# Vite ReactTS Project Template
This is a React + TypeScript project built using **Vite**. It includes modern libraries for state management, routing, styling, and developer tools.

---

## Project Setup
**Scripts:**
- `dev` – Runs the development server using Vite.
- `build` – Compiles TypeScript and builds the production bundle.
- `lint` – Runs ESLint for code quality checks.
- `preview` – Previews the production build.

---

## Dependencies
These packages are required to run the project:
### Core Libraries
- **react** & **react-dom** – The core React library and DOM renderer.
- **react-router-dom** – Routing library for React apps.
- **zustand** – Lightweight state management library.
- **tanstack/react-query** – Data fetching and caching library.
- **tanstack/react-query-devtools** – Devtools for React Query.
- **clsx** – Utility for conditionally joining classNames.
- **class-variance-authority** – Helps manage complex Tailwind CSS class variants.
- **tailwind-merge** – Merges Tailwind CSS classes intelligently.

---

## DevDependencies
These packages are used for development, type checking, linting, and build tooling:

### Build & Tooling
- **vite** – Fast frontend build tool.
- **vitejs/plugin-react** – Enables React support in Vite.
- **typescript** – TypeScript language support.
- **types/node**, **types/react**, **types/react-dom** – Type definitions for Node and React.

### Styling
- **tailwindcss** – Utility-first CSS framework.
- **tailwindcss/vite** – Tailwind plugin for Vite.
- **tw-animate-css** – Prebuilt CSS animations for Tailwind.

### Linting & Code Quality
- **eslint** – Linting utility for JavaScript/TypeScript.
- **eslint/js** – ESLint core rules for JavaScript.
- **eslint-plugin-react-hooks** – Enforces best practices for React Hooks.
- **eslint-plugin-react-refresh** – Supports React Fast Refresh in ESLint.
- **typescript-eslint** – ESLint plugin for TypeScript.
- **globals** – Provides predefined global variables for linting.

---

## Recommended Usage
1. Install dependencies:
```bash
npm install
```
2. Start development server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```
4. Preview production build:
```bash
npm run preview
```