import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import {
  CheckCircle2,
  TrendingUp,
  Building2,
  Handshake,
  Quote,
} from "lucide-react";

const BENEFITS = [
  {
    text: "100% deducible del Impuesto a las Ganancias",
    icon: TrendingUp,
  },
  {
    text: "Logo en redes sociales (Instagram y Facebook)",
    icon: CheckCircle2,
  },
  {
    text: "Mención en eventos, talleres y podcast",
    icon: CheckCircle2,
  },
  {
    text: "Charla de concientización in-company (Octubre)",
    icon: Building2,
  },
  {
    text: "Reporte anual de impacto personalizado",
    icon: CheckCircle2,
  },
];

export const CorporateProgram = () => {
  return (
    <Section
      id="empresas"
      className="bg-gradient-to-b from-white via-pink-50/30 to-white"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollAnimation>
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-pink-50 border border-pink-100 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <Handshake className="w-4 h-4" />
            Para Empresas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
            Programa{" "}
            <span className="text-primary">Aliados con Impacto</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Transformen su compromiso social en acciones concretas. Únanse a
            nuestra red de empresas que eligen marcar la diferencia en la vida
            de cientos de mujeres.
          </p>
        </ScrollAnimation>
      </div>

      {/* Inspirational quote */}
      <ScrollAnimation>
        <div className="relative max-w-3xl mx-auto mb-16 px-4">
          <Quote className="w-10 h-10 text-pink-200 absolute -top-2 -left-2 md:left-0" />
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed pl-6 md:pl-0">
              &ldquo;Cuando una empresa se suma, no solo dona recursos: regala
              esperanza a una mujer que está luchando.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-gray-500 font-medium">
              — Fundación El Casco Rosa
            </footer>
          </blockquote>
        </div>
      </ScrollAnimation>

      {/* Main card */}
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
            {/* Card header */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 md:p-8 text-white text-center">
              <p className="text-pink-100 text-sm font-medium uppercase tracking-wider mb-2">
                Donación mensual sugerida
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-5xl font-bold font-display">
                  $100.000
                </span>
                <span className="text-pink-200 text-lg font-medium">/ mes</span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 md:p-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                ¿Qué recibe tu empresa?
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {BENEFITS.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                      <benefit.icon className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-sm md:text-base leading-relaxed">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto px-10 text-lg">
                  Quiero ser Aliado
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-10 text-lg"
                >
                  Solicitar más info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Section>
  );
};
