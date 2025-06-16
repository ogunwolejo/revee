"use client";

import clsx from "clsx";
import { memo, NamedExoticComponent, ReactNode } from "react";

interface Props {
  classes?: string; // default size is 152px for large screens
  icon: ReactNode;
}

export const Box: NamedExoticComponent<Props> = memo(
  ({ classes = "", icon }) => {
    return (
      <div
        id="box"
        className={clsx(
          "flex justify-center items-center p-6 rounded-[2.2rem] shadow-xl shadow-black/40 border-box",
          classes
        )}
      >
        {icon}
      </div>
    );
  }
);
