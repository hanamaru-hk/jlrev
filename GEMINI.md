# Project: jlrev (Question Bank Generator)

## 1. Project Overview
**Goal:** Create a system that autonomously generates question banks using LLMs and serves them to users via Web and Mobile apps.
**Structure:** Monorepo.

## 2. High-Level Architecture
The system consists of 5 distinct parts working together:

### A. Backend APIs (`/backend`)
*   **Role:** The central nervous system. It handles user auth, database connections, and serves APIs to the frontends.
*   **Tech Stack:** Nodejs + expressjs
*   **Functions:**
    1. API for SSO Login (google)
    2. API loading question bank from database 
    3. API call the llm of the 
*   **Database:** PostgreSQL

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
*   Both Web and App follow the same layout design

### D. Prompts (`/prompts`)
*   **Role:**  the prompts when the cronjob is run.
*   **Content:** json which the llm api accepts.

### E. database
* **Role:** store the structures of the database
*    **Content:** files of the store proc which is used to create the databases

## 3. Development Workflow
*   **Monorepo Tooling:** Turborepo
*   **Conventions:**
    *   Shared types between Backend and Frontend using zod?
    *   Unified linting rule