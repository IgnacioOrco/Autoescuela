import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Compass, AlertCircle, CheckCircle, ArrowRight, ClipboardCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "El Programa",
  description:
    "Contenidos pedagógicos: cuatro módulos teóricos de 45 minutos, cuatro fases prácticas en pista cerrada y sistema de evaluación por faltas.",
};

export default function ElProgramaPage() {
  const modulosTeoricos = [
    {
      numero: "01",
      titulo: "El ecosistema vial y la movilidad sustentable",
      descripcion:
        "La vía pública como espacio compartido. Derechos y obligaciones de peatones, ciclistas, motociclistas, usuarios de micromovilidad y transporte colectivo. Conciencia ambiental y conducción eficiente.",
    },
    {
      numero: "02",
      titulo: "Factores de riesgo y psicología vial",
      descripcion:
        "Efectos del alcohol, sustancias y fatiga. La distracción al volante: uso de telefonía celular, pantallas multimedia y factores cognitivos de pérdida de atención. Percepción del riesgo en conductores noveles.",
    },
    {
      numero: "03",
      titulo: "Señalización, reglas de tránsito y actuación ante un siniestro",
      descripcion:
        "Jerarquía y tipología de la señalización vial. Prioridades de paso, velocidades máximas y mínimas. Protocolo PAS (Proteger, Avisar, Socorrer) ante incidentes viales y primeros auxilios básicos.",
    },
    {
      numero: "04",
      titulo: "Mecánica preventiva y tecnologías de seguridad",
      descripcion:
        "Revisión de fluidos, neumáticos y frenos. Seguridad pasiva y activa del vehículo. Comprensión y funcionamiento de los sistemas avanzados de asistencia a la conducción (ADAS: ABS, ESP, frenado autónomo).",
    },
  ];

  const fasesPracticas = [
    {
      fase: "Fase 1",
      titulo: "Ergonomía, espejos y familiarización con los mandos",
      objetivo:
        "Ajuste de butaca, distancia a pedalera y volante. Calibración de espejos retrovisores y puntos ciegos. Puesta en marcha, embrague o selectora y punto de fricción.",
    },
    {
      fase: "Fase 2",
      titulo: "Maniobras básicas y control a baja velocidad",
      objetivo: (
        <>
          <strong>Ejercicios de reversa (M.A.).</strong> Arranque y detención suave. Control direccional, giro en radio corto, zig-zag suave entre conos y sincronización de cambios de marcha en circuito cerrado.
        </>
      ),
    },
    {
      fase: "Fase 3",
      titulo: "Estacionamiento y exigencias del examen municipal",
      objetivo:
        "Técnica de estacionamiento en paralelo (a 45° y a 90°), marcha atrás controlada, arranque en pendiente sin retroceso y maniobras en espacios reducidos según el baremo municipal.",
    },
    {
      fase: "Fase 4",
      titulo: "Situaciones de emergencia y simulacro de examen",
      objetivo:
        "Frenada de emergencia con esquive controlado. Reacción ante imprevistos en pista y simulación completa del examen práctico bajo los criterios de los inspectores comunales.",
    },
  ];

  const faltasEvaluacion = [
    {
      tipo: "Faltas Eliminatorias",
      color: "border-red-300 bg-red-50/60 text-red-900",
      badge: "bg-red-100 text-red-800",
      descripcion:
        "Causan la desaprobación inmediata de la prueba práctica. Ejemplos: no colocarse el cinturón de seguridad, golpear vallas o cordones, no ceder el paso peatonal reglamentario o desobedecer la señal de pare.",
    },
    {
      tipo: "Faltas Deficientes",
      color: "border-amber-300 bg-amber-50/60 text-amber-900",
      badge: "bg-amber-100 text-amber-800",
      descripcion:
        "Infracciones de técnica o seguridad de gravedad intermedia. La acumulación de faltas deficientes determina la no aprobación (ejemplo: detener el motor en maniobra, incorrección en el uso de luces de giro o frenadas bruscas sin motivo).",
    },
    {
      tipo: "Faltas Leves",
      color: "border-blue-300 bg-blue-50/60 text-institutional-900",
      badge: "bg-blue-100 text-institutional-800",
      descripcion:
        "Imperfecciones menores en el dominio del vehículo que no comprometen la seguridad inmediata (ejemplo: demora leve al iniciar la marcha, incorrección en la posición de las manos en el volante).",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="border-b border-slate-200 pb-10 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-institutional-700 bg-institutional-50 px-3 py-1 rounded-md border border-institutional-100 inline-block mb-3">
            Plan Pedagógico Integral
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-institutional-900 tracking-tight mb-4">
            Contenidos del programa
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Una currícula estructurada en cuatro módulos teóricos y cuatro fases prácticas en pista cerrada, complementada con un baremo técnico de evaluación alineado a las directrices municipales.
          </p>
        </div>

        {/* Sección 1: Programa Teórico */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-institutional-800 text-white rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-institutional-900">
                Programa teórico
              </h2>
              <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-institutional-600" />
                Cuatro módulos de 45 minutos dictados por formadores viales
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modulosTeoricos.map((mod) => (
              <div
                key={mod.numero}
                className="p-7 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-institutional-300 transition shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-institutional-100 text-institutional-800">
                    Módulo {mod.numero}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">45 min</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {mod.titulo}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {mod.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección 2: Programa Práctico */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-institutional-800 text-white rounded-lg">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-institutional-900">
                Programa práctico en pista cerrada
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Cuatro fases progresivas sobre circuitos protegidos de tránsito general
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fasesPracticas.map((fase, idx) => (
              <div
                key={fase.fase}
                className="p-7 rounded-xl border border-slate-200 bg-white hover:border-institutional-300 transition shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                      {fase.fase}
                    </span>
                    <span className="text-xs text-institutional-700 font-semibold">
                      Etapa 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-institutional-900 mb-2">
                    {fase.titulo}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {fase.objetivo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección 3: Grilla de Evaluación */}
        <section className="mb-16 p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-institutional-800 font-bold mb-2">
              <ClipboardCheck className="w-5 h-5" />
              <span>Criterio de Evaluación Homologado</span>
            </div>
            <h2 className="text-2xl font-bold text-institutional-900 mb-3">
              Grilla de evaluación y baremo de faltas
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              El programa incorpora una grilla de evaluación que clasifica las faltas en eliminatorias, deficientes y leves, con los mismos criterios técnicos y exigencias que aplican los inspectores de tránsito en los exámenes municipales oficiales de licencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faltasEvaluacion.map((item) => (
              <div
                key={item.tipo}
                className={`p-6 rounded-xl border bg-white shadow-xs ${item.color}`}
              >
                <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-md mb-3 ${item.badge}`}>
                  {item.tipo}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Grilla completa de evaluación:</span> Para solicitar una copia digital de la matriz detallada de puntuación comunitaria, dirija una consulta institucional.
            </div>
            <a
              href="mailto:delaprecilla@gmail.com?subject=Solicitud de grilla técnica de evaluación del programa"
              className="shrink-0 text-xs font-semibold px-4 py-2 rounded-md bg-institutional-800 text-white hover:bg-institutional-900 transition"
            >
              Consultar grilla vía email
            </a>
          </div>
        </section>

        {/* Navegación inferior */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link
            href="/el-proyecto/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Volver a El Proyecto
          </Link>
          <Link
            href="/antecedentes/"
            className="inline-flex items-center text-sm font-semibold text-institutional-800 hover:text-institutional-900 hover:underline"
          >
            Ver la línea de tiempo de antecedentes
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
