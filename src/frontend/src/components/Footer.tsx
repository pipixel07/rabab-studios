import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="border-t border-border/30 grain"
      style={{ background: "oklch(0.07 0.012 30)" }}
      data-ocid="footer"
    >
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <img
              src="/assets/logo-white.png"
              alt="Rabab Studios"
              className="h-10 w-auto object-contain opacity-75"
              style={{ filter: "brightness(0) invert(1)" }}
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.src = "/assets/logo.png";
                t.style.filter = "brightness(0) invert(1)";
              }}
            />
            <p className="text-base text-muted-foreground leading-loose max-w-xs font-body">
              A premier music studio and post-production house — crafting
              exceptional audio experiences for artists and brands.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <p className="text-sm font-body text-primary/80 tracking-[0.2em] uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-base text-muted-foreground hover:text-foreground transition-smooth w-fit font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <p className="text-sm font-body text-primary/80 tracking-[0.2em] uppercase">
              Get in Touch
            </p>
            <div className="space-y-3">
              <p className="text-base text-muted-foreground font-body">
                hello@rababstudios.com
              </p>
              <p className="text-base text-muted-foreground font-body">
                +971 50 423 7810
              </p>
              <p className="text-base text-muted-foreground font-body">
                Dubai Design District, UAE
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block text-sm font-body text-primary border-b border-primary/40 hover:border-primary transition-smooth pb-0.5 tracking-wide"
              data-ocid="footer-cta"
            >
              Start a Project →
            </Link>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground font-body">
            © {year} Rabab Studios. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-body">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
