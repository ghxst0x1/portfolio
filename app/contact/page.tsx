export default function Contact() {
  return (
    <div className="px-5 md:px-10 py-16 max-w-[1200px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
        <div>
          <div className="section-label mb-6">Initiate Contact</div>
          <h1 className="font-serif text-[clamp(2.4rem,4vw,3.5rem)] leading-[1.08] text-foreground mb-4">
            Available for <br /><em className="italic text-white-dim">engagements.</em>
          </h1>
          <p className="text-[0.95rem] text-white-dim leading-[1.8] font-light mb-10 max-w-[480px]">
            Whether it's a fully scoped red team assessment, targeted vulnerability research, or tool development. Reach out.
          </p>
          
          <div className="bg-surface border border-border-color rounded-[4px] p-6 mb-8">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[0.72rem] text-white-dim letter-spacing-[0.05em]">Alias / Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-background border border-border-color rounded-[4px] p-3 font-mono text-[0.85rem] text-foreground focus:outline-none focus:border-border-light transition-colors w-full"
                  placeholder="root"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[0.72rem] text-white-dim letter-spacing-[0.05em]">Return Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-background border border-border-color rounded-[4px] p-3 font-mono text-[0.85rem] text-foreground focus:outline-none focus:border-border-light transition-colors w-full"
                  placeholder="name@server.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[0.72rem] text-white-dim letter-spacing-[0.05em]">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="bg-background border border-border-color rounded-[4px] p-3 font-mono text-[0.85rem] text-foreground focus:outline-none focus:border-border-light transition-colors w-full"
                  placeholder="BEGIN PGP MESSAGE..."
                ></textarea>
              </div>
              <button type="button" className="inline-flex items-center justify-center gap-[0.4rem] font-mono text-[0.82rem] tracking-[0.04em] px-6 py-3 bg-foreground text-[#0e0e0e] font-medium rounded-[3px] hover:bg-[#d8d4ce] transition-colors whitespace-nowrap mt-2">
                Transmit
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col pt-4 lg:pt-[106px]">
          <div className="section-label mb-6">Direct Channels</div>
          <ul className="flex flex-col gap-4 mb-10">
            <li>
              <a href="mailto:contact@johndoe.sec" className="flex items-center gap-3 text-white-dim hover:text-foreground transition-colors group">
                <span className="text-[0.75rem] opacity-50 flex items-center group-hover:text-accent transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <span className="font-mono text-[0.85rem]">contact@johndoe.sec</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white-dim hover:text-foreground transition-colors group">
                <span className="text-[0.75rem] opacity-50 flex items-center group-hover:text-accent transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </span>
                <span className="font-mono text-[0.85rem]">github.com/johndoe</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/johndoe_sec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white-dim hover:text-foreground transition-colors group">
                <span className="text-[0.75rem] opacity-50 flex items-center group-hover:text-accent transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17" y1="12" x2="22.95" y2="12"></line></svg>
                </span>
                <span className="font-mono text-[0.85rem]">@johndoe_sec</span>
              </a>
            </li>
          </ul>
          
          <div className="p-4 bg-background border border-border-color rounded-[4px]">
            <div className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-white-muted mb-3 border-b border-border-color pb-2">PGP Public Key Fingerprint</div>
            <code className="font-mono text-[0.75rem] text-accent block break-all">
              A1B2 C3D4 E5F6 7890 1234 5678 90AB CDEF 1234 5678
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
