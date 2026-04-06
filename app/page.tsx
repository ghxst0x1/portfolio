import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Terminal, Shield, Cpu, Code2 } from 'lucide-react';

export default function Home() {
  const allPosts = getSortedPostsData().filter((post) => post.slug !== 'about-me');
  const recentPosts = allPosts.slice(0, 5);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 pt-12 md:pt-24 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 brutalist-border rounded-full text-xs font-mono text-muted bg-[#0a0a0a]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          STATUS: ONLINE & SECURE
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Securing the <span className="text-accent italic">Digital</span> Frontier.
        </h1>
        <p className="text-xl text-muted font-sans max-w-2xl leading-relaxed">
          Offensive security specialist, reverse engineer, and red teamer. 
          Identifying vulnerabilities before they become headline news.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link href="/contact" className="brutalist-border px-8 py-3 bg-ivory text-black font-mono font-bold hover:bg-white transition-colors">
            INITIATE_CONTACT
          </Link>
          <Link href="/blog" className="brutalist-border px-8 py-3 hover:bg-[#1a1a1a] transition-colors font-mono">
            READ_TRANSMISSIONS
          </Link>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="brutalist-border p-6 flex flex-col gap-4 bg-black/50 backdrop-blur-sm">
          <Shield className="w-8 h-8 text-accent" />
          <h3 className="font-mono text-xl font-bold text-white">Red Teaming</h3>
          <p className="text-muted text-sm">Full-scope adversarial simulation to evaluate organizational readiness and detection capabilities.</p>
        </div>
        <div className="brutalist-border p-6 flex flex-col gap-4 bg-black/50 backdrop-blur-sm">
          <Terminal className="w-8 h-8 text-accent" />
          <h3 className="font-mono text-xl font-bold text-white">Penetration Testing</h3>
          <p className="text-muted text-sm">Deep-dive technical assessments into web applications, external perimeters, and internal networks.</p>
        </div>
        <div className="brutalist-border p-6 flex flex-col gap-4 bg-black/50 backdrop-blur-sm">
          <Cpu className="w-8 h-8 text-accent" />
          <h3 className="font-mono text-xl font-bold text-white">Reverse Engineering</h3>
          <p className="text-muted text-sm">Deconstructing malware and proprietary binaries to understand capabilities and vulnerabilities.</p>
        </div>
        <div className="brutalist-border p-6 flex flex-col gap-4 bg-black/50 backdrop-blur-sm">
          <Code2 className="w-8 h-8 text-accent" />
          <h3 className="font-mono text-xl font-bold text-white">Tool Development</h3>
          <p className="text-muted text-sm">Crafting custom offensive tooling and payloads using Go, Rust, and C/C++.</p>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mt-8 flex flex-col gap-6">
        <div className="flex justify-between items-baseline border-b border-border-color pb-4">
          <h2 className="font-serif text-3xl font-bold text-white">Recent Intel</h2>
          <Link href="/blog" className="font-mono text-sm text-accent hover:underline">
            VIEW_ALL &gt;
          </Link>
        </div>
        
        <div className="flex flex-col gap-4">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="brutalist-border p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#111111] transition-colors">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-mono text-lg font-bold group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-muted text-sm line-clamp-1">{post.description}</p>
                  </div>
                  <time className="font-mono text-xs text-muted whitespace-nowrap hidden md:block">
                    {post.date}
                  </time>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-muted font-mono">No recent posts found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
