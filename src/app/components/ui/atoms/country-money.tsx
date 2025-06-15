"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

interface Props {
  flag: string;
  money: string;
  shouldReverse?: boolean;
  slideDirection: "right" | "left";
}

export const CountryMoney: NamedExoticComponent<Props> = memo(
  ({ flag, money, shouldReverse = false, slideDirection }) => {
    // Velocity-based animation parameters
    const slideConfig = {
      left: {
        initialVelocity: -3, // Starts fast moving right-to-left
        deceleration: 0.015, // Gradual slowdown
        overshoot: 0.5, // Slight bounce-back
      },
      right: {
        initialVelocity: 3, // Starts fast moving left-to-right
        deceleration: 0.02, // Slightly faster slowdown
        overshoot: 0.3,
      },
    };

    return (
      <motion.div
        initial={{
          x: slideDirection === "left" ? 300 : -300,
          boxShadow:
            slideDirection === "left"
              ? "60px 0 30px rgba(255,255,255,0.3)"
              : "-60px 0 30px rgba(255,255,255,0.3)",
        }}
        animate={{
          x: 0,
          boxShadow: "0 0 0 rgba(255,255,255,0)",
          ease:
            slideDirection === "left"
              ? [0.17, 0.67, 0.83, 0.67]
              : [0.83, 0.67, 0.17, 0.67],
        }}
        transition={{
          type: "spring",
          duration: 1.5,
          ease: slideDirection === "left" ? "easeIn" : "easeOut",
        }}
        className={`flex w-full ${
          shouldReverse ? "flex-row" : "flex-row-reverse"
        } justify-between items-center p-1 md:p-2 mx-2 `}
      >
        <motion.div
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
        </motion.div>
        <motion.h3 className="text-white font-paytone text-5xl xl:text-7xl">
          {money}
        </motion.h3>
      </motion.div>
    );
  }
);

CountryMoney.displayName = "CountryMoney";
