# Project Overview

A full-stack web application built with React (frontend) and Express.js (backend), served together on a single port.

## Architecture

- **Frontend**: React 18 + Vite + TailwindCSS + shadcn/ui components
- **Backend**: Express.js (TypeScript via tsx)
- **Routing**: Wouter (client-side), Express routes under `/api`
- **State Management**: TanStack React Query
- **Database**: Drizzle ORM with PostgreSQL (schema in `shared/schema.ts`), currently using in-memory storage
- **Auth**: Passport.js (configured but not fully wired)
- **Build**: Vite for frontend, esbuild for server

## Project Structure

```
client/         React frontend source
  src/
    App.tsx     Root component with routing
    pages/      Page components (home, not-found)
    components/ UI components (shadcn/ui)
    hooks/      Custom React hooks
    lib/        Utilities (queryClient, etc.)
    providers/  Context providers (theme)
server/         Express backend
  index.ts     Entry point, starts on port 5000
  routes.ts    API route registration
  storage.ts   In-memory storage (IStorage interface)
  vite.ts      Vite dev middleware integration
shared/         Shared types/schema
  schema.ts    Drizzle ORM schema (users table)
```

## Development

- Dev server runs on port 5000 (Express serves Vite middleware in dev mode)
- `npm run dev` starts the full stack in development mode
- `npm run build` builds both frontend (Vite) and backend (esbuild)
- `npm run start` runs the production build

## Deployment

- Target: autoscale
- Build: `npm run build`
- Run: `node dist/index.js`
