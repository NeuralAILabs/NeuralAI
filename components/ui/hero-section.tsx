'use client';

import React from 'react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <section
      id="home"
      className="ui-poppins bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44 text-[#1f1410]"
    >
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
          <a href="#home" aria-label="NeuralAI home" className="flex items-center gap-2.5 text-[#b0421a]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="32" cy="32" r="29" />
              <path d="M9 32 H 55" />
              <path d="M12 22 Q 32 14, 52 22" />
              <path d="M12 42 Q 32 50, 52 42" />
              <path d="M22 11 Q 30 32, 22 53" />
              <path d="M42 11 Q 34 32, 42 53" />
            </svg>
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#1f1410]">
              Neural<span className="text-[#b0421a]"> AI</span>
            </span>
          </a>

          <div
            id="menu"
            ref={menuRef}
            className={[
              'max-md:absolute max-md:top-0 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 max-md:backdrop-blur',
              'flex items-center gap-8 font-medium',
              'max-md:flex-col max-md:justify-center',
              menuOpen ? 'max-md:w-full' : 'max-md:w-0',
            ].join(' ')}
            aria-hidden={!menuOpen}
          >
            <a href="#home" className="hover:text-gray-600">Home</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#portfolio" className="hover:text-gray-600">Products</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#testimonials" className="hover:text-gray-600">Testimonials</a>
            <a href="#blog" className="hover:text-gray-600">Blog</a>

            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden bg-[#b0421a] hover:bg-[#7a2c12] text-white p-2 rounded-md aspect-square font-medium transition"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <a
            href="#contact"
            className="hidden md:block bg-[#b0421a] hover:bg-[#7a2c12] text-white px-6 py-3 rounded-full font-medium transition"
          >
            Contact Us
          </a>

          <button
            id="open-menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden bg-[#b0421a] hover:bg-[#7a2c12] text-white p-2 rounded-md aspect-square font-medium transition"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </nav>

        <a
          href="#portfolio"
          className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32"
        >
          <span>Introducing IeltsBuddy — our AI IELTS coach</span>
          <span className="flex items-center gap-1 font-medium">
            <span>Explore</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54"
                stroke="#1f1410"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <h1 className="text-4xl md:text-7xl font-medium max-w-[760px] text-center mx-auto mt-8 text-[#1f1410]">
          <span className="bg-[#b0421a] text-white px-1.5 py-1">Smarter</span> learning, made <span className="underline decoration-[#b0421a] decoration-2 underline-offset-2">simple</span>.
        </h1>

        <p className="text-sm md:text-base mx-auto max-w-xl text-center mt-6 max-md:px-2 text-[#1f1410]/70">
          IELTS preparation, technology training, and study-abroad guidance — all in one place.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8">
          <a
            href="#services"
            className="bg-[#b0421a] hover:bg-[#7a2c12] text-white px-6 py-3 rounded-full font-medium transition"
          >
            Get started
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 border border-[#b89e8a] hover:bg-[#f5e9d3]/40 rounded-full px-6 py-3"
          >
            <span>Our products</span>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M1.25.5 4.75 4l-3.5 3.5"
                stroke="#1f1410"
                strokeOpacity=".4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
    </section>
  );
}
