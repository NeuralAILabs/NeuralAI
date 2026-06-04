type Post = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
};

const posts: Post[] = [
  {
    title: "Why mock tests still beat solo study for IELTS",
    category: "Test Prep",
    excerpt: "A short look at what timed, scored practice does for your band score — and why one weekly mock outperforms hours of solo work.",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    gradient: "from-[#b0421a]/20 via-[#f5e9d3] to-[#d97a3f]/20",
  },
  {
    title: "Picking the right tech bootcamp in 2026",
    category: "Careers",
    excerpt: "Cloud, AI engineering, full-stack — the choices keep multiplying. Here's how we help students think about a track that lasts.",
    date: "Apr 15, 2026",
    readTime: "7 min read",
    gradient: "from-[#1f1410]/10 via-[#f7eddc] to-[#b0421a]/15",
  },
  {
    title: "Studying abroad: what no one tells you about the SOP",
    category: "Study Abroad",
    excerpt: "Statements of purpose are misunderstood. A few patterns we see in successful applications — and the mistakes that get rejected.",
    date: "Apr 02, 2026",
    readTime: "6 min read",
    gradient: "from-[#d97a3f]/20 via-[#f5e9d3] to-[#b0421a]/10",
  },
];

function BlogCard({ p }: { p: Post }) {
  return (
    <article className="ui-card overflow-hidden flex flex-col group">
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#b0421a_0.5px,transparent_0.5px)] bg-[length:16px_16px] opacity-20" />
        <div aria-hidden className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#b0421a]/15 blur-xl" />
        <div aria-hidden className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#d97a3f]/15 blur-xl" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium uppercase tracking-[0.12em] text-[#b0421a]">{p.category}</span>
          <span className="text-[#1f1410]/40">·</span>
          <span className="text-[#1f1410]/60">{p.date}</span>
        </div>
        <h3 className="mt-3 text-lg font-medium leading-snug">{p.title}</h3>
        <p className="mt-2 text-sm text-[#1f1410]/70 leading-relaxed flex-1">{p.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="text-[#1f1410]/50">{p.readTime}</span>
          <a href="#" className="inline-flex items-center gap-1 font-medium text-[#b0421a] hover:gap-2 transition-all">
            Read article
            <svg width="14" height="14" viewBox="0 0 19 19" fill="none" aria-hidden>
              <path d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="ui-poppins bg-white text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="text-center lg:text-left lg:max-w-2xl">
        <span className="ui-pill">Blog</span>
        <h2 className="text-4xl md:text-6xl font-medium mt-6 leading-[1.1]">From the team.</h2>
        <p className="text-sm md:text-base max-w-xl mt-5 text-[#1f1410]/70">
          Notes on test prep, careers and studying abroad — written by the people doing it every day.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {posts.map((p) => (<BlogCard key={p.title} p={p} />))}
      </div>
      <div className="mt-12 flex justify-center">
        <a href="#" className="ui-btn-outline">See all articles</a>
      </div>
    </section>
  );
}
