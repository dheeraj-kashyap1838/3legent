import React from "react";
import type { SmallCard } from "@/type/type";
import Image from "next/image";


interface CardProp {
  data: SmallCard;
}

function SmallCard({ data }: CardProp) {
  return (
    <div className="max-w-[262px] md:p-8 p-4 bg_primary w-full max-h-[220px] h-full">
      <Image
        width={48}
        height={48}
        src={data.icon.path}
        alt={data.icon.alt}
        className="pb-2"
      />
      <h3>{data.title}</h3>
      <p className="font-normal text-[14px] text_primary">{data.description}</p>
    </div>
  );
}

export default SmallCard;
