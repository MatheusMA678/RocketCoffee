import Head from "next/head";
import React from "react";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const manrope = Manrope({
  subsets: ["latin"],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>RocketCoffee</title>
        <meta
          name="description"
          content="RocketCoffee: Uma Landing Page da Cafeteria RocketCoffee"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div
        className={`${manrope.className} font-manrope relative min-h-screen overflow-hidden dark:bg-black dark:text-white`}
      >
        <motion.div className="absolute -right-24 -top-24 hidden h-52 w-52 rounded-full bg-purple blur-[100px] sm:block" />
        <motion.div className="absolute -bottom-24 -left-24 hidden h-52 w-52 rounded-full bg-purple blur-[100px] sm:block" />
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="absolute -bottom-[100px] -left-[80px] h-[320px] w-[320px] rounded-full bg-purple blur-[125px]" /> */
}
