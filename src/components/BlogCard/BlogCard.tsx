import Link from "next/link";
import React from "react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

import { ImageField, RichTextField ,LinkField } from "@prismicio/client";

interface CardProp {
  data: ImageField,;
}

function BlogCard({ data }: CardProp) {
  console.log(data)
  return (
    <div className="flex flex-col gap-6 mx-auto">
      <div className="max-w-[357px] w-full">
        <PrismicImage field={data} />
      </div>
      {/* <div className="flex flex-col w-full gap-2">
        <Link
          href={data.title.path}
          className="font-medium md:text-xl  md:leading-7 leading-[26px]"
        >
          {data.title.name}
        </Link>
        <p className="text_primary font-normal text-xs leading-5">
          {data.date}
        </p>
      </div> */}
    </div>
  );
}

export default BlogCard;
