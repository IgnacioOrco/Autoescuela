"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "El proyecto", href: "/el-proyecto/" },
    { name: "El programa", href: "/el-programa/" },
    { name: "Antecedentes", href: "/antecedentes/" },
    { name: "Contacto", href: "/contacto/" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "")) return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      {/* Barra superior de identificación institucional */}
      <div className="bg-institutional-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-medium tracking-wide">
            Iniciativa Intermunicipal — Tigre · San Fernando · San Isidro
          </span>
          <span className="hidden sm:inline text-slate-300">
            Formación de conductores en el nivel secundario
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo / Marca Institucional */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-institutional-900 group"
          >
            <div className="p-2.5 bg-institutional-50 text-institutional-700 rounded-lg border border-institutional-100 group-hover:bg-institutional-100 transition">
              <ShieldCheck className="w-7 h-7" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-lg sm:text-xl text-institutional-900 leading-tight">
                Autoescuela Municipal
              </span>
              <span className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Programa de Seguridad Vial · Zona Norte
              </span>
            </div>
          </Link>

          {/* Menú de Escritorio */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-institutional-50 text-institutional-800 font-semibold border-b-2 border-institutional-700"
                      : "text-slate-700 hover:text-institutional-800 hover:bg-slate-50"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Botón Móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:text-institutional-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-institutional-700"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Abrir menú principal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1" id="mobile-menu">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  active
                    ? "bg-institutional-50 text-institutional-900 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-institutional-900"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
