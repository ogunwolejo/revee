"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { AppLogo } from "./components/logo";
import { child, container } from "./libs/motion";
import "./page.scss";

export default function Home() {
  const [textAnimationComplete, setTextAnimationComplete] =
    useState<boolean>(false);
  const text = "Send. Shop. Spend";
  const letters = Array.from(text);

  return (
    <div className="relative min-h-screen border-box">
      <div className="absolute inset-0 bg-black/50 z-0">
        <Image
          src="/svg/sliderA.svg"
          alt="hero"
          className="w-full h-full object-cover"
          width={100}
          height={100}
          priority
        />
      </div>

      {/* ------------------- start of the content on the background ------------------------------------------------------------ */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        onAnimationComplete={() => setTextAnimationComplete(true)}
        className="relative z-10 p-8 text-white"
      >
        <div className="flex justify-between items-center w-full">
          <AppLogo textAnimationComplete={textAnimationComplete} />
          <motion.h1
            className="text-4xl md:text-6xl font-paytone p-1 lg:p-4 text-center w-full"
            variants={container}
          >
            {letters.map((letter, index: number) => (
              <motion.span key={index} variants={child}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </motion.div>
      {/* ------------------- end of the content on the background ------------------------------------------------------------ */}

      {/* ------------------- start of the rounded border that brightens ------------------------------------------------------------ */}
      <motion.div
        id="brightens_rounded_corner"
        initial={{ y: "250px", opacity: 0 }}
        animate={textAnimationComplete ? { y: 0, opacity: 1 } : {}}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          delay: 0.1,
        }}
        className="backdrop-brightness-200 border-b-0 border-t-8 border-l-8 border-r-8 border-white absolute bottom-0 rounded-t-4xl w-5/6 md:w-4/6 lg:w-4/8 xl:w-2/6 left-0 md:left-35 lg:left-[30%] xl:left-[37%]"
      ></motion.div>
    </div>
  );
}
