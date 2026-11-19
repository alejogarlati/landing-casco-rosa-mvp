"use client";

import { ArrowDown, Heart, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { motion } from "framer-motion";

const AwarenessRibbon = () => (
  <svg
    viewBox="0 0 200 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
        <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
        <stop offset="60%" stopColor="rgba(219,39,119,0.12)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
      </linearGradient>
    </defs>
    <path
      d="M100 130 C100 130 60 60 30 30 C15 15 5 25 10 50 C20 90 60 120 100 160 C140 120 180 90 190 50 C195 25 185 15 170 30 C140 60 100 130 100 130Z"
      fill="url(#ribbonGradient)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    <path
      d="M100 160 C90 175 75 220 70 270 C68 285 78 290 85 280 C92 268 98 240 100 220"
      fill="url(#ribbonGradient)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    <path
      d="M100 160 C110 175 125 220 130 270 C132 285 122 290 115 280 C108 268 102 240 100 220"
      fill="url(#ribbonGradient)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-pink-500 via-pink-400 to-rose-500"
      aria-label="Sección principal"
    >
      {/* Animated ribbon backgrounds */}
      <div className="absolute inset-0 overflow-hidden -z-0" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 -top-10 w-[400px] h-[600px] md:w-[500px] md:h-[750px] opacity-60"
        >
          <AwarenessRibbon />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -left-20 bottom-0 w-[300px] h-[450px] md:w-[400px] md:h-[600px] opacity-30 -scale-x-100"
        >
          <AwarenessRibbon />
        </motion.div>

        {/* Soft light overlays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-600/20 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
                <Heart className="w-4 h-4 text-white fill-white" aria-hidden="true" />
                <span className="text-sm font-medium text-white/90">
                  Porque acompañar también salva
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.25] font-display">
                Acompañamos tu camino con{" "}
                <span className="text-white/90 underline decoration-white/30 decoration-4 underline-offset-4">
                  humanidad y empatía
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 lg:mb-10">
                Somos una fundación integrada por pacientes oncológicas y voluntarias.
                Brindamos contención, herramientas y acceso igualitario a recursos
                para mujeres con diagnóstico de cáncer.
              </p>
            </ScrollAnimation>

            {/* Scroll hint — desktop */}
            <ScrollAnimation delay={0.3}>
              <a
                href="#servicios"
                className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors group"
                aria-label="Ver más contenido"
              >
                <span>Descubrí lo que hacemos</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </ScrollAnimation>
          </div>

          {/* Right: Donation Card */}
          <ScrollAnimation delay={0.25}>
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-black/10 overflow-hidden">
              {/* Accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500" />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    Tu donación transforma vidas
                  </span>
                </div>

                <p className="text-center text-gray-500 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                  Con tu aporte sostenemos cascos fríos, talleres y acompañamiento para cientos de mujeres.
                </p>

                {/* Amount quick-select */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {["$5.000", "$10.000", "$25.000"].map((amount) => (
                    <button
                      key={amount}
                      className="py-3 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-pink-50 text-gray-800 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="relative mb-5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Otro monto"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-pink-100 outline-none text-lg font-medium text-gray-900 placeholder:text-gray-400 transition-all duration-200"
                    aria-label="Ingresar monto personalizado"
                  />
                </div>

                {/* Main CTA */}
                <Button
                  size="lg"
                  className="w-full text-lg h-14 shadow-xl shadow-pink-300/40 hover:shadow-pink-400/50 hover:scale-[1.01] transition-all duration-200"
                  aria-label="Hacer una donación ahora"
                >
                  <Heart className="w-5 h-5 fill-white mr-2" aria-hidden="true" />
                  Donar ahora
                </Button>

                {/* Trust line */}
                <p className="text-center text-xs text-gray-400 mt-4 leading-relaxed">
                  Donación segura · 100% deducible de Ganancias · Recibís tu certificado
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll hint — mobile */}
        <ScrollAnimation delay={0.4}>
          <div className="flex justify-center mt-10 lg:hidden">
            <a
              href="#servicios"
              className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group"
              aria-label="Ver más contenido"
            >
              <span className="text-xs font-medium">Conocer más</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
