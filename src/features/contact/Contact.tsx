import { useState, type FormEvent } from "react";
import { FiMail, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { personalInfo, socialLinks } from "@/data/social";
import { cn } from "@/utils/cn";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqgrggd";

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} desde tu portfolio`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === "error" || status === "success") {
      setStatus("idle");
    }
  };

  const emailLink = socialLinks.find((s) => s.id === "email");
  const linkedinLink = socialLinks.find((s) => s.id === "linkedin");
  const githubLink = socialLinks.find((s) => s.id === "github");

  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="¿Tienes un proyecto en mente? Hablemos"
      compact
    >
      <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
        {/* Formulario */}
        <FadeIn direction="left" className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Tu nombre"
                className={cn(
                  "w-full h-11 px-4 rounded-lg bg-surface border text-sm text-foreground placeholder:text-muted-foreground/50",
                  "transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                  errors.name
                    ? "border-error"
                    : "border-border hover:border-border-hover"
                )}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-error flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="tu@email.com"
                className={cn(
                  "w-full h-11 px-4 rounded-lg bg-surface border text-sm text-foreground placeholder:text-muted-foreground/50",
                  "transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                  errors.email
                    ? "border-error"
                    : "border-border hover:border-border-hover"
                )}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-error flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Cuéntame sobre tu proyecto..."
                className={cn(
                  "w-full px-4 py-3 rounded-lg bg-surface border text-sm text-foreground placeholder:text-muted-foreground/50 resize-none",
                  "transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                  errors.message
                    ? "border-error"
                    : "border-border hover:border-border-hover"
                )}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-error flex items-center gap-1">
                  <FiAlertCircle size={12} />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Botón submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : status === "success" ? (
                <>
                  <FiCheck size={18} />
                  ¡Mensaje enviado!
                </>
              ) : (
                <>
                  <FiSend size={18} />
                  Enviar mensaje
                </>
              )}
            </Button>

            {status === "error" && (
              <p className="text-sm text-error text-center flex items-center justify-center gap-1">
                <FiAlertCircle size={14} />
                Hubo un error al enviar. Intenta de nuevo.
              </p>
            )}
          </form>
        </FadeIn>

        {/* Info de contacto alternativa */}
        <FadeIn direction="right" delay={0.1} className="md:col-span-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contacto directo
              </h3>
              <div className="space-y-3">
                {emailLink && (
                  <a
                    href={emailLink.url}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border hover:border-border-hover transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-xs text-muted-foreground">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>
                )}
                {linkedinLink && (
                  <a
                    href={linkedinLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border hover:border-border-hover transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">
                        Conectemos profesionalmente
                      </p>
                    </div>
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border hover:border-border-hover transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">GitHub</p>
                      <p className="text-xs text-muted-foreground">
                        Mira mi código
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="p-4 rounded-lg bg-surface border border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Disponible para proyectos
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Actualmente abierto a oportunidades freelance y colaboraciones.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}