'use client';

import { motion } from "motion/react";
import { X, Mail } from "lucide-react";

type TeamMemberProfile = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  techStack: string[];
  linkedin: string;
  email: string;
  github: string;
};

export default function InteractiveTeamProfile({
  member,
  onClose,
}: {
  member: TeamMemberProfile;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-md bg-[#fdfaf3] border border-[#e2d5c0] rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#b0421a] flex items-center justify-center text-white font-bold text-lg">
                {member.initials}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1f1410]">{member.name}</h3>
                <p className="text-sm text-[#b0421a] font-medium">{member.role}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1410]/5 hover:bg-[#1f1410]/10 text-[#1f1410]/60 font-bold transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-5 text-sm text-[#1f1410]/70 leading-relaxed">{member.bio}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold text-[#1f1410]/50 uppercase tracking-wider mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {member.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#f5e9d3] text-xs font-medium text-[#b0421a] border border-[#e2d5c0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#f5e9d3] flex items-center justify-center text-[#b0421a] hover:bg-[#efe7d3] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 15h-2.5V10h2.5v8ZM8.25 8.75A1.5 1.5 0 1 1 8.25 5.75a1.5 1.5 0 0 1 0 3ZM18 18h-2.5v-4.25c0-1-.5-1.75-1.5-1.75s-1.5.75-1.5 1.75V18H10v-8h2.5v1.25c.3-.7 1.2-1.5 2.5-1.5 1.8 0 3 1.2 3 3.5V18Z" /></svg>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="w-10 h-10 rounded-full bg-[#f5e9d3] flex items-center justify-center text-[#b0421a] hover:bg-[#efe7d3] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#f5e9d3] flex items-center justify-center text-[#b0421a] hover:bg-[#efe7d3] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.2A9.8 9.8 0 0 0 8.9 21.4c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.3-3.3-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" /></svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
