import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — 日光芒果`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Parallax speed={0.15} max={50} className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d] via-[#1f2a1d]/40 to-[#1f2a1d]/10" />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 pt-28 sm:px-10">
          <p className="text-xs tracking-[0.35em] text-[#f6f1e7]/70">{post.tag}</p>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-[#f6f1e7] sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xs text-[#f6f1e7]/60">{post.date}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1f2a1d]/60 hover:text-[#c9772e]"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            返回文章列表
          </Link>
        </Reveal>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-[15px] leading-8 text-[#1f2a1d]/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-sm border border-[#1f2a1d]/15 bg-[#efe7d6] px-8 py-10 text-center">
          <p className="font-serif text-xl font-bold">想品嚐當季愛文芒果嗎？</p>
          <p className="mt-2 text-sm text-[#1f2a1d]/65">
            果園採收後 24 小時內冷鏈直送到府。
          </p>
          <Link
            href="/#order"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1f2a1d] px-8 py-3 text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#c9772e]"
          >
            立即訂購
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
