"use client";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleSignInButton from '../../components/GoogleSignInButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/'); // Нэвтэрсний дараа нүүр хуудас руу үсрэх
    } catch (err: unknown) {
      setEmail('');
      setPassword('');
      // Алдаа гарсан тохиолдолд алдааг тохируулах

      if (err instanceof Error) {
        setError(err.message);
        console.error("Error logging in:", err);
        router.push('/auth/login'); // Алдаа гарсан тохиолдолд login хуудсанд буцаах
      } else {
        setError('An unknown error occurred.');
        console.error("Error logging in:", err);
        router.push('/auth/login'); // Алдаа гарсан тохиолдолд login хуудсанд буцаах
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="border border-gray-300 rounded p-2"
            placeholder="Enter your email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className = "border border-gray-300 rounded p-2"
            placeholder="Enter your password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>Хэрэглэгч байхгүй байна {error}</p>}
        <button type="submit">Login</button>
      </form>
      <GoogleSignInButton />
      <p>
        Don`t have an account? <Link href="/auth/signup">Sign up</Link>
      </p>
    <hr />
      
      

    </div>
  );
}