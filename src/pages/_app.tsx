import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AuthProvider from '@/components/AuthProvider';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}