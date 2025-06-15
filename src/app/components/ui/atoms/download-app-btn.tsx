"use client";

import clsx from "clsx";
import { memo, NamedExoticComponent } from "react";

export const DownloadAppBtn: NamedExoticComponent<{
  classes?: string;
  text?: string;
}> = memo(({ classes = "", text = "Download the app" }) => (
  <button
    role="button"
    aria-disabled={false}
    aria-modal={false}
    aria-pressed="true"
    id="download_btn"
    className={clsx(classes)}
  >
    {text}
  </button>
));

DownloadAppBtn.displayName = "DownloadAppBtn";
