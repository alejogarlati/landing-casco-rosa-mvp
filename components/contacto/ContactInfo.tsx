"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 9 3815 76-7328",
    href: "tel:+5493815767328",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@elcascorosa.org",
    href: "mailto:contacto@elcascorosa.org",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@elcascorosa",
    href: "https://instagram.com/elcascorosa",
    external: true,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "San Miguel de Tucumán, Argentina",
  },
  {
    icon: Clock,
    label: "Horario de respuesta",
    value: "Lunes a Viernes, dentro de 24hs",
  },
];

export const ContactInfo = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de correo inválido";
    }
    if (!formData.subject.trim()) newErrors.subject = "El asunto es obligatorio";
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field]
        ? "border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:ring-pink-100"
    } focus:outline-none focus:border-primary focus:ring-4 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-white`;

  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <ScrollAnimation className="lg:col-span-2">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                Querés escribirnos?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
                Contanos, te leemos
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Sea lo que sea — una duda, una idea, un pedido de ayuda o
                ganas de sumarte — acá estamos, siempre del otro lado.
              </p>

              <ul className="space-y-5">
                {CONTACT_INFO.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-pink-100 transition-colors">
                          <item.icon
                            className="w-5 h-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-gray-900 font-medium group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                          <item.icon
                            className="w-5 h-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-gray-900 font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* Right — form */}
          <ScrollAnimation delay={0.15} className="lg:col-span-3">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-100/80 border border-gray-100 relative overflow-hidden">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-sm">
                    Gracias por contactarnos. Te responderemos dentro de las
                    próximas 24hs hábiles.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="cursor-pointer"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses("name")}
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-500" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses("email")}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-500" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Asunto
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses("subject")}
                    >
                      <option value="">Seleccioná un tema</option>
                      <option value="donacion">Quiero hacer una donación</option>
                      <option value="voluntariado">Quiero ser voluntaria</option>
                      <option value="empresa">Alianza empresarial</option>
                      <option value="apoyo">Necesito apoyo</option>
                      <option value="prensa">Prensa y medios</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1.5 text-sm text-red-500" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses("message")} resize-none`}
                      placeholder="Contanos cómo podemos ayudarte o cómo querés sumarte..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Section>
  );
};
