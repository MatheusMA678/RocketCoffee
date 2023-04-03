import Image, { type StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import Cups from "@/assets/cups-big.png";
import Coffee1 from "@/assets/coffee1.png";
import Coffee2 from "@/assets/coffee2.png";

const container = {
  hidden: {
    opacity: 0,
    translateY: 50,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-12 overflow-hidden px-7 pt-40 text-center sm:gap-4">
      <h1 className="px-12 text-3xl font-semibold sm:hidden">
        O café que fará seu código decolar para o próximo nível.
      </h1>
      <button className="flex items-center gap-4 rounded-md bg-black px-8 py-2 text-xs font-extrabold ring-1 ring-secondPurple transition hover:opacity-80 active:bg-secondPurple active:opacity-100 sm:hidden">
        PEDIR MEU CAFÉ
        <Image src={ArrowRight as StaticImageData} alt="Pedir meu café" />
      </button>
      <h2 className="text-center text-4xl font-extrabold sm:text-6xl">
        Greate Coffee <br />
        <span className="font-outline text-black">
          &#60;Great Code&#47;&#62;
        </span>
      </h2>
      <motion.div
        className="relative flex items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="absolute h-48 w-48 rounded-full bg-purple blur-[100px] sm:hidden"
        />
        <motion.div className="absolute -left-14 sm:-left-24" variants={item}>
          <Image src={Coffee1} alt="Grãos de Café" className="sm:w-[100px]" />
        </motion.div>
        <motion.div className="relative">
          <Image src={Cups} alt="Copos" className="w-52 sm:w-[500px]" />
        </motion.div>
        <motion.div className="absolute -right-20 sm:-right-32" variants={item}>
          <Image src={Coffee2} alt="Grãos de Café" className="sm:w-[200px]" />
        </motion.div>
      </motion.div>
    </main>
  );
};
