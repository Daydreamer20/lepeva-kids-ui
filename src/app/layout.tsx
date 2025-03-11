import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LEPEVA Kids - Fun English Learning',
  description: 'Interactive English learning platform for kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background min-h-screen">
        {children}
      </body>
    </html>
  );
}