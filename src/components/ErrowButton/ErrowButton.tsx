"use client";

import Link from "next/link";
import React from "react";
import type { ErrowButton } from "@/type/type";
import Image from "next/image";

interface ErrowProp {
  data?: ErrowButton;
}

function ErrowButton({ data }: ErrowProp) {
  return (
    <Link href={data?.path ?? ""} className="flex  border-b-[1px] gap-1 font-medium leading-7 tracking-[-0.4px] font_inter w-full" >
      {data?.name}
      <Image width={20} height={20} src={data?.icon ?? ''} alt='' />
    </Link>
  );
}

export default ErrowButton;
