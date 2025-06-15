"use client";
import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

interface Props {
  flag: string;
  money: string;
  shouldReverse?: boolean;
}

export const CountryMoney: NamedExoticComponent<Props> = memo(
  ({ flag, money, shouldReverse = false }) => {
    return (
      <div
        className={`flex w-full ${
          shouldReverse ? "flex-row" : "flex-row-reverse"
        } justify-between items-center p-1 md:p-2 mx-2 `}
      >
        <div
          id="flag_container"
          className="rounded-full size-16 lg:size-20 items-center border border-white border-4"
        >
          <Image
            src={flag}
            alt="canada flag"
            className="object-cover h-full w-full rounded-full"
            width={52}
            height={52}
            priority={false}
          />
        </div>
        <h3 className="text-white font-paytone text-5xl xl:text-7xl">
          {money}
        </h3>
      </div>
    );
  }
);

CountryMoney.displayName = "CountryMoney";
