// ============================================================
// Tipos para datos del portfolio
// ============================================================

/** Representa un proyecto en la sección de portfolio */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;
}

/** Representa una habilidad técnica */
export interface Skill {
  id: string;
  name: string;
  icon: string; // Nombre del ícono de react-icons (ej: "SiReact")
  category: "frontend" | "backend" | "tools" | "design" | "other";
  level: number; // 0-100
  color?: string; // Color hexadecimal para el ícono
}

/** Representa una experiencia laboral */
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string; // Formato: "YYYY-MM"
  endDate: string | null; // null = actualidad
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

/** Representa educación formal o certificación */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  description?: string;
  logo?: string;
}

/** Representa un enlace a red social o plataforma */
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // Nombre del ícono de react-icons
  label: string; // Texto accesible
}

/** Información personal del portfolio */
export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string;
  shortBio: string;
  avatar: string;
  resumeUrl?: string;
  email: string;
  location: string;
  available: boolean;
  socialLinks: SocialLink[];
}

// ============================================================
// Tipos para componentes UI
// ============================================================

/** Variantes de tamaño reutilizables */
export type SizeVariant = "sm" | "md" | "lg";

/** Variantes de estilo para botones y badges */
export type StyleVariant = "default" | "primary" | "secondary" | "outline" | "ghost";

/** Props comunes para componentes con className */
export interface WithClassName {
  className?: string;
}

/** Props comunes para componentes con children */
export interface WithChildren {
  children: React.ReactNode;
}

/** Props base para secciones del portfolio */
export interface SectionProps extends WithClassName, WithChildren {
  id: string; // Para navegación por anclas y SEO
  title?: string;
  subtitle?: string;
}