"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Dumbbell, Palette, Brain, Salad, Music, Camera } from "lucide-react";

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "Oncofitness",
    description: "Mover el cuerpo cuando más lo necesitás, adaptado a lo que estés viviendo.",
    tag: "Taller",
  },
  {
    icon: Palette,
    title: "Arte & Expresión",
    description: "Pintar, escribir, crear. A veces el arte dice lo que las palabras no pueden.",
    tag: "Taller",
  },
  {
    icon: Brain,
    title: "Mindfulness",
    description: "Respirar, soltar, encontrar un rato de paz en medio del huracán.",
    tag: "Taller",
  },
  {
    icon: Salad,
    title: "Nutrición Oncológica",
    description: "Qué comer, qué evitar, cómo sentirte mejor durante y después del tratamiento.",
    tag: "Charla",
  },
  {
    icon: Music,
    title: "Musicoterapia",
    description: "La música como refugio, como sanación, como forma de conectar con otras.",
    tag: "Taller",
  },
  {
    icon: Camera,
    title: "Belleza & Autoestima",
    description: "Maquillaje, cuidado de la piel y técnicas para volverte a sentir vos.",
    tag: "Taller",
  },
];

export const ProgramsGrid = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Talleres abiertos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            Espacios donde se puede ser vulnerable y eso está bien
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada taller lo pensamos junto a profesionales, pero lo llenamos de
            humanidad. Acá no hay caretas.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-5xl mx-auto">
        {PROGRAMS.map((program, index) => (
          <ScrollAnimation key={program.title} delay={index * 0.07}>
            <div className="group relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-pink-200 hover:shadow-lg transition-all duration-300 h-full flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <program.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-gray-900 font-display">
                    {program.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-pink-50 px-2 py-0.5 rounded-full">
                    {program.tag}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
