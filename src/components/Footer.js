import React from "react";
import Link from "next/link";
import { userData } from "@/lib/utils";
import SocialMediaLinks from "@/components/ui/SocialMediaLink";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="font-medium text-slate-200">
            © {year} {userData.name}
          </p>
          <p className="max-w-xl text-xs md:text-sm">
            Data Engineer & Analyst — conception de pipelines ETL, intégration
            d&apos;APIs, Data Warehouse et industrialisation de la donnée.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <SocialMediaLinks size="20" />
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 shadow-soft-lg transition hover:border-primaryHighlight hover:bg-slate-900 hover:text-primaryHighlight"
          >
            Discutons de votre projet
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
