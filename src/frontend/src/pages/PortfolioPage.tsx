import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useState } from "react";

type Category =
  | "All"
  | "Film"
  | "Audio"
  | "Mixing"
  | "Composition"
  | "Sound Design";

interface Project {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  thumbnail: string;
  description: string;
  fullDescription: string;
  client: string;
  services: string[];
  year: number;
}

const PROJECTS: Project[] = [
  {
    id: "hamen-rocer",
    title: "Hamen Rocer",
    category: "Audio",
    thumbnail: "/assets/brand-image-2.jpg",
    description:
      "Studio production of critically acclaimed debut album — recorded and mixed at Rabab Studios.",
    fullDescription:
      "A full album production journey — from initial recording sessions in Studio A to final mastering. We captured live ensemble performances, layered studio overdubs, and delivered a cohesive sonic identity that sits comfortably across streaming and vinyl formats.",
    client: "Hamen Rocer",
    services: ["Recording", "Mixing", "Mastering"],
    year: 2024,
  },
  {
    id: "arthem-sessions",
    title: "Arthem Sessions",
    category: "Audio",
    thumbnail: "/assets/brand-image-3.jpg",
    description:
      "Live recording sessions capturing the raw energy of a touring artist in the studio.",
    fullDescription:
      "The Arthem Sessions were recorded live-to-tape over three intensive days. Our engineers worked to preserve the spontaneity of each take while ensuring broadcast-quality fidelity. The resulting EP is a direct, unadorned document of an artist at the peak of their craft.",
    client: "Arthem",
    services: ["Live Recording", "Editing", "Mastering"],
    year: 2024,
  },
  {
    id: "music-plateers",
    title: "Music Plateers",
    category: "Composition",
    thumbnail: "/assets/logo-white.png",
    description:
      "Original score composition for an award-winning documentary series.",
    fullDescription:
      "A twelve-episode documentary series required an original score that could carry emotional weight across wildly different contexts — from intimate interviews to sweeping landscape photography. We composed over forty unique cues and delivered a thematic score that critics called 'quietly essential'.",
    client: "Music Plateers",
    services: ["Composition", "Orchestration", "Mixing"],
    year: 2023,
  },
  {
    id: "rouna-mouce",
    title: "Rouna Mouce",
    category: "Sound Design",
    thumbnail: "/assets/brand-image-2.jpg",
    description:
      "Immersive sound design for a large-scale interactive installation.",
    fullDescription:
      "Rouna Mouce needed a soundscape that would respond in real time to visitor movement throughout a 2,000 sq ft gallery space. We designed a generative audio system using spatial audio triggers and ambient layers that evolve throughout the day, ensuring no two visits sound alike.",
    client: "Rouna Mouce Gallery",
    services: ["Sound Design", "Spatial Audio", "Installation"],
    year: 2024,
  },
  {
    id: "derian-worra",
    title: "Derian Worra",
    category: "Mixing",
    thumbnail: "/assets/brand-image-3.jpg",
    description:
      "Stem mixing and mastering of a multi-platinum selling artist's comeback record.",
    fullDescription:
      "Derian Worra's return to recording after a five-year hiatus demanded a mix that honored his classic sound while feeling contemporary. We worked stem-by-stem over six weeks, iterating through dozens of revisions before arriving at a final mix that the artist described as 'exactly what the songs needed'.",
    client: "Derian Worra",
    services: ["Stem Mixing", "Mastering", "Dolby Atmos"],
    year: 2023,
  },
  {
    id: "rovern-film",
    title: "Rovern — Feature Film",
    category: "Film",
    thumbnail: "/assets/brand-image-1.png",
    description:
      "Complete post-production audio pipeline for a feature-length dramatic film.",
    fullDescription:
      "Rovern is a feature film that required a complete audio post-production pipeline — dialogue editing, ADR recording, Foley, sound effects design, original score integration, and final 5.1 theatrical mix. Our team of six worked across twelve weeks to deliver a cinema-ready audio track.",
    client: "Rovern Productions",
    services: ["Dialogue Editing", "ADR", "Foley", "5.1 Mix"],
    year: 2024,
  },
  {
    id: "sonrine-refoneta",
    title: "Sonrine Refoneta",
    category: "Composition",
    thumbnail: "/assets/brand-image-2.jpg",
    description:
      "Bespoke ambient compositions for a luxury hospitality brand's global properties.",
    fullDescription:
      "Sonrine Refoneta commissioned a suite of original ambient compositions to play throughout their portfolio of luxury hotels across four continents. We created fifteen tracks, each tailored to a specific property's architectural character and regional setting, unified by a shared harmonic language.",
    client: "Sonrine Refoneta Hotels",
    services: ["Composition", "Recording", "Delivery"],
    year: 2023,
  },
  {
    id: "sound-design-collective",
    title: "Sound Design Collective",
    category: "Sound Design",
    thumbnail: "/assets/brand-image-3.jpg",
    description:
      "Award-winning sound design for a streaming platform's flagship drama series.",
    fullDescription:
      "Eight-episode flagship drama requiring an entirely original sonic world. Every sound — from the protagonist's footsteps to the ambient texture of the central location — was designed from scratch. The series was nominated for Best Sound Design at two international television awards.",
    client: "Streaming Platform (Confidential)",
    services: ["Sound Design", "Foley", "Final Mix"],
    year: 2024,
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Audio",
  "Film",
  "Mixing",
  "Composition",
  "Sound Design",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [pendingCategory, setPendingCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  function handleFilterClick(cat: Category) {
    if (cat === activeCategory) return;
    setPendingCategory(cat);
    setTimeout(() => setActiveCategory(cat), 120);
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedProject(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
              "linear-gradient(to top, rgba(13,8,6,0.97) 0%, rgba(13,8,6,0.6) 55%, rgba(13,8,6,0.28) 100%)",
          }}
        />
        <div
          className="absolute inset-0 grain opacity-30 pointer-events-none"
          style={{ zIndex: 2 }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24 pt-44">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-sm font-body text-primary/80 mb-8 tracking-[0.2em] uppercase">
              Selected Works
            </p>
            <h1
              className="font-body font-bold leading-[1.04] mb-7 text-7xl md:text-8xl lg:text-9xl"
              style={{
                background:
                  "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.88) 60%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-xl font-body leading-loose">
              A curated collection of music production, post-production, and
              sound design projects — where intention meets craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section
        className="border-b border-border/40 sticky top-16 z-30"
        style={{ background: "oklch(0.09 0.013 30)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="flex items-center gap-1 overflow-x-auto py-4"
            role="tablist"
            aria-label="Filter by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={pendingCategory === cat}
                data-ocid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => handleFilterClick(cat)}
                className={[
                  "flex-shrink-0 px-5 py-2 rounded-full text-base font-body font-medium transition-smooth",
                  pendingCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24" data-ocid="empty-state">
              <p className="text-xl text-muted-foreground font-body">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/brand-image-1.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,8,6,0.9) 0%, rgba(13,8,6,0.93) 100%)",
          }}
        />
        <div className="absolute inset-0 grain opacity-25 pointer-events-none" />

        <div className="relative py-24 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto space-y-8"
          >
            <h2 className="font-body font-bold leading-tight text-5xl md:text-6xl text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-foreground/60 font-body leading-loose">
              We'd love to hear about it. Let's create something extraordinary
              together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground text-base font-body rounded-sm hover:bg-primary/85 transition-smooth"
              data-ocid="portfolio-bottom-cta"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface CardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: CardProps) {
  return (
    <button
      type="button"
      data-ocid={`project-card-${project.id}`}
      onClick={onClick}
      className="group text-left bg-card border border-border/50 rounded-sm overflow-hidden hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring outline-none w-full transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300" />
        <span className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="text-sm font-body bg-card/90 text-foreground backdrop-blur-sm border-0 px-3 py-1"
          >
            {project.category}
          </Badge>
        </span>
        <span className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth">
          <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
          </span>
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm font-body text-muted-foreground mb-2 tracking-wide">
          {project.year}
        </p>
        <h3 className="text-2xl md:text-3xl font-body font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 truncate">
          {project.title}
        </h3>
        <p className="text-lg text-muted-foreground font-body leading-loose line-clamp-2">
          {project.description}
        </p>
      </div>
    </button>
  );
}

interface ModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => panelRef.current?.focus(), 50);
  }, []);

  return (
    <dialog
      open
      aria-label={project.title}
      data-ocid="project-modal"
      className="fixed inset-0 z-50 bg-transparent p-0 m-0 w-full h-full max-w-full max-h-full border-0 outline-none flex items-end sm:items-center justify-center sm:p-6"
    >
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 bg-card rounded-t-xl sm:rounded-xl w-full max-w-2xl max-h-[92dvh] overflow-y-auto outline-none shadow-2xl border border-border/40"
      >
        <div className="relative aspect-video overflow-hidden rounded-t-xl sm:rounded-t-xl bg-muted">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            data-ocid="modal-close"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-7 sm:p-9">
          <div className="flex items-start justify-between gap-4 mb-7">
            <div className="min-w-0">
              <p className="text-sm font-body text-muted-foreground mb-2 tracking-wide uppercase">
                {project.category}
              </p>
              <h2 className="font-body font-bold leading-tight text-4xl md:text-5xl text-foreground">
                {project.title}
              </h2>
            </div>
            <Badge
              variant="outline"
              className="flex-shrink-0 mt-2 text-sm font-body border-border/50 text-muted-foreground"
            >
              {project.year}
            </Badge>
          </div>
          <p className="text-xl text-foreground/75 font-body leading-loose mb-10">
            {project.fullDescription}
          </p>
          <div className="grid grid-cols-2 gap-7 pt-7 border-t border-border/40">
            <div>
              <p className="text-sm font-body text-muted-foreground mb-3 tracking-widest uppercase">
                Client
              </p>
              <p className="text-lg text-foreground font-body">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-sm font-body text-muted-foreground mb-3 tracking-widest uppercase">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="text-sm font-normal text-foreground/70 font-body"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-9">
            <button
              type="button"
              data-ocid="modal-close-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-7 py-3 border border-border/50 rounded-sm text-base font-body text-foreground hover:bg-muted transition-smooth focus-visible:ring-2 focus-visible:ring-ring outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </dialog>
  );
}
