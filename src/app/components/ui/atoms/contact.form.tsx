"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { memo, NamedExoticComponent } from "react";
import { ContactInput } from "./contact-form/input";
import { ContactListItem } from "./contact-form/item";
import { ContactTextArea } from "./contact-form/textarea";

export const ContactForm: NamedExoticComponent = memo(() => (
  <section className="w-full border-2 border-transparent bg-[#6D1F8F66]/40 shadow-[0_40px_100px_40px_rgba(0,0,0,0.08)] min-h-[620px] rounded-xl md:rounded-3xl border-box p-6 md:p-12 xl:p-28">
    <div className="w-[95%] h-full flex flex-col gap-4 md:gap-6 md:flex-row justify-between items-stretch">
      <div
        id="container_content"
        className="flex flex-col justify-between items-start lg:w-[305px]"
      >
        <h2 className="text-3xl lg:text-5xl font-normal font-paytone text-white">
          Get in touch
        </h2>
        <section className="flex flex-col justify-start items-start space-y-4 lg:space-y-8 text-white">
          <p className="font-normal font-dm-sans text-base">
            Do you have any questions or feedback?We &apos;d love to hear from
            you.
          </p>
          <div className="list-none space-y-4">
            <ContactListItem
              item={<PhoneIcon className="text-white stroke-white size-5" />}
              content="+1(343)338-5190"
            />

            <ContactListItem
              item={<EnvelopeIcon className="text-white stroke-white size-5" />}
              content="+1(343)338-5190"
            />
            <ContactListItem
              item={<MapPinIcon className="text-white stroke-white size-5" />}
              content="hello@revveme.com"
            />
          </div>
        </section>
      </div>
      <div className="w-full md:w-[400px] xl:w-[600px] px-2 mt-4  md:mt-0">
        <form className="flex flex-col justify-between h-full w-full space-y-4 md:space-y-0">
          <ContactInput label="Fullname" placeholder="firstname lastname" />
          <ContactInput
            label="Email address"
            placeholder="email@address.gmail.com"
          />
          <ContactTextArea label="Message" placeholder="Type here.." />
          <button
            role="button"
            aria-disabled={false}
            aria-pressed="true"
            className="border-white bg-white font-dm-sans font-bold text-black rounded-xl h-12 w-[186px] inline-flex justify-center items-center cursor-pointer !outline-none !ring-0 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
));

ContactForm.displayName = "ContactForm";
