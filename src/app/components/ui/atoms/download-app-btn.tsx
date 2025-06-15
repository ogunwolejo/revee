"use client";

import clsx from "clsx";
import { memo, NamedExoticComponent } from "react";

export const DownloadAppBtn: NamedExoticComponent<{ classes?: string }> = memo(
  ({ classes = "" }) => (
    <button
      role="button"
      aria-disabled={false}
      aria-modal={false}
      aria-pressed="true"
      id="download_btn"
      className={clsx(classes)}
    >
      Download the app
    </button>
  )
);

DownloadAppBtn.displayName = "DownloadAppBtn";
