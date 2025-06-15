"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Script from "next/script";
import { useLayoutEffect, useMemo, useState } from "react";
import { CountryMoney } from "./components/country-money";
import { DownloadAppBtn } from "./components/download-app-btn";
import { AppLogo } from "./components/logo";
import { SlideArrow } from "./components/slide.arrows";
import { Transaction } from "./components/transaction";
import { child, container, visibilityAnimation } from "./libs/motion";
import "./page.scss";

interface LayoutContent {
  bgImages: string;
  navigationContent: {
    left: string;
    right: string;
  };
  phoneFrame: {
    transaction: {
      image: string;
      amount: string;
      time: string;
      label: string;
    };
    main: {
      flagImg: string;
      amount: string;
      positioning: "left" | "right";
    };
  };
}

export default function Home() {
  const [textAnimationComplete, setTextAnimationComplete] =
    useState<boolean>(false);
  const [bgIndex, setBgIndex] = useState<number>(0);
  const text = "Send. Shop. Spend";
  const letters = Array.from(text);

  const layoutContent: LayoutContent[] = useMemo(
    () =>
      [
        {
          bgImages: "/svg/sliderA.svg",
          navigationContent: {
            left: "Canada",
            right: "Nigeria",
          },
          phoneFrame: {
            main: {
              amount: "+C$750",
              flagImg: "/png/canada.png",
              positioning: "left",
            },
            transaction: {
              amount: "-₦862,912.94",
              image: "/png/gtbank.png",
              label: "Transfer to Lil Sis",
              time: "Yesterday, 1:28 AM",
            },
          },
        },
        {
          bgImages: "/svg/sliderB.svg",
          navigationContent: {
            left: "Canada",
            right: "Ghana",
          },
          phoneFrame: {
            main: {
              amount: "+₵3,920",
              flagImg: "/png/flags/ghana.png",
              positioning: "right",
            },
            transaction: {
              amount: "-C$440.11",
              image: "/png/absa.png",
              label: "Online transaction",
              time: "Today, 9:45 AM",
            },
          },
        },
        {
          bgImages: "/svg/sliderC.svg",
          navigationContent: {
            left: "Nigeria",
            right: "Ghana",
          },
          phoneFrame: {
            main: {
              amount: "-₦98,000",
              flagImg: "/png/flags/nigeria.png",
              positioning: "left",
            },
            transaction: {
              amount: "-₵760.87",
              image: "/png/mcdonalds.png",
              label: "Paid at KFC",
              time: "Today, 11:28 AM",
            },
          },
        },
        {
          bgImages: "/svg/sliderD.svg",
          navigationContent: {
            left: "Nigeria",
            right: "Nigeria",
          },
          phoneFrame: {
            main: {
              amount: "-₦17,000",
              flagImg: "/png/flags/nigeria.png",
              positioning: "right",
            },
            transaction: {
              amount: "+₦17,000",
              image: "/png/mtn.png",
              label: "Airtime top-up",
              time: "Today, 3:15 PM",
            },
          },
        },
      ] as LayoutContent[],
    []
  );

  // prefetched all the images
  const prefetchScript = useMemo(
    () => (
      <Script
        id="prefetch-images"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            ${layoutContent
              .map(
                (content) => `
              const img${content.bgImages.replace(/\W/g, "_")} = new Image();
              img${content.bgImages.replace(/\W/g, "_")}.src = '${
                  content.bgImages
                }';
            `
              )
              .join("")}
          `,
        }}
      />
    ),
    [layoutContent]
  );

  // Change image every 10 seconds
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % layoutContent.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [layoutContent.length]);

  return (
    <div className="relative min-h-screen border-box">
      {prefetchScript}
      <div className="absolute inset-0 bg-black/50 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={layoutContent[bgIndex].bgImages}
              alt="hero"
              className="w-full h-full object-cover"
              width={100}
              height={100}
              priority
            />
          </motion.div>
        </AnimatePresence>
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
          label={layoutContent[bgIndex].navigationContent.left}
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
          label={layoutContent[bgIndex].navigationContent.right}
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
          <CountryMoney
            flag={layoutContent[bgIndex].phoneFrame.main.flagImg}
            money={layoutContent[bgIndex].phoneFrame.main.amount}
            shouldReverse={
              layoutContent[bgIndex].phoneFrame.main.positioning === "left"
            }
          />
          <div className="w-full fixed bottom-10">
            <Transaction
              amount={layoutContent[bgIndex].phoneFrame.transaction.amount}
              content={layoutContent[bgIndex].phoneFrame.transaction.label}
              logo={layoutContent[bgIndex].phoneFrame.transaction.image}
              time={layoutContent[bgIndex].phoneFrame.transaction.time}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
