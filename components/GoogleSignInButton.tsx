import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import { useState } from 'react';

const GoogleSignInButton = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);


  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setError(null);
    try {
      await signInWithPopup(auth, provider);
      router.push('/'); // Нэвтэрсний дараа нүүр хуудас руу үсрэх
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error with Google sign-in:", err);
      } else {
        setError('An unknown error occurred.');
        console.error("Error with Google sign-in:", err);
      }
    }
  };

  return (
    <>
        <button onClick={handleGoogleSignIn}>
        Sign in with Google
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default GoogleSignInButton;