import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "senior-frontend",
    company: "TechCorp",
    position: "Senior Frontend Developer",
    location: "Remoto",
    startDate: "2023-01",
    endDate: null, // null = puesto actual
    description:
      "Lidero el equipo de frontend en el desarrollo de la plataforma principal SaaS. Responsable de la arquitectura, decisiones técnicas y mentoría de desarrolladores junior.",
    achievements: [
      "Rediseñé la arquitectura frontend migrando de class components a hooks, mejorando el rendimiento en un 40%",
      "Implementé sistema de diseño con componentes reutilizables reduciendo el tiempo de desarrollo en un 30%",
      "Lideré la migración de JavaScript a TypeScript en todo el codebase",
      "Establecí pipelines de CI/CD con GitHub Actions y Vercel",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest"],
  },
  {
    id: "frontend-developer",
    company: "DigitalAgency",
    position: "Frontend Developer",
    location: "Madrid, España",
    startDate: "2021-06",
    endDate: "2022-12",
    description:
      "Desarrollé aplicaciones web para clientes de diversos sectores. Trabajé en un equipo ágil con sprints de 2 semanas.",
    achievements: [
      "Desarrollé más de 15 proyectos para clientes corporativos cumpliendo plazos y presupuestos",
      "Implementé pruebas E2E con Cypress alcanzando un 90% de cobertura en features críticos",
      "Creé una librería interna de componentes compartida entre proyectos",
      "Optimicé el performance de aplicaciones legacy logrando mejoras de Lighthouse de 45 a 92",
    ],
    technologies: ["React", "JavaScript", "Sass", "Redux", "Node.js", "Cypress"],
  },
  {
    id: "junior-developer",
    company: "StartupXYZ",
    position: "Junior Web Developer",
    location: "Barcelona, España",
    startDate: "2020-03",
    endDate: "2021-05",
    description:
      "Primera experiencia profesional. Participé en el desarrollo del MVP de una plataforma edtech que luego recibió financiación Serie A.",
    achievements: [
      "Desarrollé el frontend del MVP desde cero con React y Material UI",
      "Implementé autenticación con OAuth 2.0 y manejo de sesiones",
      "Colaboré en el diseño de la base de datos PostgreSQL",
      "Participé en entrevistas con usuarios para iterar sobre el producto",
    ],
    technologies: ["React", "JavaScript", "Material UI", "PostgreSQL", "Firebase"],
  },
  {
    id: "freelance",
    company: "Freelance",
    position: "Desarrollador Web Freelance",
    location: "Remoto",
    startDate: "2019-01",
    endDate: "2020-02",
    description:
      "Trabajé por cuenta propia desarrollando sitios web y aplicaciones para pequeños negocios y emprendedores.",
    achievements: [
      "Completé más de 20 proyectos para clientes de diferentes industrias",
      "Aprendí a gestionar proyectos, presupuestos y comunicación con clientes",
      "Desarrollé habilidades full-stack por necesidad del negocio",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];