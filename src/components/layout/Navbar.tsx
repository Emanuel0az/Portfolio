import { useState, useEffect, useCallback } from "react";
import { cn } from "@/utils/cn";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { personalInfo, socialLinks } from "@/data/social";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Trayectoria", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const githubLink = socialLinks.find((s) => s.id === "github");
  const linkedinLink = socialLinks.find((s) => s.id === "linkedin");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/10"
            : "bg-background/50 backdrop-blur-sm"
        )}
        role="banner"
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso de lectura"
        />

        <nav
          className="mx-auto max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-16 md:h-18"
          role="navigation"
          aria-label="Navegación principal"
        >
          <a
            href="#hero"
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            onClick={handleNavClick}
          >
            {personalInfo.firstName}
            <span className="text-primary">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={githubLink.label}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                <FiGithub size={20} />
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedinLink.label}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Menú móvil - mismo fondo que el navbar */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="flex flex-col p-6 gap-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-lg text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}