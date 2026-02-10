import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Welcome to JLRev</h1>
            <p>Your ultimate tool for Japanese revision.</p>
            <div style={{ marginTop: '2rem' }}>
                <Link to="/login" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none', display: 'inline-block' }}>
                    Login
                </Link>
            </div>
        </main>
    );
}
