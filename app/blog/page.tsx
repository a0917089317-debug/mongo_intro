import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "文章 — 日光芒果",
  description: "關於愛文芒果的產地知識、營養資訊與料理食譜。",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal className="mb-10 flex flex-col gap-2 border-b border-[#1f2a1d]/15 pb-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.35em] text-[#c9772e]">JOURNAL</p>
          <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            芒果文章
          </h1>
        </div>
        <span className="text-xs tracking-[0.3em] text-[#1f2a1d]/40">
          {blogPosts.length} ARTICLES
        </span>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 120}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-5 text-xs tracking-[0.25em] text-[#c9772e]">{post.tag}</p>
              <h2 className="mt-2 font-serif text-xl font-bold leading-snug transition-colors group-hover:text-[#c9772e]">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#1f2a1d]/65">{post.excerpt}</p>
              <p className="mt-3 text-xs text-[#1f2a1d]/40">{post.date}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
