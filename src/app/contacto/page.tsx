import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone, Building2, UserCheck, ShieldAlert, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto Institucional",
  description:
    "Vías de comunicación directa para municipios, clubes, federaciones y medios de prensa con el responsable del programa.",
};

export default function ContactoPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="border-b border-slate-200 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-institutional-700 bg-institutional-50 px-3 py-1 rounded-md border border-institutional-100 inline-block mb-3">
            Canales Oficiales
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-institutional-900 tracking-tight mb-4">
            Contacto institucional
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Atención prioritaria para intendencias, concejos deliberantes, secretarías de tránsito y educación, instituciones deportivas y medios de comunicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Columna Principal: Responsable y Canales Directos (Sin Formularios) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-institutional-900 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 leading-snug">
                    Agustín R. De la Precilla
                  </h2>
                  <p className="text-sm font-semibold text-institutional-800 mt-0.5">
                    Analista y Planificador Vial (UTN)
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Director pedagógico del proyecto · Más de 40 años de trayectoria docente
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Enlace Mailto */}
                <a
                  href="mailto:delaprecilla@gmail.com"
                  className="flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-institutional-50 hover:border-institutional-300 transition group focus:outline-hidden focus:ring-2 focus:ring-institutional-700"
                  id="link-correo"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-institutional-800 text-white group-hover:bg-institutional-900 transition">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Correo Electrónico
                      </span>
                      <span className="text-base font-bold text-slate-900 group-hover:text-institutional-900">
                        delaprecilla@gmail.com
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-institutional-700 hidden sm:inline">
                    Escribir correo →
                  </span>
                </a>

                {/* Enlace WhatsApp wa.me */}
                <a
                  href="https://wa.me/5491150548119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 hover:bg-emerald-50 hover:border-emerald-300 transition group focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                  id="link-whatsapp"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-emerald-600 text-white group-hover:bg-emerald-700 transition">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        WhatsApp Institucional
                      </span>
                      <span className="text-base font-bold text-slate-900 group-hover:text-emerald-950">
                        11-5054-8119
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-800 hidden sm:inline">
                    Iniciar conversación →
                  </span>
                </a>

                {/* Enlace Telefónico */}
                <a
                  href="tel:+5491150548119"
                  className="flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition group focus:outline-hidden focus:ring-2 focus:ring-institutional-700"
                  id="link-telefono"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-slate-700 text-white group-hover:bg-slate-800 transition">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Llamada Directa
                      </span>
                      <span className="text-base font-medium text-slate-900">
                        +54 9 11 5054-8119
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
                    Llamar →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Lateral: Destinatarios y Nota de Transparencia */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-institutional-900 text-base mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-institutional-700" />
                Destinatarios del contacto
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-institutional-700 font-bold">•</span>
                  <span><strong>Municipios:</strong> Coordinación para convenios de uso de playones y becas formativas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-institutional-700 font-bold">•</span>
                  <span><strong>Clubes y Colegios:</strong> Charlas teóricas de concientización para 5° y 6° año de secundaria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-institutional-700 font-bold">•</span>
                  <span><strong>Prensa y Medios:</strong> Consultas estadísticas, notas editoriales y análisis vial.</span>
                </li>
              </ul>
            </div>

            {/* Aclaración formal de no avales anticipados */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p className="font-semibold text-slate-800">
                    Aclaración de transparencia institucional:
                  </p>
                  <p>
                    El programa se presenta formalmente como una propuesta técnica de capacitación. En cumplimiento de las normas de rigor institucional, ningún aval del ACA, de la FIA ni de municipios figura en este sitio hasta tanto se encuentre formalmente rubricado por escrito.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-institutional-100 bg-institutional-50/50">
              <div className="flex items-center gap-2 mb-2 text-institutional-900 font-bold text-sm">
                <FileText className="w-4 h-4 text-institutional-700" />
                <span>Solicitud de Documentación Completa</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Puede solicitar la carpeta técnica ejecutiva completa enviando un correo con el membrete de su institución.
              </p>
              <a
                href="mailto:delaprecilla@gmail.com?subject=Solicitud de carpeta técnica ejecutiva"
                className="text-xs font-bold text-institutional-800 hover:text-institutional-900 underline"
              >
                Solicitar carpeta por correo electrónico →
              </a>
            </div>
          </div>
        </div>

        {/* Navegación inferior */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link
            href="/antecedentes/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Volver a Antecedentes
          </Link>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:text-institutional-900 hover:underline"
          >
            Ir a la página principal
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
