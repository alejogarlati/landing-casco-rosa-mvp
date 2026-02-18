"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import {
  Snowflake,
  BookOpen,
  Megaphone,
  CalendarHeart,
  Youtube,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Snowflake,
    title: "Cascos Fríos",
    subtitle: "Tu pelo, tu identidad, tu decisión",
    description:
      "El enfriamiento del cuero cabelludo durante la quimio ayuda a no perder el pelo. Parece algo chiquito, pero para muchas mujeres es enorme: mirarse al espejo y reconocerse. Nosotras luchamos para que más hospitales tengan esta tecnología.",
    detail:
      "Conseguimos donar 2 freezers al Hospital Centro de Salud de Tucumán. Hoy más de 300 pacientes por mes pueden acceder a esta opción.",
    color: "bg-cyan-50 text-cyan-600",
    accentBg: "bg-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Talleres de Bienestar",
    subtitle: "Espacios seguros para sentir, sanar y compartir",
    description:
      "Hacemos talleres de oncofitness, yoga, nutrición, manejo del estrés, autoestima y hasta maquillaje. No son clases — son encuentros donde cada mujer puede soltar, reírse, llorar y sentirse contenida.",
    detail:
      "Cada taller es facilitado por profesionales que entienden que la salud es mucho más que un análisis de sangre.",
    color: "bg-pink-50 text-pink-600",
    accentBg: "bg-pink-500",
  },
  {
    icon: Megaphone,
    title: "Concientización",
    subtitle: "Hablar del tema salva vidas, literal",
    description:
      "Vamos a empresas, escuelas y hacemos campañas en redes para hablar de detección temprana. Una charla puede ser la diferencia entre un diagnóstico a tiempo y uno tardío. Y eso no es un slogan — es real.",
    detail:
      "En octubre (Mes Rosa) intensificamos todo: charlas in-company, contenidos en redes y acciones en la calle.",
    color: "bg-purple-50 text-purple-600",
    accentBg: "bg-purple-500",
  },
  {
    icon: CalendarHeart,
    title: "Eventos Solidarios",
    subtitle: "La excusa perfecta para juntarse y hacer el bien",
    description:
      "Caminatas, carreras, torneos de pádel, bingos y cenas que reúnen a cientos de personas. Es hermoso ver cómo una comunidad entera se mueve para bancar una causa.",
    detail:
      "La Gran Caminata Rosa 2025 reunió a más de 700 personas. Fue uno de los días más emocionantes de nuestra historia.",
    color: "bg-orange-50 text-orange-600",
    accentBg: "bg-orange-500",
  },
  {
    icon: Youtube,
    title: "Contenido Digital",
    subtitle: "Para que la distancia no sea obstáculo",
    description:
      "En 2026 lanzamos nuestro podcast y canal de YouTube: testimonios reales, charlas con especialistas y consejos prácticos. Porque una paciente en Santiago del Estero merece la misma info que una en Buenos Aires.",
    detail:
      "El contenido digital nos permite romper la barrera geográfica y acompañar a mujeres de toda la región del NOA.",
    color: "bg-red-50 text-red-600",
    accentBg: "bg-red-500",
  },
];

export const ServiceDetail = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Lo que hacemos, bien de cerca
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            Cinco cosas concretas que hacen la diferencia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Nada de esto nació en una oficina. Todo surgió de escuchar a las
            pacientes y preguntarnos: ¿qué podemos hacer hoy para que esto sea un poco mejor?
          </p>
        </ScrollAnimation>
      </div>

      <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
        {SERVICES.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <ScrollAnimation key={service.title} delay={index * 0.06}>
              <div
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } gap-6 md:gap-10 items-start p-6 md:p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-100/60 transition-all duration-300`}
              >
                {/* Icon block */}
                <div className="shrink-0">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <ArrowRight
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {service.detail}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </Section>
  );
};
