import Image from "next/image";
import { memo, NamedExoticComponent } from "react";

export const PicBox: NamedExoticComponent<{ src: string }> = memo(({ src }) => {
  return (
    <div className="w-[152px] h-[180px]">
      <Image
        src={src}
        alt="pic"
        className="object-cover"
        width={152}
        height={180}
      />
    </div>
  );
});
