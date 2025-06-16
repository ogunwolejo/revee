"use client";

import Image from "next/image";

export const PointerIndicator = () => {
  return (
    <div className="">
      <div className="inline-flex justify-start items-start gap-3">
        <Image
          src="/svg/indicators/mouse-white.svg"
          alt="arrow"
          className="size-[20px] text-white fill-white"
          width={20}
          height={20}
        />
        <p className="text-white/30 font-dn-sans font-medium text-sm lg:text-base w-[234px]">
          Point your mouse cursor here to continue scrolling
        </p>
      </div>
    </div>
  );
};
