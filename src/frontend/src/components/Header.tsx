import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { location } = useRouterState();
  const currentPath = location.pathname;

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/30"
      style={{
        background: "oklch(0.08 0.012 30 / 0.95)",
        backdropFilter: "blur(12px)",
      }}
      data-ocid="nav"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-ocid="nav-logo"
        >
          <img
            src="/assets/logo-white.png"
            alt="Rabab Studios"
            className="h-10 w-auto object-contain transition-smooth group-hover:opacity-75"
            style={{ filter: "brightness(0) invert(1)" }}
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.src = "/assets/logo.png";
              t.style.filter = "brightness(0) invert(1)";
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={[
                  "text-sm font-body tracking-wide transition-smooth relative pb-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full",
                  "after:transition-smooth after:origin-left",
                  isActive
                    ? "text-primary after:bg-primary after:scale-x-100"
                    : "text-foreground/50 hover:text-foreground after:bg-primary/60 after:scale-x-0 hover:after:scale-x-100",
                ].join(" ")}
                data-ocid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground/60 hover:text-foreground transition-smooth rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-ocid="nav-mobile-toggle"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border/30"
          style={{ background: "oklch(0.08 0.012 30)" }}
          data-ocid="nav-mobile-menu"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "text-sm font-body py-3 border-b border-border/30 last:border-0 transition-smooth",
                    isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground",
                  ].join(" ")}
                  data-ocid={`nav-mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
