import Image from "next/image";
import { ReactNode } from "react";

type Member = {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  email: string;
  github: string;
};

const team: Member[] = [
  {
    name: "Aashish Adhikari",
    role: "Founder & CEO",
    photo: "/aashishahikari.jpg",
    linkedin: "https://www.linkedin.com/in/aashish-adhikari-96234b239",
    email: "aashishad67@gmail.com",
    github: "https://github.com/anonymousboy67",
  },
  {
    name: "Er. Bhagirath Aryal",
    role: "ML Engineer",
    photo: "/bhagiratharyal.jpg",
    linkedin: "https://www.linkedin.com/in/bhagirath-aryal",
    email: "bhagiratharyal2@gmail.com",
    github: "https://github.com/Bhagirath369",
  },
  {
    name: "Sijan Bhusal",
    role: "Software Engineer",
    photo: "/sijanbhusal.jpg",
    linkedin: "https://www.linkedin.com/in/sijan-bhusal07/",
    email: "sijan.bhusal03@gmail.com",
    github: "https://github.com/Sijan-Bhusal",
  },
];

const Social = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e2d5c0] text-[#1f1410] hover:bg-[#f5e9d3] hover:border-[#b89e8a] transition"
  >
    {children}
  </a>
);

export default function Team() {
  return (
    <section
      id="team"
      className="ui-poppins bg-[#fdfaf3] text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="text-center">
        <span className="ui-pill">Team</span>
        <h2 className="text-4xl md:text-6xl font-medium max-w-[720px] mx-auto mt-6 leading-[1.1]">
          Meet the team.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
        {team.map((m) => (
          <article
            key={m.name}
            className="ui-card overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_100px_-30px_rgba(122,44,18,0.45)]"
          >
            <div className="p-4 bg-[#f5e9d3]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-[#b89e8a]/30 shadow-sm bg-white">
                <Image
                  src={m.photo}
                  alt={`${m.name} portrait`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="px-6 pt-5 pb-6 text-center">
              <h3 className="text-lg font-medium">{m.name}</h3>
              <p className="text-sm text-[#b0421a] mt-1 font-medium">
                {m.role}
              </p>
              <div className="mt-5 flex justify-center gap-2">
                <Social href={m.linkedin}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 15h-2.5V10h2.5v8ZM8.25 8.75A1.5 1.5 0 1 1 8.25 5.75a1.5 1.5 0 0 1 0 3ZM18 18h-2.5v-4.25c0-1-.5-1.75-1.5-1.75s-1.5.75-1.5 1.75V18H10v-8h2.5v1.25c.3-.7 1.2-1.5 2.5-1.5 1.8 0 3 1.2 3 3.5V18Z" />
                  </svg>
                </Social>
                <Social href={`mailto:${m.email}`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 10H4V9.2l7.4 4.6c.4.2.8.2 1.2 0L20 9.2V17Z" />
                  </svg>
                </Social>
                <Social href={m.github}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 2.2A9.8 9.8 0 0 0 8.9 21.4c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.3-3.3-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
                  </svg>
                </Social>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
