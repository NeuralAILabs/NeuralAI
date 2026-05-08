import Image from "next/image";

type Product = {
  title: string;
  category: string;
  body: string;
  image: string;
  alt: string;
  href: string;
};

const products: Product[] = [
  {
    title: "IeltsBuddy",
    category: "Test Prep",
    body: "An AI-powered IELTS preparation platform built for students aiming at universities in the US, UK, Australia and Canada.",
    image: "/ieltsbuddy.png",
    alt: "IeltsBuddy product screenshot",
    href: "https://www.ieltsbuddy.app/",
  },
  {
    title: "Digital Sewa",
    category: "Marketplace",
    body: "Nepal's local freelancing platform — connecting clients with skilled service providers across the country.",
    image: "/digitalsewa.png",
    alt: "Digital Sewa product screenshot",
    href: "https://digitalsewav3.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="ui-poppins relative overflow-hidden text-[#1f1410] pt-20 md:pt-24 pb-24 md:pb-28 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      {/* layered warm backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fdfaf3] via-[#f7eddc] to-[#fdfaf3]"
      />
      {/* decorative color blobs */}
      <div
        aria-hidden
        className="absolute -z-10 -top-32 -left-24 h-96 w-96 rounded-full bg-[#b0421a]/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -z-10 top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#d97a3f]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -z-10 bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#f5e9d3]/70 blur-3xl"
      />

      <div className="relative text-center">
        <span className="ui-pill backdrop-blur-md bg-white/40 border-white/60">
          Products
        </span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[720px] mx-auto mt-6 leading-[1.1]">
          What we&rsquo;ve built.
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-xl mt-5 text-[#1f1410]/70 max-md:px-2">
          Two products from the NeuralAI team — live and used today.
        </p>
      </div>

      <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 mt-16">
        {products.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-3xl bg-white/55 backdrop-blur-2xl border border-white/70 shadow-[0_30px_80px_-30px_rgba(31,20,16,0.35)] hover:shadow-[0_40px_100px_-30px_rgba(122,44,18,0.45)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            {/* subtle inner highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent"
            />

            <div className="relative p-5 md:p-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/80 shadow-[0_18px_40px_-12px_rgba(31,20,16,0.25)] bg-white">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="relative px-7 pt-2 pb-7 flex flex-col">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#b0421a]">
                {p.category}
              </span>
              <h3 className="mt-2 text-2xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm md:text-base text-[#1f1410]/75 leading-relaxed">
                {p.body}
              </p>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#b0421a] hover:gap-2.5 transition-all w-max"
              >
                Visit {p.title}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
