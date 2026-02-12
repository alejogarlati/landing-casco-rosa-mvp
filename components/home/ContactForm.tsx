"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";

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

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de correo inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Section id="contacto" className="bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column: info */}
          <ScrollAnimation className="lg:col-span-2">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                Contacto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
                Hablemos
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                ¿Querés colaborar, necesitás apoyo o simplemente tenés una
                pregunta? Estamos para escucharte.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Respuesta rápida
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Respondemos todos los mensajes dentro de las 24 horas
                      hábiles.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">
                    También podés escribirnos a
                  </p>
                  <a
                    href="mailto:contacto@elcascorosa.org"
                    className="text-primary font-medium hover:text-accent transition-colors"
                  >
                    contacto@elcascorosa.org
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right column: form */}
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
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name
                          ? "border-red-400 focus:ring-red-100"
                          : "border-gray-200 focus:ring-pink-100"
                      } focus:outline-none focus:border-primary focus:ring-4 transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
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
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email
                          ? "border-red-400 focus:ring-red-100"
                          : "border-gray-200 focus:ring-pink-100"
                      } focus:outline-none focus:border-primary focus:ring-4 transition-all duration-200 text-gray-900 placeholder:text-gray-400`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message
                          ? "border-red-400 focus:ring-red-100"
                          : "border-gray-200 focus:ring-pink-100"
                      } focus:outline-none focus:border-primary focus:ring-4 transition-all duration-200 resize-none text-gray-900 placeholder:text-gray-400`}
                      placeholder="¿Cómo podemos ayudarte?"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
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
