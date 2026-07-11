import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import type { SizeVariant, StyleVariant } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante de estilo visual */
  variant?: StyleVariant;
  /** Tamaño del botón */
  size?: SizeVariant;
  /** Si ocupa todo el ancho disponible */
  fullWidth?: boolean;
  /** Para renderizar como enlace (estilo botón con href) */
  href?: string;
  /** Target para cuando se usa como enlace */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** Rel para cuando se usa como enlace externo */
  rel?: string;
}

/**
 * Componente Button con variantes de estilo, tamaño y soporte para enlaces.
 * Usa forwardRef para permitir referencias externas.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, disabled, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants: Record<StyleVariant, string> = {
      default: "bg-surface border border-border text-foreground hover:bg-surface-hover hover:border-border-hover",
      primary:
        "bg-primary text-white hover:bg-primary-hover shadow-glow-primary active:scale-[0.97]",
      secondary:
        "bg-secondary text-white hover:bg-secondary-hover shadow-glow-secondary active:scale-[0.97]",
      outline:
        "border border-border text-foreground hover:bg-surface hover:border-border-hover",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-surface",
    };

    const sizes: Record<SizeVariant, string> = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";