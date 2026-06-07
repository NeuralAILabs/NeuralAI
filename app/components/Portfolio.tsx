'use client';

import { ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export type Product = {
  id: string;
  title: string;
  badge: string;
  description: string;
  stats: { label: string; value: string }[];
  url: string;
};

const products: Product[] = [
  {
    id: "ielts-buddy",
    title: "IeltsBuddy",
    badge: "TEST PREP",
    description: "An AI-powered IELTS preparation platform built for students aiming at universities in the US, UK, Australia and Canada.",
    stats: [
      { label: "Active Users", value: "400+" },
      { label: "AI Evaluations", value: "32,000+" },
      { label: "Avg. Improvement", value: "+1.5 Bands" },
    ],
    url: "https://www.ieltsbuddy.app/",
  },
  {
    id: "digital-sewa",
    title: "Digital Sewa",
    badge: "MARKETPLACE",
    description: "Nepal's local freelancing platform, connecting clients with skilled service providers across the country.",
    stats: [
      { label: "Verified Pros", value: "10+" },
      { label: "Client Matches", value: "30+" },
      { label: "Platform Fee", value: "0% Free to Use" },
    ],
    url: "https://digitalsewav3.vercel.app/",
  },
];

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
        <span className="text-[10px] text-[#18181B]/40 font-mono ml-2">{url}</span>
      </div>
      <span className="text-[10px] font-bold text-[#18181B]/40 uppercase bg-[#18181B]/5 px-2 py-0.5 rounded-md">secure</span>
    </div>
  );
}

function IeltsMockup() {
  return (
    <div className="flex-1 flex gap-4 mt-2 overflow-hidden relative">
      <div className="w-3/5 bg-white border border-[#E2DDD5]/80 rounded-xl p-4 shadow-sm space-y-3 flex flex-col justify-between">
        <span className="text-[9px] font-extrabold text-[#0F766E] uppercase tracking-widest bg-[#0F766E]/5 px-2 py-0.5 rounded-sm inline-block">
          AI Feedback Engine
        </span>
        <h6 className="font-serif font-bold text-sm text-[#18181B] pr-2 line-clamp-2">
          Achieve your target IELTS band with AI-powered feedback
        </h6>
        <div className="text-[9px] bg-[#FAF8F5] text-[#18181B]/60 p-2 rounded border border-[#E2DDD5]/50 whitespace-nowrap overflow-hidden text-ellipsis">
          &ldquo;Sentence is strongly cohesive; consider using complex lexical terms...&rdquo;
        </div>
      </div>
      <div className="w-2/5 bg-white border border-[#E2DDD5]/80 rounded-xl p-3 shadow-sm flex flex-col items-center justify-center space-y-2">
        <div className="w-14 h-14 bg-[#0F766E]/10 rounded-full flex items-center justify-center font-serif font-black text-xl text-[#0F766E] border border-[#0F766E]/20">
          7.5
        </div>
        <div className="text-[9px] text-[#18181B]/50 text-center font-bold">Estimated Band Score</div>
      </div>
    </div>
  );
}

function DigitalSewaMockup() {
  return (
    <div className="flex-1 bg-white border border-[#E2DDD5]/80 rounded-xl mt-2 p-4 shadow-sm space-y-3 flex flex-col justify-between">
      <div className="p-3 bg-[#075D66] text-white rounded-lg flex justify-between items-center">
        <div>
          <h6 className="font-bold text-xs">Find Local Trust. Build Local Talent.</h6>
          <p className="text-[8px] text-white/80">Connect with Nepal&apos;s local certified freelancers</p>
        </div>
        <span className="text-[9px] uppercase bg-white/10 px-2 py-0.5 rounded-sm">0% Comm</span>
      </div>
      <div className="text-[9px] flex justify-between items-center bg-[#FAF8F5] p-2 border border-[#E2DDD5]/50 rounded-lg">
        <span className="font-extrabold text-[#18181B]">Kiran Shrestha (React Expert)</span>
        <span className="text-amber-500 font-bold">★ 4.9 (Kathmandu)</span>
      </div>
    </div>
  );
}

function ProductCard({ p, onViewDemo }: { p: Product; onViewDemo?: (p: Product) => void }) {
  return (
    <div className="bg-white border border-[#E2DDD5]/80 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full">
      <div className="p-6 bg-[#FAF8F5] border-b border-[#E2DDD5]/40 h-64 flex flex-col select-none">
        <BrowserChrome url={`${p.id}.neuralai.in`} />
        {p.id === "ielts-buddy" ? <IeltsMockup /> : <DigitalSewaMockup />}
      </div>

      <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-[#b0421a] uppercase tracking-wider bg-[#b0421a]/5 px-2.5 py-1 rounded-sm inline-block">
            {p.badge}
          </span>
          <h3 className="text-2xl font-bold font-serif text-[#18181B]">{p.title}</h3>
          <p className="text-sm text-[#18181B]/70 leading-relaxed">{p.description}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-b border-[#E2DDD5]/50 py-4">
          {p.stats.map((st, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-xs text-[#18181B]/40 font-medium tracking-wide uppercase">{st.label}</div>
              <div className="text-[15px] font-bold text-[#18181B]/80 mt-0.5">{st.value}</div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between gap-4">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#b0421a] hover:text-[#7a2c12] inline-flex items-center gap-1.5 transition-colors group"
          >
            Visit {p.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          {onViewDemo && (
            <button
              onClick={() => onViewDemo(p)}
              className="px-4 py-1.5 border border-[#0F766E]/20 hover:border-[#0F766E] bg-[#0F766E]/[0.03] text-[#0F766E] hover:bg-[#0F766E]/5 text-xs font-bold rounded-lg transition-all"
            >
              ⚡ Try Interactive Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ onViewDemo }: { onViewDemo?: (p: Product) => void }) {
  return (
    <section id="products" className="ui-poppins py-24 px-6 md:px-16 bg-[#FAF8F5]/80 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <ScrollReveal variant="fade-up">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full border border-[#E2DDD5] text-xs font-semibold text-[#18181B]/60 bg-white">
              Products
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#18181B] font-serif">
              What we&apos;ve built.
            </h2>
            <p className="text-[#18181B]/60 text-sm md:text-base leading-relaxed">
              Shipping real products, an AI IELTS coach and Nepal&apos;s local freelancing platform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((p) => (
            <StaggerItem key={p.id} className="flex flex-col h-full">
              <ProductCard p={p} onViewDemo={onViewDemo} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
