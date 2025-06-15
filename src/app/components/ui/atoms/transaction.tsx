"use client";

import Image from "next/image";
import { NamedExoticComponent, memo } from "react";
import "./transaction.scss";

interface Props {
  logo: string;
  time: string;
  content: string;
  amount: string;
}

export const Transaction: NamedExoticComponent<Props> = memo(
  ({ amount, content, logo, time }) => {
    return (
      <section
        id="transaction_card"
        className="h-16 w-[90%] md:w-5/6 lg:w-4/6 rounded-3xl mx-auto flex justify-stretch items-center px-4 py-2 bg-white/12 backdrop-contrast-50 drop-shadow-md"
        aria-roledescription="transaction card"
        role="contentinfo"
      >
        {/* <div className="absolute blur-sm"></div> */}
        <div className="flex justify-between items-center w-full">
          <div className="inline-flex justify-start items-center gap-2">
            <div
              id="transaction-company-logo"
              className="rounded-full size-[32px]"
            >
              <Image
                className="object-cover h-full w-full"
                src={logo}
                alt="transaction_bank"
                width={32}
                height={32}
                priority={false}
              />
            </div>
            <div
              id="transaction-content"
              className="flex flex-col justify-start items-start gap-0"
            >
              <p className="font-normal font-dm-sans text-white/52 text-xs md:text-sm lg:text-base">
                {time}
              </p>
              <p className="font-bold font-dm-sans text-white text-xs md:text-sm lg:text-base">
                {content}
              </p>
            </div>
          </div>
          <h4 className="text-white font-dm-sans font-bold text-base">
            {amount}
          </h4>
        </div>
      </section>
    );
  }
);

Transaction.displayName = "Transaction";
