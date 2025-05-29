import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { BlogCard } from "@/type/type";

interface CardProp {
  data: BlogCard;
}

function BlogCard({ data }: CardProp) {
  return (
    <div className="flex flex-col gap-6 mx-auto">
      <Image
        width={357}
        height={325}
        src={data.image.path}
        alt={data.image.alt}
      />
      <div className="flex flex-col w-full gap-2">
        <Link
          href={data.title.path}
          className="font-medium md:text-xl  md:leading-7 leading-[26px]"
        >
          {data.title.name}
        </Link>
        <p className="text_primary font-normal text-xs leading-5">
          {data.date}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
