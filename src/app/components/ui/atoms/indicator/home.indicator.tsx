"use client";

import Image from "next/image";

export const HomeIndicator = () => {
  return (
    <div className="flex justify-start items-center gap-3 h-24">
      <Image
        src="/svg/indicators/hour-glass.svg"
        alt="hour-glass"
        className=""
        width={20}
        height={20}
      />
      <p className="text-black/30 font-dn-sans font-medium text-sm lg:text-base">
        please wait...
      </p>
    </div>
  );
};
