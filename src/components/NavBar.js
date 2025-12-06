"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import { links, userData } from "@/lib/utils";

function NavBar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (url) => {
    setActiveLink(url);
    if (isOpenMenu) {
      setIsOpenMenu(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 flex justify-center pb-2 pt-3">
      <motion.nav
        className="container mx-auto flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-2 shadow-soft-lg backdrop-blur-lg md:px-5"
        animate={{
          y: isScrolled ? 0 : 4,
          opacity: 1,
        }}
        initial={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Logo + nom */}
        <Link
          href="#home"
          onClick={() => handleNavigate("#home")}
          className="flex items-center gap-3"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80">
            <Image
              src={userData.image}
              alt={userData.name}
              className="h-full w-full object-cover"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-100">
              {userData.name}
            </span>
            <span className="text-[11px] text-slate-400">
              Data Engineer & Analyst
            </span>
          </div>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {links.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                onClick={() => handleNavigate(item.url)}
                className={`relative inline-flex items-center gap-1 transition-colors ${
                  activeLink === item.url
                    ? "text-sky-400"
                    : "hover:text-sky-300"
                }`}
              >
                <span>{item.text}</span>
                {activeLink === item.url && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger mobile */}
        <div className="md:hidden">
          <Hamburger
            toggled={isOpenMenu}
            toggle={setIsOpenMenu}
            size={20}
            rounded
          />
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpenMenu && (
            <motion.div
              className="absolute inset-x-3 top-14 rounded-2xl border border-slate-800/80 bg-slate-950/95 p-4 shadow-soft-lg backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <ul className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                {links.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      onClick={() => handleNavigate(item.url)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
                        activeLink === item.url
                          ? "bg-slate-800 text-sky-400"
                          : "hover:bg-slate-900 hover:text-sky-300"
                      }`}
                    >
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default NavBar;
