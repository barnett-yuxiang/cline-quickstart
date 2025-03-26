# Cline Quickstart Project

A Next.js 14+ application with App Router, TypeScript, and Supabase backend.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript 5+
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Version Control**: GitHub
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand

## Project Structure

```
/src
  /app         # Next.js App Router pages
  /components  # Shared React components
  /lib         # Utility functions
  /types       # TypeScript types
  /styles      # Global styles
/supabase
  /migrations  # Database migrations
  /seed        # Seed data
  /functions   # Database functions
/public        # Static assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables (see `.env.example`)
4. Run the development server:
```bash
npm run dev
```

## Development

- Follow TypeScript strict mode
- Use ESLint and Prettier for code quality
- Create small, focused components
- Prefer server components where possible
- Use feature branches for new work

## Testing

- Unit tests: `npm test`
- Component tests: Storybook
- E2E tests: Playwright
- Target: 80% test coverage

## Database Migrations

Migrations in `/supabase/migrations` should:
- Use sequential numbering (001_, 002_, etc.)
- Include descriptive names
- Contain comments explaining changes
- Include down migrations when appropriate

## Deployment

- PRs auto-deploy to Vercel preview
- Main branch auto-deploys to production
- All PRs require:
  - Code review
  - Passing CI checks
  - Updated documentation

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Open a PR with:
   - Description of changes
   - Screenshots if applicable
   - Updated tests
4. Get approval before merging
