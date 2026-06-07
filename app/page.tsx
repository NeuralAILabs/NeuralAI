'use client';

import { useState, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import HeroSection from "@/components/ui/hero-section";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";
import NeuralLab from "./components/NeuralLab";
import InteractiveProductDemo from "./components/InteractiveProductDemo";
import BlogArticleModal from "./components/BlogArticleModal";

type DemoProduct = {
  id: string;
  title: string;
  badge: string;
  description: string;
  stats: { label: string; value: string }[];
  url: string;
};

type BlogArticle = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export default function Home() {
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<DemoProduct | null>(null);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogArticle | null>(null);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleContactSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
    }, 4500);
  }, [contactName, contactEmail, contactMessage]);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail("");
    }, 3500);
  }, [newsletterEmail]);

  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <Portfolio onViewDemo={(p) => setSelectedDemoProduct(p)} />
        <section id="neural-lab" className="ui-poppins bg-[#FAF8F5] text-[#1f1410] pt-20 md:pt-24 pb-20 md:pb-24 px-4 md:px-16 lg:px-24 xl:px-32 border-t border-[#E2DDD5]/40">
          <NeuralLab />
        </section>
        <About />
        <Team />
        <Blog onReadArticle={(p) => setSelectedBlogArticle(p)} />
        <Contact
          contactName={contactName}
          contactEmail={contactEmail}
          contactMessage={contactMessage}
          contactSubmitted={contactSubmitted}
          onNameChange={setContactName}
          onEmailChange={setContactEmail}
          onMessageChange={setContactMessage}
          onSubmit={handleContactSubmit}
        />
      </main>
      <Footer
        newsletterEmail={newsletterEmail}
        newsletterSubscribed={newsletterSubscribed}
        onNewsletterEmailChange={setNewsletterEmail}
        onNewsletterSubmit={handleNewsletterSubmit}
      />

      <AnimatePresence>
        {selectedDemoProduct && (
          <InteractiveProductDemo
            product={selectedDemoProduct}
            onClose={() => setSelectedDemoProduct(null)}
          />
        )}

        {selectedBlogArticle && (
          <BlogArticleModal
            article={selectedBlogArticle}
            onClose={() => setSelectedBlogArticle(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
