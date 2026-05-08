// const stats = [
//   // { k: "10K+", v: "Learners" },
//   // { k: "120+", v: "Courses" },
//   // { k: "50+", v: "Partner universities" },
//   // { k: "95%", v: "Completion rate" },
// ];

const values = [
  {
    title: "Practical first",
    body: "Every course, tool and product is judged on one thing — does it help a learner reach their next step?",
  },
  {
    title: "Honest pricing",
    body: "Transparent fees and no hidden upsells. We’d rather earn trust than push a sale.",
  },
  {
    title: "Built locally",
    body: "Designed for Nepali students, then taken global — our products work in the contexts our users actually live in.",
  },
  {
    title: "Always learning",
    body: "We’re a small team and we move fast. Feedback from learners shapes what we build next.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="ui-poppins bg-white text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center">
        <span className="ui-pill">About</span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[760px] mx-auto mt-6 leading-[1.1]">
          About NeuralAI.
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-xl mt-5 text-[#1f1410]/70 max-md:px-2">
          A small team in Kathmandu, helping people learn and reach their goals.
        </p>
      </div>

      <div className="mt-14 max-w-3xl mx-auto space-y-5 text-base md:text-lg leading-relaxed text-[#1f1410]/80">
        <p>
          <span className="text-[#b0421a] font-bold">NeuralAI </span> started with a simple idea: use AI with real teaching to make education better and more affordable. We built an AI IELTS coach first for students who couldn&rsquo;t pay for expensive prep courses, then grew from there.
        </p>
        <p>
          Today we work in three main areas. We{" "}
          <span>build software</span> like AI apps, mobile apps, and learning platforms for schools. We{" "}
          <span>teach and certify</span>{" "}
          through bootcamps, IT courses, and language coaching. We also{" "}
          <span>guide students</span> with study abroad applications, scholarships and visa support.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 max-w-4xl mx-auto">
        {/* {stats.map((s) => (
          <div
            key={s.v}
            className="text-center border border-[#e2d5c0] rounded-2xl py-6 px-4"
          >
            <p className="text-3xl md:text-4xl font-medium text-[#b0421a]">
              {s.k}
            </p>
            <p className="text-xs md:text-sm text-[#1f1410]/60 mt-2">{s.v}</p>
          </div>
        ))} */}
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <div className="text-center">
          <span className="ui-pill">What we believe</span>
          <h3 className="text-2xl md:text-3xl font-medium mt-4">
            Four principles that guide our work.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {values.map((v) => (
            <div key={v.title} className="ui-card p-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5e9d3] text-[#b0421a]">
                  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                    <path
                      d="m4 10 4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-lg font-medium">{v.title}</p>
                  <p className="text-sm text-[#1f1410]/70 mt-1 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
