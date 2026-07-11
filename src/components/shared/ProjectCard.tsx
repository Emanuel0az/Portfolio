import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * Tarjeta de proyecto con imagen, tecnologías, descripción y enlaces.
 * Incluye efecto hover con elevación y glow.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, tags, image, liveUrl, repoUrl } = project;

  return (
    <article
      className={cn(
        "group relative rounded-2xl border border-border bg-surface overflow-hidden",
        "transition-all duration-300",
        "hover:border-border-hover hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {/* Imagen del proyecto */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={`Captura de pantalla del proyecto ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay con enlaces al hover */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
              aria-label={`Ver proyecto ${title} en vivo`}
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surface text-foreground rounded-full hover:bg-surface-hover transition-colors border border-border"
              aria-label={`Ver código fuente de ${title}`}
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 md:p-6">
        {/* Tags / Tecnologías */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="primary" size="sm">
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge variant="default" size="sm">
              +{tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Título */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  );
}