# Contributing

Thanks for your interest in improving this project. This repository powers
the personal portfolio site for Naomi Waya. Contributions such as bug fixes,
accessibility improvements, and performance optimizations are welcome.

## Getting Started

1. Fork the repository and clone your fork:

   ```bash
   git clone https://github.com/<your-username>/NW.git
   cd NW
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Workflow

- Create a branch off `main` for your change:

  ```bash
  git checkout -b fix/short-description
  ```

- Keep changes focused. Prefer small, reviewable pull requests over large
  ones that touch many unrelated areas.
- Match the existing code style (TypeScript, Tailwind CSS utility classes,
  functional React components).
- Reuse existing primitives in `components/ui` and helpers in `lib/` and
  `utils/` instead of duplicating logic.

## Before Submitting a Pull Request

Run the following checks locally and make sure they pass:

```bash
npm run lint
npm run build
```

Also verify in the browser that:

- The change works in both light and dark mode.
- The layout stays responsive on mobile, tablet, and desktop widths.
- No console errors or warnings are introduced.

## Commit Messages

Use clear, descriptive commit messages, for example:

```
fix: correct contact form validation message
feat: add case study page for job board project
```

## Reporting Issues

When filing an issue, please include:

- A clear description of the problem or suggestion.
- Steps to reproduce (for bugs).
- Screenshots, if the issue is visual.
- Browser and OS, if relevant.

## Code of Conduct

Be respectful and constructive in all discussions, issues, and pull requests.
