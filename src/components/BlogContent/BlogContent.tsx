import React from "react";
import type { Content } from "@/type/type";

interface ContentProp {
  data: Content;
}

function BlogContent({ data }: ContentProp) {
  return (
    <div className="flex flex-col font_inter ">
      {data.title ? (
        <h2 className="font-medium text-[28px] leading-[34px] tracking-[-0.6]">
          {data?.title}
        </h2>
      ) : null}
      {data.text ? <p className="font-normal leading-[26px]">{data?.text}</p> : null}
    </div>
  );
}

export default BlogContent;
