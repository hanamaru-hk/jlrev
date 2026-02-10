# Project Overview & Workflow

## 1. Project Overview
**Goal:** Create a system that autonomously generates question banks using LLMs and serves them to users via Web and Mobile apps.
**Structure:** Monorepo.

## 2. Development Workflow
*   **Monorepo Tooling:** Turborepo
*   **Conventions:**
    *   Shared types between Backend and Frontend (likely using zod).
    *   Unified linting rules.

## 3. Sub Repository Structure
*   apps/
    root of the monorepo
*   apps/mobile/
*   apps/web/
*   apps/api/
*   apps/cronjobs/
*   apps/databases/
*   apps/shared/
    shared code between all subrepos

