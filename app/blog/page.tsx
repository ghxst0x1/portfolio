import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto pt-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl font-bold text-white">Transmissions</h1>
        <p className="text-muted font-sans">Thoughts on security research, write-ups and methodologies.</p>
      </div>

      <div className="flex flex-col gap-4">
        {allPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="brutalist-border p-6 flex flex-col gap-3 hover:bg-[#111111] transition-colors">
              <div className="flex justify-between items-start gap-4">
                <h2 className="font-mono text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                <span className="font-mono text-xs text-muted whitespace-nowrap bg-black/50 px-2 py-1 brutalist-border">
                  {post.date}
                </span>
              </div>
              <p className="text-muted text-sm">{post.description}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs text-muted before:content-['#']">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
