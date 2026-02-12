import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/home/Hero";
import { ServicesSection } from "../components/home/ServicesSection";
import { ImpactSection } from "../components/home/ImpactSection";
import { CorporateProgram } from "../components/home/CorporateProgram";
import { Calendar2026 } from "../components/home/Calendar";
import { ContactForm } from "../components/home/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ImpactSection />
      <CorporateProgram />
      <Calendar2026 />
      <ContactForm />
      <Footer />
    </main>
  );
}
