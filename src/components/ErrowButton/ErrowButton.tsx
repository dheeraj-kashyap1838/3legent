"use client";

import React from "react";
import type { ErrowButton } from "@/type/type";
import Image from "next/image";
import { PrismicLink } from "@prismicio/react";
import { isFilled, LinkField } from "@prismicio/client";

interface ErrowProp {
  data?: LinkField;
}

function ErrowButton({ data }: ErrowProp) {
  return (
    <div className="flex  border-b-[1px] gap-1 font-medium leading-7 tracking-[-0.4px] font_inter w-full">
      {isFilled.link(data) && <PrismicLink field={data} />}
      <Image width={20} height={20} src="/icon/arrow-right.svg" alt="" />
    </div>
  );
}

export default ErrowButton;
