type Service = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Software & Apps",
    body: "Custom websites, mobile apps and platforms — built for schools, businesses and our own products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M9 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4M9 7V5a3 3 0 0 1 6 0v2M9 7h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Tech Training",
    body: "Bootcamps, workshops and IT certifications designed around real-world projects and modern tooling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 7l9-4 9 4-9 4-9-4Zm0 0v6m18-6v6M7 10v5l5 2 5-2v-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "IELTS, PTE & TOEFL",
    body: "Mock tests, AI-driven feedback and a study plan that adapts to your timeline and target score.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 12l2 2 4-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Study Abroad",
    body: "End-to-end guidance — university shortlisting, SOPs, scholarships and visa documentation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="ui-poppins bg-white text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center">
        <span className="ui-pill">Services</span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[720px] mx-auto mt-6 leading-[1.1]">
          What we offer.
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-xl mt-5 text-[#1f1410]/70 max-md:px-2">
          Four areas we focus on.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {services.map((s) => (
          <article key={s.title} className="ui-card p-6">
            <div className="h-11 w-11 rounded-full bg-[#f5e9d3] flex items-center justify-center text-[#b0421a]">
              {s.icon}
            </div>
            <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-[#1f1410]/70 leading-relaxed">
              {s.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
