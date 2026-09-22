import Link from "next/link";
import { Mail, MessageCircle, MapPin, FileCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-institutional-900 text-slate-300 pt-12 pb-8 border-t border-institutional-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-institutional-800/80">
          {/* Identificación y Propósito */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Autoescuela Municipal
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Programa de Seguridad Vial y Formación de Conductores para alumnos del último año del nivel secundario en Tigre, San Fernando y San Isidro.
            </p>
            <div className="flex items-center text-xs text-slate-400">
              <MapPin className="w-4 h-4 mr-1.5 shrink-0 text-slate-400" />
              <span>Zona Norte, Provincia de Buenos Aires</span>
            </div>
          </div>

          {/* Enlaces a las 5 Secciones */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Estructura Institucional
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/el-proyecto/" className="hover:text-white transition-colors">
                  El proyecto (Fundamentos y alcance)
                </Link>
              </li>
              <li>
                <Link href="/el-programa/" className="hover:text-white transition-colors">
                  El programa (Módulos y fases)
                </Link>
              </li>
              <li>
                <Link href="/antecedentes/" className="hover:text-white transition-colors">
                  Antecedentes (Trayectoria 1976-2026)
                </Link>
              </li>
              <li>
                <Link href="/contacto/" className="hover:text-white transition-colors">
                  Contacto institucional
                </Link>
              </li>
            </ul>
          </div>

          {/* Vías de Comunicación Directa */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Contacto Institucional
            </h4>
            <p className="text-xs text-slate-300 mb-3">
              Atención directa para municipios, clubes, federaciones y medios de prensa.
            </p>
            <div className="space-y-2.5 text-sm">
              <div>
                <a
                  href="mailto:delaprecilla@gmail.com"
                  className="inline-flex items-center text-slate-200 hover:text-white hover:underline focus:outline-hidden focus:ring-1 focus:ring-institutional-400 rounded-sm"
                >
                  <Mail className="w-4 h-4 mr-2 text-institutional-400 shrink-0" />
                  delaprecilla@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/5491150548119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-200 hover:text-white hover:underline focus:outline-hidden focus:ring-1 focus:ring-institutional-400 rounded-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                  WhatsApp: 11-5054-8119
                </a>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-institutional-800 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Responsable técnico:</span>
              <br />
              Agustín R. De la Precilla — Analista y Planificador Vial (UTN)
            </div>
          </div>
        </div>

        {/* Nota Institucional y Transparencia */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-400 gap-4">
          <div className="flex items-start space-x-2">
            <FileCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              El programa se presenta como propuesta técnica y pedagógica intermunicipal. Conforme a las reglas de transparencia, los convenios institucionales se oficializan mediante sus respectivos acuerdos formales.
            </p>
          </div>
          <div className="shrink-0 text-slate-400">
            &copy; {new Date().getFullYear()} Autoescuela Municipal
          </div>
        </div>
      </div>
    </footer>
  );
}
