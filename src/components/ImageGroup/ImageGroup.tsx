import React from "react";
import type { ImageGroup } from "@/type/type";
import Image from "next/image";
import BlogContent from "../BlogContent/BlogContent";

interface GroupProp {
  data: ImageGroup;
}

function ImageGroup({ data }: GroupProp) {
  return (
    <section className="px-6 py-5">
      <div
        className="container mx-auto flex flex-wrap justify-center md:gap-6 gap-4 "
        id="imageGroup"
      >
        {data.images.map((elem, id) => {
          return (
            <div key={id} className="max-w-[548px] md:shrink w-full">
              <Image width={548} height={729} src={elem.path} alt={elem.alt} />
            </div>
          );
        })}
        {data.content.map((elem, id) => {
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
