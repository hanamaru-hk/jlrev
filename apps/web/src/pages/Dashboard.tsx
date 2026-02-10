import DashboardLayout from '../layouts/DashboardLayout';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <h1>Welcome Back!</h1>
            <p>Here is your daily progress overview.</p>

            <div style={{
                marginTop: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
            }}>
                {/* Card 1 */}
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--background)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <h3>Daily Goal</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>85%</p>
                    <p style={{ color: '#6b7280' }}>Keep it up!</p>
                </div>

                {/* Card 2 */}
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--background)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <h3>Review Items</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>42</p>
                    <p style={{ color: '#6b7280' }}>Due for review today</p>
                </div>

                {/* Card 3 */}
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--background)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <h3>Streak</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>7 Days</p>
                    <p style={{ color: '#6b7280' }}>You're on fire!</p>
                </div>
            </div>
        </DashboardLayout>
    );
}
