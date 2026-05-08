import Image from "next/image";

type Post = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
};

const posts: Post[] = [
  {
    title: "Why mock tests still beat solo study for IELTS",
    category: "Test Prep",
    excerpt:
      "A short look at what timed, scored practice does for your band score — and why one weekly mock outperforms hours of solo work.",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80&auto=format&fit=crop",
    alt: "Student writing in a notebook with a laptop open",
  },
  {
    title: "Picking the right tech bootcamp in 2026",
    category: "Careers",
    excerpt:
      "Cloud, AI engineering, full-stack — the choices keep multiplying. Here’s how we help students think about a track that lasts.",
    date: "Apr 15, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format&fit=crop",
    alt: "Developer typing on a laptop with code on screen",
  },
  {
    title: "Studying abroad: what no one tells you about the SOP",
    category: "Study Abroad",
    excerpt:
      "Statements of purpose are misunderstood. A few patterns we see in successful applications — and the mistakes that get rejected.",
    date: "Apr 02, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80&auto=format&fit=crop",
    alt: "Open notebook and pen on a desk",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="ui-poppins bg-white text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center">
        <span className="ui-pill">Blog</span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[720px] mx-auto mt-6 leading-[1.1]">
          From the team.
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-xl mt-5 text-[#1f1410]/70 max-md:px-2">
          Notes on test prep, careers and studying abroad — written by the
          people doing it every day.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {posts.map((p) => (
          <article
            key={p.title}
            className="ui-card overflow-hidden flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#f5e9d3]">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-medium uppercase tracking-[0.12em] text-[#b0421a]">
                  {p.category}
                </span>
                <span className="text-[#1f1410]/40">·</span>
                <span className="text-[#1f1410]/60">{p.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[#1f1410]/70 leading-relaxed flex-1">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-[#1f1410]/50">{p.readTime}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-medium text-[#b0421a] hover:gap-2 transition-all"
                >
                  Read article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 19 19"
                    fill="none"
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
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a href="#" className="ui-btn-outline">
          See all articles
        </a>
      </div>
    </section>
  );
}
