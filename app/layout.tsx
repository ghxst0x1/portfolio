import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display, DM_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-dm-sans' });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-serif' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono' });

export const metadata: Metadata = {
  title: 'johndoe | cybersecurity portfolio',
  description: 'Cybersecurity professional and penetration tester.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <nav className="nav-blur sticky top-0 z-50 border-b border-border-color px-4 md:px-10 h-[60px] flex items-center justify-between">
          <Link href="/" className="font-serif text-[1.25rem] text-foreground flex items-baseline">
            johndoe<sub className="font-mono text-[0.6rem] text-white-dim ml-[3px]">.sec</sub>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog/about-me" className="font-sans text-[0.8rem] text-white-dim hover:text-foreground transition-colors p-0">About</Link>
            <Link href="/blog" className="font-sans text-[0.8rem] text-white-dim hover:text-foreground transition-colors p-0">Blog</Link>
            <Link href="/contact" className="font-mono text-[0.72rem] px-[0.9rem] py-[0.35rem] border border-border-light rounded-[3px] text-white hover:bg-surface2 transition-colors whitespace-nowrap">
              Contact
            </Link>
          </div>
        </nav>
        <main className="flex-1 w-full">
          {children}
        </main>
        <footer className="border-t border-border-color p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-[0.4rem] items-center md:items-start text-center md:text-left">
            <span className="font-serif text-[1rem] text-foreground flex items-center gap-2">
              johndoe.sec
            </span>
            <small className="font-mono text-[0.68rem] text-white-muted">Built for learning and security purposes.</small>
          </div>
          <div className="flex gap-8 justify-center flex-wrap">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.72rem] text-white-muted hover:text-foreground transition-colors">GitHub</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.72rem] text-white-muted hover:text-foreground transition-colors">Twitter</a>
            <Link href="/contact" className="font-mono text-[0.72rem] text-white-muted hover:text-foreground transition-colors">Contact</Link>
            <Link href="/blog" className="font-mono text-[0.72rem] text-white-muted hover:text-foreground transition-colors">Blog</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
