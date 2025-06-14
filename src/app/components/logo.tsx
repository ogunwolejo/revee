"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

export const AppLogo: NamedExoticComponent<{
  textAnimationComplete?: boolean;
}> = memo(({ textAnimationComplete = true }) => (
  <motion.div
    id="logo_container"
    initial={{ opacity: 0, scale: 0 }}
    animate={textAnimationComplete ? { opacity: 1, scale: 1 } : {}}
    transition={{
      type: "spring",
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.3, bounce: 0.3 },
      delay: 0.1,
    }}
  >
    <Image
      src="/svg/logo.svg"
      alt="logo"
      priority
      className="size-[40px] md:size-[50px] lg:size-[80] xl:size-[120px]"
      width={120}
      height={120}
    />
  </motion.div>
));

AppLogo.displayName = "AppLogo";
