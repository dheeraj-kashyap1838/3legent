import React from "react";
import { GoChevronDown } from "react-icons/go";
import type { FilterBlog } from "@/type/type";
import Grid6 from "@/components/SVG_Icons/Grid6";
import Grid4 from "@/components/SVG_Icons/Grid4";
import Grid2_horizontal from "@/components/SVG_Icons/Grid2_horizontal";
import Grid2_vertical from "@/components/SVG_Icons/Grid2_vertical";
import BlogCard from "../BlogCard/BlogCard";
import type { Content } from "@prismicio/client";


interface BlogProp {
  data: Content.BlogDocument[];
}

function FilterBlog({ data }: BlogProp) {
  return (
    <section className="px-6 ">
      <div className="container mx-auto flex flex-col ">
        {/*=============== Tabs Header ================ */}
        <div className="flex justify-between md:pt-6 md:pb-10 py-8  items-center ">
          <div className="flex md:w-auto w-full gap-10" id="tabs">
            <div className="active font_inter text_primary font-semibold md:text-sm text-[16px] md:leading-[22px] leading-[26px] md:block hidden">
              All Blog
              <GoChevronDown className="h-5 w-5 md:hidden block" />
            </div>
            <div className="font_inter text_primary font-semibold md:text-sm text-[16px] md:leading-[22px] leading-[26px] md:block hidden">
              Featured
              <GoChevronDown className="h-5 w-5 md:hidden block" />
            </div>
          </div>
          <div className="md:flex hidden gap-8">
            <div className="flex items-center gap-1">
              Sort by
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto justify-center gap-x-[25px] gap-y-[40px]">
          {data.map((card, id) => {
            // console.log(card.uid)
            return (
              <div key={id}>
                <div className=" max-w-[357px] w-full">
                  <BlogCard 
                  uid={card.uid} 
                  date={card?.last_publication_date}
                   />
                </div>
              </div>
            );
          })}
        </div>
        <button className="border cursor-pointer rounded-[80px] md:my-20 mt-10 mb-20 whitespace-nowrap max-w-[163px] w-full mx-auto px-10 py-1.5 font_inter font-medium leading-7 tracking-[-0.4]">
          Show more
        </button>
      </div>
    </section>
  );
}

export default FilterBlog;
