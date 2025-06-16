"use client";
import Image from "next/image";
import Link from "next/link";
import { memo, NamedExoticComponent } from "react";
import { ContactForm } from "../atoms/contact.form";

export const Footer: NamedExoticComponent = memo(() => {
  const footerLink: string[] = [
    "about us",
    "Privacy Policy",
    "Terms of use",
    "©2025 Revve. All rights reserved.",
  ];

  const socialMediaLinks: string[] = [
    "/svg/footer/linkedin-logo.svg",
    "/svg/footer/facebook.svg",
    "/svg/footer/twitter.svg",
    "/svg/footer/group.svg",
  ];

  return (
    <footer
      id="footer"
      className="min-h-screen h-screen bg-purple w-full relative"
    >
      <div className="absolute inset-0">
        <Image
          id="call-icon"
          className="absolute right-0 bottom-50 size-[288px] hidden xl:block"
          src="/svg/call.svg"
          alt="call-icon"
          height={100}
          width={100}
        />

        <Image
          id="envelope-icon"
          className="absolute left-[-75] bottom-15 w-[298px] h-[238px] hidden xl:block"
          src="/svg/envelope.svg"
          alt="envelope-icon"
          height={100}
          width={100}
        />

        <Image
          id="message-icon"
          className="absolute right-0 top-75 w-[270px] h-[260px] z-50 hidden xl:block"
          src="/svg/message.svg"
          alt="message-icon"
          height={100}
          width={100}
        />
      </div>
      <div
        id="footer-content"
        className="w-full h-full flex flex-col justify-between items-start p-12 md:p-16 lg:p-12 xl:p-24 !pb-2 relative"
      >
        {/**************** Start of the form container ******************************************************** */}
        <ContactForm />
        {/**************** End of the form container ******************************************************** */}

        {/**************** Start of the bottom links ******************************************************** */}
        <section
          id="bottom_content"
          className="w-full flex flex-col lg:flex-row lg:justify-between justify-start items-start lg:items-center"
        >
          <div id="social-links" className="flex gap-2 lg:gap-4 items-center">
            {socialMediaLinks.map((media, idx) => (
              <Link
                key={idx}
                href="#"
                target="_blank"
                className="cursor-pointer"
              >
                <Image
                  src={media}
                  alt="social-logo"
                  width={20}
                  height={20}
                  className="size-[12px] md:size-[16px] lg:size-[20px]"
                />
              </Link>
            ))}
          </div>
          <div
            id=""
            className="flex justify-start items-start flex-nowrap gap-4"
          >
            {footerLink.map((path, idx: number) => (
              <Link
                key={idx}
                href="#"
                target="_blanket"
                className="capitalize font-dm-sans text-xs lg:text-sm  font-[500] text-white cursor-pointer"
              >
                {path}
              </Link>
            ))}
          </div>
        </section>
        {/**************** End of the bottom links ******************************************************** */}

        {/**************** Start of the images links ******************************************************** */}
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
