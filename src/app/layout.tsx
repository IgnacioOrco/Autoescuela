import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Programa de Seguridad Vial y Autoescuela Municipal de Zona Norte",
    template: "%s | Autoescuela Municipal",
  },
  description:
    "Propuesta de formación de conductores para alumnos del último año del secundario en Tigre, San Fernando y San Isidro.",
  metadataBase: new URL("https://autoescuelamunicipal.com.ar"),
  openGraph: {
    title: "Programa de Seguridad Vial y Autoescuela Municipal de Zona Norte",
    description:
      "Propuesta de formación de conductores para alumnos del último año del secundario en Tigre, San Fernando y San Isidro.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-institutional-100 selection:text-institutional-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
