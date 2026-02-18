import type { Metadata } from "next";
import { PageHero } from "../../components/ui/PageHero";
import { ContactInfo } from "../../components/contacto/ContactInfo";

export const metadata: Metadata = {
  title: "Contacto - Fundación El Casco Rosa",
  description:
    "Escribinos tus preguntas, propuestas o solicitudes de apoyo. Respondemos dentro de las 24hs.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        badge="Hablemos 💬"
        title="No sos una molestia, sos"
        highlight="importante"
        description="Escribinos para lo que sea: una pregunta, una idea, un pedido de ayuda o simplemente para decirnos hola. Estamos del otro lado, siempre."
      />
      <ContactInfo />
    </>
  );
}
