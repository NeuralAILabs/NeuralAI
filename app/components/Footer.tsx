'use client';

export default function Footer({
  newsletterEmail, newsletterSubscribed,
  onNewsletterEmailChange, onNewsletterSubmit,
}: {
  newsletterEmail: string; newsletterSubscribed: boolean;
  onNewsletterEmailChange: (v: string) => void; onNewsletterSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="global-footer" className="ui-poppins bg-[#18181B] text-white/95 pt-20 pb-12 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">

        {/* Brand + newsletter */}
        <div className="md:col-span-5 space-y-6">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center gap-2 group w-fit">
            <div className="w-8 h-8 bg-[#b0421a] flex items-center justify-center font-black rounded-sm text-white text-sm">N</div>
            <span className="text-lg font-bold tracking-tight uppercase text-white">
              Neural<span className="text-[#b0421a] group-hover:text-amber-500 transition-colors">AI</span>
            </span>
          </a>

          <p className="text-xs text-white/60 leading-relaxed pr-8">
            NeuralAI builds AI-powered learning, certification and study-abroad services. Headquartered in Kathmandu, serving learners worldwide.
          </p>

          <form onSubmit={onNewsletterSubmit} className="space-y-3 pt-2 max-w-sm">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest block">
              Stay updated with research notes
            </span>
            <div className="flex gap-1.5">
              <input
                required
                type="email"
                value={newsletterEmail}
                onChange={(e) => onNewsletterEmailChange(e.target.value)}
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 px-4 py-2 text-xs rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#b0421a] flex-1 transition-all"
              />
              <button
                type="submit"
                className="bg-[#b0421a] hover:bg-[#7a2c12] text-white text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider transition-all"
              >
                {newsletterSubscribed ? "Sent ✓" : "Subscribe"}
              </button>
            </div>
          </form>
        </div>

        {/* Nav columns */}
        <div className="md:col-span-7 grid grid-cols-2 gap-6 pt-4">
          <div className="space-y-4">
            <h5 className="text-[11px] font-extrabold uppercase tracking-widest text-white/45">Products</h5>
            <div className="flex flex-col space-y-3.5 text-xs text-white/60 font-semibold uppercase tracking-wider">
              <a href="https://www.ieltsbuddy.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">IeltsBuddy</a>
              <a href="https://digitalsewav3.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-fit">Digital Sewa</a>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-[11px] font-extrabold uppercase tracking-widest text-white/45">Company</h5>
            <div className="flex flex-col space-y-3.5 text-xs text-white/60 font-semibold uppercase tracking-wider">
              <button onClick={() => scrollTo('about')} className="text-left hover:text-white transition-colors">About</button>
              <button onClick={() => scrollTo('blog')} className="text-left hover:text-white transition-colors">Blog</button>
              <button onClick={() => scrollTo('contact')} className="text-left hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
        <span>&copy; {new Date().getFullYear()} NeuralAI Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-6 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
