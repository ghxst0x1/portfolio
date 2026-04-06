import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Cybersecurity Professional | Portfolio',
  description: 'Portfolio map of a cybersecurity expert. Pentesting, Red Teaming, and Security Research.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col glow-bg`}>
        <nav className="brutalist-border border-t-0 border-l-0 border-r-0 border-b bg-black/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="font-mono text-xl font-bold tracking-tight text-white hover:text-accent transition-colors">
              {'<JohnDoe />'}
            </Link>
            <div className="flex gap-6 font-mono text-sm uppercase tracking-widest text-muted">
              <Link href="/blog/about-me" className="hover:text-white transition-colors">About</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-8">
          {children}
        </main>
        <footer className="brutalist-border border-b-0 border-l-0 border-r-0 border-t mt-16 p-8 text-center text-muted font-mono text-xs">
          <p>SYSTEM.HALT © {new Date().getFullYear()} // SECURE CONNECTION</p>
        </footer>
      </body>
    </html>
  );
}
