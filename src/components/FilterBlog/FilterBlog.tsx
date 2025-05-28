import React from "react";
import { GoChevronDown } from "react-icons/go";
import type { FilterBlog } from "@/type/type";
import Grid6 from "@/components/SVG_Icons/Grid6";
import Grid4 from "@/components/SVG_Icons/Grid4";
import Grid2_horizontal from "@/components/SVG_Icons/Grid2_horizontal";
import Grid2_vertical from "@/components/SVG_Icons/Grid2_vertical";
import Image from "next/image";
import Link from "next/link";

interface BlogProp {
  data: FilterBlog;
}

function FilterBlog({ data }: BlogProp) {
  return (
    <section className="px-6 ">
      <div className="container mx-auto flex flex-col ">
        {/*=============== Tabs Header ================ */}
        <div className="flex justify-between md:pt-6 md:pb-10 py-8  items-center ">
          <div className="flex md:w-auto w-full gap-10" id="tabs">
            {data.tabs.map((elem, id) => {
              return (
                <div
                  key={id}
                  className={`font_inter text_primary font-semibold md:text-sm text-[16px] md:leading-[22px] leading-[26px] md:block hidden  ${elem.class}`}
                >
                  {elem.name}
                  <GoChevronDown className="h-5 w-5 md:hidden block" />
                </div>
              );
            })}
          </div>
          <div className="md:flex hidden gap-8">
            <div className="flex items-center gap-1">
              {data.sortOption}
              <GoChevronDown className="h-5 w-5" />
            </div>
            <div className="flex">
              <div className="border border_primary">
                <Grid6 />
              </div>
              <div className="border border_primary">
                <Grid4 />
              </div>
              <div className="border border_primary">
                <Grid2_horizontal />
              </div>
              <div className="border border_primary">
                <Grid2_vertical />
              </div>
            </div>
          </div>
        </div>
        {/* ================ Tabs Cards ============== */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-x-[25px] gap-y-[40px]">
          {data.blogs.map((card, id) => {
            return (
              <div
                key={id}
                className=" max-w-[357px] w-full flex flex-col gap-6 mx-auto"
              >
                <Image
                  width={357}
                  height={325}
                  src={card.image.path}
                  alt={card.image.alt}
                />
                <div className="flex flex-col w-full gap-2">
                  <Link
                    href={card.title.path}
                    className="font-medium md:text-xl  md:leading-7 leading-[26px]"
                  >
                    {card.title.name}
                  </Link>
                  <p className="text_primary font-normal text-xs leading-5">
                    {card.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="border rounded-[80px] md:my-20 mt-10 mb-20 whitespace-nowrap max-w-[163px] w-full mx-auto px-10 py-1.5 font_inter font-medium leading-7 tracking-[-0.4]">
          {data.button}
        </button>
      </div>
    </section>
  );
}

export default FilterBlog;
