import Image from "next/image";

type Quote = {
  body: string;
  name: string;
  role: string;
  photo: string;
};

const quotes: Quote[] = [
  {
    body: "I went from a 6.5 to a 7.5 in eight weeks. The AI speaking practice felt remarkably close to a real examiner.",
    name: "Anisha Thapa",
    role: "IELTS Academic — Band 7.5",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
  },
  {
    body: "NeuralAI delivered our learning platform on time and trained our faculty. Student engagement has grown noticeably this semester.",
    name: "Dr. Bibek Rana",
    role: "Dean, Kathmandu College",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop",
  },
  {
    body: "The team guided me through SOPs, scholarships and the visa interview. I&rsquo;m starting at TU Munich this fall.",
    name: "Sushant Lama",
    role: "MS Computer Science — Germany",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="ui-poppins bg-white text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center">
        <span className="ui-pill">Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[720px] mx-auto mt-6 leading-[1.1]">
          What our clients say.
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-xl mt-5 text-[#1f1410]/70 max-md:px-2">
          Notes from learners and institutions we&rsquo;ve worked with.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {quotes.map((q) => (
          <figure key={q.name} className="ui-card p-7 flex flex-col">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7 text-[#1f1410]/30"
              aria-hidden
            >
              <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7Zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7Z" />
            </svg>
            <blockquote className="mt-4 text-base leading-relaxed flex-1">
              {q.body}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={q.photo}
                  alt={`${q.name} portrait`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{q.name}</p>
                <p className="text-xs text-[#1f1410]/60 mt-0.5">{q.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
