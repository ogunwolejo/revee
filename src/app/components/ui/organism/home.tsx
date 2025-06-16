"use client";

import Image from "next/image";
import { Box } from "../atoms/home/box";
import { CurrencyView } from "../atoms/home/currency.view";
import { HomeMainView } from "../atoms/home/main";
import { HomeIndicator } from "../atoms/indicator/home.indicator";
import { ScrollIndicator } from "../atoms/indicator/scroll.indicator";

export const Home = () => {
  return (
    <>
      <section
        id="send_receive_money"
        className="min-h-screen h-full w-full px-12 md:px-16 lg:px-12 xl:px-24 py-6 md:py-0 bg-white relative flex flex-col justify-between items-center"
      >
        <HomeIndicator />
        <ScrollIndicator />

        {/**********  start of the naira box ***************************/}
        <Box
          icon={
            <div className="rounded-full border-white border-4 flex justify-center items-center p-2 lg:p-4 size-[60px] lg:size-[80px]">
              <Image
                src="/svg/home/naira.svg"
                alt="Send and Receive Money"
                height={80}
                width={80}
                className="size-[50px] lg:size-[60px]"
              />
            </div>
          }
          classes="bg-purple size-[100px] lg:size-[152px] absolute left-[2%] lg:left-[10%] xl:left-[25%] top-60 hidden md:flex"
        />
        {/**********  end of the naira box ***************************/}

        {/**********  start of the send text box ***************************/}
        <Box
          icon={
            <h6 className="font-paytone font-[400] text-5xl text-white">
              Send
            </h6>
          }
          classes="bg-darkgreen size-[152px] absolute right-[0] bottom-15 hidden lg:flex"
        />
        {/**********  end of the send text box ***************************/}

        {/**********  start of the plane box ***************************/}
        <Box
          icon={
            <Image
              src="/svg/home/plane.svg"
              alt="Send and Receive Money"
              height={64}
              width={64}
              className="size-[40px] lg:size-[64px]"
            />
          }
          classes="bg-lightgreen size-[100px] lg:size-[152px] absolute md:right-[2%] lg:right-[10%] xl:right-[25%] top-[40%] hidden md:flex"
        />
        {/**********  end of the plane box ***************************/}

        {/* <PicBox src="" />
      <PicBox src="" /> */}

        <div className="flex-grow">
          <HomeMainView />
        </div>
      </section>
      <CurrencyView />
    </>
  );
};
