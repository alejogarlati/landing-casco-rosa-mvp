import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Calendar as CalendarIcon, Sparkles } from "lucide-react";

const EVENTS = [
  {
    month: "Feb",
    title: "Día Mundial contra el Cáncer",
    description: "Lanzamiento de video campaña de concientización.",
    accent: "bg-blue-500",
  },
  {
    month: "Mar",
    title: "Mes de la Mujer",
    description: "Torneo de pádel y talleres especiales para mujeres.",
    accent: "bg-pink-400",
  },
  {
    month: "Jul",
    title: "Té Bingo Solidario",
    description: "Tarde de juegos, premios y gran subasta a beneficio.",
    accent: "bg-purple-500",
  },
  {
    month: "Oct",
    title: "Mes Rosa",
    description: "Gran Caminata Rosa y ciclo de charlas en empresas.",
    accent: "bg-primary",
    highlight: true,
  },
  {
    month: "Dic",
    title: "Cena Fin de Año",
    description: "Celebración de logros y agradecimiento a la comunidad.",
    accent: "bg-amber-500",
  },
];

export const Calendar2026 = () => {
  return (
    <Section id="agenda" className="bg-gray-50">
      <div className="text-center mb-12 md:mb-16">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Próximos Eventos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display mb-4">
            Agenda 2026
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Súmate a nuestras próximas actividades y sé parte del cambio.
          </p>
        </ScrollAnimation>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {EVENTS.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ScrollAnimation key={index} delay={index * 0.08}>
                  <div className="relative flex items-start md:items-center">
                    {/* Dot */}
                    <div
                      className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full ${event.accent} -translate-x-1/2 z-10 ring-4 ring-white`}
                      aria-hidden="true"
                    />

                    {/* Content — mobile: always right, desktop: alternating */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft
                          ? "md:mr-auto md:pr-8 md:text-right"
                          : "md:ml-auto md:pl-8 md:text-left"
                      }`}
                    >
                      <div className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${event.accent}`}
                            aria-hidden="true"
                          />
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            {event.month} 2026
                          </span>
                          {event.highlight && (
                            <Sparkles
                              className="w-3.5 h-3.5 text-primary"
                              aria-label="Evento destacado"
                            />
                          )}
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 leading-snug">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {event.description}
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

      {/* Footer note */}
      <ScrollAnimation>
        <div className="flex items-center justify-center gap-2 mt-12 text-sm font-medium text-gray-400">
          <CalendarIcon className="w-4 h-4" aria-hidden="true" />
          <span>Calendario sujeto a actualizaciones</span>
        </div>
      </ScrollAnimation>
    </Section>
  );
};
