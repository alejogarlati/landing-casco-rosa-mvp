"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";

const MILESTONES = [
  {
    year: "2022",
    title: "La semilla",
    description:
      "Un grupo de pacientes y voluntarias se juntó en una sala de espera y dijo: 'tiene que haber algo mejor que esto'. Ahí nació todo.",
    accent: "bg-pink-500",
  },
  {
    year: "2023",
    title: "Se armó la fundación",
    description:
      "Nos pusimos el traje legal, organizamos nuestra primera Caminata Rosa con más de 200 personas y arrancamos los talleres que hoy son nuestro corazón.",
    accent: "bg-rose-500",
  },
  {
    year: "2024",
    title: "Los cascos fríos llegaron",
    description:
      "Conseguimos algo que parecía imposible: traer los cascos fríos al hospital público. Ese año acompañamos a más de 100 mujeres.",
    accent: "bg-purple-500",
  },
  {
    year: "2025",
    title: "El año que explotó todo (para bien)",
    description:
      "La Caminata Rosa reunió a 700 personas. Lanzamos el programa para empresas. Donamos 2 freezers al Hospital Centro de Salud. Y lloramos de emoción más de una vez.",
    accent: "bg-primary",
  },
  {
    year: "2026",
    title: "Lo que viene",
    description:
      "Podcast, YouTube, nuevas alianzas y la meta que nos quita el sueño: llevar los cascos fríos a todo el NOA. Esto recién empieza.",
    accent: "bg-blue-500",
  },
];

export const StoryTimeline = () => {
  return (
    <Section className="bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Nuestro camino
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            De una sala de espera a un movimiento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada año sumamos más voces, más acciones y más razones para seguir.
            Y todavía nos cuesta creer todo lo que logramos.
          </p>
        </ScrollAnimation>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-14">
            {MILESTONES.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ScrollAnimation key={milestone.year} delay={index * 0.08}>
                  <div className="relative flex items-start md:items-center">
                    {/* Dot */}
                    <div
                      className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full ${milestone.accent} -translate-x-1/2 z-10 ring-4 ring-white shadow-md`}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        isLeft
                          ? "md:mr-auto md:pr-8 md:text-right"
                          : "md:ml-auto md:pl-8 md:text-left"
                      }`}
                    >
                      <div className="bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${milestone.accent} mb-3`}
                        >
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
