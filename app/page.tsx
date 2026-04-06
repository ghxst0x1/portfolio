import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPosts = getSortedPostsData().filter(p => !p.slug.includes('about-me'));
  const recentPosts = allPosts.slice(0, 5);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-5 md:px-10 py-16 md:py-28 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] text-white-dim tracking-[0.12em] uppercase mb-8">
            <span className="w-[6px] h-[6px] bg-foreground rounded-full animate-pulse"></span>
            Offensive Security / Consulting
          </div>
          <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.08] text-foreground mb-6">
            Adversarial mindset.<br />
            Defensive <em className="italic text-white-dim">execution.</em>
          </h1>
          <p className="text-[0.95rem] text-white-dim leading-[1.8] font-light max-w-[480px] mb-10">
            Penetration tester, red teamer, and vulnerability researcher. I find the flaws in your digital infrastructure before malicious actors do.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center gap-[0.4rem] font-mono text-[0.88rem] tracking-[0.04em] px-8 py-4 bg-foreground text-[#0e0e0e] font-medium rounded-[3px] hover:bg-[#d8d4ce] transition-colors whitespace-nowrap">
              Hire me →
            </Link>
            <Link href="/blog" className="inline-flex items-center justify-center gap-[0.4rem] font-mono text-[0.88rem] tracking-[0.04em] px-8 py-4 bg-transparent text-foreground border border-border-light rounded-[3px] hover:bg-surface2 hover:border-[#666] transition-colors whitespace-nowrap">
              Read Transmissions
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:justify-end w-full mt-10 lg:mt-0">
          <div className="grid-borders grid-cols-2 w-full max-w-[500px]">
            <div className="grid-cell p-8">
              <span className="font-serif text-[2.5rem] color-foreground block leading-none mb-1">5+</span>
              <span className="font-mono text-[0.68rem] text-white-muted tracking-[0.08em] uppercase">Years Experience</span>
            </div>
            <div className="grid-cell p-8">
              <span className="font-serif text-[2.5rem] color-foreground block leading-none mb-1">CVEs</span>
              <span className="font-mono text-[0.68rem] text-white-muted tracking-[0.08em] uppercase">Published</span>
            </div>
            <div className="grid-cell p-8">
              <span className="font-serif text-[2.5rem] color-foreground block leading-none mb-1">OSCP</span>
              <span className="font-mono text-[0.68rem] text-white-muted tracking-[0.08em] uppercase">Certified</span>
            </div>
            <div className="grid-cell p-8">
              <span className="font-serif text-[2.5rem] color-foreground block leading-none mb-1">100+</span>
              <span className="font-mono text-[0.68rem] text-white-muted tracking-[0.08em] uppercase">Assessments</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-border-color border-none bg-border-color h-[1px]" />

      {/* Recent Transmissions */}
      <section className="px-5 md:px-10 py-20 bg-background max-w-[1200px] mx-auto w-full">
        <div className="section-label mb-6">Recent Transmissions</div>
        
        <div className="mb-0 border border-border-color bg-border-color flex flex-col gap-[1.5px] max-w-[800px]">
          <div className="bg-background p-7">
            <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-white-muted mb-5">Latest Articles</div>
            <div className="flex flex-col">
              {recentPosts.length > 0 ? (
                recentPosts.map((post, idx) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className={`flex items-center gap-3 py-3 ${idx !== recentPosts.length - 1 ? 'border-b border-border-color' : ''} group`}>
                    <span className="text-[0.75rem] text-white-muted opacity-50 flex-shrink-0 flex items-center">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-[0.85rem] text-white-dim flex-1 group-hover:text-foreground transition-colors">{post.title}</span>
                    {post.tags && post.tags.length > 0 && (
                      <span className="font-mono text-[0.62rem] text-white-muted px-2 py-[2px] border border-border-color rounded-[2px] hidden md:inline-block">
                        {post.tags[0]}
                      </span>
                    )}
                  </Link>
                ))
              ) : (
                <div className="py-3 text-[0.85rem] text-white-dim">No posts found.</div>
              )}
            </div>
            <Link href="/blog" className="block mt-4 font-mono text-[0.65rem] text-white-muted hover:text-white-dim py-2">
              + View all posts
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-t border-border-color border-none bg-border-color h-[1px]" />
      
      {/* About Link Section */}
      <section className="px-5 md:px-10 py-20 bg-surface w-full">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-20 items-center">
          <div>
            <div className="section-label mb-4">About Me</div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-foreground mb-5">
              The attacker's perspective,<br />
              <em className="italic text-white-dim">for better defense.</em>
            </h2>
            <p className="text-[0.9rem] text-white-dim leading-[1.8] font-light mb-8">
              I specialize in finding vulnerabilities in complex networks and applications. Understanding how an attacker operates is the only reliable way to build defenses that actually work in the real world.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/blog/about-me" className="inline-flex items-center justify-center gap-[0.4rem] font-mono text-[0.82rem] tracking-[0.04em] px-6 py-3 bg-transparent text-foreground border border-border-light rounded-[3px] hover:bg-surface2 hover:border-[#666] transition-colors whitespace-nowrap">
                Read Full Bio
              </Link>
            </div>
          </div>
          
          <div className="bg-background border border-border-color rounded-[6px] p-8 hidden md:block">
             <div className="flex items-baseline justify-between mb-3">
               <div className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-white-muted">Status</div>
             </div>
             <ul className="flex flex-col gap-2 mb-6">
                <li className="text-[0.82rem] text-white-dim flex items-center gap-2">
                  <span className="text-[#9a9590] text-[0.7rem] mr-1">—</span> Available for work
                </li>
                <li className="text-[0.82rem] text-white-dim flex items-center gap-2">
                  <span className="text-[#9a9590] text-[0.7rem] mr-1">—</span> Based in Unknown
                </li>
             </ul>
             <div className="text-center mt-5 pt-3 border-t border-border-color relative">
                <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-white-muted bg-background px-3 absolute -top-[9px] left-1/2 -translate-x-1/2">
                   Current Focus
                </span>
             </div>
             <ul className="flex flex-col gap-2 mt-4">
                <li className="text-[0.82rem] text-white-dim flex items-center gap-2">
                  <span className="text-accent inline-flex align-middle mr-2"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> Cloud Security
                </li>
                <li className="text-[0.82rem] text-white-dim flex items-center gap-2">
                  <span className="text-accent inline-flex align-middle mr-2"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> Exploit Development
                </li>
             </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
