"use client";

import clsx from "clsx";
import { memo, NamedExoticComponent, ReactNode } from "react";
import "./slide-arrow.scss";

interface Props {
  label: string;
  arrow: ReactNode;
  positioning?: "left" | "right";
  classes?: string;
}

export const SlideArrow: NamedExoticComponent<Props> = memo(
  ({ arrow, label, positioning = "left", classes }) => (
    <div
      aria-label="slider-left"
      aria-controls="left"
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
      <h3
        role="heading"
        className="font-medium font-dm-sans text-2xl lg:text-5xl text-white mb-4 lg:mb-6"
      >
        {label}
      </h3>
      {arrow}
    </div>
  )
);

SlideArrow.displayName = "SlideArrow";
