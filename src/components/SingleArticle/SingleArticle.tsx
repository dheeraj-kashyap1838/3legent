import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import type { Article } from "@/type/type";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import Image from "next/image";
import BlogContent from "../BlogContent/BlogContent";

interface ArticleProp {
  data: Article;
}

function SingleArticle({ data }: ArticleProp) {
  return (
    <section className="px-6 pt">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <div className="md:block hidden">
            <BreadCrumb data={data?.breadCrumb} />
          </div>
          {/* =============== Back Button ================ */}
          <Link
            className="pt-4 md:hidden gap-1 flex items-center font-medium text-sm leading-6 text_primary"
            href={data.backBtn.path}
          >
            <GoChevronLeft className="w-3 h-3" />
            {data.backBtn.name}
          </Link>
        </div>
        <div className="mt-14 flex flex-col gap-3.5">
          <h2 className="font_inter font-bold text-xs leading-3">
            {data.type}
          </h2>
          <h2 className="max-w-[834px] w-full font-medium md:text-[54px] text-[28px] md:leading-[58px] leading-[34px] md:tracking-[-1px] tracking-[-0.6px]">
            {data.title}
          </h2>
          <div className="max-w-[366px] w-full flex justify-between">
            <h4 className="flex items-center text_primary font-normal md:text-[16px] text-[14px] md:leading-[26px] leading-[22px ] gap-1">
              <FaRegCircleUser />
              {data.author}
            </h4>
            <h4 className="flex items-center text_primary font-normal leading-[26px] gap-1">
              <LuCalendar />
              {data.date}
            </h4>
          </div>
        </div>
        <Image
          width={1120}
          height={646}
          src={data.coverImage.path}
          alt={data.coverImage.alt}
          className="py-10"
        />
        {/* <p className="font_inter leading-6">{data.text}</p> */}
        {data.content.map((elem, id )=>{
          return(
            <BlogContent key={id} data={elem}/>
          )
        })}
      </div>
    </section>
  );
}

export default SingleArticle;
