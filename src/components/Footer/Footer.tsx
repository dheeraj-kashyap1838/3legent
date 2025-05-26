import React from "react";
import type { FooterSection } from "@/type/type";
import Link from "next/link";
import Image from "next/image";

interface FooterProp {
  data: FooterSection;
}

function Footer({ data }: FooterProp) {
  return (
    <section className="bg-black ]">
      <div className="container pt-[81px] pb-[32px] flex flex-col gap-[49px] px-8 mx-auto">
        <div className="flex lg:flex-row gap-10 flex-col">
          <div className="flex py-1 lg:flex-row flex-col max-w-[554px] gap-y-4 items-center  lg:mx-0 mx-auto w-full">
            <Link
              href={data.logo.path}
              className="text-white font-medium lg:mx-0 mx-auto text-2xl lg:text-left text-center max-w-[137px] w-full leading-[24px]"
            >
              {data.logo.icon}
            </Link>
            <div className="lg:h-[24px] lg:w-[1px] max-w-[24px] w-full h-[1px] bg-[#6C7275] "></div>
            <div className="px-8 font-normal lg:mx-0 mx-auto text-[14px] lg:text-left text-center leading-[22px] text-[#E8ECEF] max-w-[380px] w-full">
              {data.tagline}
            </div>
          </div>
          <div className="flex md:flex-row flex-col max-w-[554px] lg:mx-0 mx-auto w-full lg:justify-end justify-center  gap-10 ">
            {data.navigationLinks.map((elem, id) => {
              return (
                <Link
                  key={id}
                  className="text-center text-[#FEFEFE]"
                  href={elem.path}
                >
                  {elem.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-white border-[#6C7275] py-4 border-t-2 gap-7 justify-between lg:flex-row flex-col-reverse flex">
          <div className="flex lg:mx-0 md:flex-row flex-col-reverse text-center gap-7 mx-auto ">
            <p className="text-[#E8ECEF]">{data.legal.copyright}</p>
            <div className="flex gap-7 mx-auto justify-self-start">
              <h3>{data.legal.privacyPolicy}</h3>
              <h3>{data.legal.termsOfUse}</h3>
            </div>
          </div>
          <div className="flex max-w-[120px] lg:mx-0  mx-auto w-full justify-between">
            {data.socialLinks.map((elem, id) => {
              return (
                <Link key={id} href={elem.url}>
                  <Image
                    width={24}
                    height={24}
                    src={elem.icon}
                    alt={elem.icon}
                  ></Image>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
