import React from "react";
import type { MoreArticle } from "@/type/type";
// import ErrowButton from "../ErrowButton/ErrowButton";
// import BlogCard from "../BlogCard/BlogCard";

interface MoreProp {
  data: MoreArticle;
}

function MoreArticle({ data }: MoreProp) {
  return (
    <section className="px-6 py-20">
      <div className="container mx-auto flex flex-col gap-12">
        <div className="w-full flex justify-between">
          <h2 className="font-medium text-[28px] leading-[34px] tracking-[-0.6px]">
            {data?.heading}
          </h2>
          <div className="max-w-[121px] w-full">
            {/* <ErrowButton data={data?.button} /> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-auto gap-[25px] ">
          {data.blogs.map((card, id) => {
            return (
              <div key={id} className="max-w-[357px]  w-full">
                {/* <BlogCard data={card} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MoreArticle;
