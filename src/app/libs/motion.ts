/** ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *  This has to do with motion animation
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **/

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

export const child = {
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
