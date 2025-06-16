"use client";

import { useAnimation, useInView } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { DownloadAppBtn } from "../atoms/download-app-btn";

export const ShopOnline = () => {
  const gallery1: Array<{ src: string; alt: string }> = [
    {
      alt: "perfume-coco",
      src: "/png/shop/perfume-coco.png",
    },
    {
      alt: "",
      src: "/png/shop/high-heels.png",
    },
    {
      alt: "",
      src: "/png/shop/white-bag.png",
    },
    {
      alt: "iphone-table",
      src: "/png/shop/iphone-table24.png",
    },
  ];

  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const galleryItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section
      id="shop-online"
      className="min-h-screen h-screen w-full px-12 md:px-16 lg:px-12 xl:px-24 py-6 md:py-0 bg-gray-section relative"
      ref={mainRef}
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <motion.section
        id="shop-content"
        className="flex flex-col md:flex-row justify-between xl:justify-start items-center w-full h-full 2xl:gap-48"
      >
        {/*************** Left side content ***************/}
        <motion.div
          className="h-[400px] xl:h-[500px] flex flex-col justify-between items-start p-2"
          initial="hidden"
          animate={controls}
          variants={container}
          //variants={container}
        >
          <motion.h2
            className="text-3xl xl:text-5xl font-paytone text-black"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            Shop Online
          </motion.h2>

          <div className="flex flex-col justify-start items-start space-y-4 lg:space-y-6">
            <motion.p
              className="w-[280px] lg:w-[333px] font-normal font-dm-sans text-base text-black"
              variants={item}
            >
              Experience the world at your fingertips with our seamless online
              shopping platform.
            </motion.p>
            <motion.p
              className="w-[280px] lg:w-[333px] font-normal font-dm-sans text-base text-black"
              variants={item}
            >
              From the latest fashion trends to must-have gadgets, shop the
              world's best brands and products from the comfort of your own
              home.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col justify-start gap-4"
            variants={item}
          >
            <motion.p
              className="text-black font-dm-sans font-normal text-sm lg:tracking-tight xl:tracking-normal"
              variants={item}
            >
              Get Revve on your phone
            </motion.p>
            <DownloadAppBtn classes="border-black bg-black font-dm-sans font-bold text-white rounded-xl h-12 w-[186px] inline-flex justify-center items-center cursor-pointer !outline-none !ring-0" />
          </motion.div>
        </motion.div>

        {/*************** Right side gallery ***************/}
        <motion.div
          className="flex justify-start h-auto space-x-6 md:space-x-12 lg:space-x-16 xl:space-x-20 "
          variants={slideIn}
        >
          {/* Main iPhone image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/png/shop/iPhone.png"
              className="w-[432px] 2xl:w-[600px]"
              alt="iphone"
              width={100}
              height={100}
            />
          </motion.div>

          {/** Gallery 1 - Right side */}
          <motion.div
            id="gallery_1"
            className="lg:w-[120px] h-[790px] absolute bottom-5 lg:left-[61%] 2xl:left-[68%] hidden xl:flex flex-col justify-end gap-4"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {gallery1.map((gal, idx) => (
              <motion.div
                key={idx}
                variants={galleryItem}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                style={{ position: "relative" }}
              >
                <Image
                  src={gal.src}
                  alt={gal.alt}
                  className="w-full h-[120px] object-contain"
                  height={120}
                  width={120}
                />
              </motion.div>
            ))}
          </motion.div>

          {/** Gallery 2 - Middle */}
          <motion.div
            id="gallery_2"
            className="lg:w-[120px] h-[700px] absolute lg:left-[70%] 2xl:left-[75%] top-10 hidden xl:flex flex-col justify-end gap-[120px]"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            <motion.div
              variants={galleryItem}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              style={{ position: "relative" }}
            >
              <Image
                src="/png/shop/pastry.png"
                alt="pastries"
                className="w-full h-[120px] object-contain"
                height={120}
                width={120}
              />
            </motion.div>

            <motion.div
              variants={galleryItem}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              style={{ position: "relative" }}
            >
              <Image
                src="/png/shop/mask-group.png"
                alt="mask-group"
                className="w-full h-[256px] object-contain"
                height={256}
                width={120}
              />
            </motion.div>
          </motion.div>

          {/** Gallery 3 - Far right */}
          <motion.div
            id="gallery_3"
            className="lg:left-[79%] 2xl:left-[82%] h-[690px] absolute bottom-5 xl:bottom-30 right-0 hidden xl:block space-y-2"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.div variants={galleryItem}>
              <Image
                src="/png/shop/hat.png"
                alt="hat"
                className="size-[120px] mt-[20px] xl:mt-[120px]"
                height={120}
                width={120}
              />
            </motion.div>

            <motion.div variants={galleryItem}>
              <Image
                src="/png/shop/nike.png"
                alt="nike-shoes"
                className="w-full h-[256px]"
                height={256}
                width={120}
              />
            </motion.div>

            <motion.div variants={galleryItem} className="flex justify-end">
              <Image
                src="/png/shop/pc.png"
                alt="computer"
                className="size-[120px]"
                height={120}
                width={120}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};
