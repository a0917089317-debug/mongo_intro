import Image from "next/image";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";

const harvest = [
  { src: "/images/mango-1.jpg", title: "清晨樹採", desc: "趁露水未乾，清晨於果園手工摘採，鎖住最佳風味。" },
  { src: "/images/mango-2.jpg", title: "產地精選", desc: "每一顆都經過果農分級篩選，只留下色澤與甜度俱佳的果實。" },
  { src: "/images/mango-3.jpg", title: "現切即享", desc: "果肉細緻無纖維，切開就是滿滿果汁與濃郁香氣。" },
];

const plans = [
  { weight: "2 台斤", price: "NT$ 380", note: "輕巧嚐鮮，適合小家庭" },
  { weight: "4 台斤", price: "NT$ 680", note: "人氣首選，最多人回購" },
  { weight: "6 台斤禮盒", price: "NT$ 980", note: "送禮自用兩相宜，附提盒" },
];

const stats = [
  { value: "20+", label: "年果園栽培經驗" },
  { value: "24hr", label: "採收後冷鏈直送" },
  { value: "4.9★", label: "顧客平均評價" },
];

export default function Home() {
  return (
    <div id="top">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden sm:min-h-[88vh]">
        <Parallax speed={0.18} max={70} className="absolute inset-0">
          <Image
            src="/images/mango-1.jpg"
            alt="樹上成熟的愛文芒果"
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d] via-[#1f2a1d]/40 to-[#1f2a1d]/10" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-28 sm:px-10 sm:pb-20 sm:pt-40">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.35em] text-[#f6f1e7]/70">
              TAIWAN AIWEN MANGO — 2026 SEASON
            </p>
            <h1 className="mt-6 max-w-xl font-serif text-4xl font-bold leading-[1.2] tracking-tight text-[#f6f1e7] sm:text-5xl md:text-6xl">
              台灣愛文芒果
              <br />
              樹熟直送到府
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[#f6f1e7]/80">
              自家果園日照充足、精心疏果，每一顆都甜度飽滿、香氣濃郁，
              從產地直接送到您的餐桌。
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#order"
                className="rounded-full bg-[#e8a13c] px-8 py-3 text-sm font-semibold text-[#1f2a1d] transition-colors hover:bg-[#f6f1e7]"
              >
                立即訂購
              </a>
              <a
                href="#product"
                className="group flex items-center gap-2 text-sm font-medium text-[#f6f1e7]"
              >
                查看商品方案
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Harvest gallery */}
      <section id="harvest" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <Reveal className="mb-10 flex flex-col gap-2 border-b border-[#1f2a1d]/15 pb-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-3xl font-bold tracking-tight">產地故事</h2>
          <span className="text-xs tracking-[0.3em] text-[#1f2a1d]/40">FROM FARM TO TABLE</span>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {harvest.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Parallax speed={0.1} max={30} className="absolute inset-0">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="scale-110 object-cover transition-transform duration-500 hover:scale-125"
                  />
                </Parallax>
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#1f2a1d]/65">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product highlight */}
      <section id="product" className="border-t border-[#1f2a1d]/15 bg-[#efe7d6] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-10 lg:gap-14">
          <Reveal className="relative aspect-square overflow-hidden rounded-sm">
            <Parallax speed={0.08} max={24} className="absolute inset-0">
              <Image
                src="/images/mango-4.jpg"
                alt="愛文芒果商品照"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="scale-110 object-cover"
              />
            </Parallax>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs tracking-[0.35em] text-[#c9772e]">SIGNATURE PRODUCT</p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              愛文芒果 · 原箱直送
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#1f2a1d]/65">
              精選台南玉井產地愛文芒果，果皮薄、纖維少，
              入口即化的濃郁香甜，是夏季最受歡迎的水果禮盒。
            </p>

            <div className="mt-10 divide-y divide-[#1f2a1d]/12 border-y border-[#1f2a1d]/12">
              {plans.map((plan) => (
                <div key={plan.weight} className="flex items-center justify-between py-5">
                  <div>
                    <p className="font-serif text-lg font-bold">{plan.weight}</p>
                    <p className="mt-1 text-xs text-[#1f2a1d]/55">{plan.note}</p>
                  </div>
                  <p className="font-serif text-xl font-bold text-[#c9772e]">{plan.price}</p>
                </div>
              ))}
            </div>

            <a
              href="#order"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#1f2a1d] px-8 py-3 text-sm font-semibold text-[#f6f1e7] transition-colors hover:bg-[#c9772e]"
            >
              立即訂購
            </a>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid grid-cols-3 gap-4 sm:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="font-serif text-2xl font-bold text-[#c9772e] sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-[11px] leading-snug tracking-[0.1em] text-[#1f2a1d]/55 sm:text-xs sm:tracking-[0.15em]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Order */}
      <section id="order" className="relative overflow-hidden bg-[#1f2a1d] px-6 py-20 text-[#f6f1e7] sm:px-10 sm:py-28">
        <div className="absolute -right-16 -top-16 hidden h-64 w-64 overflow-hidden rounded-full opacity-20 sm:block sm:h-80 sm:w-80">
          <Parallax speed={0.08} max={20} className="absolute inset-0">
            <Image src="/images/mango-5.jpg" alt="" fill sizes="320px" className="scale-125 object-cover" />
          </Parallax>
        </div>

        <Reveal className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-10">
          <div>
            <p className="text-xs tracking-[0.35em] text-[#f6f1e7]/50">ORDER NOW</p>
            <h2 className="mt-6 max-w-lg font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              今天訂購，明天鮮採直送。
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#f6f1e7]/70">
              產季限定供應，數量有限，歡迎私訊或來信預訂，
              我們將於採收後 24 小時內冷鏈出貨。
            </p>
          </div>

          <a
            href="mailto:order@sunmango.tw"
            className="group flex items-center gap-3 border-b border-[#f6f1e7]/40 pb-2 text-lg font-medium"
          >
            order@sunmango.tw
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
