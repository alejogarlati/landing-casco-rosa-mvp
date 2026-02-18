"use client";

import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Users, Heart, Award, Star } from "lucide-react";

const TEAM = [
  {
    name: "Fundadoras",
    role: "Pacientes que dijeron basta",
    description:
      "Mujeres que convirtieron su tratamiento en misión de vida. Lideran con el ejemplo, la cercanía y un mate siempre listo.",
    icon: Heart,
    accent: "from-pink-400 to-rose-500",
  },
  {
    name: "Voluntarias",
    role: "El motor de todo esto",
    description:
      "Más de 30 personas que donan su tiempo, su talento y su cariño. Sin ellas, nada de esto sería posible.",
    icon: Users,
    accent: "from-purple-400 to-violet-500",
  },
  {
    name: "Profesionales",
    role: "Ciencia con calidez humana",
    description:
      "Médicos, psicólogos y nutricionistas que no solo saben — también sienten. Atienden desde la ciencia y desde el corazón.",
    icon: Award,
    accent: "from-blue-400 to-cyan-500",
  },
  {
    name: "Embajadoras",
    role: "Voces que ya transitaron el camino",
    description:
      "Mujeres que ya salieron del otro lado y hoy comparten su experiencia para alentar a quienes recién arrancan.",
    icon: Star,
    accent: "from-amber-400 to-orange-500",
  },
];

export const TeamSection = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Las personas detrás
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            Somos gente común haciendo cosas extraordinarias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            No tenemos capa ni superpoderes. Tenemos ganas, convicción y una
            causa que nos une cada mañana.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {TEAM.map((member, index) => (
          <ScrollAnimation key={member.name} delay={index * 0.1}>
            <div className="group h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300">
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${member.accent}`}
                aria-hidden="true"
              />
              <div className="p-6 md:p-7 flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.accent} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                >
                  <member.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-display">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
