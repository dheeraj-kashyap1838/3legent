import React from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import BlogContent from "../BlogContent/BlogContent";


interface SplitProp {
  data: Content.SplitContentSlice;
}

function SplitContent({ data }: SplitProp) {
  const {content, image } = data?.primary;
  return (
    <section className="px-6 pt-5 pb-20">
      <div className="container mx-auto lg:flex-row flex-col flex md:gap-6 gap-4">
        <div className="max-w-[548px] mx-auto w-full ">
          {isFilled.image(image) && (
            <PrismicImage field={image}/> 
          )}
        </div>
        <div className="flex flex-col gap-4">
          {content?.map((elem, id) => {
            return <BlogContent key={id} data={elem} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default SplitContent;
