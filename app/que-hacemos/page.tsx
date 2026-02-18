import type { Metadata } from "next";
import { PageHero } from "../../components/ui/PageHero";
import { ServiceDetail } from "../../components/que-hacemos/ServiceDetail";
import { ProcessSection } from "../../components/que-hacemos/ProcessSection";
import { ProgramsGrid } from "../../components/que-hacemos/ProgramsGrid";
import { FAQSection } from "../../components/contacto/FAQSection";
import { CTASection } from "../../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Qué Hacemos - Fundación El Casco Rosa",
  description:
    "Cascos Fríos, talleres de bienestar, campañas de concientización, eventos solidarios y contenido digital. Conocé todas las acciones de El Casco Rosa.",
};

export default function QueHacemosPage() {
  return (
    <>
      <PageHero
        badge="Lo que hacemos"
        title="Si algo nos sale bien, es"
        highlight="acompañar"
        description="No somos superheroínas. Somos mujeres que se arremangaron y dijeron: esto no puede seguir así. Cada programa nació de escuchar una necesidad real."
      />
      <ServiceDetail />
      <ProcessSection />
      <ProgramsGrid />
      <FAQSection />
      <CTASection
        title="¿Te gustaría ser parte de esto?"
        description="No hace falta experiencia ni mucho tiempo. Solo ganas de sumar. Podés venir a un taller, ayudar en un evento o simplemente correr la voz."
        primaryCTA={{ label: "Quiero sumarme", href: "/contacto" }}
        secondaryCTA={{ label: "Ver agenda", href: "/#agenda" }}
      />
    </>
  );
}
