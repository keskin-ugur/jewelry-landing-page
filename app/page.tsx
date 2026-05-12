"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────
   Lazy Video — src set only when near viewport
   ───────────────────────────────────────── */
function LazyVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.src = src;
          el.play().catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return <video ref={ref} className={className} loop muted playsInline />;
}

/* ─────────────────────────────────────────
   Section Divider
   ───────────────────────────────────────── */
function SectionDivider() {
  return <div className="gold-divider mx-8 lg:mx-20" />;
}

/* ─────────────────────────────────────────
    Nav link component
    ───────────────────────────────────────── */
function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-neutral-500 hover:text-[#C9A84C] transition-colors duration-300"
    >
      {label}
    </a>
  );
}

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#F5F3EE]"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Vertical side lines */}
      <div className="absolute left-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute right-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent pointer-events-none hidden lg:block" />

      {/* Corner brackets */}
      <div className="absolute top-10 left-10 w-10 h-10 border-t border-l border-[#C9A84C]/20 pointer-events-none hidden lg:block" />
      <div className="absolute top-10 right-10 w-10 h-10 border-t border-r border-[#C9A84C]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-10 h-10 border-b border-l border-[#C9A84C]/20 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-10 h-10 border-b border-r border-[#C9A84C]/20 pointer-events-none hidden lg:block" />

      {/* Giant rotated year — right edge */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-light tracking-[0.25em] select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: "13vw",
          color: "rgba(201,168,76,0.055)",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        MMXXVI
      </span>

      {/* Content */}
      <div className="relative z-10">
        {/* Pre-heading with flanking lines */}
        <div className="flex items-center justify-center gap-4 mb-10 fade-up">
          <div className="h-px w-10 bg-[#C9A84C]/35" />
          <p className="font-sans text-[0.72rem] tracking-[0.45em] uppercase text-neutral-400">
            Taşköprü &nbsp;·&nbsp; 2026
          </p>
          <div className="h-px w-10 bg-[#C9A84C]/35" />
        </div>

        {/* Main heading — larger */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.0] tracking-tight fade-up"
          style={{ transitionDelay: "0.1s" }}
        >
          Takı, Saat
          <br />
          <span className="golden-glow font-normal">Altın</span>
        </h1>

        {/* Sub-copy — larger */}
        <p
          className="font-sans mt-8 text-[0.88rem] tracking-[0.22em] uppercase text-neutral-400 max-w-sm leading-relaxed fade-up mx-auto"
          style={{ transitionDelay: "0.2s" }}
        >
          Sizlerle buluşmak için gün sayıyoruz
        </p>
      </div>

      {/* Marquee ticker — bottom */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="flex whitespace-nowrap hero-marquee">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="font-sans text-[0.5rem] tracking-[0.38em] uppercase text-[#C9A84C]/25 px-6 shrink-0">
              HAZİNEDAROĞLU KUYUMCULUK &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; TAŞKÖPRÜ &nbsp;·&nbsp; HAZİNEDAROĞLU KUYUMCULUK &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; TAŞKÖPRÜ &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Store Intro Section
───────────────────────────────────────── */
function StoreIntroSection() {
  return (
    <section id="magaza" className="relative min-h-[90vh] flex items-center bg-[#F5F3EE]">
      <div className="grid w-full min-h-[90vh] gap-8 sm:grid-cols-[30%_70%] lg:grid-cols-[30%_70%]">
        {/* Left — text block */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 py-8 sm:py-20 lg:py-0">
          <p className="font-sans text-[0.58rem] tracking-[0.38em] uppercase text-[#C9A84C] mb-8 fade-up">
            Mağaza
          </p>

          <h2
            className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 fade-up"
            style={{ transitionDelay: "0.05s" }}
          >
            <span className="golden-glow">Çok</span>
            <br />
            Yakında
          </h2>

          <div className="gold-divider w-16 mb-10 fade-up" style={{ transitionDelay: "0.1s" }} />

          <div
            className="space-y-5 text-neutral-500 fade-up"
            style={{ transitionDelay: "0.15s" }}
          >
            <div>
              <p className="font-sans text-[0.58rem] tracking-[0.35em] uppercase text-neutral-300 mb-1">
                Adres
              </p>
              <p className="font-sans text-sm leading-relaxed">
                Üstatlar, Fevzi Çakmak Cd.
                <br />
                37400 Taşköprü, Kastamonu
              </p>
            </div>

            <div>
              <p className="font-sans text-[0.58rem] tracking-[0.35em] uppercase text-neutral-300 mb-1">
                Telefon
              </p>
              <a
                href="tel:+902121234567"
                className="font-sans text-sm hover:text-[#C9A84C] transition-colors duration-300"
              >
                —
              </a>
            </div>

            <div>
              <p className="font-sans text-[0.58rem] tracking-[0.35em] uppercase text-neutral-300 mb-1">
                E-posta
              </p>
              <a
                href="mailto:info@hazinedaroglu.com"
                className="font-sans text-sm hover:text-[#C9A84C] transition-colors duration-300"
              >
                —
              </a>
            </div>

          </div>

          <div className="mt-14 fade-up" style={{ transitionDelay: "0.25s" }}>
            <a href="#iletisim" className="luxury-btn font-sans inline-block">
              <span>Randevu Al</span>
            </a>
          </div>
        </div>

        {/* Right — store photo */}
        <div className="relative flex items-center justify-center bg-[#F5F3EE] overflow-hidden min-h-[50vh] lg:min-h-0">
          {/* Photo — full bleed, slight warm tint */}
          <Image
            src="/items/hazinedar.png"
            alt="Hazinedaroğlu Kuyumculuk — Taşköprü"
            fill
            className="object-cover"
            style={{ objectPosition: "35% center" }}
            sizes="50vw"
            priority
          />

          {/* Left bleed — photo emerges from background */}
          <div
            className="absolute top-0 left-0 h-full w-[40%] pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(to right, #F5F3EE 0%, #F5F3EE 8%, rgba(245,243,238,0.92) 25%, rgba(245,243,238,0.6) 50%, rgba(245,243,238,0.15) 75%, transparent 100%)",
            }}
          />

          {/* Warm vignette — edges fade into background */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 65% 50%, transparent 40%, rgba(245,243,238,0.45) 100%)",
            }}
          />

          {/* Bottom fade — blends photo into section bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(245,243,238,0.7))",
            }}
          />

          {/* Top fade */}
          <div
            className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to top, transparent, rgba(245,243,238,0.5))",
            }}
          />

          {/* Corner brackets — top right */}
          <div className="absolute top-8 right-8 z-20 pointer-events-none flex flex-col items-end">
            <div className="w-10 h-px bg-[#C9A84C]/50" />
            <div className="w-px h-10 bg-[#C9A84C]/50" />
          </div>

          {/* Corner brackets — bottom right */}
          <div className="absolute bottom-8 right-8 z-20 pointer-events-none flex flex-col items-end justify-end">
            <div className="w-px h-10 bg-[#C9A84C]/50" />
            <div className="w-10 h-px bg-[#C9A84C]/50" />
          </div>

          {/* Caption label */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20 pointer-events-none">
            <span className="font-sans text-[0.52rem] tracking-[0.38em] uppercase text-[#C9A84C]/70">
              Taşköprü &nbsp;·&nbsp; Kastamonu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Transition Section — spacer between videos
   ───────────────────────────────────────── */
function TransitionSection({
  title,
  highlightWords = [] as string[],
  quote,
  author,
}: {
  title: string;
  highlightWords?: string[];
  quote: string;
  author: string;
}) {
  const parts = title.split(" ");
  const defaultHighlightAll = highlightWords.length === 0;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">

      {/* Giant ghost background text */}
      <span
        aria-hidden="true"
        className="absolute select-none pointer-events-none font-serif font-light leading-none tracking-tight whitespace-nowrap"
        style={{ fontSize: "22vw", color: "rgba(201,168,76,0.045)" }}
      >
        {title.toUpperCase()}
      </span>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-[#C9A84C]/25 pointer-events-none" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-[#C9A84C]/25 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-[#C9A84C]/25 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-[#C9A84C]/25 pointer-events-none" />

      <div className="relative text-center px-6 max-w-2xl">

        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-10 fade-up">
          <div className="h-px w-14 bg-[#C9A84C]/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]/50" />
          <div className="h-px w-14 bg-[#C9A84C]/30" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-5xl md:text-6xl font-light mb-12 fade-up">
          {parts.map((word, i) => {
            const isHighlight = defaultHighlightAll || highlightWords.includes(word);
            return (
              <span key={i}>
                {isHighlight ? (
                  <span className="text-[#C9A84C] golden-glow">{word}</span>
                ) : (
                  <span className="text-black">{word}</span>
                )}
                {" "}
              </span>
            );
          })}
        </h3>

        {/* Opening quote mark */}
        <p aria-hidden="true" className="font-serif text-5xl text-[#C9A84C]/25 leading-none mb-2 fade-up">"</p>

        {/* Quote */}
        <p className="font-serif italic text-xl md:text-2xl text-neutral-500 leading-relaxed mb-5 fade-up">
          {quote}
        </p>

        {/* Author */}
        <p className="font-sans text-[0.55rem] tracking-[0.38em] uppercase text-neutral-300 fade-up">
          — {author}
        </p>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────
   Video Section — reusable
   ───────────────────────────────────────── */
function VideoSection({
  id,
  src,
  number,
  label,
  line1,
  line2,
  description,
}: {
  id: string;
  src: string;
  number: string;
  label: string;
  line1: string;
  line2: string;
  description: string;
}) {
  return (
    <section id={id} className="relative min-h-screen">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <LazyVideo className="absolute inset-0 w-full h-full object-cover" src={src} />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Ghost number — background */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 font-serif font-light leading-none select-none pointer-events-none"
        style={{ fontSize: "28vw", color: "rgba(255,255,255,0.03)" }}
      >
        {number}
      </span>

      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-lg">

          {/* Numbered label */}
          <p className="font-sans text-[0.58rem] tracking-[0.45em] uppercase text-[#C9A84C]/75 mb-5 fade-up">
            {number} &nbsp;/&nbsp; {label}
          </p>

          {/* Gold line */}
          <div className="w-10 h-px bg-[#C9A84C]/55 mb-8 fade-up" />

          {/* Heading */}
          <h2
            className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.0] text-white mb-8 fade-up"
          >
            {line1}
            <br />
            <span className="italic">{line2}</span>
          </h2>

          {/* Description */}
          <p className="font-sans text-[0.78rem] text-white/55 leading-relaxed tracking-[0.06em] max-w-xs fade-up">
            {description}
          </p>

          {/* Bottom hint */}
          <div className="mt-14 flex items-center gap-4 fade-up">
            <div className="w-8 h-px bg-[#C9A84C]/45" />
            <span className="font-sans text-[0.52rem] tracking-[0.38em] uppercase text-[#C9A84C]/55">
              Çok Yakında
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PirlantaSection() {
  return (
    <VideoSection
      id="pirlanta"
      src="/items/ring.mp4"
      number="01"
      label="Takı"
      line1="Takı"
      line2="Koleksiyonu"
      description="14 ayar, her bütçeye uygun zarif koleksiyonlar. Her parça bir hikaye anlatır."
    />
  );
}

function AltinSection() {
  return (
    <VideoSection
      id="altin"
      src="/items/gold.mp4"
      number="02"
      label="Altın"
      line1="Altın ve"
      line2="Yatırım"
      description="Güvenilir yatırımın ve kaliteli tasarımın bir arada sunulduğu yer. Değerinizi koruyun."
    />
  );
}

function SaatSection() {
  return (
    <VideoSection
      id="saat"
      src="/items/watch.mp4"
      number="03"
      label="Saat"
      line1="Zarif"
      line2="Dakikalar"
      description="Zamanı zarafetle anımsamak için özenle seçilmiş modeller. Her an bir anıya dönüşür."
    />
  );
}

/* ─────────────────────────────────────────
   Contact / Footer Section
───────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to your backend/email service
    console.log("Contact form:", form);
    setForm({ name: "", email: "", message: "" });
  };

return (
     <footer id="iletisim" className="bg-[#F9F7F2] py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-[0.58rem] tracking-[0.38em] uppercase text-[#C9A84C] mb-4">
            İletişim
          </p>
          <h2 className="font-serif text-4xl font-light">
            Sizinle Tanışalım
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <input
                className="luxury-input font-sans"
                placeholder="Adınız"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="luxury-input font-sans"
                placeholder="E-posta Adresiniz"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <textarea
                className="luxury-input font-sans resize-none"
                placeholder="Mesajınız"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
<button type="button" className="luxury-btn font-sans w-full" onClick={handleSubmit}>
               <span>Gönder</span>
             </button>
          </form>

          {/* Info + Social */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <p className="font-sans text-[0.58rem] tracking-[0.35em] uppercase text-neutral-300 mb-2">
                  Adres
                </p>
                <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                  Üstatlar, Fevzi Çakmak Cd.
                  <br />
                  37400 Taşköprü, Kastamonu
                </p>
              </div>

              <div>
                <p className="font-sans text-[0.58rem] tracking-[0.35em] uppercase text-neutral-300 mb-2">
                  Telefon
                </p>
                <a href="tel:+902121234567" className="font-sans text-sm text-neutral-500 hover:text-[#C9A84C] transition-colors">
                  —
                </a>
              </div>

              <div>
                <p className="font-sans text-[0.58rem] tracking-[0.35em] uppercase text-neutral-300 mb-2">
                  E-posta
                </p>
                <a href="mailto:info@hazinedaroglu.com" className="font-sans text-sm text-neutral-500 hover:text-[#C9A84C] transition-colors">
                  —
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12">
              <p className="font-sans text-[0.55rem] tracking-[0.35em] uppercase text-neutral-300 mb-5">
                Sosyal Medya
              </p>
              <div className="flex gap-6">
{[ 
                   { label: "Instagram" },
                   { label: "Pinterest" },
                   { label: "WhatsApp" },
                 ].map(({ label }) => (
                   <button
                     key={label}
                     type="button"
                     className="font-sans text-[0.58rem] tracking-[0.32em] uppercase text-neutral-400 hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
                   >
                     {label}
                   </button>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg tracking-widest text-neutral-300">
            <span className="golden-glow">HAZİNEDAROĞLU</span> KUYUMCULUK
          </span>
          <span className="font-sans text-[0.55rem] tracking-[0.28em] uppercase text-neutral-300">
            © {new Date().getFullYear()} Hazinedaroğlu Kuyumculuk. Tüm hakları saklıdır.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
export default function Page() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      const els = document.querySelectorAll(".fade-up");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, []);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
      // Prevent scrolling when menu is open
      document.body.style.overflow = mobileMenuOpen ? '' : 'hidden';
    };

    // Close mobile menu when clicking a link
    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    };

 return (
       <div className="relative bg-[#FDFDFD]">
         {/* ── Fixed nav ─────────────────────── */}
         <nav
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 transition-all duration-500 ${
            scrolled
              ? "py-4 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-[#C9A84C]/10"
              : "py-7 bg-transparent"
          }`}
        >
          <a href="#hero" className="font-serif text-2xl tracking-[0.2em] uppercase text-[#C9A84C]">
            HAZİNEDAROĞLU
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#pirlanta" label="Takı" />
            <NavLink href="#altin" label="Altın" />
            <NavLink href="#saat" label="Saat" />
            <NavLink href="#iletisim" label="İletişim" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-6">
            <button
              id="mobile-menu-button"
              className="p-2 rounded hover:bg-[#F5F3EE] focus:outline-none"
              aria-label="Açık/Kapat menü"
            >
              {/* Hamburger icon */}
              <span className="block h-0.5 w-6 bg-[#C9A84C] transition-transform duration-300" />
              <span className="block h-0.5 w-6 bg-[#C9A84C] mt-1.5 transition-transform duration-300" />
              <span className="block h-0.5 w-6 bg-[#C9A84C] mt-1.5 transition-transform duration-300" />
            </button>
          </div>

         </nav>

         {/* Mobile menu */}
         {mobileMenuOpen && (
           <div
             className="fixed inset-0 z-40 bg-[#FDFDFD]/95 backdrop-blur-sm"
             onClick={closeMobileMenu}
           >
             <div className="fixed inset-y-0 left-0 w-full md:w-3/4 bg-[#FDFDFD] flex flex-col justify-between p-8 pt-16 space-y-10 overflow-y-auto">
               {/* Close button */}
               <div className="flex justify-between items-start">
                 <button
                   onClick={closeMobileMenu}
                   className="p-2 rounded hover:bg-[#F5F3EE] focus:outline-none"
                 >
                   <span className="block h-0.5 w-6 bg-[#C9A84C] mt-0.5 transition-transform duration-300" />
                   <span className="block h-0.5 w-6 bg-[#C9A84C] mt-1.5 transition-transform duration-300" />
                   <span className="block h-0.5 w-6 bg-[#C9A84C] mt-1.5 transition-transform duration-300" />
                 </button>
               </div>
               
               {/* Menu links */}
               <div className="space-y-6">
                 <NavLink
                   href="#pirlanta"
                   label="Takı"
                   onClick={closeMobileMenu}
                 />
                 <NavLink
                   href="#altin"
                   label="Altın"
                   onClick={closeMobileMenu}
                 />
                 <NavLink
                   href="#saat"
                   label="Saat"
                   onClick={closeMobileMenu}
                 />
                 <NavLink
                   href="#iletisim"
                   label="İletişim"
                   onClick={closeMobileMenu}
                 />
               </div>
               
               {/* CTA button */}
               <div className="mt-12">
                 <a
                   href="#iletisim"
                   className="luxury-btn font-sans w-full"
                 >
                   Randevu Al
                 </a>
               </div>
             </div>
           </div>
         )}

      {/* ── Page sections ─────────────────── */}
      <HeroSection />
      <SectionDivider />
      <StoreIntroSection />
      <SectionDivider />
      <TransitionSection
        title="Işıltı"
        quote="Zarafet, fark edilmekle değil; hatırlanmakla ilgilidir."
        author="Giorgio Armani"
      />
      <SectionDivider />
      <PirlantaSection />
      <SectionDivider />
      <TransitionSection
        title="Servet"
        quote="Altın paradır. Geri kalan her şey kredidir."
        author="J.P. Morgan"
      />
      <SectionDivider />
      <AltinSection />
      <SectionDivider />
      <TransitionSection
        title="Stil"
        quote="Moda geçicidir, stil sonsuzdur."
        author="Yves Saint Laurent"
      />
      <SectionDivider />
      <SaatSection />
      <SectionDivider />
      <TransitionSection
        title="Hazinedaroğlu Ailesi"
        highlightWords={["Hazinedaroğlu"]}
        quote="Kalite, fiyat unutulduktan çok sonra hatırlanır."
        author="Aldo Gucci"
      />
      <SectionDivider />
      <ContactSection />
    </div>
  );
}
