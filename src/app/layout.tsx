// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A fully responsive blogging website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="fade-in bg-[#E6E6FA] min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#98FF98] flex items-center justify-between p-4 text-black fixed top-0 w-full z-10">
          <div className="flex items-center">
          
            <h1 className="text-xl font-bold">
            <Link href="#home" className='px-5'>HOME</Link>
            <Link href="#about" className='px-5'>ABOUT</Link>
            <Link href="#contact" className='px-5'>CONTACT</Link>
            </h1>
          </div>
         
        </header>

        {/* Main Content */}
        <main className="pt-20 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="p-4 bg-[#98FF98] text-black">
          <p className="text-center ">&copy; 2024 My Blog. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
