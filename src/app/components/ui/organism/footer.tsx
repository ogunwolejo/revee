"use client";
import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

export const Footer: NamedExoticComponent = memo(() => {
  const footerLink: string[] = [
    "about us",
    "Privacy Policy",
    "Terms of use",
    "©2025 Revve. All rights reserved.",
  ];
  return (
    <footer
      id="footer"
      className="min-h-screen h-screen bg-purple w-full relative"
    >
      <div className="absolute inset-0"></div>
      <div
        id="footer-content"
        className="w-full h-full  flex flex-col justify-between items-start p-12 md:p-16 lg:p-12 xl:p-24 !pb-2"
      >
        <section></section>
        <section
          id="bottom_content"
          className="p-2 w-full flex justify-between items-center"
        >
          <div
            id="social-links"
            className="inline-flex gap-2 xl:gap-4 items-center"
          >
            <Image
              src="/png/footer/linkedin-logo.png"
              alt="linkedin-logo"
              width={20}
              height={20}
              className="size-[20px]"
            />
            <Image
              src="/png/footer/facebook.png"
              alt="facebook-logo"
              width={20}
              height={20}
              className="size-[20px]"
            />
            <Image
              src="/png/footer/twitter.png"
              alt="twitter"
              width={20}
              height={20}
              className="size-[20px]"
            />
            <Image
              src="/png/footer/group.png"
              alt="group"
              width={20}
              height={20}
              className="size-[20px]"
            />
          </div>
          <div
            id=""
            className="inline-flex justify-start items-center gap-4 xl:gap-6"
          >
            {footerLink.map((link) => (
              <h6
                key={link}
                className="capitalize font-dm-sans text-xs md:text-sm xl:text-base font-[500] text-white"
              >
                {link}
              </h6>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
