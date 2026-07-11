import type { PersonalInfo, SocialLink } from "../types";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Emanuel0az",
    icon: "FiGithub",
    label: "Visitar perfil de GitHub",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/emanuel-abarca-zúñiga-120b953b4",
    icon: "FiLinkedin",
    label: "Visitar perfil de LinkedIn",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:emanuelabarcazuniga@gmail.com",
    icon: "FiMail",
    label: "Enviar correo electrónico",
  },
];

export const personalInfo: PersonalInfo = {
  name: "Emanuel de Jesús Abarca Zúñiga",
  firstName: "Emanuel",
  lastName: "Abarca",
  role: "Full Stack Software Developer",
  tagline: "Construyendo aplicaciones web modernas con React y TypeScript",
  bio: "Soy un Desarrollador Full Stack Jr con experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React, TypeScript, Django, Python y MySQL. Me gusta construir soluciones prácticas, aprender nuevas herramientas y mejorar continuamente mis habilidades técnicas. Actualmente complemento mi perfil tecnológico con estudios en Auxiliar Contable, lo que me permite ampliar mi visión de los procesos empresariales. Disfruto trabajar en proyectos que combinan desarrollo, automatización y resolución de problemas reales, siempre buscando crear aplicaciones funcionales, eficientes y fáciles de utilizar.",
  shortBio: "Desarrollador Full Stack Jr con conocimientos en React, Python, Django y bases de datos.",
  avatar: "/images/avatar.jpg",
  resumeUrl: "/cv.pdf",
  email: "emanuelabarcazuniga@gmail.com",
  location: "Puntarenas, Costa Rica",
  available: true,
  socialLinks,
};