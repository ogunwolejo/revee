"use client";

import Image from "next/image";

export const ScrollIndicator = () => {
  return (
    <div className="flex w-full justify-center items-center h-24">
      <div className="inline-flex items-center gap-3">
        <Image
          src="/svg/indicators/arrow.svg"
          alt="arrow"
          className="size-[20px]"
          width={20}
          height={20}
        />
        <p className="text-black/30 font-dn-sans font-medium text-sm lg:text-base">
          or
        </p>
        <Image
          src="/svg/indicators/mouse.svg"
          alt="arrow"
          className="size-[20px]"
          width={20}
          height={20}
        />
        <p className="text-black/30 font-dn-sans font-medium text-sm lg:text-base">
          Scroll down
        </p>
      </div>
    </div>
  );
};
