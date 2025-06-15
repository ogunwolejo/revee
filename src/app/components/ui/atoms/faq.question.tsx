"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { NamedExoticComponent, memo } from "react";

export const FaqQuestion: NamedExoticComponent<{
  question: string;
  hideLine?: boolean;
}> = memo(({ question, hideLine = false }) => {
  return (
    <div>
      <div
        id="question_container"
        className="lg:w-[600px] xl:w-[780px] flex justify-between items-center lg:items-start p-2 lg:p-4"
      >
        <h4 className="font-normal font-paytone text-xl lg:tex-2xl xl:text-3xl text-question w-[95%] lg:w-[90%]">
          {question}
        </h4>
        <PlusIcon className="size-[12px] lg:size-[25.6px] fill-question stroke-question text-question" />
      </div>
      {hideLine ? (
        <hr className="text-question-shade border-question-shade mx-2 lg:mx-6 border-(2px)" />
      ) : null}
    </div>
  );
});

FaqQuestion.displayName = "FaqQuestion";
