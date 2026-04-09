import { Link } from "@tanstack/react-router";
import {
  Film,
  Layers,
  Mic,
  Mic2,
  Monitor,
  Music,
  Sliders,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceGroup {
  label: string;
  services: Service[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    label: "Music & Audio",
    services: [
      {
        title: "Music Production",
        icon: Mic2,
        description:
          "From concept to mastered track — we craft sounds that define your artistic identity",
      },
      {
        title: "Audio Post-Production",
        icon: Sliders,
        description:
          "Elevating stories through flawless audio mixing, sound design, and mastering",
      },
      {
        title: "Sound Design",
        icon: Sparkles,
        description:
          "Immersive soundscapes and Dolby Atmos certified spatial audio experiences",
      },
      {
        title: "Voice Recording",
        icon: Mic,
        description:
          "Professional vocal recording with world-class acoustics and expert direction",
      },
    ],
  },
  {
    label: "Film & Visual",
    services: [
      {
        title: "Film & Television",
        icon: Film,
        description:
          "Unleashing stories that transcend screens — full-service film and TV production",
      },
      {
        title: "Film & VFX",
        icon: Monitor,
        description:
          "Bringing imagination to life through cutting-edge visual effects and post-production",
      },
      {
        title: "Corporate Films",
        icon: Layers,
        description:
          "Elevate your brand narrative with impactful corporate video storytelling",
      },
      {
        title: "Animation & Motion",
        icon: Music,
        description:
          "Animating dreams into reality — from 2D explainers to full motion graphics",
      },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Brief",
    desc: "An honest conversation about your project, timeline, and creative vision.",
  },
  {
    step: "02",
    title: "Pre-Production",
    desc: "Planning, arrangements, and technical preparation before we enter the studio.",
  },
  {
    step: "03",
    title: "Recording",
    desc: "Focused studio sessions in our acoustically treated live and control rooms.",
  },
  {
    step: "04",
    title: "Post",
    desc: "Editing, mixing, and mastering with meticulous attention to every detail.",
  },
  {
    step: "05",
    title: "Delivery",
    desc: "Final files delivered in all required formats, with full documentation.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: index * 0.12,
      }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative flex flex-col gap-6 rounded-sm border border-border/50 bg-card grain p-8
        cursor-default select-none transition-colors duration-300
        hover:border-primary/60 hover:shadow-[0_0_30px_rgba(92,59,47,0.4)]"
      data-ocid={`service-card-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      <motion.div
        initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: index * 0.12 + 0.15,
        }}
        className="flex h-13 w-13 items-center justify-center rounded-sm border border-primary/20 bg-primary/8 text-primary transition-smooth group-hover:bg-primary/20 group-hover:border-primary/50"
        style={{ width: "52px", height: "52px" }}
      >
        <Icon size={22} strokeWidth={1.5} />
      </motion.div>
      <div className="flex flex-col gap-3 min-w-0">
        <h3 className="text-2xl md:text-3xl font-body font-semibold text-foreground leading-snug">
          {service.title}
        </h3>
        <p className="text-lg leading-loose text-muted-foreground font-body">
          {service.description}
        </p>
      </div>
      <span className="absolute bottom-0 left-6 right-6 h-px rounded-full bg-primary/0 transition-smooth group-hover:bg-primary/30" />
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-end">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/assets/banner-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(13,8,6,0.97) 0%, rgba(13,8,6,0.6) 60%, rgba(13,8,6,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0 grain opacity-30 pointer-events-none"
          style={{ zIndex: 2 }}
        />

        <div
          className="relative container mx-auto px-6 pb-24 pt-44"
          style={{ zIndex: 10 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-body mb-7 text-primary/80 tracking-[0.25em] uppercase"
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="font-body text-7xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight max-w-3xl"
            style={{
              background:
                "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.88) 60%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-8 max-w-lg text-xl leading-loose text-foreground/60 font-body"
          >
            From first note to final master — Rabab Studios delivers
            craft-driven music production and post-production services that
            stand the test of time.
          </motion.p>
        </div>
      </section>

      {/* ── Service Groups ── */}
      <section className="bg-background py-24 md:py-32">
        <div className="container mx-auto px-6 space-y-24">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.label}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12 flex items-center gap-6"
              >
                <span className="text-sm font-body text-primary tracking-[0.2em] uppercase">
                  {group.label}
                </span>
                <span className="h-px flex-1 bg-border/50" />
              </motion.div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.services.map((service, i) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/brand-image-1.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,8,6,0.94) 0%, rgba(76,47,38,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 max-w-xl"
          >
            <p className="text-sm font-body text-primary/80 mb-6 tracking-[0.2em] uppercase">
              How We Work
            </p>
            <h2 className="font-body font-bold text-5xl md:text-6xl lg:text-7xl text-foreground">
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 18,
                  delay: i * 0.1,
                }}
                className="space-y-4"
              >
                <p className="font-body text-5xl font-bold text-primary/20">
                  {step.step}
                </p>
                <h3 className="text-2xl md:text-3xl font-body font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-foreground/55 leading-loose font-body">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border border-border/50 rounded-sm p-10 bg-card grain"
          >
            <div className="space-y-3">
              <p className="font-body text-3xl md:text-4xl font-semibold text-foreground">
                Ready to start a project?
              </p>
              <p className="text-lg text-muted-foreground max-w-sm font-body leading-loose">
                We take on a select number of projects each season to give every
                client our full creative attention.
              </p>
            </div>
            <Link
              to="/contact"
              data-ocid="services-bottom-cta"
              className="shrink-0 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-8 py-4 font-body text-base font-medium text-primary-foreground transition-smooth hover:bg-primary/85"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
