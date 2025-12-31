# Backend Specification

## Role
The central nervous system. It handles user auth, database connections, and serves APIs to the frontends.

## Tech Stack
- **Runtime:** Node.js (v22.17.0)
- **Framework:** Express.js

## Functions
1.  **SSO Login:** Handle authentication via Google.
2.  **Question Bank API:** Load and serve question banks from the database.
3.  **LLM Integration:** API to call the LLM service (or trigger generation).

## Database Interaction
- Connects to PostgreSQL.