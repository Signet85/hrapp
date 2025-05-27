import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { NextPage } from 'next';

const withAuth = <P extends object>(WrappedComponent: NextPage<P>) => {
  const AuthComponent: NextPage<P> = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace('/login?redirect=' + router.pathname); // Нэвтрээгүй бол login руу redirect хийх
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <p>Loading authentication...</p>; // Эсвэл илүү гоё loading component
    }

    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};

export default withAuth;