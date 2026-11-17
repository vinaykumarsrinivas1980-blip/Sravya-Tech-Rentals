import Link from 'next/link'

export default function Header() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const logout = () => { localStorage.removeItem('token'); window.location.reload(); };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #eee' }}>
      <div><Link href="/">Sravya Tech Rentals</Link></div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Home</Link>
        {token ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link href="#">Login</Link>
        )}
      </nav>
    </header>
  )
}
