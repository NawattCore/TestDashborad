import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Salla Dashboard',
  description: 'Plugin settings dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
