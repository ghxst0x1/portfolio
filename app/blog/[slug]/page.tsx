import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const postData = getPostData(resolvedParams.slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="px-5 md:px-10 py-16 max-w-[800px] mx-auto w-full">
      <div className="mb-10 pb-6 border-b border-border-color">
        <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-white-muted hover:text-foreground transition-colors mb-8">
          &lt; Return to Index
        </Link>
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-foreground mb-4">
          {postData.metadata.title}
        </h1>
        <div className="flex items-center gap-4">
          <time className="font-mono text-[0.7rem] text-accent tracking-[0.05em]">
            {postData.metadata.date}
          </time>
          {postData.metadata.tags && (
             <div className="flex gap-2">
               {postData.metadata.tags.map(tag => (
                  <span key={tag} className="font-mono text-[0.62rem] text-white-muted px-2 py-[2px] border border-border-color rounded-[2px]">
                    {tag}
                  </span>
               ))}
             </div>
          )}
        </div>
      </div>

      <div className="prose prose-invert max-w-none
        prose-p:font-sans prose-p:text-[0.95rem] prose-p:text-white-dim prose-p:leading-[1.8] prose-p:font-light
        prose-headings:font-serif prose-headings:text-foreground
        prose-h2:text-[1.8rem] prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-[1.4rem] prose-h3:mt-8 prose-h3:mb-3
        prose-a:text-accent hover:prose-a:text-white-dim
        prose-pre:bg-surface prose-pre:border prose-pre:border-border-color prose-pre:rounded-[4px] prose-code:font-mono
        prose-strong:text-foreground prose-strong:font-medium
        prose-blockquote:border-l-2 prose-blockquote:border-border-light prose-blockquote:pl-4 prose-blockquote:italic
      ">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
    </article>
  );
}
