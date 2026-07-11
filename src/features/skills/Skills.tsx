import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/data/skills";
import { cn } from "@/utils/cn";
import type { Skill } from "@/types";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

const categories = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Herramientas" },
  { id: "design", label: "Diseño" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <Section
      id="skills"
      title="Habilidades"
      subtitle="Tecnologías y herramientas con las que trabajo"
    >
      {/* Filtros */}
      <FadeIn direction="up">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                activeCategory === category.id
                  ? "bg-primary border-primary text-white"
                  : "bg-surface border-border text-muted-foreground hover:border-border-hover hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid de skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, index) => (
          <FadeIn
            key={skill.id}
            direction="up"
            delay={index * 0.05}
            className="h-full"
          >
            <SkillCard skill={skill} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/**
 * Tarjeta individual de habilidad con ícono, nombre y barra de nivel.
 */
function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-border-hover hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      {/* Ícono */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color || "var(--color-muted-foreground)" }}
      >
        <DynamicIcon icon={skill.icon} size={28} color={skill.color} />
      </div>

      {/* Nombre */}
      <span className="text-sm font-medium text-foreground text-center leading-tight">
        {skill.name}
      </span>

      {/* Barra de nivel */}
      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {/* Categoría */}
      <Badge variant="default" size="sm">
        {skill.category}
      </Badge>
    </div>
  );
}