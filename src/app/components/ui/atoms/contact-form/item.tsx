"use client";
import { memo, NamedExoticComponent, ReactNode } from "react";

export const ContactListItem: NamedExoticComponent<{
  content: string;
  item: ReactNode;
}> = memo(({ content, item }) => (
  <div className="flex justify-start items-center gap-4">
    {item}
    <p className="font-normal font-dm-sans text-sm lg:text-base">{content}</p>
  </div>
));

ContactListItem.displayName = "ContactListItem";
