import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Await the params before using them (Next.js 15+ standard, but safe in 14 too)
  const resolvedParams = await params;
  const postData = getPostData(resolvedParams.slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto pt-8 flex flex-col gap-8 pb-16">
      <div className="flex items-center">
        <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> CD ..
        </Link>
      </div>

      <header className="flex flex-col gap-4 border-b border-border-color pb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
          {postData.metadata.title}
        </h1>
        <div className="flex items-center justify-between">
          <time className="font-mono text-sm text-accent">
            {postData.metadata.date}
          </time>
          {postData.metadata.tags && (
            <div className="flex gap-3">
              {postData.metadata.tags.map(tag => (
                <span key={tag} className="font-mono text-xs text-muted brutalist-border px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose prose-invert prose-p:font-sans prose-headings:font-serif prose-h2:text-white prose-a:text-accent hover:prose-a:text-white prose-pre:bg-black/50 prose-pre:brutalist-border prose-code:font-mono max-w-none">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
    </article>
  );
}
