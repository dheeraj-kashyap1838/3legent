"use client"

import React from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface ContactProp {
  data: Content.ContentSectionSlice;
}

function ContentSection({ data }: ContactProp) {
  const { description, heading } = data?.primary;

  return (
    <section className="px-6 pt-10 pb-12">
      <div className="container mx-auto flex flex-col gap-6 ">
        <div className="max-w-[834px] w-full font-medium md:text-[54px] text-[28px] md:leading-[54px] leading-[34px] tracking-[-1px]">
          {isFilled.richText(heading) && <PrismicRichText field={heading} />}
        </div>
        <div className="max-w-[834px] w-full font-normal  leading-6 font_inter">
            {description}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
