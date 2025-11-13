import React from "react";
import type { SmallCard } from "@/type/type";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { RichTextField, ImageField, isFilled } from "@prismicio/client";

interface CardProp {
  data: {
    card_icon: ImageField;
    description: RichTextField;
    heading: RichTextField;
  };
  variation: string;
}

function SmallCard({ data, variation }: CardProp) {
  const { card_icon, description, heading } = data;

  return (
    <>
      {variation === "default" && (
        <div className="h-full md:px-8 px-4 md:py-12 py-8 bg_primary flex gap-4 flex-col">
          <div className="max-w-[48px] w-full">
            {isFilled.image(card_icon) && (
              <PrismicImage field={card_icon} className="w-full" />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="font_inter md:font-medium md:text-xl md:leading-7 font-semibold text-sm leading-[22px]">
              {isFilled.richText(heading) && (
                <PrismicRichText field={heading} />
              )}
            </div>
            <div className="font-normal text-[14px] leading-6 text_primary ">
              {isFilled.richText(description) && (
                <PrismicRichText field={description} />
              )}
            </div>
          </div>
        </div>
      )}
      {variation === "Align Center" && (
        <div className="h-full md:p-8 p-4 bg_primary flex gap-4 flex-col items-center">
          <div className="max-w-[32px] w-full">
            {isFilled.image(card_icon) && (
              <PrismicImage field={card_icon} className="w-full" />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className=" font_inter font-bold leading-4 text-center text_primary">
              {isFilled.richText(heading) && (
                <PrismicRichText field={heading} />
              )}
            </div>
            <div className="font-semibold font_inter leading-[26px] text-center">
              {isFilled.richText(description) && (
                <PrismicRichText field={description} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SmallCard;
