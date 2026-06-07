import { Check } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const principles = [
  {
    title: "Practical first",
    description: "Every course, tool and product is judged on one thing, does it help a learner reach their next step?",
  },
  {
    title: "Honest pricing",
    description: "Transparent fees and no hidden upsells. We'd rather earn trust than push a sale.",
  },
  {
    title: "Built locally",
    description: "Designed for Nepali students, then taken global, our products work in the contexts our users actually live in.",
  },
  {
    title: "Always learning",
    description: "We're a small team and we move fast. Feedback from learners shapes what we build next.",
  },
];

export default function About() {
  return (
    <section id="about" className="ui-poppins py-24 px-6 md:px-16 bg-white border-t border-b border-[#E2DDD5]/50 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">

        <ScrollReveal variant="fade-up">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full border border-[#E2DDD5] text-xs font-semibold text-[#18181B]/60 bg-[#FAF8F5]">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#18181B] font-serif">
              About NeuralAI.
            </h2>
            <p className="text-[#18181B]/60 text-sm md:text-base leading-relaxed">
              A small team in Kathmandu, helping people learn and reach their goals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm md:text-[15px] text-[#18181B]/70 leading-relaxed border-b border-[#E2DDD5]/50 pb-16">
            <div className="lg:col-span-5 font-serif text-[17px] md:text-[21px] text-[#A53C1B] font-medium leading-relaxed pr-6 italic">
              &ldquo;NeuralAI started with a simple idea: use AI with real teaching to make education better and more affordable. We built an AI IELTS coach first for students who couldn&rsquo;t pay for expensive prep courses, then grew from there.&rdquo;
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p>
                Today we work in three main areas. We build software like AI apps, mobile apps, and learning platforms for schools. We teach and certify through bootcamps, IT courses, and language coaching. We also guide students with study abroad applications, scholarships, and visa support.
              </p>
              <div className="flex gap-4 p-4 border-l-2 border-[#0F766E] bg-[#FAF8F5] rounded-r-xl">
                <span className="text-xs uppercase bg-[#0F766E]/10 text-[#0F766E] px-2 py-1 h-fit font-bold rounded shrink-0">
                  Location
                </span>
                <p className="text-xs text-[#18181B]/60 leading-normal">
                  Our headquarters is positioned in New Baneswor, Kathmandu, allowing tactile accessibility to university applicants and software innovators directly.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[#0F766E] uppercase tracking-widest">What we believe</span>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#18181B]">Four principles that guide our work.</h3>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((pr) => (
              <StaggerItem key={pr.title}>
                <div className="bg-[#FAF8F5] p-6 h-full border border-[#E2DDD5]/70 flex flex-col justify-start space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-[#b0421a] shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <h4 className="font-bold text-[15px] font-serif tracking-tight">{pr.title}</h4>
                  </div>
                  <p className="text-[13px] text-[#18181B]/60 leading-relaxed">{pr.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
