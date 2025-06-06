import React from "react";
import type { PageBanner } from "@/type/type";
import { PrismicRichText } from "@prismicio/react";
import {
  ImageField,
  isFilled,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
// import BreadCrumb from "../BreadCrumb/BreadCrumb";

interface BannerProp {
  data: {
    banner_image: ImageField;
    description: KeyTextField;
    title: RichTextField;
  };
}

function PageBanner({ data }: BannerProp) {
  const { banner_image, description, title } = data;


  return (
    <section className="px-6 ">
      <div
        className="container mx-auto bg-cover py-[115px] bg-center"
        style={{ backgroundImage: `url(${banner_image.url})` }}
      >
        <div className="max-w-[327px] w-full gap-6 flex flex-col text-center items-center mx-auto">
          {/* <BreadCrumb data={data.breadCrumb} /> */}
          <div className="font-medium md:text-[54px] text-[40px]  md:leading-[58px] leading-11 md:tracking-[-1px] tracking-[-0.4px]">
            {isFilled.richText(title) && <PrismicRichText field={title} />}
          </div>
          <div className="font_inter font-normal md:text-xl md:leading-8 leading-[26px]">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
