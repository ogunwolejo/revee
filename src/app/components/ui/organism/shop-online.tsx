"use client";

import Image from "next/image";
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

  return (
    <section
      id="shop-online"
      className="min-h-screen h-screen w-full px-12 md:px-16 lg:px-12 xl:px-24 py-6 md:py-0 bg-gray-section relative"
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <section
        id="shop-content"
        className="flex flex-col md:flex-row justify-between xl:justify-start items-center w-full h-full 2xl:gap-48"
      >
        {/*************** start of left hand-side of the section ******************************************************************************* */}
        <div className="h-[400px] xl:h-[500px] flex flex-col justify-between items-start p-2">
          <h2 className="text-3xl xl:text-5xl font-paytone text-black">
            Shop Online
          </h2>
          <div className="flex flex-col justify-start items-start space-y-4 lg:space-y-6">
            <p className="w-[280px] lg:w-[333px] font-normal font-dm-sans text-base text-black">
              Experience the world at your fingertips with our seamless online
              shopping platform.
            </p>
            <p className="w-[280px] lg:w-[333px] font-normal font-dm-sans text-base text-black">
              From the latest fashion trends to must-have gadgets, shop the
              world's best brands and products from the comfort of your own
              home.
            </p>
          </div>

          <div className="flex flex-col justify-start gap-4">
            <p className="text-black font-dm-sans font-normal text-sm lg:tracking-tight xl:tracking-normal">
              Get Revve on your phone
            </p>
            <DownloadAppBtn classes="border-black bg-black font-dm-sans font-bold text-white rounded-xl h-12 w-[186px] inline-flex justify-center items-center cursor-pointer !outline-none !ring-0" />
          </div>
        </div>

        {/*************** start of left hand-side of the section ******************************************************************************* */}

        {/*************** bg-black/50 start of right hand-side of the section ******************************************************************************* */}
        <div className="flex justify-start h-auto space-x-6 md:space-x-12 lg:space-x-16 xl:space-x-20">
          <Image
            src="/png/shop/iPhone.png"
            className="w-[432px] 2xl:w-[600px]"
            alt="iphone"
            width={100}
            height={100}
          />

          {/**---------------------------------------- Gallery 1 ---------------------------------------------------------------- */}
          <div
            id="gallery_1"
            className="lg:w-[120px] h-[790px] absolute bottom-5 lg:left-[61%] 2xl:left-[68%] hidden xl:flex flex-col justify-end gap-4"
          >
            {gallery1.map((gal, idx) => (
              <Image
                key={idx}
                src={gal.src}
                alt={gal.alt}
                className="w-full h-[120px]"
                height={100}
                width={100}
              />
            ))}
          </div>

          {/**---------------------------------------- Gallery 2 ---------------------------------------------------------------- */}
          <div
            id="gallery_2"
            className="lg:w-[120px] h-[700px] absolute lg:left-[70%] 2xl:left-[75%] top-10 hidden xl:flex flex-col justify-end gap-[120px]"
          >
            <Image
              src="/png/shop/pastry.png"
              alt="pastries"
              className="w-full h-[120px]"
              height={100}
              width={100}
            />

            <Image
              src="/png/shop/mask-group.png"
              alt="mask-group"
              className="w-full h-[256px]"
              height={100}
              width={100}
            />
          </div>
          <div
            id="gallery_3"
            className="lg:left-[79%] 2xl:left-[82%] h-[690px] absolute bottom-5 xl:bottom-30 right-0 hidden xl:block"
          >
            <div className="relative h-full w-full space-y-4">
              <Image
                src="/png/shop/hat.png"
                alt="hat"
                className="size-[120px] mt-[20px] xl:mt-[120px]"
                height={100}
                width={100}
              />

              <Image
                src="/png/shop/nike.png"
                alt="hat"
                className="w-full h-[256px]"
                height={100}
                width={100}
              />

              <div className="flex justify-end">
                <Image
                  src="/png/shop/pc.png"
                  alt="hat"
                  className="size-[120px]"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
        {/*************** end of right hand-side of the section ******************************************************************************* */}
      </section>
    </section>
  );
};
