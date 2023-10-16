import '../styles/globals.css';
import 'ui/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Aton - An AI-Powered Collaborative Workspace for Product Teams | Boost Productivity',
  description:
    'Unlock the full potential of your product team with our AI-powered collaborative workspace. Streamline your workflow, boost productivity, and drive innovation. Try it today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
