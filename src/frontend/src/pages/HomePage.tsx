import { Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Mic, Music, Sliders } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const highlights = [
  {
    icon: Mic,
    title: "Recording",
    desc: "State-of-the-art recording facilities for artists, vocalists, and session musicians.",
  },
  {
    icon: Sliders,
    title: "Mixing & Mastering",
    desc: "Precision mixing and mastering that brings your sound to its full potential.",
  },
  {
    icon: Music,
    title: "Music Production",
    desc: "Full-scale music production from arrangement through final delivery.",
  },
  {
    icon: Headphones,
    title: "Sound Design",
    desc: "Bespoke sound design for film, television, and branded content.",
  },
];

const portfolioTeaser = [
  {
    img: "/assets/brand-image-2.jpg",
    title: "Hamen Rocer",
    category: "Album Production",
    year: "2024",
  },
  {
    img: "/assets/brand-image-3.jpg",
    title: "Arthem Sessions",
    category: "Recording & Mixing",
    year: "2024",
  },
  {
    img: "/assets/logo-white.png",
    title: "Music Plateers",
    category: "Sound Design",
    year: "2023",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"]);

  const featuredRef = useRef<HTMLElement>(null);
  const { scrollYProgress: featuredScrollY } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const featuredBgY = useTransform(featuredScrollY, [0, 1], ["-15%", "15%"]);

  const quoteRef = useRef<HTMLElement>(null);
  const { scrollYProgress: quoteScrollY } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"],
  });
  const quoteBgY = useTransform(quoteScrollY, [0, 1], ["-20%", "20%"]);

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-screen flex items-end"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img
            src="/assets/studio-banner.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,8,6,0.95) 0%, rgba(13,8,6,0.55) 50%, rgba(13,8,6,0.3) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

        {/* Hero content */}
        <div className="relative container mx-auto px-6 lg:px-12 pb-28 pt-44">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-sm font-body text-primary/80 mb-8 tracking-[0.35em] uppercase"
            >
              Rabab Studios · Music &amp; Post-Production
            </motion.p>

            <h1
              className="font-body font-bold leading-[1.02] mb-8 text-7xl md:text-8xl lg:text-9xl"
              style={{
                background:
                  "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Where Sound
              <br />
              Becomes Art.
            </h1>

            <p className="text-xl md:text-2xl text-foreground/65 mb-14 max-w-xl leading-loose font-body">
              Crafting exceptional audio experiences for artists and brands —
              from recording through to final mastered delivery.
            </p>

            <div className="flex flex-wrap gap-5 items-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-base font-body rounded-sm hover:bg-primary/85 transition-smooth shadow-elevated"
                data-ocid="hero-cta-portfolio"
              >
                Explore Our Work
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-base text-foreground/55 hover:text-foreground transition-smooth border-b border-foreground/20 hover:border-foreground/50 pb-0.5 font-body"
                data-ocid="hero-cta-contact"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Studio Highlights ── */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mb-20"
          >
            <p className="text-sm font-body text-primary/80 mb-5 tracking-[0.2em] uppercase">
              What We Do
            </p>
            <h2 className="font-body font-bold leading-tight text-5xl md:text-6xl lg:text-7xl text-foreground">
              Studio Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.12 }}
                  className="group"
                  data-ocid="highlight-card"
                >
                  <div className="w-14 h-14 rounded-sm border border-primary/20 bg-primary/8 flex items-center justify-center mb-7 group-hover:bg-primary/15 group-hover:border-primary/40 transition-smooth">
                    <Icon
                      size={22}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-body font-semibold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-loose font-body">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-base font-body text-primary hover:gap-3 transition-smooth"
              data-ocid="highlights-services-link"
            >
              View All Services
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section ref={featuredRef} className="relative overflow-hidden py-0">
        <motion.div
          style={{ y: featuredBgY }}
          className="absolute inset-0 scale-125"
        >
          <img
            src="/assets/brand-image-1.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,8,6,0.9) 0%, rgba(76,47,38,0.4) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-25 pointer-events-none" />
        <div className="relative container mx-auto px-6 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-end justify-between mb-20 flex-wrap gap-6"
          >
            <div>
              <p className="text-sm font-body text-primary/70 mb-5 tracking-[0.2em] uppercase">
                Selected Work
              </p>
              <h2 className="font-body font-bold leading-tight text-5xl md:text-6xl lg:text-7xl text-foreground">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-base font-body text-primary hover:gap-3 transition-smooth"
              data-ocid="portfolio-teaser-view-all"
            >
              View All Projects
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {portfolioTeaser.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.13 }}
                className="group"
                data-ocid="portfolio-card"
              >
                <Link to="/portfolio">
                  <div className="overflow-hidden rounded-sm aspect-[4/3] mb-6 bg-muted border border-border/30">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700 ease-out"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-body text-muted-foreground mb-2 tracking-wide uppercase">
                        {item.category}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-body font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-sm font-body text-muted-foreground/60">
                      {item.year}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote / Brand Banner ── */}
      <section ref={quoteRef} className="relative overflow-hidden">
        <motion.div
          style={{ y: quoteBgY }}
          className="absolute inset-0 scale-125"
        >
          <img
            src="/assets/brand-image-2.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,8,6,0.78) 0%, rgba(13,8,6,0.9) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

        <div className="relative container mx-auto px-6 lg:px-12 max-w-5xl py-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-body text-primary/60 mb-12 tracking-[0.3em] uppercase">
              Studio Vision
            </p>
            <blockquote
              className="font-body text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.12] font-bold tracking-tight"
              data-ocid="philosophy-quote"
              style={{
                background:
                  "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "Music is not decoration —
              <br className="hidden md:block" /> it is the language
              <br className="hidden md:block" /> of the soul."
            </blockquote>
            <div className="mt-12 flex items-center gap-5">
              <div className="w-10 h-px bg-primary/50" />
              <p className="text-sm font-body text-foreground/40 tracking-[0.2em] uppercase">
                Rabab Studios
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-36 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025]">
          <img
            src="/assets/logo-white.png"
            alt=""
            aria-hidden="true"
            className="w-96 h-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm font-body text-primary/70 mb-7 tracking-[0.3em] uppercase">
              Let's Collaborate
            </p>
            <h2 className="font-body font-bold leading-tight text-5xl md:text-6xl text-foreground mb-8">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-xl text-muted-foreground mb-14 leading-loose max-w-lg mx-auto font-body">
              Whether you're recording your debut album or scoring a major
              production, we bring your vision to life with intention and craft.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-base font-body rounded-sm hover:bg-primary/85 transition-smooth shadow-elevated"
              data-ocid="bottom-cta"
            >
              Start a Project
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
