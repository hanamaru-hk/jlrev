# Layout Specification

Both Web and Mobile App are built based on this document.

## Dashboard Layout

The application features a responsive `DashboardLayout` that adapts to different screen sizes.

### Structure

1.  **Sidebar (Desktop)**
    - Position: Fixed left.
    - Width: `250px`.
    - Content:
        - App Branding (JLRev).
        - Navigation Links (Dashboard, Practice, Review, Settings).
        - Logout button at the bottom.
    - Behavior: Hidden on mobile, togglable via hamburger menu.

2.  **Top Navigation / Mobile Header**
    - Visible on: Mobile screens.
    - Content:
        - Hamburger menu button.
        - Page Title.

3.  **Main Content Area**
    - Takes up remaining width.
    - Scrollable independently.

4.  **Bottom Menu (Mobile - Planned/Optional)**
    - A specific footer menu is implemented for quick access on mobile devices, though currently acting as a placeholder.

### Responsive Behavior

- **Desktop (> 768px):**
    - Sidebar is always visible.
    - Hamburger menu is hidden.
- **Mobile (< 768px):**
    - Sidebar is hidden by default.
    - Sidebar slides in from left when toggled.
    - Overlay appears to dim the background when sidebar is open.

### Styling
- Uses CSS variables for consistent theming (to be implemented).
- Flexbox/Grid for layout structure.