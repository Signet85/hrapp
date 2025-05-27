
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext'; // Замыг зөв заагаарай
import Link from 'next/link';
import '../styles/globals.css'; // CSS файлыг импортлох

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Link href = '/'>Нүүр хуудас</Link>
      <Component {...pageProps} />
    </AuthProvider>
  );
}