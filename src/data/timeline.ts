import type { Experience } from "../types";

export const timeline: Experience[] = [
  {
    id: "comedor-proyect",
    company: "Proyecto Personal",
    position: "Comedor Management",
    location: "Costa Rica",
    startDate: "2024-06",
    endDate: "2024-11",
    description:
      "Desarrollo de un sistema completo de base de datos para la gestión del comedor de un colegio.",
    achievements: [
      "Diseñé e implementé la base de datos con MySQL y MongoDB",
      "Desarrollé el backend con Django y Python para la lógica de negocio",
      "Creé el frontend con React para visualización de datos y gráficos interactivos",
      "Implementé control de estudiantes, pagos, becas y reportes semanales",
      "Desplegué la aplicación usando Docker para facilitar la instalación",
    ],
    technologies: ["React", "Python", "Django", "MySQL", "MongoDB", "Node.js", "Docker"],
  },
  {
    id: "bootcamp-forward",
    company: "Forward Academy",
    position: "Estudiante - Full Stack Developer",
    location: "Costa Rica",
    startDate: "2024-04",
    endDate: "2024-11",
    description:
      "Bootcamp intensivo de desarrollo web full stack con enfoque práctico y proyectos reales.",
    achievements: [
      "Completé 6 meses de formación intensiva (8am a 5pm) en desarrollo web",
      "Obtuve certificación en Front-end (HTML, CSS, JavaScript, React)",
      "Obtuve certificación en Full Stack (Node.js, Python, Django, bases de datos)",
      "Desarrollé múltiples proyectos prácticos con evaluación continua",
      "Aprendí a trabajar en equipo con metodologías ágiles",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django", "MySQL"],
  },
  {
    id: "proyectos-2024",
    company: "Proyectos Personales",
    position: "Desarrollador",
    location: "Costa Rica",
    startDate: "2024-01",
    endDate: "2024-12",
    description:
      "Desarrollo de proyectos personales para aplicar y reforzar conocimientos adquiridos.",
    achievements: [
      "Desarrollé Tic-Tac-Toe Game con HTML, CSS y JavaScript vanilla",
      "Creé Mastermind en Python aplicando lógica de programación",
      "Implementé Hotel Reserve con MySQL para gestionar reservas",
      "Subí todos los proyectos a GitHub con documentación clara",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "GitHub"],
  },
  {
    id: "tecnico-contable-timeline",
    company: "MG Capacitaciones",
    position: "Estudiante - Asistente Contable",
    location: "Costa Rica",
    startDate: "2025-11",
    endDate: "2026-04",
    description:
      "Formación técnica en procesos contables para complementar mi perfil tecnológico.",
    achievements: [
      "Completé el programa de Asistente Contable",
      "Aprendí procesos administrativos y financieros",
      "Desarrollé habilidades complementarias para entender procesos empresariales",
    ],
    technologies: ["Contabilidad", "Administración", "Finanzas"],
  },
];