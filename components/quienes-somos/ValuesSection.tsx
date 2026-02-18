"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Heart, Handshake, Lightbulb, Shield, Sparkles } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Empatía",
    description:
      "No decimos 'te entiendo' por decir. Lo sentimos porque muchas de nosotras ya pasamos por ahí. Escuchamos sin juzgar, abrazamos sin preguntar.",
    color: "bg-pink-50 text-pink-600",
    border: "hover:border-pink-200",
    glow: "group-hover:shadow-pink-100/60",
  },
  {
    icon: Handshake,
    title: "Solidaridad",
    description:
      "Creemos que juntas somos más fuertes. Conectamos a quienes necesitan ayuda con quienes quieren darla — y eso nos cambia a todas.",
    color: "bg-orange-50 text-orange-600",
    border: "hover:border-orange-200",
    glow: "group-hover:shadow-orange-100/60",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description:
      "Cada peso que nos donan tiene nombre y destino. Rendimos cuentas porque la confianza no se pide, se demuestra con hechos.",
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
    glow: "group-hover:shadow-blue-100/60",
  },
  {
    icon: Lightbulb,
    title: "Creatividad",
    description:
      "¿Cascos fríos? ¿Podcast? ¿Torneos de pádel solidarios? Si funciona, lo hacemos. Siempre buscamos formas nuevas de llegar y de ayudar.",
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
    glow: "group-hover:shadow-emerald-100/60",
  },
  {
    icon: Sparkles,
    title: "Esperanza",
    description:
      "El diagnóstico no define tu final. Nosotras lo sabemos porque lo vivimos. Y por eso acompañamos cada etapa con la certeza de que hay luz adelante.",
    color: "bg-purple-50 text-purple-600",
    border: "hover:border-purple-200",
    glow: "group-hover:shadow-purple-100/60",
  },
];

export const ValuesSection = () => {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Lo que nos mueve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            No son frases en un cuadro, son cómo vivimos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Estos valores no los escribimos en un documento — los aprendimos
            en consultorios, en talleres y en las miles de horas de escucha.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {VALUES.map((value, index) => (
          <ScrollAnimation key={value.title} delay={index * 0.08}>
            <div
              className={`group p-7 md:p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start text-left ${value.border} ${value.glow}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                aria-hidden="true"
              >
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {value.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
