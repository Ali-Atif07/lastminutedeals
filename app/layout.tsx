import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LastMinute Hotels – Book Tables & Experiences',
  description: 'Discover and book last-minute restaurant tables and dining experiences',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-dark">
        {children}
      </body>
    </html>
  )
}