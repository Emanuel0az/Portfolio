import { useState, useEffect } from "react";

/**
 * Hook que evalúa un media query CSS y devuelve si coincide.
 * @param query - String de media query CSS (ej: "(min-width: 768px)")
 * @returns true si el media query coincide, false en caso contrario.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Establecer valor inicial
    setMatches(mediaQuery.matches);

    // Callback para cambios
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Escuchar cambios (redimensiones, rotaciones, etc.)
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}