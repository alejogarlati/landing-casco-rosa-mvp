"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { href: "#servicios", label: "Qué Hacemos" },
  { href: "#impacto", label: "Impacto" },
  { href: "#empresas", label: "Aliados" },
  { href: "#agenda", label: "Agenda" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              El Casco <span className="text-primary">Rosa</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="px-6">
              Donar ahora
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-white border-t border-gray-100 p-6 shadow-lg animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-6 h-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
               <Button className="w-full justify-center text-lg h-12">Donar ahora</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
