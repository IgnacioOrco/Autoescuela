import Link from "next/link";
import { ArrowRight, Calendar, FileText, CheckCircle2, Building2, GraduationCap, ShieldAlert } from "lucide-react";

export default function InicioPage() {
  const hitos = [
    {
      anio: "1982",
      titulo: "Método propio de formación",
      descripcion: "Saint John Autoescuela abre en San Fernando con un método propio de enseñanza estructurado en fases pedagógicas progresivas.",
    },
    {
      anio: "2014",
      titulo: "Expediente legislativo",
      descripcion: "El proyecto de Autoescuela Municipal se presenta formalmente ante el Concejo Deliberante de San Fernando (Expte. 70.006/2014).",
    },
    {
      anio: "2026",
      titulo: "Alcance intermunicipal",
      descripcion: "El programa se actualiza a escala intermunicipal (Tigre, San Fernando, San Isidro) adaptado a los estándares vigentes de seguridad vial.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Sección Hero / Apertura */}
      <section className="relative overflow-hidden bg-gradient-to-b from-institutional-50/60 via-white to-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-institutional-100 text-institutional-900 text-xs font-semibold mb-6 border border-institutional-200">
              <Building2 className="w-3.5 h-3.5" />
              <span>Propuesta Institucional Intermunicipal</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-institutional-900 leading-tight mb-6">
              Programa de Seguridad Vial y Autoescuela Municipal de Zona Norte
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal mb-8 border-l-4 border-institutional-700 pl-4">
              Una propuesta de formación para que los jóvenes de Tigre, San Fernando y San Isidro lleguen a su primera licencia habiendo aprendido a conducir, y no solo a aprobar un examen.
            </p>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 mb-8 text-slate-700 text-base leading-relaxed">
              <p>
                Los conductores jóvenes concentran una parte desproporcionada de la siniestralidad vial en su primer año de licencia. Este programa propone anticiparse: llevar la formación al último año de la escuela secundaria, con instructores con formación docente, sobre pistas municipales ya existentes y con un método pedagógico de más de cuatro décadas de aplicación.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="mailto:delaprecilla@gmail.com?subject=Solicitud de carpeta del proyecto institucional (PDF)&body=Estimado Agustín De la Precilla,%0D%0A%0D%0ASolicito el envío de la carpeta ejecutiva del proyecto institucional de Seguridad Vial y Autoescuela Municipal.%0D%0A%0D%0AInstitución / Municipio / Medio:%0D%0ANombre de contacto:"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-institutional-800 text-white text-base font-semibold hover:bg-institutional-900 transition-colors shadow-xs focus:outline-hidden focus:ring-2 focus:ring-institutional-700 focus:ring-offset-2"
                id="btn-descargar-carpeta"
              >
                <FileText className="w-5 h-5 mr-2 shrink-0" />
                Descargar la carpeta del proyecto (PDF)
              </a>

              <Link
                href="/el-proyecto/"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-base font-medium hover:bg-slate-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-institutional-700"
              >
                Conocer la propuesta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              * Documentación institucional disponible para autoridades gubernamentales, directivos educativos y representantes comunitarios.
            </p>
          </div>
        </div>
      </section>

      {/* Tres Hitos Fundamentales */}
      <section className="py-16 sm:py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-institutional-900 tracking-tight">
              Tres hitos del proyecto
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Una evolución fundada en la experiencia docente y el trabajo continuo en el ámbito de la seguridad vial de la región.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hitos.map((hito) => (
              <div
                key={hito.anio}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs hover:border-institutional-300 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-institutional-50 text-institutional-800 text-sm font-bold rounded-md border border-institutional-100">
                    {hito.anio}
                  </span>
                  <Calendar className="w-4 h-4 text-institutional-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {hito.titulo}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {hito.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/antecedentes/"
              className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:text-institutional-900 hover:underline"
            >
              Ver la cronología completa de antecedentes (1976 – 2026)
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resumen de Secciones Clave */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-institutional-50/40 border border-institutional-100">
              <div className="w-10 h-10 rounded-lg bg-institutional-800 text-white flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-institutional-900 mb-3">
                El Programa Pedagógico
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                Estructurado en cuatro módulos teóricos de 45 minutos y cuatro fases prácticas en pista cerrada, con grilla homologada de evaluación con faltas eliminatorias, deficientes y leves.
              </p>
              <Link
                href="/el-programa/"
                className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:underline"
              >
                Explorar el plan de estudios
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-institutional-700 text-white flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pilares y Autosustentabilidad
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                Aprovecha la infraestructura existente en Tigre, San Fernando y San Isidro. Un esquema arancelado con becas municipales e inserción laboral financiada por empresas locales.
              </p>
              <Link
                href="/el-proyecto/"
                className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:underline"
              >
                Conocer los 3 pilares del proyecto
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
