"use client";

import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { memo, NamedExoticComponent, ReactNode } from "react";
import "./slide-arrow.scss";

interface Props {
  label: string;
  arrow: ReactNode;
  positioning?: "left" | "right";
  classes?: string;
  prevLabel?: string;
}

export const SlideArrow: NamedExoticComponent<Props> = memo(
  ({ arrow, label, positioning = "left", classes, prevLabel }) => {
    // Determine animation direction based on whether label changed
    const shouldAnimate = prevLabel && prevLabel !== label;

    const labelAnimation = {
      initial: (direction: number) => ({
        y: direction > 0 ? "100%" : "-100%",
        opacity: 0.8,
        filter: "blur(2px)",
      }),
      animate: {
        y: "0%",
        opacity: 1,
        filter: "blur(0)",
        transition: {
          duration: 1.2,
        },
      },
      exit: (direction: number) => ({
        y: direction > 0 ? "-100%" : "100%",
        opacity: 0.8,
        filter: "blur(2px)",
        transition: {
          duration: 1.2,
        },
      }),
    };

    const direction = positioning === "left" ? 1 : -1;

    return (
      <div
        aria-label={`slider-${positioning}`}
        aria-controls={positioning}
        id="slide_arrow"
        className={clsx(
          "hidden md:flex flex-col w-auto p-2",
          positioning === "left"
            ? "justify-center items-start"
            : "justify-center items-end",
          classes
        )}
        aria-roledescription="slide arrow"
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.h3
            key={label}
            custom={direction}
            variants={shouldAnimate ? labelAnimation : {}}
            initial="initial"
            animate="animate"
            exit="exit"
            role="heading"
            className="font-medium font-dm-sans text-2xl lg:text-5xl text-white mb-4 lg:mb-6"
          >
            {label}
          </motion.h3>
        </AnimatePresence>
        {arrow}
      </div>
    );
  }
);

SlideArrow.displayName = "SlideArrow";
