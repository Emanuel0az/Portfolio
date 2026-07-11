import { cn } from "@/utils/cn";
import type { WithClassName, WithChildren } from "@/types";

interface BadgeProps extends WithClassName, WithChildren {
  /** Variante de color */
  variant?: "default" | "primary" | "secondary" | "accent";
  /** Tamaño */
  size?: "sm" | "md";
  /** Si debe tener estilo interactivo (hover) */
  interactive?: boolean;
}

/**
 * Componente Badge para etiquetas, tecnologías y chips.
 */
export function Badge({
  className,
  variant = "default",
  size = "sm",
  interactive = false,
  children,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full border transition-colors duration-200";

  const variants = {
    default: "bg-surface border-border text-muted-foreground",
    primary: "bg-primary/10 border-primary/20 text-primary",
    secondary: "bg-secondary/10 border-secondary/20 text-secondary",
    accent: "bg-accent/10 border-accent/20 text-accent",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  const interactiveStyles = interactive
    ? "hover:bg-surface-hover hover:border-border-hover cursor-default"
    : "";

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        interactiveStyles,
        className
      )}
    >
      {children}
    </span>
  );
}