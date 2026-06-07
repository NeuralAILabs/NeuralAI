'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, CheckCircle2, Search, MapPin, Star } from "lucide-react";

type DemoProduct = {
  id: string;
  title: string;
  badge: string;
  description: string;
  stats: { label: string; value: string }[];
  url: string;
};

const ieltsSamples = [
  {
    title: "Climate Change Essay",
    text: "Climate change is one of the most pressing issues of our time. The rise in global temperatures has led to melting polar ice caps, rising sea levels, and more frequent extreme weather events. Governments around the world must take immediate action to reduce carbon emissions and transition to renewable energy sources. Individuals can also contribute by reducing their carbon footprint through simple lifestyle changes such as using public transportation and conserving energy at home.",
  },
  {
    title: "Technology Essay",
    text: "Technology has transformed the way we communicate, work, and learn. The internet has made information accessible to billions of people, while artificial intelligence is revolutionizing industries from healthcare to finance. However, this rapid technological advancement also raises important questions about privacy, job displacement, and the digital divide between developed and developing nations.",
  },
];

const freelancers = [
  { name: "Kiran Shrestha", skill: "React Expert", rating: 4.9, location: "Kathmandu", price: "$25/hr" },
  { name: "Anita Gurung", skill: "UI/UX Designer", rating: 4.8, location: "Pokhara", price: "$20/hr" },
  { name: "Ramesh KC", skill: "Python Developer", rating: 4.7, location: "Lalitpur", price: "$30/hr" },
  { name: "Sunita Rai", skill: "Digital Marketer", rating: 4.9, location: "Biratnagar", price: "$15/hr" },
];

function IeltsDemo() {
  const [selected, setSelected] = useState(ieltsSamples[0]);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { score: number; feedback: string[] }>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setResult({
        score: 6.5 + Math.random() * 1.5,
        feedback: [
          "Strong lexical resource with good use of topic-specific vocabulary",
          "Sentence structures show variety but could use more complex constructions",
          "Main ideas are clear but need stronger supporting evidence",
          "Cohesive devices are used effectively throughout",
        ],
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-5">
      <p className="text-xs text-[#1f1410]/60">Select a sample essay to analyze:</p>
      <div className="flex gap-2 flex-wrap">
        {ieltsSamples.map((s) => (
          <button
            key={s.title}
            onClick={() => { setSelected(s); setResult(null); }}
            className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
              selected.title === s.title
                ? "bg-[#b0421a] text-white border-[#b0421a]"
                : "bg-white border-[#e2d5c0] text-[#1f1410]/70 hover:border-[#b89e8a]"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
      <div className="bg-[#fdfaf3] rounded-xl border border-[#e2d5c0] p-4 text-sm text-[#1f1410]/80 leading-relaxed max-h-32 overflow-y-auto">
        {selected.text}
      </div>
      <button
        onClick={handleAnalyze}
        disabled={analyzing}
        className="w-full py-3 bg-[#b0421a] hover:bg-[#7a2c12] disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
      >
        {analyzing ? (
          <>Analyzing... <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /></>
        ) : (
          <>Analyze with AI <ArrowRight className="w-4 h-4" /></>
        )}
      </button>
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white rounded-xl border border-[#e2d5c0] p-5 space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-2xl font-bold text-[#0F766E] border border-[#0F766E]/20">
                {result.score.toFixed(1)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1f1410]">Estimated Band Score</p>
                <p className="text-xs text-[#1f1410]/60">Overall IELTS band prediction</p>
              </div>
            </div>
            <div className="space-y-2">
              {result.feedback.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#1f1410]/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] mt-0.5 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DigitalSewaDemo() {
  const [search, setSearch] = useState("");
  const [matched, setMatched] = useState(false);
  const [matching, setMatching] = useState(false);

  const filtered = freelancers.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.skill.toLowerCase().includes(search.toLowerCase())
  );

  const handleMatch = () => {
    setMatching(true);
    setTimeout(() => {
      setMatched(true);
      setMatching(false);
    }, 1500);
  };

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1f1410]/40" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search freelancers..."
          className="w-full pl-10 pr-4 py-3 border border-[#e2d5c0] bg-white rounded-xl text-sm text-[#1f1410] focus:outline-none focus:border-[#b0421a] transition-colors"
        />
      </div>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {filtered.map((f) => (
          <div
            key={f.name}
            className="flex items-center justify-between p-3 bg-[#fdfaf3] rounded-lg border border-[#e2d5c0]/50"
          >
            <div>
              <p className="text-sm font-medium text-[#1f1410]">{f.name}</p>
              <p className="text-xs text-[#1f1410]/60">{f.skill}</p>
            </div>
            <div className="text-right text-xs text-[#1f1410]/60">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-500" />
                <span>{f.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{f.location}</span>
              </div>
              <span className="font-medium text-[#0F766E]">{f.price}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleMatch}
        disabled={matching || matched}
        className="w-full py-3 bg-[#0F766E] hover:bg-[#0a5c55] disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
      >
        {matching ? (
          <>Finding matches... <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /></>
        ) : matched ? (
          <>Matched! <CheckCircle2 className="w-4 h-4" /></>
        ) : (
          <>Match me with freelancers <ArrowRight className="w-4 h-4" /></>
        )}
      </button>
    </div>
  );
}

export default function InteractiveProductDemo({
  product,
  onClose,
}: {
  product: DemoProduct;
  onClose: () => void;
}) {
  const isIelts = product.id === "ielts-buddy";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg bg-[#fdfaf3] border border-[#e2d5c0] rounded-2xl shadow-xl overflow-hidden max-h-[85vh] flex flex-col"
      >
        <div className="bg-[#fdfaf3] p-5 border-b border-[#e2d5c0] flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-bold text-[#b0421a] uppercase tracking-wider bg-[#b0421a]/5 px-2.5 py-1 rounded-sm">
              {product.badge}
            </span>
            <h3 className="text-lg font-bold text-[#1f1410] mt-1">{product.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1410]/5 hover:bg-[#1f1410]/10 text-[#1f1410]/60 font-bold transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <p className="text-sm text-[#1f1410]/70 leading-relaxed mb-6">
            {product.description}
          </p>
          {isIelts ? <IeltsDemo /> : <DigitalSewaDemo />}
        </div>
      </motion.div>
    </div>
  );
}
