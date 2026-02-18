"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "El día que me diagnosticaron pensé que se terminaba todo. Pero las chicas de El Casco Rosa aparecieron con mate, con info, con abrazos. No me curaron, pero me sostuvieron. Y eso hizo toda la diferencia.",
    name: "María L.",
    role: "Paciente acompañada, 2024",
    accent: "border-pink-300",
  },
  {
    quote:
      "Con los cascos fríos no perdí todo el pelo. La gente cree que es superficial, pero para mí fue poder mirarme al espejo y decir 'sigo siendo yo'. Eso me dio fuerzas para bancar la quimio.",
    name: "Soledad R.",
    role: "Paciente, programa Cascos Fríos",
    accent: "border-purple-300",
  },
  {
    quote:
      "Arranqué como voluntaria llevando medialunas a un taller. Hoy organizo eventos para 700 personas. La energía de estas mujeres te atrapa y no te la sacás más de encima.",
    name: "Carolina M.",
    role: "Voluntaria desde 2023",
    accent: "border-blue-300",
  },
  {
    quote:
      "Como oncólogo veo pacientes todos los días. Pero lo que El Casco Rosa les da va más allá de lo que cualquier consultorio puede dar. Les da ganas. Y las ganas, a veces, son la mejor medicina.",
    name: "Dr. Alejandro P.",
    role: "Oncólogo, Hospital Centro de Salud",
    accent: "border-emerald-300",
  },
  {
    quote:
      "Buscábamos algo más que poner nuestro logo en un folleto. Con El Casco Rosa encontramos una causa real, con impacto que se mide y gente que lo vive. No hay RSE más honesta que esta.",
    name: "Empresa Aliada",
    role: "Programa Aliados con Impacto",
    accent: "border-orange-300",
  },
  {
    quote:
      "Después del tratamiento me prometí que iba a devolver lo que recibí. Si mi historia hace que una sola mujer se haga la mamografía, todo valió la pena. Todo.",
    name: "Luciana G.",
    role: "Embajadora y sobreviviente",
    accent: "border-rose-300",
  },
];

export const TestimonialsSection = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            En sus palabras
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            Historias que merecen ser escuchadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            No las editamos, no las adornamos. Son las voces reales de quienes
            vivieron en carne propia lo que hacemos.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <ScrollAnimation key={index} delay={index * 0.08}>
            <div
              className={`group relative p-6 md:p-7 rounded-2xl bg-white border-l-4 ${testimonial.accent} border border-gray-100 hover:shadow-xl hover:shadow-gray-100/60 transition-all duration-300 h-full flex flex-col`}
            >
              <Quote
                className="w-8 h-8 text-gray-100 mb-4 group-hover:text-pink-100 transition-colors duration-300"
                aria-hidden="true"
              />
              <blockquote className="text-gray-700 leading-relaxed text-[15px] mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t border-gray-50 pt-4">
                <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
