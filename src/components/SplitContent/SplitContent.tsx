import Image from "next/image";
import React from "react";
import type { SplitContent } from "@/type/type";
import BlogContent from "../BlogContent/BlogContent";

interface SplitProp {
  data: SplitContent;
}

function SplitContent({ data }: SplitProp) {
  return (
    <section className="px-6 pt-5 pb-20">
      <div className="container mx-auto lg:flex-row flex-col flex md:gap-6 gap-4">
        <div className="max-w-[548px] mx-auto w-full ">
          <Image
            width={548}
            height={729}
            src={data?.image?.path}
            alt={data?.image?.alt}
          />
        </div>
        <div className="flex flex-col gap-4">
          {data?.content?.map((elem, id) => {
            return <BlogContent key={id} data={elem} />;
          })} 
        </div>
      </div>
    </section>
  );
}

export default SplitContent;
