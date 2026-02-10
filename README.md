# JLREV (Question Bank Generator)

A system that autonomously generates question banks using LLMs and serves them via Web and Mobile applications.

## Project Structure

This is a monorepo managed by [Turborepo](https://turbo.build/).

- `apps/api`: Backend Express API
- `apps/web`: React Web Frontend
- `apps/mobile`: Flutter Mobile App (planned)
- `apps/cronjobs`: Background jobs for LLM processing (planned)
- `packages/shared`: Shared code
- `packages/database`: Database schema and utilities

## Documentation

Comprehensive documentation can be found in the `docs` directory:

- [Project Overview](docs/spec/project.md)
- [Backend API](docs/spec/backend.md)
- [Database](docs/spec/database.md)
- [Frontend](docs/spec/frontend.md)

## Development

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```