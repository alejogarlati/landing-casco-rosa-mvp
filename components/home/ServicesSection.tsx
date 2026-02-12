"use client";

import {
  Snowflake,
  BookOpen,
  Megaphone,
  CalendarHeart,
  Youtube,
} from "lucide-react";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";

const SERVICES = [
  {
    icon: Snowflake,
    title: "Cascos Fríos",
    description:
      "Difusión y acompañamiento en el uso de cascos fríos para preservar el cabello durante la quimioterapia, cuidando la autoestima de cada mujer.",
    color: "bg-cyan-50 text-cyan-600",
    hoverBorder: "hover:border-cyan-200",
  },
  {
    icon: BookOpen,
    title: "Talleres",
    description:
      "Espacios de aprendizaje y bienestar pensados para el cuerpo, la mente y las emociones de las pacientes.",
    color: "bg-pink-50 text-pink-600",
    hoverBorder: "hover:border-pink-200",
  },
  {
    icon: Megaphone,
    title: "Concientización",
    description:
      "Jornadas en empresas, campañas en medios y redes para educar sobre la importancia de la detección temprana.",
    color: "bg-purple-50 text-purple-600",
    hoverBorder: "hover:border-purple-200",
  },
  {
    icon: CalendarHeart,
    title: "Eventos Solidarios",
    description:
      "Caminatas, carreras y actividades recreativas que unen a la comunidad en torno a la causa rosa.",
    color: "bg-orange-50 text-orange-600",
    hoverBorder: "hover:border-orange-200",
  },
  {
    icon: Youtube,
    title: "Contenido Digital",
    description:
      "Podcast y canal de YouTube con testimonios reales, entrevistas a especialistas y educación continua (2026).",
    color: "bg-red-50 text-red-600",
    hoverBorder: "hover:border-red-200",
  },
];

export const ServicesSection = () => {
  return (
    <Section id="servicios" className="bg-white">
      <div className="text-center mb-16">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Nuestros Pilares
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            ¿Qué hacemos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Desplegamos acciones concretas para mejorar la calidad de vida de
            las pacientes y generar conciencia en la sociedad.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((item, index) => (
          <ScrollAnimation key={item.title} delay={index * 0.08}>
            <div
              className={`group p-6 md:p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col items-start text-left ${item.hoverBorder}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                aria-hidden="true"
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
