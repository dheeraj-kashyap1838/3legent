import React from "react";
import type { SalesSection } from "@/type/type";
import Image from "next/image";
import ErrowButton from "../ErrowButton/ErrowButton";

interface SalesProp {
  data: SalesSection;
}

function SalesSection({ data }: SalesProp) {
  return (
    <section>
      <div className="container flex lg:flex-row flex-col mx-auto max-w-[1440px] w-full">
        <div className="max-w-[720px] mx-auto w-full">
          <Image
            width={720}
            height={532}
            src={data.image.path}
            alt={data.image.alt}
          />
        </div>
        <div className="max-w-[720px] mx-auto bg_primary lg:px-[72px] py-[58px] px-8 gap-6 flex flex-col justify-center w-full">
          <div className=" flex flex-col gap-4">
            <h2 className="font_inter text-[#377DFF] font-bold leading-4">{data.content.sale}</h2>
            <h2 className="  font-medium lg:text-[40px] text-[34px]">{data.content.heading}</h2>
            <p className="font_inter font-normal text-xl leading-8">{data.content.text}</p>
          </div>
          <div className="max-w-[100px] w-full">
            <ErrowButton data={data.content.button} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesSection;
