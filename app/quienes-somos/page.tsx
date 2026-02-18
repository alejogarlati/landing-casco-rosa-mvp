import type { Metadata } from "next";
import { PageHero } from "../../components/ui/PageHero";
import { MissionSection } from "../../components/quienes-somos/MissionSection";
import { ValuesSection } from "../../components/quienes-somos/ValuesSection";
import { TeamSection } from "../../components/quienes-somos/TeamSection";
import { StoryTimeline } from "../../components/quienes-somos/StoryTimeline";
import { CTASection } from "../../components/shared/CTASection";

export const metadata: Metadata = {
  title: "Quiénes Somos - Fundación El Casco Rosa",
  description:
    "Conocé la historia, misión y el equipo detrás de Fundación El Casco Rosa. Pacientes oncológicas y voluntarias unidas contra el cáncer de mama.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        badge="Nuestra Historia"
        title="Mujeres reales, causas"
        highlight="reales"
        description="Arrancamos siendo un grupo de pacientes y voluntarias que se juntaron a tomar mate y a decirse la verdad. Hoy somos una fundación que abraza desde Tucumán a todo el Norte Argentino."
      />
      <MissionSection />
      <ValuesSection />
      <StoryTimeline />
      <TeamSection />
      <CTASection />
    </>
  );
}
