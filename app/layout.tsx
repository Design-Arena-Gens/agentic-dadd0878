import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neomorphic Login',
  description: 'A refined, classical neomorphic login experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="plaster-bg">
        {children}
      </body>
    </html>
  );
}
