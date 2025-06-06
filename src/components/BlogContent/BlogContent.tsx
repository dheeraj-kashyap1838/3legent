import { isFilled, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
// import type { Content } from "@/type/type";

interface ContentProp {
  data: { description: KeyTextField; heading: RichTextField };
}

function BlogContent({ data }: ContentProp) {
  const { description, heading } = data;
  return (
    <div className="flex flex-col font_inter ">
      <div className="font-medium text-[28px] leading-[34px] tracking-[-0.6]">
        {isFilled.richText(heading) && <PrismicRichText field={heading} />}
      </div>
        <div className="font-normal leading-[26px]">
          {description}
        </div>
    </div>
  );
}

export default BlogContent;
