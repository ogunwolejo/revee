"use client";

import clsx from "clsx";
import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

interface CurrencyCardProps {
  classes?: string;
  flag: string;
  amount: string;
  country: string;
  countryCode: string;
  image: "visa" | "mastercard";
}

export const CurrencyCard: NamedExoticComponent<CurrencyCardProps> = memo(
  ({ classes, flag, amount, country, image, countryCode }) => {
    return (
      <div
        id="card-container"
        className={clsx(
          "w-[328px] h-[180px] p-4 lg:p-6 flex flex-col justify-between items-start rounded-xl",
          classes
        )}
      >
        <section className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="rounded-full border-2 border-white">
              <Image
                src={flag}
                alt={`${country} flag`}
                className="object-cover rounded-full"
                width={32}
                height={32}
              />
            </div>
            <h6 className="font-bold font-paytone text-base lg:text-lg text-white uppercase">
              {countryCode}
            </h6>
          </div>

          <h6 className="font-bold font-paytone text-base lg:text-lg text-white uppercase">
            {amount}
          </h6>
        </section>

        <section className="flex justify-between items-center w-full">
          <p className="font-normal text-sm font-roboto text-white">
            {country}
          </p>
          {image === "visa" ? (
            <Image
              src="/svg/visa.svg"
              alt="Visa Card"
              width={78}
              height={24}
              className="w-[78px] h-[24px]"
            />
          ) : (
            <Image
              src="/svg/master-card.svg"
              alt="MasterCard"
              width={40.5}
              height={24}
              className="w-[40.5px] h-[24px]"
            />
          )}
        </section>
      </div>
    );
  }
);

CurrencyCard.displayName = "CurrencyCard";
