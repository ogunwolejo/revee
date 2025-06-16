"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { NamedExoticComponent, memo } from "react";
import { DownloadAppBtn } from "../atoms/download-app-btn";

export const PayBills: NamedExoticComponent = memo(() => {
  return (
    <section
      id="pay_bills_container"
      className="min-h-screen h-screen w-full relative p-12 md:p-16 lg:p-12 xl:p-24"
    >
      <div className="absolute inset-0 bg-[rgba(0, 0, 0, 0.2)] z-0">
        <Image
          src="/svg/pay-bills.svg"
          alt="pay-bills"
          className="w-full h-full object-cover"
          width={100}
          height={100}
          priority
        />
      </div>
      <section
        id="pay-bills-content"
        className="flex flex-col md:flex-row justify-between items-center w-full h-full relative"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          className="h-[400px] xl:h-[600px] flex flex-col justify-between items-start p-2"
        >
          <motion.h2
            variants={{
              offscreen: {
                y: 0,
                opacity: 0,
                scale: 0,
              },
              onscreen: {
                y: 10,
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
                },
              },
            }}
            className="text-5xl xl:text-7xl font-paytone text-white"
          >
            Pay bills
          </motion.h2>
          <p className="w-[280px] lg:w-[333px] font-normal font-dm-sans text-base text-white">
            Say goodbye to long queues and endless processes—our platform offers
            a seamless solution for paying bills instantly without any hiccups.
          </p>
          <div className="flex flex-col justify-start gap-4">
            <p className="text-white font-dm-sans font-normal text-sm lg:tracking-tight xl:tracking-normal">
              Get Revve on your phone
            </p>
            <DownloadAppBtn
              text="Coming soon"
              classes="border-white bg-white font-dm-sans font-bold text-black rounded-xl h-12 w-[186px] inline-flex justify-center items-center cursor-pointer !outline-none !ring-0"
            />
          </div>
        </motion.div>
        <Image
          src="/svg/calender.svg"
          alt="calender"
          className="w-[340px] h-[488px] lg:h-[588px]"
          width={100}
          height={100}
          priority
        />
      </section>
    </section>
  );
});

PayBills.displayName = "PayBills";
