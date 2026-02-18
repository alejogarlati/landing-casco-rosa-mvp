import type { Metadata } from "next";
import { PageHero } from "../../components/ui/PageHero";
import { TestimonialsSection } from "../../components/casos/TestimonialsSection";
import { ImpactNumbers } from "../../components/casos/ImpactNumbers";
import { CollaborateSection } from "../../components/casos/CollaborateSection";
import { CTASection } from "../../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Historias de Impacto - Fundación El Casco Rosa",
  description:
    "Testimonios reales de pacientes y voluntarias. Conocé cómo colaborar y el impacto que genera tu apoyo en la lucha contra el cáncer de mama.",
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        badge="Historias que inspiran"
        title="'Esto me lo contó alguien que ya"
        highlight="pasó por acá'"
        description="No hay nada más poderoso que la palabra de quien vivió lo mismo que vos. Acá te compartimos las voces de quienes caminaron este camino y hoy sonríen."
      />
      <TestimonialsSection />
      <ImpactNumbers />
      <CollaborateSection />
      <CTASection
        title="¿Querés contar tu historia?"
        description="Si vos también transitaste un diagnóstico, tu experiencia puede ser el abrazo que otra mujer necesita hoy. Tu voz importa mucho."
        primaryCTA={{ label: "Querés contar tu experiencia", href: "/contacto" }}
        secondaryCTA={{ label: "Conocé la fundación", href: "/quienes-somos" }}
      />
    </>
  );
}
