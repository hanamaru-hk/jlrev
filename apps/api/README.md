
# API Service

This is the backend API service for the JLPT revision app.

## Project Structure

- `src/controllers`: Request handlers
- `src/routes`: API route definitions
- `src/middleware`: Express middleware
- `src/db.ts`: Database connection setup
- `src/index.ts`: Application entry point

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Configure environment variables:
    Copy `.env.example` to `.env` and update the values.
    ```bash
    cp .env.example .env
    ```

3.  Run development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## API Endpoints

### Auth
- `POST /auth/google`: Authenticate with Google ID token.

### User
- `GET /user/profile`: Get user profile.
- `PUT /user/profile`: Update user profile.
- `GET /user/history`: Get user activity history.
- `PUT /user/history`: Update user activity history.

### Questions
- `GET /questions`: Get list of question banks.
- `GET /questions/:id`: Get a specific question bank.

## Database

The application is configured to use PostgreSQL. 
Currently, the controllers use mock data. Uncomment the database query logic in the controllers once the database schema is set up.
