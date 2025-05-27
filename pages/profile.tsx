import { useAuth } from '../context/AuthContext';
import withAuth from '../components/withAuth'; // HOC-г import хийх

function ProfilePage() {
  const { user } = useAuth(); // user мэдээллийг авах боломжтой

  if (!user) return null; // withAuth аль хэдийн шалгасан ч, type safety-д зориулж

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>
      {/* Бусад хэрэглэгчийн мэдээлэл */}
    </div>
  );
}

export default withAuth(ProfilePage); // Хуудсыг HOC-оор орооно