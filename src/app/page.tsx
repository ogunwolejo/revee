"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { CountryMoney } from "./components/country-money";
import { DownloadAppBtn } from "./components/download-app-btn";
import { AppLogo } from "./components/logo";
import { SlideArrow } from "./components/slide.arrows";
import { Transaction } from "./components/transaction";
import { child, container, visibilityAnimation } from "./libs/motion";
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

      {/* ------------------- start of the left side navigation and content ------------------------------------------------------------ */}
      <motion.div
        initial={visibilityAnimation.initial}
        animate={textAnimationComplete ? visibilityAnimation.animate : {}}
        transition={visibilityAnimation.transition}
        className="absolute left-5 lg:left-10 bottom-0"
      >
        <SlideArrow
          arrow={
            <ArrowRightIcon className="size-[42px] lg:size-[52px] text-white stroke-white" />
          }
          label="Canada"
        />
      </motion.div>

      <motion.p
        initial={visibilityAnimation.initial}
        animate={textAnimationComplete ? visibilityAnimation.animate : {}}
        transition={visibilityAnimation.transition}
        className="font-dm-sans font-medium absolute bottom-20 left-5 lg:left-10 text-white hidden lg:block w-[260px] p-1"
      >
        Seamlessly bridge distances with our effortless remittance service. Send
        support, and financial care to your loved ones back home.
      </motion.p>
      {/* ------------------- End of the left side navigation and content ------------------------------------------------------------ */}

      {/* ------------------- start of the right side navigation ------------------------------------------------------------ */}
      <motion.div
        initial={visibilityAnimation.initial}
        animate={textAnimationComplete ? visibilityAnimation.animate : {}}
        transition={visibilityAnimation.transition}
        className="absolute right-0 md:right-5 lg:right-5 xl:right-10 bottom-0"
      >
        <SlideArrow
          arrow={
            <ArrowLeftIcon className="size-[42px] lg:size-[52px] text-white stroke-white" />
          }
          label="Canada"
          positioning="right"
        />
      </motion.div>

      <motion.div
        initial={visibilityAnimation.initial}
        animate={textAnimationComplete ? visibilityAnimation.animate : {}}
        transition={visibilityAnimation.transition}
        className="flex flex-col justify-start items-start gap-2 absolute bottom-[80%] lg:bottom-20 right-10 md:right-25 lg:right-5 xl:right-10 lg:w-[180px] xl:w-[186px]"
      >
        <p className="text-white/52 font-dm-sans font-normal text-sm md:text-base lg:tracking-tight xl:tracking-normal">
          Get Revve on your phone
        </p>
        <DownloadAppBtn />
      </motion.div>
      {/* ------------------- start of the right side navigation ------------------------------------------------------------ */}

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
        className="backdrop-brightness-200 border-b-0 border-t-8 border-l-0 md:border-l-8 border-r-8 border-white absolute bottom-0 rounded-r-4xl md:rounded-t-4xl w-5/6 md:w-4/6 lg:w-4/8 xl:w-[480px] 2xl:w-[580px] left-0 md:left-35 lg:left-[30%] xl:left-[37%] flex flex-col justify-center items-between px-1 md:px-4"
      >
        <div className="">
          <CountryMoney flag="" money="" shouldReverse={true} />
          <div className="w-full fixed bottom-10">
            <Transaction />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
