import React from "react";
import type { SalesSection } from "@/type/type";
import ErrowButton from "../ErrowButton/ErrowButton";
import { containerSize } from "@/utils/containerSize";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

import * as Prismic from "@prismicio/client";

interface SalesSectionProps {
  data: Content.SalesSectionSlice;
  size?: string;
}

function SalesSection({ data, size }: SalesSectionProps) {
  const { button, content_with_image, description, heading, sale_offer } =
    data?.primary;
  return (
    <section>
      <div
        className={`flex lg:flex-row max-h-[532px] h-full flex-col mx-auto  ${containerSize(size)}`}
      >
        <div className=" mx-auto max-h-[532px] h-full overflow-hidden w-full flex items-center">
          {Prismic.isFilled.image(content_with_image) && (
            <PrismicImage field={content_with_image} />
          )}
        </div>
        <div className=" mx-auto bg_primary lg:px-[72px] py-[58px] px-8 gap-6 flex flex-col justify-center w-full">
          <div className=" flex flex-col gap-4">
            <div className="font_inter text-[#377DFF] font-bold leading-4">
              {Prismic.isFilled.richText(sale_offer) && (
                <PrismicRichText field={sale_offer} />
              )}
            </div>
            <div className="  font-medium lg:text-[40px] leading-10 text-[34px]">
              {Prismic.isFilled.richText(heading) && (
                <PrismicRichText field={heading} />
              )}
            </div>
            <div className="font_inter font-normal text-xl leading-8">
              {description}
            </div>
          </div>
          <div className="max-w-[100px] w-full">
            <ErrowButton data={button} />
            {/* <PrismicLink field={button} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesSection;
