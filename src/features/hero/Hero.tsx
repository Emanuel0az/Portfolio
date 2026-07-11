import { FiArrowDown, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { personalInfo } from "@/data/social";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,45,120,0.08),transparent_50%)]" />
        {/* Grid pattern sutil */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating shapes decorativos */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge de disponibilidad */}
          {personalInfo.available && (
            <FadeIn direction="down" delay={0}>
              <Badge variant="primary" size="md" className="mb-8">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Disponible para trabajar
              </Badge>
            </FadeIn>
          )}

          {/* Nombre con gradiente */}
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Hola, soy </span>
              <span className="text-gradient">{personalInfo.firstName}</span>
            </h1>
          </FadeIn>

          {/* Role / Tagline */}
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl">
              {personalInfo.role}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-base md:text-lg text-muted-foreground/70 mb-10 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FiMail size={18} />
                Contactame
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver proyectos
              </Button>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn direction="none" delay={0.8}>
            <button
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Desplazarse a la sección Sobre mí"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <FiArrowDown className="animate-bounce" size={20} />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}