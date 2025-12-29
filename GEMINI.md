# Project: jlrev (Question Bank Generator)

## 1. Project Overview
**Goal:** Create a system that autonomously generates question banks using LLMs and serves them to users via Web and Mobile apps.
**Structure:** Monorepo.

## 2. High-Level Architecture
The system consists of 4 distinct parts working together:

### A. Backend APIs (`/backend`)
*   **Role:** The central nervous system. It handles user auth, database connections, and serves APIs to the frontends.
*   **Tech Stack:** [Please Specify: e.g., Python FastAPI / Node.js Express / Go]
*   **Database:** [Please Specify: e.g., PostgreSQL / MongoDB]

### B. Cronjobs / Generators (`/cronjobs`)
*   **Role:** The "Factory". Runs periodically to generate new content.
*   **Workflow:**
    1.  Read configuration/topics.
    2.  Pull prompts from `/prompts`.
    3.  Call LLM APIs (Gemini/OpenAI).
    4.  Validate JSON output.
    5.  Insert into Backend Database.
*   **Tech Stack:** [Please Specify: likely Python or TypeScript]

### C. Frontends (`/frontend`)
*   **Web (`/frontend/web`):**
    *   **Tech:** **React** (Vite/Next.js).
    *   **Focus:** Admin dashboard for reviewing questions + User web portal.
*   **App (`/frontend/app`):**
    *   **Tech:** **Flutter**.
    *   **Focus:** Native mobile experience for end-users to practice questions.

### D. Prompts (`/prompts`)
*   **Role:** Version control for the "Intelligence" of the app.
*   **Content:** Text/Markdown files containing the system prompts used by the Cronjobs.

## 3. Development Workflow
*   **Monorepo Tooling:** [e.g., Turborepo / Nx / Lerna / Workspaces]
*   **Conventions:**
    *   Shared types between Backend and Frontend?
    *   Unified linting rules?