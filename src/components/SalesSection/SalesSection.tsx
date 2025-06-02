import React from "react";
import type { SalesSection } from "@/type/type";
import Image from "next/image";
import ErrowButton from "../ErrowButton/ErrowButton";
import { containerSize } from "@/utils/containerSize";

interface SalesProp {
  data: SalesSection;
  size?: string;
}

function SalesSection({ data, size }: SalesProp) {
  return (
    <section>
      <div
        className={`flex lg:flex-row  justify-center  flex-col mx-auto  ${containerSize(size)}`}
      >
        <div className="basis-1/2 flex max-h-[532px] h-full mx-auto w-full">
          <Image
            width={0}
            height={0}
            src={data.image.path}
            alt={data.image.alt}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="basis-1/2  mx-auto bg_primary lg:px-[72px] py-[58px] px-8 gap-6 flex flex-col justify-center w-full">
          <div className=" flex flex-col gap-4">
            {data.content.sale ? (
              <h2 className="font_inter text-[#377DFF] font-bold leading-4">
                {data.content.sale}
              </h2>
            ) : null}
            <h2 className="  font-medium lg:text-[40px] leading-10 text-[34px]">
              {data.content.heading}
            </h2>
            <p className="font_inter font-normal text-xl leading-8">
              {data.content.text}
            </p>
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
