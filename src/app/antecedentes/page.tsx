import type { Metadata } from "next";
import Link from "next/link";
import { History, Calendar, CheckCircle2, Award, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Antecedentes",
  description:
    "Línea de tiempo y trayectoria docente e institucional en seguridad vial desde 1976 hasta 2026.",
};

export default function AntecedentesPage() {
  const cronologia = [
    {
      anio: "1976",
      titulo: "Habilitación como instructor de manejo",
      descripcion:
        "Obtención de la habilitación oficial como instructor de manejo expedida por la Municipalidad de la Ciudad de Buenos Aires.",
      destacado: false,
    },
    {
      anio: "1982",
      titulo: "Primera autoescuela habilitada en San Fernando",
      descripcion:
        "Apertura formal de la primera autoescuela habilitada en el Partido de San Fernando (Saint John Autoescuela), implementando un método pedagógico propio de formación integral.",
      destacado: true,
    },
    {
      anio: "1991",
      titulo: "Programa radial «La Hora Vial»",
      descripcion:
        "Creación y conducción de «La Hora Vial», espacio radiofónico de concientización y educación vial debidamente inscripto y registrado ante la Dirección Nacional del Derecho de Autor (DNDA).",
      destacado: false,
    },
    {
      anio: "1999",
      titulo: "Ciclo de encuentros de educación vial en Zona Norte",
      descripcion:
        "Realización de jornadas pedagógicas en los partidos de Tigre, San Isidro, Vicente López y San Fernando, auspiciadas por la Secretaría de Cultura de la Provincia de Buenos Aires.",
      destacado: false,
    },
    {
      anio: "2004",
      titulo: "Distinción «Educador Vial del Año»",
      descripcion:
        "Reconocimiento otorgado por el Consejo Provincial de Seguridad Vial (CO.PRO.SE.VI.) de la Provincia de Buenos Aires a la labor docente y preventiva.",
      destacado: true,
    },
    {
      anio: "2011",
      titulo: "Plan formativo presentado ante la ANSV",
      descripcion:
        "Presentación formal ante la Agencia Nacional de Seguridad Vial de una propuesta integral para que los alumnos del último año del nivel secundario aprendan a conducir.",
      destacado: false,
    },
    {
      anio: "2014",
      titulo: "Proyecto de ordenanza municipal (Expte. 70.006/2014)",
      descripcion:
        "Hito legislativo: Ingreso del proyecto de ordenanza de creación de la Autoescuela Municipal ante el Honorable Concejo Deliberante de San Fernando.",
      destacado: true,
    },
    {
      anio: "2016",
      titulo: "Gestión técnica en licencias de conducir",
      descripcion:
        "Desempeño y asesoramiento en la Dirección de Licencias del Municipio de Pilar, optimizando procedimientos de evaluación teórica y práctica.",
      destacado: false,
    },
    {
      anio: "2026",
      titulo: "Actualización a escala intermunicipal",
      descripcion:
        "Adecuación del programa formativo para su articulación conjunta entre Tigre, San Fernando y San Isidro, adaptado a los retos actuales de la movilidad.",
      destacado: true,
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="border-b border-slate-200 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-institutional-700 bg-institutional-50 px-3 py-1 rounded-md border border-institutional-100 inline-block mb-3">
            Cinco Décadas de Experiencia
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-institutional-900 tracking-tight mb-4">
            Línea de tiempo de antecedentes
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Una trayectoria ininterrumpida de formación docente, divulgación comunitaria, gestión pública y proyectos normativos dedicados a la seguridad vial en Zona Norte.
          </p>
        </div>

        {/* Línea de tiempo estructurada en tarjetas */}
        <div className="relative border-l-2 border-institutional-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 mb-16">
          {cronologia.map((item) => (
            <div key={item.anio} className="relative group">
              {/* Punto o nodo en la línea de tiempo */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 border-white ${
                  item.destacado ? "bg-institutional-800 ring-4 ring-institutional-100" : "bg-institutional-600"
                }`}
              />

              {/* Tarjeta del hito */}
              <div
                className={`p-6 sm:p-7 rounded-xl border transition shadow-xs ${
                  item.destacado
                    ? "bg-institutional-50/40 border-institutional-200 hover:border-institutional-300"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-institutional-900 tracking-tight">
                      {item.anio}
                    </span>
                    {item.destacado && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-institutional-800 text-white">
                        Hito relevante
                      </span>
                    )}
                  </div>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.titulo}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Respaldo Institucional y Transparencia */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-institutional-100 text-institutional-800 rounded-lg shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Hito Fundacional: Expediente 70.006/2014
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                El proyecto formal de Autoescuela Municipal cuenta con antecedente parlamentario registrado en el Honorable Concejo Deliberante de San Fernando mediante el Expediente 70.006/2014, constituyendo la base formal sobre la que se articula la presente ampliación regional.
              </p>
            </div>
          </div>
        </div>

        {/* Navegación inferior */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link
            href="/el-programa/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Volver a El Programa
          </Link>
          <Link
            href="/contacto/"
            className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:text-institutional-900 hover:underline"
          >
            Contactar al responsable institucional
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
