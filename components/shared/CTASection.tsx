"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Section } from "../ui/Section";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { Button } from "../ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export const CTASection = ({
  title = "Con vos, todo cambia",
  description = "No importa si es con plata, con tiempo o con una palabra de aliento. Cada gesto que hacés le dice a una mujer que no está sola.",
  primaryCTA = { label: "Donar ahora", href: "/#hero" },
  secondaryCTA = { label: "Contactanos", href: "/contacto" },
}: CTASectionProps) => {
  return (
    <Section className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-pink-950/40 to-gray-900"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <ScrollAnimation>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8">
            <Heart className="w-4 h-4 text-pink-300 fill-pink-300" aria-hidden="true" />
            <span className="text-sm font-medium text-white/80">
              Cada gesto cuenta
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display leading-tight">
            {title}
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.15}>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {description}
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryCTA.href}>
              <Button
                size="lg"
                className="px-10 text-lg shadow-xl shadow-pink-500/20 cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white mr-2" aria-hidden="true" />
                {primaryCTA.label}
              </Button>
            </Link>
            <Link href={secondaryCTA.href}>
              <Button
                variant="outline"
                size="lg"
                className="px-10 text-lg border-white/20 text-white hover:bg-white/10 cursor-pointer"
              >
                {secondaryCTA.label}
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </Section>
  );
};
