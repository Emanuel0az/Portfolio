import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "comedor-management",
    title: "Comedor Management",
    description:
      "Sistema de base de datos para el comedor de un colegio. Control de estudiantes que comieron en la semana, pagos realizados y pendientes, becas y gráficos interactivos.",
    tags: ["React", "Python", "Django", "MongoDB", "MySQL", "Node.js", "Docker"],
    image: "/images/project-comedor.png",
    repoUrl: "https://github.com/Emanuel0az/IS_Comedor",
    featured: true,
    year: 2024,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    description:
      "Réplica del juego clásico de tres en raya. Interfaz interactiva con detección de ganador y reinicio de partida.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-tictactoe.png",
    repoUrl: "https://github.com/Emanuel0az/Tic-Tac-Toe-Game",
    featured: false,
    year: 2024,
  },
  {
    id: "mastermind",
    title: "Mastermind",
    description:
      "Réplica del juego de lógica Mastermind. El jugador debe adivinar una combinación secreta de colores con pistas visuales.",
    tags: ["Python"],
    image: "/images/project-mastermind.png",
    repoUrl: "https://github.com/Emanuel0az/mastermind",
    featured: false,
    year: 2024,
  },
  {
    id: "hotel-reserve",
    title: "Hotel Reserve",
    description:
      "Simulación de reservas de hotel con base de datos. Permite registrar huéspedes, habitaciones, fechas y consultar disponibilidad.",
    tags: ["MySQL"],
    image: "/images/project-hotel.png",
    repoUrl: "https://github.com/Emanuel0az/_Hotel_Reserve",
    featured: false,
    year: 2024,
  },
];