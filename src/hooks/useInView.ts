import { useEffect, useState, useCallback } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

interface UseInViewReturn {
  ref: (node: HTMLElement | null) => void;
  isInView: boolean;
}

/**
 * Hook que detecta cuándo un elemento es visible en el viewport.
 * Usa callback ref para máxima compatibilidad con cualquier elemento.
 */
export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
  const { rootMargin = "0px", threshold = 0.1, triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        if (isVisible) {
          setIsInView(true);
          if (triggerOnce && entry.target) {
            obs.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    setObserver(obs);

    return () => {
      obs.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (observer) {
        observer.disconnect();
      }
      if (node && observer) {
        observer.observe(node);
      }
    },
    [observer]
  );

  return { ref, isInView };
}