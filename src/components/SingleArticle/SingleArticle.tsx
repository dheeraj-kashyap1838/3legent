import React from "react";
// import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import formatDate from "@/utils/formateDate";

import {
  ImageField,
  RichTextField,
} from "@prismicio/client";

import { PrismicImage, PrismicRichText } from "@prismicio/react";

interface ArticleProp {
  data: { card_heading: RichTextField; card_image: ImageField };
  date: string;
}

function SingleArticle({ data, date }: ArticleProp) {
  const { card_heading, card_image } = data;
  // const formatted = formatDate(date); // Output: June 5, 2025
  return (
    <section className="px-6 pb-5">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <div className="md:block hidden">
            {/* <BreadCrumb data={data?.breadCrumb} /> */}
          </div>
          {/* =============== Back Button ================ */}
          <Link
            className="pt-4 md:hidden gap-1 flex items-center font-medium text-sm leading-6 text_primary"
            href="/blog"
          >
            <GoChevronLeft className="w-3 h-3" />
            {/* {data.backBtn.name} */}
            Back
          </Link>
        </div>
        <div className="mt-14 flex flex-col gap-3.5">
          <h2 className="font_inter font-bold text-xs leading-3">
            {/* {data.type} */}
          </h2>
          <div className="max-w-[834px] w-full font-medium md:text-[54px] text-[28px] md:leading-[58px] leading-[34px] md:tracking-[-1px] tracking-[-0.6px]">
            <PrismicRichText field={card_heading} />
          </div>
          <div className="max-w-[366px] w-full flex justify-between">
            <h4 className="flex items-center text_primary font-normal md:text-[16px] text-[14px] md:leading-[26px] leading-[22px ] gap-1">
              <FaRegCircleUser />
              Henrik Annemark
            </h4>
            <h4 className="flex items-center text_primary font-normal leading-[26px] gap-1">
              <LuCalendar />
              {formatDate(date)}
            </h4>
          </div>
        </div>
        <PrismicImage
          className="max-w-[1120px] w-full py-10 "
          field={card_image}
        />
        <p className="font_inter leading-6">
          Your bathroom serves a string of busy functions on a daily basis. See
          how you can make all of them work, and still have room for comfort and
          relaxation.
        </p>
        <div className="flex flex-col font_inter ">
          <h1 className="font-medium text-[28px] leading-[34px] tracking-[-0.6]">
            {/* {isFilled.richText(heading) && <PrismicRichText field={heading} />} */}
            A cleaning hub with built-in ventilation
          </h1>
          <p className="font-normal leading-[26px]">
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleArticle;
