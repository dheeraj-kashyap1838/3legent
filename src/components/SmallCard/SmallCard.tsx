import React from "react";
import type { SmallCard } from "@/type/type";
import Image from "next/image";

interface CardProp {
  data: SmallCard;
  variation: string;
}

function SmallCard({ data, variation }: CardProp) {
  return (
    <>
      {variation === "default" && (
        <div className="h-full md:px-8 px-4 md:py-12 py-8 bg_primary flex gap-4 flex-col">
          <Image
            width={48}
            height={48}
            src={data.icon.path}
            alt={data.icon.alt}
            className="pb-2"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font_inter md:font-medium md:text-xl md:leading-7 font-semibold text-sm leading-[22px]">{data.title}</h3>
            <p className="font-normal text-[14px] leading-6 text_primary ">
              {data.description}
            </p>
          </div>
        </div>
      )}
      {variation === "Align Center" && (
        <div className="h-full md:p-8 p-4 bg_primary flex gap-4 flex-col items-center">
          <Image
            width={32}
            height={32}
            src={data.icon.path}
            alt={data.icon.alt}
          />
          <div className="flex flex-col gap-2">
            <h3 className=" font_inter font-bold leading-4 text-center text_primary">
              {data.title}
            </h3>
            <p className="font-semibold font_inter leading-[26px] text-center">
              {data.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SmallCard;
