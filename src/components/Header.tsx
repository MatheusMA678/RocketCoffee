import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import LogoMobile from "@/assets/logo-mobile.svg";
import Menu from "@/assets/menu.svg";
import LogoDesktop from "@/assets/logo-desktop.svg";

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Menu", href: "/" },
  { id: 3, label: "Recompensas", href: "/" },
  { id: 4, label: "Gift Cards", href: "/" },
  { id: 5, label: "Lojas", href: "/" },
];

const navbarVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <header className="fixed z-30 flex h-24 w-full items-center justify-between border-b border-[#29292E] bg-black px-8  sm:justify-center sm:gap-24 sm:border-none sm:bg-transparent">
      <Image
        src={LogoMobile as StaticImageData}
        alt="Logo"
        className="sm:hidden"
      />
      <Image
        src={LogoDesktop as StaticImageData}
        alt="Logo"
        className="hidden sm:block"
      />
      <button onClick={() => setShow(!show)} className="sm:hidden">
        <Image src={Menu as StaticImageData} alt="Menu" />
      </button>
      <nav className="hidden items-center gap-4 sm:flex">
        {links.map((link) => (
          <div className="text-sm font-semibold">{link.label}</div>
        ))}
      </nav>
      <button className="hidden rounded-md border border-purple px-8 py-2 text-sm font-bold transition hover:bg-purple sm:block">
        PEGAR MEU CAFÉ
      </button>
      <motion.nav
        variants={navbarVariant}
        className={`${
          show ? "flex" : "hidden"
        } fixed left-0 right-0 top-24 h-screen flex-col bg-black`}
      >
        {links.map((link, index) => (
          <div
            className={`${
              currentIndex === index ? "border-l-4 border-l-purple" : ""
            } cursor-pointer border border-[#29292E] px-8 py-4 text-sm font-semibold transition`}
            key={link.id}
            onClick={() => setCurrentIndex(index)}
          >
            {link.label}
          </div>
        ))}
      </motion.nav>
    </header>
  );
};
