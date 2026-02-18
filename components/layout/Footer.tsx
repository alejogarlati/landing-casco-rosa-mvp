import Link from "next/link";
import { Heart, Instagram, Mail, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/que-hacemos", label: "Qué Hacemos" },
  { href: "/casos", label: "Historias" },
  { href: "/contacto", label: "Contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Main footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Heart
                    className="w-5 h-5 text-primary fill-primary"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xl font-bold">
                  El Casco <span className="text-primary">Rosa</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Somos una fundación integrada por pacientes oncológicas y
                voluntarias. Brindamos contención, herramientas y acceso
                igualitario a recursos para mujeres con diagnóstico de cáncer.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                Navegación
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+5493815767328"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>+54 9 3815 76-7328</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@elcascorosa.org"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>contacto@elcascorosa.org</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/elcascorosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram
                      className="w-4 h-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>@elcascorosa</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Fundación El Casco Rosa. Todos los
            derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con{" "}
            <Heart
              className="w-3 h-3 inline-block text-primary fill-primary mx-0.5"
              aria-hidden="true"
            />{" "}
            por{" "}
            <a
              href="https://nuven.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Nuven
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
