import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "Sonic Integrity",
    desc: "Every production decision carries intent. We pursue the sound that best serves the music — never the trend, always the truth.",
  },
  {
    number: "02",
    title: "Artist-First",
    desc: "Your vision is the compass. We listen deeply before we touch a fader — ensuring our craft amplifies your creative intent.",
  },
  {
    number: "03",
    title: "Enduring Quality",
    desc: "Recordings made with care endure. We build sonic works designed to remain relevant, resonant, and beautiful for decades.",
  },
];

const stats = [
  { num: "12+", label: "Years in Studio" },
  { num: "400+", label: "Tracks Produced" },
  { num: "3", label: "Studio Rooms" },
  { num: "25+", label: "Awards Won" },
];

export default function AboutPage() {
  const statsRef = useRef<HTMLElement>(null);
  const { scrollYProgress: statsScrollY } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });
  const statsBgY = useTransform(statsScrollY, [0, 1], ["-20%", "20%"]);

  const missionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: missionScrollY } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"],
  });
  const missionBgY = useTransform(missionScrollY, [0, 1], ["-15%", "15%"]);

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[75vh] flex items-end">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/assets/banner-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(13,8,6,0.97) 0%, rgba(13,8,6,0.6) 55%, rgba(13,8,6,0.28) 100%)",
          }}
        />
        <div
          className="absolute inset-0 grain opacity-30 pointer-events-none"
          style={{ zIndex: 2 }}
        />

        <div
          className="relative container mx-auto px-6 max-w-6xl pb-24 pt-44"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-body text-primary/80 mb-7 tracking-[0.2em] uppercase">
              About the Studio
            </p>
            <h1
              className="font-body font-bold leading-tight mb-9 text-7xl md:text-8xl lg:text-9xl"
              style={{
                background:
                  "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Rabab
              <br />
              Studios
            </h1>
            <p className="text-xl text-foreground/60 leading-loose max-w-xl font-body">
              A premium music studio and post-production house — where every
              session is shaped by craft, intention, and a deep respect for the
              art of sound.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Studio Story ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <p className="text-sm font-body text-primary/80 mb-6 tracking-[0.2em] uppercase">
                Our Story
              </p>
              <h2 className="font-body font-bold leading-tight mb-10 text-5xl md:text-6xl lg:text-7xl">
                Where It All Began
              </h2>
              <div className="space-y-7 text-muted-foreground leading-loose font-body text-xl">
                <p>
                  Rabab Studios was founded with a singular belief: that
                  exceptional sound demands exceptional dedication. What began
                  as a boutique recording space grew, quietly and deliberately,
                  into one of the region's most respected music and
                  post-production studios.
                </p>
                <p>
                  The early years were spent working closely with independent
                  artists and session musicians who needed a space that felt as
                  considered as the music they were creating. That proximity to
                  the creative process shaped everything — the way we engineer,
                  the way we listen, the way we refine.
                </p>
                <p>
                  Today, we work with a curated roster of artists, film
                  producers, and brands across music, film, and advertising.
                  Every session begins the same way: with honest conversation
                  and unhurried attention to what makes each project singular.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="space-y-6 lg:pt-12"
            >
              <div className="overflow-hidden rounded-sm shadow-elevated">
                <img
                  src="/assets/brand-image-2.jpg"
                  alt="Rabab Studios — studio interior"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="overflow-hidden rounded-sm shadow-subtle">
                <img
                  src="/assets/brand-image-1.png"
                  alt="Rabab Studios — brand visual"
                  className="w-full object-cover aspect-[16/7]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section ref={missionRef} className="relative overflow-hidden">
        <motion.div
          style={{ y: missionBgY }}
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
              "linear-gradient(135deg, rgba(13,8,6,0.93) 0%, rgba(76,47,38,0.45) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-5xl text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-sm font-body text-primary/60 mb-10 tracking-[0.2em] uppercase">
              Our Mission
            </p>
            <blockquote className="font-body text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight md:leading-snug">
              "We believe in sound that endures — recordings built not for the
              moment, but for the memory."
            </blockquote>
            <div className="mt-12 w-16 h-0.5 bg-primary/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-sm font-body text-primary/80 mb-6 tracking-[0.2em] uppercase">
              Creative Approach
            </p>
            <h2 className="font-body font-bold leading-tight text-5xl md:text-6xl lg:text-7xl max-w-xl">
              The Principles That Define Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.14 }}
                className="relative"
              >
                <span className="font-body text-8xl font-bold text-primary/10 select-none leading-none block mb-5">
                  {p.number}
                </span>
                <div className="w-8 h-0.5 bg-primary mb-6" />
                <h3 className="text-3xl md:text-4xl font-body font-semibold mb-4">
                  {p.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-loose font-body">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistics ── */}
      <section ref={statsRef} className="relative overflow-hidden">
        <motion.div
          style={{ y: statsBgY }}
          className="absolute inset-0 scale-125"
        >
          <img
            src="/assets/brand-image-3.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,8,6,0.9) 0%, rgba(13,8,6,0.88) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

        <div className="relative container mx-auto px-6 max-w-5xl py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                data-ocid={`stat-item-${i}`}
              >
                <p className="font-body text-6xl md:text-7xl font-bold text-foreground mb-3">
                  {stat.num}
                </p>
                <p className="text-base font-body text-foreground/50 leading-snug uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-card grain">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-sm font-body text-primary/80 tracking-[0.2em] uppercase">
              Work With Us
            </p>
            <h2 className="font-body font-bold leading-tight text-5xl md:text-6xl">
              Let's Create Something Lasting
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-loose font-body">
              We are always open to conversations with artists and producers who
              care deeply about sound, authenticity, and long-term craft.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-base font-body rounded-sm hover:bg-primary/85 transition-smooth shadow-elevated"
              data-ocid="about-bottom-cta"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
