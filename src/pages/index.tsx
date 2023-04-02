import Head from "next/head";
import React from "react";
import { Manrope } from "next/font/google";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const manrope = Manrope({
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div
      className={`${manrope.className} font-manrope relative min-h-screen dark:bg-black dark:text-white`}
    >
      <Head>
        <title>RocketCoffee</title>
        <meta
          name="description"
          content="RocketCoffee: Uma Landing Page da Cafeteria RocketCoffee"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />
      <Main />
    </div>
  );
};

export default Home;

{
  /* <div className="absolute -bottom-[100px] -left-[80px] h-[320px] w-[320px] rounded-full bg-purple blur-[125px]" /> */
}
