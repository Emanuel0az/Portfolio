import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  // Ordenar: featured primero, luego por año descendente
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });

  return (
    <Section
      id="projects"
      title="Proyectos"
      subtitle="Una selección de los proyectos en los que he trabajado recientemente"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
          <FadeIn
            key={project.id}
            direction="up"
            delay={index * 0.1}
            className="h-full"
          >
            <div className="relative h-full">
              {/* Badge de destacado */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary text-white shadow-glow-primary">
                    Destacado
                  </span>
                </div>
              )}
              <ProjectCard project={project} className="h-full" />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}