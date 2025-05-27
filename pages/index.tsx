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
      <h1 className="text-3xl font-bold underline text-cyan-500">
      Hello world!
      </h1>
      <Link href="/about" className="text-2xl font-bold underline text-amber-400 " >About</Link>
      {user ? (
        <div>
          <p>Hello, {user.email || user.displayName}!</p>
          <LogoutButton />
          <p><Link href="/profile">Go to Profile (Protected)</Link></p>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <Link className="underline" href="/auth/login">Login</Link> | <Link className="underline" href="/auth/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}