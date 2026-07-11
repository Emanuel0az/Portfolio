import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { Container } from "@/components/layout/Container";
import { personalInfo, socialLinks } from "@/data/social";
import { cn } from "@/utils/cn";

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8" role="contentinfo">
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <Container>
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Marca */}
          <div className="space-y-3">
            <a
              href="#hero"
              className="text-lg font-semibold text-foreground hover:text-primary transition-colors inline-block"
            >
              {personalInfo.firstName}
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navegación
            </h3>
            <nav aria-label="Navegación del footer">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Conectemos
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks
                .filter((s) => s.id !== "cv" && s.id !== "email")
                .map((social) => {
                  const Icon = iconMap[social.icon] || FiMail;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={cn(
                        "p-2.5 rounded-lg bg-surface border border-border text-muted-foreground",
                        "hover:text-foreground hover:border-border-hover hover:bg-surface-hover",
                        "transition-all duration-200"
                      )}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>

          {/* Botón volver arriba */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Volver al inicio"
          >
            <span>Volver arriba</span>
            <span className="p-1 rounded-md bg-surface border border-border group-hover:border-border-hover transition-colors">
              <FiArrowUp size={14} />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}