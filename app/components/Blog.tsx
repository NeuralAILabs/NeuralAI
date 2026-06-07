'use client';

import { useState } from "react";
import { BookOpen, Briefcase, Globe, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

type Post = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

const posts: Post[] = [
  {
    id: "blog-1",
    title: "Why mock tests still beat solo study for IELTS",
    category: "TEST PREP",
    excerpt: "A short look at what timed, scored practice does for your band score, and why one weekly mock outperforms hours of solo work.",
    date: "Apr 28, 2026",
    readTime: "5 min read",
    content:
      "When preparing for the IELTS exam, standard learning routines usually focus on passive reading and textbook review. However, the exact cognitive demands of the actual test are vastly different.\n\nAn active, timed environment forces split-second decision making, mimics the stressful parameters of the test center, and highlights hidden deficiencies in time-management and grammatical speed.\n\nOur core research shows that simulating a single weekly full-scale mock exam increases average candidate scores by over 1.0 band compared to candidates spending identical hours in unguided solo study.",
  },
  {
    id: "blog-2",
    title: "Picking the right tech bootcamp in 2026",
    category: "CAREERS",
    excerpt: "Cloud, AI engineering, full-stack, the choices keep multiplying. Here's how we help students think about a track that lasts.",
    date: "Apr 15, 2026",
    readTime: "7 min read",
    content:
      "The engineering landscape is shifting beneath our feet. In 2026, knowing only HTML/CSS or basic JavaScript is no longer sufficient.\n\nModern tech teams demand competency in server-side state coordination, API gateway microservices, LLM inference engineering, and full cloud deploys.\n\nChoosing an educational track means evaluating whether a curricula teaches generic syntactic structures, or whether it models real-world production setups.",
  },
  {
    id: "blog-3",
    title: "Studying abroad: what no one tells you about the SOP",
    category: "STUDY ABROAD",
    excerpt: "Statements of purpose are misunderstood. A few patterns we see in successful applications, and the mistakes that get rejected.",
    date: "Apr 02, 2026",
    readTime: "6 min read",
    content:
      "Many students treat the Statement of Purpose (SOP) as an expanded curriculum vitae or resume, dryly listing academic credentials in chronological order.\n\nIn reality, selection committees at elite global universities seek to understand something far deeper: your logical continuity, research alignment, and resilience.\n\nA successful SOP is structured as a technical narrative: identifying an academic challenge or project gap, detailing how your background equipped you to solve it, and presenting a concrete vision for how the host institution's faculty directly enables your next specialized step.",
  },
];

const FILTERS = ["ALL", "TEST PREP", "CAREERS", "STUDY ABROAD"];

function CategoryIcon({ category }: { category: string }) {
  if (category === "TEST PREP") return <BookOpen className="w-5 h-5" />;
  if (category === "CAREERS") return <Briefcase className="w-5 h-5" />;
  return <Globe className="w-5 h-5" />;
}

function BlogCard({ p, onReadArticle }: { p: Post; onReadArticle?: (p: Post) => void }) {
  return (
    <article className="bg-white border border-[#E2DDD5] overflow-hidden flex flex-col justify-between group h-full">
      <div className="h-44 bg-[#FAF8F5] relative overflow-hidden flex items-center justify-center p-6 border-b border-[#E2DDD5]/20 select-none">
        <div className="absolute inset-0 grid-dots opacity-40 group-hover:scale-105 transition-transform duration-300" />
        <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#E2DDD5]/40 flex items-center justify-center text-[#b0421a] z-10 group-hover:rotate-12 transition-transform duration-300">
          <CategoryIcon category={p.category} />
        </div>
      </div>
      <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#0F766E] tracking-widest uppercase">
            <span>{p.category}</span>
            <span className="text-[#18181B]/40 font-semibold">{p.date}</span>
          </div>
          <h4 className="text-[17px] font-bold text-[#18181B] font-serif tracking-tight pr-2 group-hover:text-[#b0421a] transition-colors line-clamp-2">
            {p.title}
          </h4>
          <p className="text-[13px] text-[#18181B]/60 leading-relaxed line-clamp-3">{p.excerpt}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-[#E2DDD5]/40 text-xs font-semibold text-[#18181B]/60">
          <span>{p.readTime}</span>
          <button
            onClick={() => onReadArticle?.(p)}
            className="text-[#b0421a] hover:text-[#7a2c12] inline-flex items-center gap-1 font-bold tracking-wide transition-colors"
          >
            Read article <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Blog({ onReadArticle }: { onReadArticle?: (p: Post) => void }) {
  const [blogFilter, setBlogFilter] = useState("ALL");

  const filtered = blogFilter === "ALL" ? posts : posts.filter((p) => p.category === blogFilter);

  const handleSeeAll = () => {
    setBlogFilter("ALL");
    const el = document.getElementById("blog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="blog" className="ui-poppins py-24 px-6 md:px-16 bg-[#FAF8F5]/80 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">

        <ScrollReveal variant="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-[#E2DDD5]/50">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full border border-[#E2DDD5] text-xs font-semibold text-[#18181B]/60 bg-white">
                Blog
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#18181B] font-serif">
                From the team.
              </h2>
              <p className="text-[#18181B]/60 text-sm md:text-base leading-relaxed">
                Notes on test prep, careers and studying abroad, written by the people doing it every day.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold tracking-widest uppercase mb-1">
              {FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setBlogFilter(cat)}
                  className={`px-3 py-1.5 rounded-full border transition-all ${
                    blogFilter === cat
                      ? "bg-[#b0421a] border-[#b0421a] text-white"
                      : "bg-white border-[#E2DDD5] text-[#18181B]/60 hover:text-[#18181B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <StaggerItem key={p.id} className="flex flex-col h-full">
              <BlogCard p={p} onReadArticle={onReadArticle} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fade-up">
          <div className="flex justify-center pt-4">
            <button
              onClick={handleSeeAll}
              className="px-6 py-2 border border-[#E2DDD5] hover:bg-[#FAF8F5]/80 bg-white text-xs font-bold tracking-widest uppercase text-[#18181B] transition-colors"
            >
              See all articles
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
