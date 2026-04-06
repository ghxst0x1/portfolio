import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <div className="px-5 md:px-10 py-16 max-w-[1200px] mx-auto w-full">
      <div className="section-label mb-6">Archive & Intel</div>
      
      <div className="grid-borders grid-cols-1 max-w-[700px]">
        {allPosts.map((post) => (
          <div key={post.slug} className="grid-cell p-7 flex flex-col gap-3 group block">
            <div className="font-mono text-[0.62rem] text-accent font-medium bg-surface2 mb-1 px-3 py-[4px] border border-border-color rounded-[2px] self-start">
              {post.date}
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="font-serif text-[1.2rem] text-foreground group-hover:text-white transition-colors mb-2 leading-tight">
                {post.title}
              </h2>
              <p className="text-[0.82rem] text-white-dim line-clamp-3 leading-[1.6]">
                {post.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
