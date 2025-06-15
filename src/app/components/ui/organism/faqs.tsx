"use client";

import { Fragment, memo, NamedExoticComponent } from "react";
import { DownloadAppBtn } from "../atoms/download-app-btn";
import { FaqQuestion } from "../atoms/faq.question";

export const FAQ: NamedExoticComponent = memo(() => {
  const faqQuestions: string[] = [
    "How does Revve work?",
    "Where is Revve available?",
    "Is Revve a bank?",
    "Is my money safe with Revve?",
    "What document do I need for verification?",
    "What should I do if my transaction is delayed or fails?",
    "What should I do if my transaction is delayed or fails?",
    "Can I transfer money within the same currency?",
  ];

  return (
    <section
      id="faq_container"
      className="min-h-screen h-screen w-full bg-purple relative"
    >
      <div className="absolute inset-0"></div>
      <div className="w-full h-full p-12 md:p-16 lg:p-12 xl:p-24 flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center gap-4 lg:gap-0">
        <div id="faq_container" className="space-y-4 lg:space-y-8">
          <h2 className="text-white text-5xl font-paytone leading-[60px]">
            FAQs
          </h2>
          <p className="text-white w-full lg:w-[216px] xl:w-[266px] text-base font-dm-sans">
            Here are some basic questions and answers to help you get started.
          </p>
          <div className="flex flex-col justify-start gap-1.5">
            <p className="text-white font-dm-sans font-normal text-sm lg:tracking-tight xl:tracking-normal">
              Get Revve on your phone
            </p>
            <DownloadAppBtn classes="border-white bg-white font-dm-sans font-bold text-black rounded-xl h-12 w-[186px] inline-flex justify-center items-center cursor-pointer !outline-none !ring-0" />
          </div>
        </div>
        <div id="faq_questions_container" className="space-y-4 lg:space-y-6">
          {faqQuestions.map((question, idx) => (
            <Fragment key={idx}>
              <FaqQuestion
                question={question}
                hideLine={idx !== faqQuestions.length - 1}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = "FAQ";
