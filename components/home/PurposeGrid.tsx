import { ShieldCheck, Users, HeartHandshake } from "lucide-react";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";

const PURPOSES = [
  {
    icon: ShieldCheck,
    title: "Prevención",
    description:
      "Fomentamos la detección temprana a través de campañas educativas y acceso a estudios preventivos para salvar vidas a tiempo.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento",
    description:
      "Brindamos soporte emocional y psicológico personalizado para pacientes y familiares durante todo el proceso de tratamiento.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Creamos espacios seguros de contención donde compartir experiencias fortalece el espíritu y recordamos que nadie lucha sola.",
    color: "bg-purple-50 text-purple-600",
  },
];

export const PurposeGrid = () => {
  return (
    <Section id="proposito" className="bg-white">
      <div className="text-center mb-16">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Propósito
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Abordamos el cáncer de mama desde una perspectiva integral, cuidando
            el cuerpo, la mente y el corazón.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PURPOSES.map((item, index) => (
          <ScrollAnimation key={item.title} delay={index * 0.1}>
            <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-pink-100 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
