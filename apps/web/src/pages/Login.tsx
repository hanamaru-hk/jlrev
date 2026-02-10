import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if auth_token cookie exists and has not expired
        // document.cookie only returns non-expired cookies
        const hasAuthToken = document.cookie
            .split(';')
            .some((item) => item.trim().startsWith('auth_token='));

        if (hasAuthToken) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleLogin = () => {
        // Set cookie with 24 hour expiration
        const date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "auth_token=valid_token; " + expires + "; path=/";

        navigate('/dashboard');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f3f4f6'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                maxWidth: '400px',
                width: '100%'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#111827'
                }}>Sign in to JLRev</h2>
                <p style={{
                    textAlign: 'center',
                    color: '#6b7280',
                    marginBottom: '2rem'
                }}>Welcome back! Please sign in to continue.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        backgroundColor: 'white',
                        color: '#374151',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                    }}
                        onClick={handleLogin}
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                        Sign in with Google
                    </button>

                    <button style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        backgroundColor: '#24292f',
                        color: 'white',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                    }}
                        onClick={handleLogin}
                    >
                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', filter: 'invert(1)' }} />
                        Sign in with GitHub
                    </button>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Link to="/" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.875rem' }}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
