import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNextdotjs,
  SiCss,
  SiPython,
  SiMysql,
  SiNodedotjs,
  SiDjango,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { HiBookOpen, HiLanguage } from "react-icons/hi2";
import type { IconType } from "react-icons";

// Mapa de íconos disponibles
const iconMap: Record<string, IconType> = {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNextdotjs,
  SiCss,
  SiPython,
  SiMysql,
  SiNodedotjs,
  SiDjango,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  HiBookOpen,
  HiLanguage,
};

interface DynamicIconProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Renderiza dinámicamente un ícono basado en su nombre.
 * Soporta íconos de react-icons/si y react-icons/hi2.
 */
export function DynamicIcon({ icon, size = 24, color, className }: DynamicIconProps) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return <span className="text-xs text-muted-foreground">●</span>;
  }

  return <IconComponent size={size} color={color} className={className} />;
}