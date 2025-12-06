import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ismaël Sow — Data Engineer & Analyst",
  description:
    "Portfolio d'Ismaël Sow, Data Engineer & Analyst spécialisé en ETL, APIs, Data Warehouse, Talend, Snowflake et Microsoft Fabric.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`min-h-screen bg-slate-950 text-slate-100 antialiased ${inter.className}`}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Halo de fond */}
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.12),_transparent_60%)]" />
          <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <NavBar />
            <main className="container mx-auto flex-1 px-4 pb-16 pt-6 md:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
