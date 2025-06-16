"use client";

import { NamedExoticComponent, memo } from "react";

export const ContactInput: NamedExoticComponent<{
  label: string;
  placeholder: string;
}> = memo(({ label, placeholder }) => {
  return (
    <div id="input" className="flex flex-col justify-start gap-1.5 text-white">
      <label className="font-dm-sans font-normal text-white">{label}</label>
      <input
        placeholder={placeholder}
        className="
          flex h-12 w-full rounded-md 
          bg-transparent px-3 py-1 text-sm lg:text-base
          font-dm-sans
          border border-white/12 focus:border-white
          placeholder:text-white/12 placeholder:font-dm-sans placeholder:font-normal  
          selection:bg-white/12 selection:text-foreground 
          dark:selection:bg-white/12 dark:selection:text-foreground 
          disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 
          aria-invalid:border-red-500 dark:aria-invalid:border-red-900 ring-0 outline outline-white"
      />
    </div>
  );
});

ContactInput.displayName = "ContactInput";
