import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases CSS condicionalmente y resuelve conflictos de Tailwind.
 * @param inputs - Clases CSS en cualquier formato soportado por clsx.
 * @returns String con clases fusionadas y sin conflictos.
 * @example
 * cn("px-4 py-2", isActive && "bg-primary", "px-6") // "py-2 bg-primary px-6"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}