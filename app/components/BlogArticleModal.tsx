'use client';

import { motion } from "motion/react";
import { X, Sparkles } from "lucide-react";

type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string;
};

export default function BlogArticleModal({
  article,
  onClose,
}: {
  article: BlogPost;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl bg-[#fdfaf3] border border-[#e2d5c0] rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        <div className="bg-[#fdfaf3] p-6 border-b border-[#e2d5c0] flex justify-between items-center shrink-0">
          <div>
            <span className="text-[10px] font-bold text-[#0F766E] uppercase tracking-wider bg-[#0F766E]/5 px-2.5 py-1 rounded-sm">
              {article.category}
            </span>
            <p className="text-[10px] text-[#1f1410]/40 font-semibold mt-1.5">
              {article.date} &middot; {article.readTime}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f1410]/5 hover:bg-[#1f1410]/10 text-[#1f1410]/60 font-bold transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1f1410] leading-tight">
            {article.title}
          </h3>

          <p className="text-sm font-semibold text-[#b0421a] leading-relaxed border-l-2 border-[#b0421a] pl-4 bg-[#fdfaf3] py-2.5 rounded-r">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          <div className="text-sm text-[#1f1410]/70 leading-relaxed space-y-4">
            {article.content?.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            )) || (
              <p>
                Full article content coming soon. Stay tuned for more insights from the NeuralAI team.
              </p>
            )}
          </div>
        </div>

        <div className="p-4 bg-[#f7f1e4] border-t border-[#e2d5c0]/70 flex items-center justify-center gap-2 shrink-0 text-xs text-[#1f1410]/50">
          <Sparkles className="w-4 h-4 text-[#b0421a]" />
          Written by the NeuralAI team.
        </div>
      </motion.div>
    </div>
  );
}
