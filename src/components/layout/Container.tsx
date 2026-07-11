import { cn } from "@/utils/cn";
import type { WithClassName, WithChildren } from "@/types";

interface ContainerProps extends WithClassName, WithChildren {
  /** HTML tag a renderizar (por defecto div) */
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
  /** Variante de ancho máximo */
  maxWidth?: "default" | "narrow" | "wide";
}

/**
 * Container que centra el contenido horizontalmente con padding responsivo.
 * @param as - Elemento HTML a renderizar.
 * @param maxWidth - default: 1200px, narrow: 800px, wide: 1400px.
 */
export function Container({
  className,
  as: Component = "div",
  maxWidth = "default",
  children,
}: ContainerProps) {
  const maxWidths = {
    default: "max-w-[1200px]",
    narrow: "max-w-[800px]",
    wide: "max-w-[1400px]",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        maxWidths[maxWidth],
        className
      )}
    >
      {children}
    </Component>
  );
}