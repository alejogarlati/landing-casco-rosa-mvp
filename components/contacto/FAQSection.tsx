"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "¿Cómo puedo hacer una donación?",
    answer:
      "Podés donar desde nuestra página principal eligiendo el monto que desees. El proceso es seguro y simple. Si preferís hacer una transferencia directa, escribinos y te compartimos los datos. Todas las donaciones son deducibles del Impuesto a las Ganancias y te enviamos tu certificado.",
  },
  {
    question: "¿Cómo funcionan los cascos fríos?",
    answer:
      "El enfriamiento del cuero cabelludo es una técnica que reduce la pérdida de cabello durante la quimioterapia. Se colocan antes, durante y después de cada sesión. No es compatible con todos los tratamientos, pero cuando funciona, marca una diferencia enorme en la autoestima de las pacientes. Nosotras te acompañamos y asesoramos en cada paso.",
  },
  {
    question: "Quiero ser voluntaria, ¿necesito experiencia?",
    answer:
      "No, para nada. Lo más importante es el compromiso y las ganas de acompañar. Contamos con voluntarias de todos los perfiles: profesionales de la salud, estudiantes y personas que simplemente quieren sumar desde su lugar. Cada una aporta algo valioso.",
  },
  {
    question: "¿Cómo puede participar mi empresa?",
    answer:
      "A través de nuestro programa Aliados con Impacto, tu empresa recibe visibilidad en eventos y redes, una charla de concientización para el equipo — ideal para octubre, el Mes Rosa —, y un reporte personalizado de impacto. La donación es 100% deducible. Es responsabilidad social con resultados concretos.",
  },
  {
    question: "¿Solo trabajan en Tucumán?",
    answer:
      "Nuestras acciones presenciales se concentran en Tucumán, pero a través de redes sociales, podcast y YouTube llegamos a todo el NOA y más allá. Creemos que la distancia no debería ser un obstáculo para acceder a información y contención de calidad.",
  },
  {
    question: "¿Puedo participar de un taller si no tengo diagnóstico?",
    answer:
      "Muchos de nuestros talleres también están abiertos a familiares y personas cercanas a pacientes, porque sabemos que el cáncer impacta en todo el entorno. Contactanos y te contamos cuáles están disponibles para vos.",
  },
  {
    question: "¿Cómo puedo saber que mi donación se usa correctamente?",
    answer:
      "Publicamos un reporte anual de impacto abierto a toda la comunidad. Además, documentamos todas nuestras actividades en redes sociales para que puedas ver en tiempo real adónde van los recursos. La transparencia es un compromiso central para nosotras.",
  },
  {
    question: "¿Organizan actividades durante todo el año?",
    answer:
      "Sí. Nuestra agenda anual incluye acciones en febrero (Día Mundial contra el Cáncer), marzo (Mes de la Mujer), julio (Bingo Solidario), octubre (la Gran Caminata Rosa y campañas de concientización) y diciembre (Cena de Fin de Año). Siempre hay una forma de sumarse.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <ScrollAnimation>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
              Todo lo que necesitás saber
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Estas son las consultas que más recibimos. Si la tuya no está acá,
              escribinos y te respondemos con gusto.
            </p>
          </ScrollAnimation>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollAnimation key={index} delay={index * 0.04}>
                <div
                  className={`rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-pink-200 bg-white shadow-md shadow-pink-100/40"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => !isOpen && setOpenIndex(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={`font-semibold text-[15px] md:text-base pr-4 transition-colors ${
                        isOpen ? "text-primary" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 ${
                          isOpen ? "text-primary" : "text-gray-400"
                        }`}
                        aria-hidden="true"
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <p className="text-gray-600 leading-relaxed text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
