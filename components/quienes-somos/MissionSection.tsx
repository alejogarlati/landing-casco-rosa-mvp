"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Target, Eye } from "lucide-react";

export const MissionSection = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* Mission */}
        <ScrollAnimation>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-50 rounded-3xl -z-10" aria-hidden="true" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Nuestra Misión
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 font-display leading-snug">
              Que ninguna mujer transite el cáncer sintiéndose sola
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Estamos ahí desde el momento del diagnóstico — con un abrazo, con información clara,
              con los recursos que el sistema de salud muchas veces no cubre. Porque sabemos
              lo que se siente, lo vivimos en carne propia.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Nos conectamos con hospitales, profesionales de la salud y empresas que ponen
              el corazón. Juntas, armamos una red que sostiene de verdad.
            </p>
          </div>
        </ScrollAnimation>

        {/* Vision */}
        <ScrollAnimation delay={0.15}>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-50 rounded-3xl -z-10" aria-hidden="true" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" aria-hidden="true" />
              </div>
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
                Lo que soñamos
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 font-display leading-snug">
              Un norte argentino donde el cáncer no te aísle ni te deje sin opciones
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Imaginamos un futuro donde cada paciente pueda acceder a tratamientos dignos,
              a información certera y a gente que la banque. Y trabajamos todos los días
              para que eso deje de ser un sueño.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Estamos convencidas de que cuando la comunidad se mueve con humanidad,
              la experiencia del cáncer cambia por completo.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Section>
  );
};
