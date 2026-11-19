"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/que-hacemos", label: "Qué Hacemos" },
  { href: "/casos", label: "Historias" },
  { href: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isOpen = openPath === pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-full transition-colors ${
                scrolled || !isHome
                  ? "bg-primary/10 group-hover:bg-primary/20"
                  : "bg-white/15 group-hover:bg-white/25"
              }`}
            >
              <Heart
                className={`w-6 h-6 ${
                  scrolled || !isHome
                    ? "text-primary fill-primary"
                    : "text-white fill-white"
                }`}
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                scrolled || !isHome ? "text-gray-900" : "text-white"
              }`}
            >
              El Casco{" "}
              <span className={scrolled || !isHome ? "text-primary" : "text-white/90"}>
                Rosa
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    scrolled || !isHome
                      ? isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link href="/#hero">
              <Button
                size="sm"
                className={`px-6 cursor-pointer ${
                  !scrolled && isHome
                    ? "bg-white text-primary hover:bg-white/90 shadow-none border-transparent"
                    : ""
                }`}
              >
                Donar ahora
              </Button>
            </Link>
          </div>

          <button
            className={`md:hidden p-2 transition-colors cursor-pointer ${
              scrolled || !isHome
                ? "text-gray-600 hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
            onClick={() => setOpenPath(isOpen ? null : pathname)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 z-40 bg-white border-t border-gray-100 p-6 shadow-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 h-full">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenPath(null)}
                className={`text-lg font-medium transition-colors py-2 border-b border-gray-50 ${
                  isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4">
            <Link href="/#hero" onClick={() => setOpenPath(null)}>
              <Button className="w-full justify-center text-lg h-12 cursor-pointer">
                Donar ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
