import React from "react";
import type { NewsletterSection } from "@/type/type";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import Image from "next/image";

interface NewsProp {
  data: Content.NewsLetterSlice;
}

function NewsletterSection({ data }: NewsProp) {
  const { background_image, button, description, heading, place_holder } =
    data?.primary;
  return (
    <section
      className=" mx-auto bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${background_image.url})` }}
    >
      <div className="max-w-[540px] px-8 text-center w-full pt-[101px] pb-[93px] mx-auto ">
        <div className="flex flex-col gap-2">
          <div className="font-medium text-[28px] leading-[34px] tracking-[-0.6px]">
            {isFilled.richText(heading) && <PrismicRichText field={heading} />}
          </div>
          <div className="font-normal md:text-lg text-[14px] md:leading-[30px] leading-[22px] text_primary ">
            {description}
          </div>
        </div>
        <form className="max-w-[488px] gap-2 mt-8 flex justify-between border-b-2 pb-3 border-[#6C727580] items-center mx-auto w-full">
          <Image width={24} height={24} src="/icon/mail.svg" alt="" />
          <input
            className="max-w-[396px] w-full placeholder-[#6c7275]"
            type="text"
            placeholder={place_holder ?? ""}
          />
          <button className="font_inter text_primary font-semibold">
            {isFilled.link(button) && <PrismicLink field={button} />}
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
