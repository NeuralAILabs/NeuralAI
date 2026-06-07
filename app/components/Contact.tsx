'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from "@/components/ui/scroll-reveal";

const inputClass =
  "w-full rounded-xl border border-[#E2DDD5] bg-white px-4 py-3 text-sm text-[#1f1410] placeholder:text-[#1f1410]/40 focus:outline-none focus:ring-1 focus:ring-[#b0421a] focus:border-[#b0421a] transition-all";

const interests = [
  "Software & Apps",
  "Tech Training",
  "IELTS Coaching & Prep",
  "SOP Guidance & Study Abroad",
];

function ContactCard({
  label, value, href, icon,
}: {
  label: string; value: string; href: string; icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="p-6 bg-[#FAF8F5] border border-[#E2DDD5]/80 flex items-center gap-4 hover:border-[#b0421a]/40 transition-all"
    >
      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-[#b0421a] shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-[#1f1410]/40 uppercase tracking-widest font-semibold">{label}</div>
        <p className="text-sm font-bold text-[#1f1410] mt-0.5">{value}</p>
      </div>
    </a>
  );
}

function ContactInfo() {
  return (
    <ScrollReveal variant="fade-left" delay={0.1} className="lg:col-span-4">
      <div className="space-y-4">
        <ContactCard
          label="Email"
          value="aashishad67@gmail.com"
          href="mailto:aashishad67@gmail.com"
          icon={<Mail className="w-5 h-5" />}
        />
        <ContactCard
          label="Phone"
          value="+977 984-6843300"
          href="tel:+9779846843300"
          icon={<Phone className="w-5 h-5" />}
        />
        <ContactCard
          label="Visit"
          value="New Baneswor, Nepal"
          href="#"
          icon={<MapPin className="w-5 h-5" />}
        />
        <div className="overflow-hidden border border-[#E2DDD5]/80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.603407355185!2d85.33826437473196!3d27.698649976187554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198ee505f14f%3A0x3c59d1c1ec53e53a!2sNeural%20AI!5e0!3m2!1sen!2snp!4v1780854105146!5m2!1sen!2snp"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NeuralAI location"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

type ContactFormProps = {
  contactName: string; contactEmail: string; contactMessage: string; contactSubmitted: boolean;
  onNameChange: (v: string) => void; onEmailChange: (v: string) => void; onMessageChange: (v: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function ContactForm({
  contactName, contactEmail, contactMessage, contactSubmitted,
  onNameChange, onEmailChange, onMessageChange, onSubmit,
}: ContactFormProps) {
  return (
    <ScrollReveal variant="fade-right" delay={0.1} className="lg:col-span-8">
      <div className="bg-[#FAF8F5]/50 border border-[#E2DDD5] p-6 md:p-8 rounded-2xl relative overflow-hidden">
        <AnimatePresence>
          {contactSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-[#FAF8F5] z-10 flex flex-col items-center justify-center text-center p-8 space-y-4 rounded-2xl"
            >
              <div className="w-14 h-14 bg-[#0F766E]/10 rounded-full flex items-center justify-center text-[#0F766E] border border-[#0F766E]/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold font-serif text-[#1f1410]">Message Sent!</h4>
              <p className="text-xs text-[#1f1410]/60 max-w-sm leading-relaxed">
                Thank you for contacting NeuralAI. We&apos;ll connect back via{" "}
                <strong className="text-[#b0421a]">{contactEmail}</strong> within one business day.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#1f1410]/50 uppercase tracking-wider">Full Name</label>
              <input
                required
                type="text"
                value={contactName}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#1f1410]/50 uppercase tracking-wider">Email</label>
              <input
                required
                type="email"
                value={contactEmail}
                onChange={(e) => onEmailChange(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-[#1f1410]/50 uppercase tracking-wider">I&apos;m interested in</label>
            <select defaultValue="" className={inputClass}>
              <option value="" disabled>Choose a service</option>
              {interests.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-[#1f1410]/50 uppercase tracking-wider">Message</label>
            <textarea
              required
              value={contactMessage}
              onChange={(e) => onMessageChange(e.target.value)}
              placeholder="Tell us about your goals..."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#b0421a] hover:bg-[#7a2c12] text-white text-sm font-semibold rounded-xl uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Send message
          </button>

          <p className="text-[11px] text-[#1f1410]/40 text-center">
            We typically respond within one business day.
          </p>
        </form>
      </div>
    </ScrollReveal>
  );
}

export default function Contact({
  contactName, contactEmail, contactMessage, contactSubmitted,
  onNameChange, onEmailChange, onMessageChange, onSubmit,
}: ContactFormProps) {
  return (
    <section id="contact" className="ui-poppins py-24 px-6 md:px-16 bg-white border-t border-b border-[#E2DDD5]/50 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">

        <ScrollReveal variant="fade-up">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full border border-[#E2DDD5] text-xs font-semibold text-[#18181B]/60 bg-[#FAF8F5]">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#18181B] font-serif">
              Get in touch.
            </h2>
            <p className="text-[#18181B]/60 text-sm md:text-base leading-relaxed">
              Tell us about your goals, we&apos;ll suggest the right next step.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ContactInfo />
          <ContactForm
            contactName={contactName}
            contactEmail={contactEmail}
            contactMessage={contactMessage}
            contactSubmitted={contactSubmitted}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onMessageChange={onMessageChange}
            onSubmit={onSubmit}
          />
        </div>

      </div>
    </section>
  );
}
