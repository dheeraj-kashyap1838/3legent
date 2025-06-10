import React from "react";
import type { ImageGroup } from "@/type/type";
import BlogContent from "../BlogContent/BlogContent";
import {Content} from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";



interface GroupProp {
  data: Content.ImageGroupSlice;
}

function ImageGroup({ data }: GroupProp) {
  const {content,group_image} = data?.primary
  return (
    <section className="px-6 py-5">
      <div
        className="container mx-auto flex flex-wrap justify-center md:gap-6 gap-4 "
        id="imageGroup"
      >
        {group_image?.map((elem, id) => {
          return (
            <div key={id} className="max-w-[548px] md:shrink w-full">
              
              <PrismicImage field={elem?.image}/>
            </div>
          );
        })}
        {content?.map((elem, id) => {
          return (
            <div key={id} className="w-full">
              <BlogContent key={id} data={elem} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ImageGroup;
