# Web Frontend Specification

## Tech Stack
- **Framework:** React + Vite
- **Language:** TypeScript
- **Routing:** React Router DOM (v7)
- **Styling:** Vanilla CSS (CSS Modules approach for components)
- **State Management:** React Context / Local State (for now)

## Project Structure
- `src/pages/`: Contains main page components (Login, Dashboard, Home).
- `src/layouts/`: Contains layout wrappers (DashboardLayout).
- `src/components/`: Reusable UI components.

## Authentication
- **Login Page (`/login`)**:
    - Checks for `auth_token` cookie on load.
    - Redirects to `/dashboard` if a valid cookie exists.
    - Sets a 24-hour `auth_token` cookie upon successful login (currently simulated).
    - Features "Sign in with Google" and "Sign in with GitHub" dummy buttons.
- **Logout**:
    - Clears the `auth_token` cookie.
    - Redirects to `/login`.

## Pages

### 1. Dashboard (`/dashboard`)
- Accessible only after login (autocheck logic in Login page, to be moved to a ProtectedRoute component).
- Layout: Uses `DashboardLayout`.
- Content:
    - Daily Goal progress.
    - Review Items count.
    - Streak counter.

### 2. Login (`/login`)
- Entry point for authentication.
- Auto-redirects if already logged in.

## Design System
- Follows the shared layout design (see `../frontend/layout.md`).
- Responsive design with mobile-first approach.
