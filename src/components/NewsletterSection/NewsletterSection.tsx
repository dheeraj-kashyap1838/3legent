import React from "react";
import type { NewsletterSection } from "@/type/type";
import Image from "next/image";

interface NewsProp {
  data: NewsletterSection;
}

function NewsletterSection({ data }: NewsProp) {
  return (
    <section
      className="mx-auto bg-cover bg-center w-full md:px-0"
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <div className="max-w-[540px] px-8 text-center w-full pt-[101px] pb-[93px] mx-auto ">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-[28px] leading-[34px] tracking-[-0.6px]">
            {data.title}
          </h2>
          <p className="font-normal md:text-lg text-[14px] md:leading-[30px] leading-[22px] text_primary ">
            {data.subtitle}
          </p>
        </div>
        <form className="max-w-[488px] gap-2 mt-8 flex justify-between border-b-2 pb-3 border-[#6C727580] items-center mx-auto w-full">
          <Image
            width={24}
            height={24}
            src={data.icon.path}
            alt={data.icon.alt}
          />
          <input
            className="max-w-[396px] w-full placeholder-[#6c7275]"
            type="text"
            placeholder={data.input.placeholder}
          />
          <button className="font_inter text_primary font-semibold">
            {data.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
