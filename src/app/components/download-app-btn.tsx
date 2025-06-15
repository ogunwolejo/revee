"use client";

import { memo, NamedExoticComponent } from "react";

export const DownloadAppBtn: NamedExoticComponent = memo(() => (
  <button
    role="button"
    aria-disabled={false}
    aria-modal={false}
    aria-pressed="true"
    id="download_btn"
    className="border-4 border-white font-dm-sans font-bold text-white rounded-xl h-12 p-4 inline-flex justify-center items-center cursor-pointer !outline-none !ring-0"
  >
    Download the app
  </button>
));

DownloadAppBtn.displayName = "DownloadAppBtn";
