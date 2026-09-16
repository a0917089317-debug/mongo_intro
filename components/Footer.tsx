import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f2a1d]/15 bg-[#f6f1e7] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-serif text-lg font-bold">日光芒果</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-[#1f2a1d]/50">
            SUN MANGO FARM
          </p>
        </div>

        <div className="flex gap-8 text-xs tracking-wide text-[#1f2a1d]/60">
          <Link href="/#harvest" className="hover:text-[#c9772e]">產地</Link>
          <Link href="/#product" className="hover:text-[#c9772e]">商品</Link>
          <Link href="/blog" className="hover:text-[#c9772e]">文章</Link>
          <Link href="/#order" className="hover:text-[#c9772e]">訂購</Link>
        </div>

        <p className="text-xs text-[#1f2a1d]/40">
          © {new Date().getFullYear()} 日光芒果. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
