import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import LogoutButton from '../components/LogoutButton'; // Замыг зөв заагаарай

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Link href="/about">About</Link>
      {user ? (
        <div>
          <p>Hello, {user.email || user.displayName}!</p>
          <LogoutButton />
          <p><Link href="/profile">Go to Profile (Protected)</Link></p>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <Link href="/login">Login</Link> | <Link href="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}