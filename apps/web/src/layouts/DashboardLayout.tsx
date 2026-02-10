import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsSidebarOpen(false);
        navigate('/login');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Helper for active link class
    const getLinkClass = (path: string) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <div className="dashboard-layout">
            {/* Mobile Overlay */}
            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'visible' : ''}`}
                onClick={closeSidebar}
            />

            {/* Left Sidebar */}
            <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <span>JLRev</span>
                    <button className="hamburger-btn mobile-only" onClick={closeSidebar} style={{ display: isSidebarOpen ? 'block' : 'none' }}>
                        {/* Close Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <nav className="nav-links">
                    <Link to="/dashboard" className={getLinkClass('/dashboard')} onClick={closeSidebar}>
                        Dashboard
                    </Link>
                    <Link to="/dashboard/practice" className={getLinkClass('/dashboard/practice')} onClick={closeSidebar}>
                        Practice Mode
                    </Link>
                    <Link to="/dashboard/review" className={getLinkClass('/dashboard/review')} onClick={closeSidebar}>
                        Review
                    </Link>
                    <Link to="/dashboard/settings" className={getLinkClass('/dashboard/settings')} onClick={closeSidebar}>
                        Settings
                    </Link>
                    <div style={{ marginTop: 'auto' }}>
                        <a href="/" className="nav-link" onClick={handleLogout}>
                            Logout
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                {/* Mobile Header */}
                <header className="mobile-header">
                    <button className="hamburger-btn" onClick={toggleSidebar}>
                        {/* Hamburger Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <span style={{ fontWeight: 'bold' }}>Dashboard</span>
                </header>

                {/* Main Content */}
                <main className="dashboard-main">
                    {children}
                </main>

                {/* Bottom Menu */}
                <footer className="bottom-menu">
                    {/* Placeholder Bottom Icons */}
                    <Link to="/dashboard" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <span style={{ fontSize: '0.75rem' }}>Home</span>
                    </Link>
                    <Link to="/dashboard/practice" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <span style={{ fontSize: '0.75rem' }}>Practice</span>
                    </Link>
                    <Link to="/dashboard/profile" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <span style={{ fontSize: '0.75rem' }}>Profile</span>
                    </Link>
                </footer>
            </div>
        </div>
    );
}
