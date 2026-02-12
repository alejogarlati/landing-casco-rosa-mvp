"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Users, Snowflake, Trophy } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  sublabel?: string;
  icon?: React.ComponentType<{ className?: string }>;
  suffix?: string;
}

const Counter = ({
  end,
  duration = 2000,
  label,
  sublabel,
  icon: Icon,
  suffix = "+",
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div
      ref={ref}
      className="text-center p-6 md:p-10 bg-white/10 rounded-2xl backdrop-blur-md border border-white/15"
    >
      {Icon && (
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-pink-200" aria-hidden="true" />
          </div>
        </div>
      )}
      <div
        className="text-5xl md:text-6xl font-bold text-white mb-3 font-display tabular-nums"
        aria-label={`${end}${suffix} ${label}`}
      >
        {count}
        {suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1">{label}</div>
      {sublabel && (
        <div className="text-pink-100/70 text-sm leading-relaxed max-w-[220px] mx-auto">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export const ImpactSection = () => {
  return (
    <Section
      id="impacto"
      className="bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-pink-950/40 to-gray-900" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <ScrollAnimation>
            <span className="text-pink-300 font-semibold tracking-wider uppercase text-sm mb-3 block">
              Nuestro Impacto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display text-white">
              Números que transforman vidas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Detrás de cada cifra hay una mujer que fue acompañada, una familia
              que encontró contención y una comunidad que se hizo más fuerte.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <ScrollAnimation delay={0}>
            <Counter
              end={300}
              label="Pacientes por Mes"
              sublabel="Beneficiadas por la donación de 2 freezers"
              icon={Snowflake}
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <Counter
              end={100}
              label="Pacientes por Año"
              sublabel="Acompañadas de forma personalizada"
              icon={Users}
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <Counter
              end={700}
              label="Participantes"
              sublabel="En eventos solidarios durante 2025"
              icon={Trophy}
            />
          </ScrollAnimation>
        </div>
      </div>
    </Section>
  );
};
