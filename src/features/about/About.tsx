import { FiDownload, FiMapPin, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { personalInfo } from "@/data/social";

export function About() {
  return (
    <Section
      id="about"
      title="Sobre mí"
      subtitle="Conoce un poco más sobre mi trayectoria y lo que me apasiona"
    >
      <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        {/* Avatar */}
        <FadeIn direction="left" className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border bg-surface">
              <img
                src={personalInfo.avatar}
                alt={`Foto de ${personalInfo.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Glow decorativo */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 -z-10 blur-md" />
          </div>
        </FadeIn>

        {/* Contenido */}
        <FadeIn direction="right" delay={0.1} className="md:col-span-3">
          <div className="space-y-5">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Datos personales */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                <FiMapPin className="text-primary shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">Ubicación</p>
                  <p className="text-sm font-medium text-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                <FiMail className="text-primary shrink-0" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Botón CV */}
            {personalInfo.resumeUrl && (
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    window.open(personalInfo.resumeUrl, "_blank");
                  }}
                >
                  <FiDownload size={16} />
                  Descargar CV
                </Button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}