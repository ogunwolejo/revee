/** ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *  This has to do with motion animation
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **/

import { Variants } from "motion/debug";

//import { Variants } from "motion/react";

// making each letter to be visible ne-by-one
export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each letter
    },
  },
};

export const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

// visibility animation
export const visibilityAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    type: "spring",
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.3, bounce: 0.3 },
    delay: 0.1,
  },
};
