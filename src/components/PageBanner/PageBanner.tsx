import React from "react";
import type { PageBanner } from "@/type/type";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

interface BannerProp {
  data: PageBanner;
}

function PageBanner({ data }: BannerProp) {
  return (
    <section className="px-6 ">
      <div
        className="container mx-auto bg-cover py-[115px] bg-center"
        style={{ backgroundImage: `url(${data.backGround})` }}
      >
        <div className="max-w-[327px] w-full gap-6 flex flex-col text-center items-center mx-auto">
          <BreadCrumb data={data.breadCrumb} />
          <h1 className="font-medium md:text-[54px] text-[40px]  md:leading-[58px] leading-11 md:tracking-[-1px] tracking-[-0.4px]">{data.heading}</h1>
          <p className="font_inter font-normal md:text-xl md:leading-8 leading-[26px]">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
