import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import type { WithChildren, WithClassName } from "@/types";

interface FadeInProps extends WithChildren, WithClassName {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  triggerOnce = true,
  rootMargin = "0px",
}: FadeInProps) {
  const { ref, isInView } = useInView({ triggerOnce, rootMargin });

  const getInitial = () => {
    const distance = 30;
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitial()}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : getInitial()
        }
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}