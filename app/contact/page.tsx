import { Terminal, Send, Mail, Code2, AtSign } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto pt-8 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
          Initiate Contact
        </h1>
        <p className="text-muted font-sans text-lg">
          Available for consulting, red team engagements, and vulnerability assessments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="brutalist-border p-6 bg-black/50 backdrop-blur-sm flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-border-color pb-4">
            <Terminal className="w-5 h-5 text-accent" />
            <h2 className="font-mono text-lg font-bold text-white">SECURE_MESSAGE</h2>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-mono text-xs text-muted uppercase">Alias / Name</label>
              <input 
                type="text" 
                id="name" 
                className="brutalist-border bg-black text-white p-3 font-mono focus:outline-none focus:border-white transition-colors"
                placeholder="root"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-mono text-xs text-muted uppercase">Return Address</label>
              <input 
                type="email" 
                id="email" 
                className="brutalist-border bg-black text-white p-3 font-mono focus:outline-none focus:border-white transition-colors"
                placeholder="root@localhost"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-mono text-xs text-muted uppercase">Encrypted Payload</label>
              <textarea 
                id="message" 
                rows={5}
                className="brutalist-border bg-black text-white p-3 font-mono focus:outline-none focus:border-white transition-colors"
                placeholder="BEGIN PGP MESSAGE..."
              ></textarea>
            </div>
            <button type="button" className="bg-ivory text-black font-mono font-bold p-3 mt-2 flex items-center justify-center gap-2 hover:bg-white transition-colors">
              <Send className="w-4 h-4" /> TRANSMIT
            </button>
          </form>
        </div>

        {/* Info & Links */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm text-muted uppercase border-b border-border-color pb-2">Direct Channels</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:johndoe@example.com" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                <div className="p-2 brutalist-border group-hover:border-accent transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono whitespace-nowrap overflow-hidden text-ellipsis">johndoe@example.com</span>
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                <div className="p-2 brutalist-border group-hover:border-accent transition-colors">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="font-mono">github.com/johndoe</span>
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors group">
                <div className="p-2 brutalist-border group-hover:border-accent transition-colors">
                  <AtSign className="w-4 h-4" />
                </div>
                <span className="font-mono">@johndoe_sec</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm text-muted uppercase border-b border-border-color pb-2">GPG Key</h3>
            <div className="brutalist-border p-4 bg-black">
              <code className="text-xs text-accent whitespace-pre-wrap break-all hidden md:block">
                pub   rsa4096 2024-01-01 [SC]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A1B2 C3D4 E5F6 7890 1234  5678 90AB CDEF 1234 5678<br/>
                uid   [ultimate] John Doe &lt;johndoe@example.com&gt;
              </code>
              <code className="text-xs text-accent whitespace-pre-wrap break-all md:hidden">
                A1B2 C3D4 E5F6 7890 ...
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
