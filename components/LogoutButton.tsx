import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login'); // Гарсны дараа нэвтрэх хуудас руу үсрэх
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;