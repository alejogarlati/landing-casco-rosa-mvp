"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Users, Snowflake, Trophy, Heart, CalendarDays, Building2 } from "lucide-react";

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const AnimatedStat = ({ end, suffix = "+", label, sublabel, icon: Icon }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="text-center p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-pink-100/30 transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
      </div>
      <div
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-display tabular-nums"
        aria-label={`${end}${suffix} ${label}`}
      >
        {count}
        {suffix}
      </div>
      <div className="text-gray-900 font-semibold text-sm mb-1">{label}</div>
      <p className="text-gray-500 text-xs leading-relaxed">{sublabel}</p>
    </div>
  );
};

export const ImpactNumbers = () => {
  return (
    <Section className="bg-gray-50">
      <div className="text-center mb-14">
        <ScrollAnimation>
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Lo concreto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-display">
            Números que cuentan historias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada cifra es una persona, un abrazo, un momento que cambió para
            siempre. Y nos emociona poder compartirlo.
          </p>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
        <ScrollAnimation delay={0}>
          <AnimatedStat
            end={300}
            label="Pacientes / Mes"
            sublabel="Beneficiadas por cascos fríos en el hospital"
            icon={Snowflake}
          />
        </ScrollAnimation>
        <ScrollAnimation delay={0.08}>
          <AnimatedStat
            end={100}
            label="Acompañadas / Año"
            sublabel="Pacientes con seguimiento personalizado"
            icon={Users}
          />
        </ScrollAnimation>
        <ScrollAnimation delay={0.16}>
          <AnimatedStat
            end={700}
            label="Participantes"
            sublabel="En la Gran Caminata Rosa 2025"
            icon={Trophy}
          />
        </ScrollAnimation>
        <ScrollAnimation delay={0.24}>
          <AnimatedStat
            end={30}
            label="Voluntarias"
            sublabel="Activas en los programas de la fundación"
            icon={Heart}
          />
        </ScrollAnimation>
        <ScrollAnimation delay={0.32}>
          <AnimatedStat
            end={50}
            label="Eventos"
            sublabel="Realizados desde la fundación de la ONG"
            icon={CalendarDays}
          />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <AnimatedStat
            end={15}
            label="Empresas Aliadas"
            sublabel="En el programa Aliados con Impacto"
            icon={Building2}
          />
        </ScrollAnimation>
      </div>
    </Section>
  );
};
