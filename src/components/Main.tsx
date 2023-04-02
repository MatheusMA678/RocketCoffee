import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import Cups from "@/assets/cups.png";
import Coffee1 from "@/assets/coffee1.png";
import Coffee2 from "@/assets/coffee2.png";

const container: Variants = {
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

const item: Variants = {
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
    <main className="flex flex-col items-center gap-12 overflow-hidden px-7 pt-32 text-center">
      <h1 className="px-12 text-3xl font-semibold">
        O café que fará seu código decolar para o próximo nível.
      </h1>
      <button className="flex items-center gap-4 rounded-md bg-black px-8 py-2 text-xs font-extrabold ring-1 ring-secondPurple transition hover:opacity-80 active:bg-secondPurple active:opacity-100">
        PEDIR MEU CAFÉ
        <Image src={ArrowRight} alt="Pedir meu café" />
      </button>
      <h2 className="text-center text-4xl font-extrabold">
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
          className="absolute h-48 w-48 rounded-full bg-purple blur-[100px]"
        />
        <motion.div className="absolute -left-10" variants={item}>
          <Image src={Coffee1} alt="Grãos de Café" />
        </motion.div>
        <motion.div className="relative">
          <Image src={Cups} alt="Copos" />
        </motion.div>
        <motion.div className="absolute -right-16" variants={item}>
          <Image src={Coffee2} alt="Grãos de Café" />
        </motion.div>
      </motion.div>
    </main>
  );
};
