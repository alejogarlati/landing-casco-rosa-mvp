"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Search, HandHeart, Stethoscope, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Escuchamos",
    description:
      "Hablamos con pacientes, familias y profesionales. Preguntamos qué les falta, qué les duele, qué necesitan y nadie les da.",
  },
  {
    number: "02",
    icon: HandHeart,
    title: "Diseñamos juntas",
    description:
      "Armamos programas a medida de lo que escuchamos. No copiamos recetas — creamos soluciones para nuestra gente.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Lo hacemos en equipo",
    description:
      "Sumamos hospitales, empresas y voluntarias. Porque solitas no llegamos — pero juntas, llegamos lejos.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Medimos y mejoramos",
    description:
      "Cada acción la documentamos. No para un informe bonito, sino para saber qué funciona y qué podemos hacer mejor la próxima vez.",
  },
];

export const ProcessSection = () => {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Así trabajamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            No improvisamos, pero sí ponemos el corazón
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Tenemos método, pero también mucho feeling. Cada programa sigue
            un proceso que asegura que la ayuda llegue a quien la necesita.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {STEPS.map((step, index) => (
          <ScrollAnimation key={step.number} delay={index * 0.1}>
            <div className="relative group p-6 md:p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-pink-100/40 transition-all duration-300 h-full flex flex-col text-center">
              {/* Step number */}
              <span className="text-5xl font-bold text-gray-100 font-display absolute top-4 right-5 select-none group-hover:text-pink-100 transition-colors duration-300">
                {step.number}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 font-display relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
