import React, { useState } from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

import LogoMobile from "@/assets/logo-mobile.svg";
import Menu from "@/assets/menu.svg";

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Menu", href: "/" },
  { id: 3, label: "Recompensas", href: "/" },
  { id: 4, label: "Gift Cards", href: "/" },
  { id: 5, label: "Lojas", href: "/" },
];

const navbarVariant: Variants = {
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
    <header className="fixed z-30 flex h-24 w-full items-center justify-between border-b border-[#29292E] bg-black px-8">
      <Image src={LogoMobile} alt="Logo" />
      <button onClick={() => setShow(!show)}>
        <Image src={Menu} alt="Menu" />
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
