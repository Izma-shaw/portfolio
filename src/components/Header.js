"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { IoMdContact, IoMdDownload } from "react-icons/io";

import { userData } from "@/lib/utils";
import SocialMediaLinks from "@/components/ui/SocialMediaLink";
import HeroBtn from "./ui/HeroBtn";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Header() {
  const [text] = useTypewriter({
    words: userData.profession,
    loop: 0,
  });

  return (
    <header
      id="home"
      className="relative flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between md:py-20"
    >
      {/* Bloc texte */}
      <motion.div
        className="flex flex-1 flex-col gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="inline-flex max-w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-inner-glow">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          En poste • Ingénieur Données &amp; IA
        </p>

        <h1 className="space-y-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="block text-slate-300">Bonjour, je suis</span>

          <span className="relative inline-block">
            <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/30 via-emerald-500/20 to-transparent blur-2xl" />
            <span className="relative bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
              {userData.name}
            </span>
          </span>

          <span className="block text-lg font-normal text-slate-300 sm:text-xl">
            Ingénieur Données &amp; IA • ERILIA Marseille •{" "}
            <span className="font-semibold text-sky-400">{text}</span>
          </span>
        </h1>

        <p className="max-w-xl text-sm text-slate-300 sm:text-base md:text-lg">
          {userData.descriptionText}
        </p>

        <div className="pt-2">
          <SocialMediaLinks size="24" />
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <HeroBtn url="#contact" text="ME CONTACTER">
            <IoMdContact size={20} />
          </HeroBtn>
          <HeroBtn url="/api/download-resume" text="TÉLÉCHARGER MON CV">
            <IoMdDownload size={20} />
          </HeroBtn>
        </div>
      </motion.div>

      {/* Bloc photo */}
      <motion.div
        className="flex flex-1 items-center justify-center md:justify-end"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          {/* halo */}
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-sky-500/30 via-emerald-400/20 to-transparent blur-2xl" />

          {/* avatar rond avec fond sombre */}
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-slate-700/70 bg-slate-900/90 shadow-soft-lg md:h-80 md:w-80">
            <Image
              src={userData.image}
              alt={userData.name}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
