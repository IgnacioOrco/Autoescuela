# Autoescuela Municipal — Sitio Institucional

Sitio web institucional oficial y estático para el **Programa de Seguridad Vial y Autoescuela Municipal de Zona Norte** (Tigre, San Fernando y San Isidro).

Propuesta técnica de formación para que los jóvenes lleguen a su primera licencia de conducir habiendo aprendido normas, convivencia y dominio vehicular en el último año del nivel secundario.

---

## Características Principales

- **Estructura Estática (Next.js App Router):** Configurado con `output: 'export'` para un despliegue sin servidor ultrarrápido y seguro.
- **Diseño Sobrio y Accesible (Tailwind CSS):** Paleta institucional en azules (`#091e36`, `#18497d`) y blancos/grises neutros con contraste accesible WCAG AA/AAA.
- **Sin Formularios:** Canales directos de comunicación mediante enlaces `mailto:` y WhatsApp (`wa.me`).
- **5 Rutas Principales:**
  1. `/` — **Inicio:** Título, fundamentación institucional, 3 hitos clave y solicitud de la carpeta del proyecto.
  2. `/el-proyecto/` — **El proyecto:** Fundamentos, infraestructura municipal compartida, temario actualizado y modelo sustentable con becas.
  3. `/el-programa/` — **El programa:** Cuatro módulos teóricos de 45 min, cuatro fases prácticas en pista y matriz de evaluación homologada (faltas eliminatorias, deficientes y leves).
  4. `/antecedentes/` — **Antecedentes:** Cronología de trayectoria 1976–2026, destacando el hito legislativo del Expediente 70.006/2014 del Concejo Deliberante de San Fernando.
  5. `/contacto/` — **Contacto:** Datos de Agustín R. De la Precilla (UTN) para municipios, escuelas, clubes y medios.

---

## Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Static Export)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)

---

## Puesta en Marcha en Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/autoescuela-institucional.git
cd autoescuela-institucional
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 4. Compilar exportación estática
```bash
npm run build
```
Los archivos HTML, CSS y JavaScript listos para producción se generarán en el directorio `out/`.

---

## Despliegue

La carpeta `out/` puede alojarse en cualquier servicio de hosting estático:
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**
- **Netlify**
- **Servidores web Apache / Nginx**
