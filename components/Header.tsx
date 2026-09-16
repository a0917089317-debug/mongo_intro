import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#1f2a1d]/15 bg-[#f6f1e7]/95 backdrop-saturate-150">
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          日光芒果
          <span className="ml-2 align-top text-[10px] font-sans font-medium tracking-[0.3em] text-[#c9772e]">
            SUN MANGO
          </span>
        </Link>

        <ul className="hidden items-center gap-10 text-sm tracking-wide text-[#1f2a1d]/70 sm:flex">
          <li>
            <Link href="/#harvest" className="transition-colors hover:text-[#c9772e]">
              01 — 產地
            </Link>
          </li>
          <li>
            <Link href="/#product" className="transition-colors hover:text-[#c9772e]">
              02 — 商品
            </Link>
          </li>
          <li>
            <Link href="/blog" className="transition-colors hover:text-[#c9772e]">
              03 — 文章
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <Link href="/#order" className="group relative hidden text-sm font-medium tracking-wide sm:block">
            立即訂購
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1f2a1d] transition-all duration-300 group-hover:w-full" />
          </Link>

          <label
            htmlFor="menu-toggle"
            aria-label="開啟選單"
            className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span className="h-px w-5 bg-[#1f2a1d]" />
            <span className="h-px w-5 bg-[#1f2a1d]" />
            <span className="h-px w-5 bg-[#1f2a1d]" />
          </label>
        </div>
      </nav>

      <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-300 ease-out peer-checked:grid-rows-[1fr] sm:hidden">
        <ul className="min-h-0 overflow-hidden px-6 text-sm tracking-wide text-[#1f2a1d]/80 sm:px-10">
          <li className="border-t border-[#1f2a1d]/10">
            <Link href="/#harvest" className="block py-3">01 — 產地</Link>
          </li>
          <li className="border-t border-[#1f2a1d]/10">
            <Link href="/#product" className="block py-3">02 — 商品</Link>
          </li>
          <li className="border-t border-[#1f2a1d]/10">
            <Link href="/blog" className="block py-3">03 — 文章</Link>
          </li>
          <li className="border-t border-b border-[#1f2a1d]/10">
            <Link href="/#order" className="block py-3 font-semibold text-[#c9772e]">04 — 立即訂購</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
