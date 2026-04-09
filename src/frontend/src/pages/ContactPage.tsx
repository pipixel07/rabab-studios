import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SubjectOption =
  | "General Inquiry"
  | "Recording Session"
  | "Mixing & Mastering"
  | "Film Audio"
  | "Sound Design";

interface ContactFormValues {
  fullName: string;
  email: string;
  subject: SubjectOption;
  message: string;
  newsletter: boolean;
}

const subjectOptions: SubjectOption[] = [
  "General Inquiry",
  "Recording Session",
  "Mixing & Mastering",
  "Film Audio",
  "Sound Design",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@rababstudios.com",
    href: "mailto:hello@rababstudios.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 50 423 7810",
    href: "tel:+971504237810",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai Design District\nDubai, UAE",
    href: "https://maps.google.com/?q=Dubai+Design+District",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun – Thu, 9am – 6pm GST",
    href: "#",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: { subject: "General Inquiry", newsletter: false },
  });

  function onSubmit(_data: ContactFormValues) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSubmitted(true);
        resolve();
      }, 900);
    });
  }

  function handleReset() {
    setSubmitted(false);
    reset();
  }

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/assets/banner-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(13,8,6,0.97) 0%, rgba(13,8,6,0.65) 55%, rgba(13,8,6,0.32) 100%)",
          }}
        />
        <div
          className="absolute inset-0 grain opacity-30 pointer-events-none"
          style={{ zIndex: 2 }}
        />

        <div
          className="relative container mx-auto px-6 max-w-5xl pb-20 pt-40"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body text-primary/80 mb-7 tracking-[0.2em] uppercase">
              Contact
            </p>
            <h1
              className="font-body font-bold tracking-tight leading-tight mb-7 text-7xl md:text-8xl"
              style={{
                background:
                  "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.88) 60%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/60 leading-loose max-w-md font-body">
              Whether you have a project in mind or simply want to say hello,
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="order-2 lg:order-1 lg:col-span-2 space-y-12"
            >
              <div>
                <p className="text-sm font-body text-muted-foreground mb-4 tracking-widest uppercase">
                  Studio
                </p>
                <h2 className="font-body text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Rabab Studios
                </h2>
                <p className="text-lg text-muted-foreground leading-loose font-body">
                  A Dubai-based music studio and post-production house —
                  crafting exceptional audio experiences for artists, film, and
                  brands.
                </p>
              </div>

              <div className="space-y-7">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group flex items-start gap-5 transition-smooth ${href === "#" ? "pointer-events-none" : ""}`}
                    data-ocid={`contact-detail-${label.toLowerCase()}`}
                  >
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border/50 bg-card text-foreground/50 group-hover:border-primary/50 group-hover:text-primary transition-smooth">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-body text-muted-foreground mb-1 tracking-wide uppercase">
                        {label}
                      </p>
                      <p className="text-lg text-foreground whitespace-pre-line leading-snug group-hover:text-primary transition-smooth font-body">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="hidden lg:block border-t border-border/30 pt-7">
                <p className="text-base text-muted-foreground leading-loose font-body">
                  We take on a limited number of projects each season to give
                  every client our full focus and creative attention.
                </p>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="order-1 lg:order-2 lg:col-span-3"
            >
              {submitted ? (
                <SuccessState onReset={handleReset} />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-8"
                  data-ocid="contact-form"
                >
                  <div className="pb-5 border-b border-border/40">
                    <h2 className="font-body text-3xl md:text-4xl font-semibold text-foreground mb-2">
                      Send a Message
                    </h2>
                    <p className="text-lg text-muted-foreground font-body">
                      All fields are required.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-body text-foreground/70 tracking-wide uppercase"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      data-ocid="input-full-name"
                      className={`text-lg h-12 ${
                        errors.fullName
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive font-body">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-sm font-body text-foreground/70 tracking-wide uppercase"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      data-ocid="input-email"
                      className={`text-lg h-12 ${
                        errors.email
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }`}
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive font-body">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-body text-foreground/70 tracking-wide uppercase"
                    >
                      Subject
                    </Label>
                    <div className="relative">
                      <select
                        id="subject"
                        data-ocid="select-subject"
                        className={`w-full h-12 rounded-md border px-4 py-2 text-lg bg-background text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 transition-smooth font-body ${
                          errors.subject ? "border-destructive" : "border-input"
                        }`}
                        {...register("subject", {
                          required: "Please select a subject",
                        })}
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          aria-hidden="true"
                          role="presentation"
                        >
                          <path
                            d="M1 1l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.subject && (
                      <p className="text-sm text-destructive font-body">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-sm font-body text-foreground/70 tracking-wide uppercase"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={7}
                      placeholder="Tell us about your project or question…"
                      data-ocid="input-message"
                      className={`resize-none font-body text-lg leading-loose ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Please write at least 20 characters",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive font-body">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Newsletter checkbox */}
                  <div className="flex items-start gap-4 pt-1">
                    <input
                      id="newsletter"
                      type="checkbox"
                      data-ocid="checkbox-newsletter"
                      className="mt-1 h-5 w-5 rounded border-input accent-primary cursor-pointer"
                      {...register("newsletter")}
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-lg text-muted-foreground leading-loose cursor-pointer select-none font-body"
                    >
                      Subscribe to our newsletter for studio updates, session
                      insights, and new releases.
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      data-ocid="btn-submit-contact"
                      className="w-full sm:w-auto px-10 py-5 text-base tracking-widest rounded-sm transition-smooth font-body h-auto"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start justify-center py-20 space-y-7"
      data-ocid="contact-success"
    >
      <CheckCircle2 className="text-primary w-14 h-14" strokeWidth={1.25} />
      <div>
        <h2 className="font-body text-4xl font-semibold text-foreground mb-4">
          Thank You
        </h2>
        <p className="text-xl text-muted-foreground leading-loose max-w-sm font-body">
          Your message has been received. We typically respond within one to two
          business days and look forward to connecting with you.
        </p>
      </div>
      <div className="w-16 h-px bg-primary/40" />
      <button
        type="button"
        onClick={onReset}
        className="text-base font-body text-primary border-b border-primary/40 hover:border-primary transition-smooth pb-0.5 mt-2"
        data-ocid="btn-send-another"
      >
        Send Another Message
      </button>
    </motion.div>
  );
}
