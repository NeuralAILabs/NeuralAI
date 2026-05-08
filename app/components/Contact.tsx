const inputClass =
  "w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-[#1f1410] placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition-colors";

const interests = [
  "IELTS / PTE / TOEFL",
  "Custom AI / Software",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="ui-poppins bg-[#fdfaf3] text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center">
        <span className="ui-pill">Contact</span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[720px] mx-auto mt-6 leading-[1.1]">
          Get in touch.
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-xl mt-5 text-[#1f1410]/70 max-md:px-2">
          Tell us about your goals — we&rsquo;ll suggest the right next step.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 mt-16 max-w-5xl mx-auto">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <ContactCard
            label="Email"
            value="aashishad67@gmail.com"
            href="mailto:aashishad67@gmail.com"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m5 7 7 5 7-5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <ContactCard
            label="Phone"
            value="+9779846843300"
            href="tel:+9779846843300"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <ContactCard
            label="Visit"
            value="New Baneswor, Nepal"
            href="#"
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            }
          />
        </div>

        <form
          className="lg:col-span-3 ui-card p-6 sm:p-8"
          action="mailto:hello@neuralai.com.np"
          method="post"
          encType="text/plain"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium pl-2 mb-1.5"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium pl-2 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="interest"
              className="block text-sm font-medium pl-2 mb-1.5"
            >
              I&rsquo;m interested in
            </label>
            <select
              id="interest"
              name="interest"
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Choose a service
              </option>
              {interests.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium pl-2 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your goals…"
              className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm text-[#1f1410] placeholder:text-slate-400 focus:border-slate-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          <button type="submit" className="ui-btn-dark w-full mt-6">
            Send message
          </button>
          <p className="mt-3 text-xs text-[#1f1410]/60 text-center">
            We typically respond within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href} className="ui-card p-5 flex items-center gap-4">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f5e9d3] text-[#b0421a] shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
          {label}
        </p>
        <p className="text-sm font-medium mt-0.5">{value}</p>
      </div>
    </a>
  );
}
