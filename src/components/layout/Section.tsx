import { cn } from "@/utils/cn";
import { Container } from "./Container";
import type { WithClassName, WithChildren } from "@/types";

interface SectionProps extends WithClassName, WithChildren {
  /** ID único para navegación por anclas (requerido) */
  id: string;
  /** Título de la sección */
  title?: string;
  /** Subtítulo descriptivo */
  subtitle?: string;
  /** Si debe tener padding vertical reducido */
  compact?: boolean;
}

/**
 * Componente Section con espaciado vertical, título decorativo y container.
 * @param id - ID único para anclas de navegación.
 * @param title - Título opcional con línea decorativa.
 * @param subtitle - Subtítulo opcional debajo del título.
 * @param compact - Padding vertical reducido.
 */
export function Section({
  id,
  title,
  subtitle,
  compact = false,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        compact ? "py-16 md:py-20" : "py-24 md:py-32",
        className
      )}
    >
      <Container>
        {/* Título y subtítulo */}
        {title && (
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
                {title}
              </h2>
              <span className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
            </div>
            {subtitle && (
              <p className="text-muted-foreground text-base md:text-lg text-center max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {/* Contenido */}
        {children}
      </Container>
    </section>
  );
}