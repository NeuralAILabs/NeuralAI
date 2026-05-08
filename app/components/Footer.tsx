import Link from "next/link";

const cols = [
  {
    title: "Products",
    links: [
      { label: "IeltsBuddy", href: "https://www.ieltsbuddy.app/" },
      { label: "Digital Sewa", href: "https://digitalsewav3.vercel.app/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software & Apps", href: "#services" },
      { label: "Tech Training", href: "#services" },
      { label: "IELTS, PTE, TOEFL", href: "#services" },
      { label: "Study Abroad", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ui-poppins bg-white text-[#1f1410] border-t border-slate-200">
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="text-[#b0421a]">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9"
              >
                <circle cx="32" cy="32" r="29" />
                <path d="M9 32 H 55" />
                <path d="M12 22 Q 32 14, 52 22" />
                <path d="M12 42 Q 32 50, 52 42" />
                <path d="M22 11 Q 30 32, 22 53" />
                <path d="M42 11 Q 34 32, 42 53" />
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-tight">
              Neural<span className="text-[#b0421a]"> AI</span>
            </span>
          </Link>

          <p className="mt-4 text-sm text-[#1f1410]/70 max-w-sm leading-relaxed">
            NeuralAI builds AI-powered learning, certification and study-abroad
            services. Headquartered in Kathmandu — serving learners worldwide.
          </p>

          <form className="mt-6 flex w-full max-w-sm gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
            />
            <button type="submit" className="ui-btn-dark text-sm py-2.5 px-5">
              Subscribe
            </button>
          </form>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#1f1410]/80 hover:text-[#1f1410]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#1f1410]/60">
            © {year} NeuralAI Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#1f1410]/60">
            <Link href="#" className="hover:text-[#1f1410]">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#1f1410]">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#1f1410]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
