import { FiCalendar, FiAward } from "react-icons/fi";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { educationList } from "@/data/education";
import { cn } from "@/utils/cn";

export function Education() {
  return (
    <Section
      id="education"
      title="Educación"
      subtitle="Formación académica y certificaciones relevantes"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {educationList.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <FadeIn
                key={edu.id}
                direction={isLeft ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={cn(
                    "relative pl-12 md:pl-0 md:w-1/2",
                    isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                  )}
                >
                  {/* Punto en la timeline */}
                  <div
                    className={cn(
                      "absolute top-1 w-3 h-3 rounded-full border-2 border-secondary bg-background",
                      "left-[13px] md:left-auto",
                      isLeft ? "md:right-[-7px]" : "md:left-[-7px]"
                    )}
                  />

                  {/* Contenido */}
                  <div className="p-5 rounded-xl bg-surface border border-border hover:border-border-hover transition-colors">
                    {/* Período */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <FiCalendar size={14} />
                      <span>
                        {formatDate(edu.startDate)} —{" "}
                        {edu.endDate ? formatDate(edu.endDate) : "En curso"}
                      </span>
                    </div>

                    {/* Título */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0">
                        <FiAward size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-secondary font-medium">
                          {edu.field}
                        </p>
                      </div>
                    </div>

                    {/* Institución */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {edu.institution}
                    </p>

                    {/* Descripción */}
                    {edu.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/**
 * Formatea una fecha YYYY-MM a "Mes Año" en español.
 */
function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ];
  const monthIndex = parseInt(month, 10) - 1;
  return `${months[monthIndex]} ${year}`;
}