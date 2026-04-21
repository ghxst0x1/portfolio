import { getPostBySlug, getPosts } from '@/util/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Header } from "./header";
import rehypePrettyCode from 'rehype-pretty-code';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={post} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <MDXRemote source={post.content} options={{
          mdxOptions: {
            rehypePlugins: [
              // The "as any" cast fixes the type mismatch error
              [
                rehypePrettyCode,
                {
                  theme: 'github-dark',
                  keepBackground: false,
                },
              ] as any,
            ],
          },
        }} />
      </article>
    </div>
  )
}