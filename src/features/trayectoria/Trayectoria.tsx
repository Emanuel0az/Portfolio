import { FiCalendar, FiMapPin } from "react-icons/fi";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { timeline } from "@/data/timeline";
import { cn } from "@/utils/cn";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Trayectoria"
      subtitle="Mi camino de aprendizaje y proyectos"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Línea central de la timeline */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <FadeIn
                key={item.id}
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
                      "absolute top-1 w-3 h-3 rounded-full border-2 border-primary bg-background",
                      "left-[13px] md:left-auto",
                      isLeft ? "md:right-[-7px]" : "md:left-[-7px]"
                    )}
                  />

                  {/* Indicador de actividad actual */}
                  {item.endDate === null && (
                    <span className="absolute top-1 w-3 h-3 rounded-full bg-primary animate-ping opacity-75" />
                  )}

                  {/* Contenido */}
                  <div className="p-5 rounded-xl bg-surface border border-border hover:border-border-hover transition-colors">
                    {/* Período */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <FiCalendar size={14} />
                      <span>
                        {formatDate(item.startDate)} —{" "}
                        {item.endDate ? formatDate(item.endDate) : "Presente"}
                      </span>
                    </div>

                    {/* Título y organización */}
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.position}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span>{item.company}</span>
                      <span className="text-border">•</span>
                      <FiMapPin size={14} />
                      <span>{item.location}</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Logros */}
                    {item.achievements.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tecnologías / Etiquetas */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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