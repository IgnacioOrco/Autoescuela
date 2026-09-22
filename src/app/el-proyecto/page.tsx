import type { Metadata } from "next";
import Link from "next/link";
import { Building, BookOpen, Coins, Scale, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "El Proyecto",
  description:
    "Fundamentos, alcance intermunicipal en Tigre, San Fernando y San Isidro, y modelo de autosustentabilidad del programa.",
};

export default function ElProyectoPage() {
  const pilares = [
    {
      numero: "1",
      icon: Building,
      titulo: "Aprovechar lo que los municipios ya tienen",
      texto:
        "San Isidro cuenta con pista de examen propia en el playón de la Dirección de Tránsito. Tigre tiene un centro de trámites de licencias desarrollado. El programa propone usar esas instalaciones en días y horarios acordados, en lugar de construir infraestructura nueva.",
      detalle: "Optimización de recursos públicos comunales existentes.",
    },
    {
      numero: "2",
      icon: BookOpen,
      titulo: "Contenidos al día",
      texto:
        "El temario incorpora lo que no existía cuando se formaron los conductores de generaciones anteriores: los sistemas de asistencia a la conducción, las distracciones por pantallas y celulares, y la convivencia con peatones, ciclistas, monopatines y motos de reparto.",
      detalle: "Movilidad urbana moderna y prevención ante factores de distracción digital.",
    },
    {
      numero: "3",
      icon: Coins,
      titulo: "Un modelo que no descansa solo en el presupuesto municipal",
      texto:
        "Los cursos son arancelados. El alumno que no puede afrontarlos recibe una beca municipal, y el costo se recupera mediante convenios con empresas del distrito que incorporan a los egresados como conductores profesionales, financiando el curso en cuotas accesibles.",
      detalle: "Esquema solidario, sostenible y con inserción laboral genuina.",
    },
  ];

  const municipios = [
    {
      nombre: "San Isidro",
      recurso: "Playón de la Dirección de Tránsito y pista de examen establecida.",
    },
    {
      nombre: "Tigre",
      recurso: "Centro moderno de trámites y emisión de licencias de conducir.",
    },
    {
      nombre: "San Fernando",
      recurso: "Marco legislativo fundacional y trayectoria comunitaria de formación.",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la página */}
        <div className="border-b border-slate-200 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-institutional-700 bg-institutional-50 px-3 py-1 rounded-md border border-institutional-100 inline-block mb-3">
            Fundamentos y Alcance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-institutional-900 tracking-tight mb-4">
            Qué propone el programa
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Una articulación técnica entre municipios de Zona Norte para transformar la educación vial juvenil mediante infraestructura compartida, metodología contrastada y sustentabilidad económica.
          </p>
        </div>

        {/* Los Tres Pilares */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-institutional-800 rounded-xs"></span>
            Los tres pilares del proyecto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={pilar.numero}
                  className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:border-institutional-300 transition"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-10 h-10 rounded-lg bg-institutional-900 text-white font-bold flex items-center justify-center text-lg">
                        {pilar.numero}
                      </span>
                      <Icon className="w-6 h-6 text-institutional-700" />
                    </div>

                    <h3 className="text-lg font-bold text-institutional-900 mb-4 leading-snug">
                      {pilar.titulo}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {pilar.texto}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-institutional-800">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0 text-institutional-700" />
                    <span>{pilar.detalle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alcance Territorial y Operativo */}
        <div className="mb-16 bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-institutional-900 mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-institutional-700" />
              Alcance Intermunicipal (Zona Norte)
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
              El corredor Tigre – San Fernando – San Isidro comparte dinámicas de movilidad comunes: arterias troncales (Panamericana, Av. del Libertador, Av. Santa Fe / Cazón), densidad de transporte público y flujos diarios de tránsito entre distritos. La propuesta concibe la formación con una visión regional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {municipios.map((m) => (
                <div
                  key={m.nombre}
                  className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs"
                >
                  <h4 className="font-bold text-institutional-900 text-base mb-1">
                    {m.nombre}
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    {m.recurso}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marco Normativo */}
        <div className="p-8 bg-white rounded-xl border border-slate-200 shadow-xs mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-institutional-50 text-institutional-800 rounded-lg shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Marco Normativo y Legislativo
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                El programa se encuadra y adecua plenamente a la legislación nacional y provincial de tránsito y seguridad vial:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <span className="text-institutional-700 font-bold mr-2">•</span>
                  <span><strong>Ley Nacional de Tránsito N° 24.449</strong> y sus normas modificatorias y complementarias.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-institutional-700 font-bold mr-2">•</span>
                  <span><strong>Ley Provincial N° 13.927</strong> de la Provincia de Buenos Aires y su Decreto Reglamentario N° 532/09.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enlace de Navegación a El Programa */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Volver al Inicio
          </Link>
          <Link
            href="/el-programa/"
            className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:text-institutional-900 hover:underline"
          >
            Ver los contenidos del programa formativo
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
