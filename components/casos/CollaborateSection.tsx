"use client";

import Link from "next/link";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Button } from "../ui/Button";
import { Heart, Users, Building2, Megaphone, ArrowRight } from "lucide-react";

const WAYS = [
  {
    icon: Heart,
    title: "Doná",
    description:
      "No hace falta que sea mucho. Con lo que puedas, financiás cascos fríos, talleres y el acompañamiento diario de cientos de mujeres. Cada peso tiene nombre y destino.",
    cta: { label: "Quiero donar", href: "/#hero" },
    accent: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Sé voluntaria",
    description:
      "¿Tenés un rato libre y ganas de sumar? Necesitamos manos para organizar eventos, caras amigables para los talleres y corazones dispuestos a escuchar.",
    cta: { label: "Quiero ayudar", href: "/contacto" },
    accent: "from-purple-500 to-violet-500",
  },
  {
    icon: Building2,
    title: "Sumá a tu empresa",
    description:
      "Tu empresa puede ser parte del programa Aliados con Impacto. RSE de verdad, con impacto que se mide, se siente y se puede contar.",
    cta: { label: "Quiero saber más", href: "/contacto" },
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: Megaphone,
    title: "Corré la voz",
    description:
      "A veces lo más poderoso es compartir un posteo, invitar a una amiga a un evento o contar nuestra historia. La visibilidad salva vidas, literal.",
    cta: { label: "Seguinos en IG", href: "https://instagram.com/elcascorosa" },
    accent: "from-orange-500 to-amber-500",
  },
];

export const CollaborateSection = () => {
  return (
    <Section className="bg-gradient-to-b from-white via-pink-50/20 to-white">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Sumarse es fácil
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            Hay mil formas de ser parte (elegí la tuya)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            No te pedimos que cambies el mundo. Te pedimos que hagas un poquito
            por alguien que hoy lo necesita mucho.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {WAYS.map((way, index) => (
          <ScrollAnimation key={way.title} delay={index * 0.1}>
            <div className="group h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300">
              {/* Gradient header */}
              <div
                className={`h-2 bg-gradient-to-r ${way.accent}`}
                aria-hidden="true"
              />
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${way.accent} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                >
                  <way.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  {way.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {way.description}
                </p>
                <Link href={way.cta.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:bg-pink-50 gap-2 cursor-pointer"
                  >
                    {way.cta.label}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  );
};
