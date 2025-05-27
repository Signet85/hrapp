
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext'; // Замыг зөв заагаарай

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}