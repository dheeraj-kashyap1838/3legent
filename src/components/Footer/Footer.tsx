import React from "react";
import Link from "next/link";
import { type Content } from "@prismicio/client";
import { PrismicImage, PrismicLink } from "@prismicio/react";
interface FooterProp {
  data: Content.FooterDocumentData;
}

function Footer({ data }: FooterProp) {
  const { logo, nav, copyright, description, privacy, social, terms } = data;

  return (
    <section className="bg-black px-6">
      <div className="container pt-[81px] pb-[32px] flex flex-col gap-[49px]  mx-auto">
        <div className="flex lg:flex-row gap-10 flex-col">
          <div className="flex py-1 lg:flex-row flex-col max-w-[554px] gap-y-4 items-center  lg:mx-0 mx-auto w-full">
            <Link href="#" className="max-w-[105] w-full">
              <PrismicImage field={logo} className="w-full" />
            </Link>
            <div className="mx-8 lg:h-[24px] lg:w-[1px] max-w-[24px] w-full h-[1px] bg-[#6C7275] "></div>
            <div className=" font-normal lg:mx-0 mx-auto text-[14px] lg:text-left text-center leading-[22px] text-[#E8ECEF] max-w-[380px] w-full">
              {description}
            </div>
          </div>
          <div className="flex md:flex-row flex-col max-w-[554px] lg:mx-0 mx-auto w-full lg:justify-end justify-center  gap-10 ">
            {nav.map((elem, id) => {
              return (
                <div key={id} className="text-center text-[#FEFEFE]">
                  <PrismicLink field={elem.nav_link} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-white border-[#6C7275] py-4 border-t-2 gap-7 justify-between lg:flex-row flex-col-reverse flex">
          <div className="flex lg:mx-0 md:flex-row flex-col-reverse text-center gap-7 mx-auto ">
            <p className="text-[#E8ECEF] font-normal text-xs flex items-center">
              {copyright}
            </p>
            <div className="flex gap-7 mx-auto justify-self-start">
              <PrismicLink field={privacy}/>
              <PrismicLink field={terms}/>
            </div>
          </div>
          <div className="flex max-w-[120px] lg:mx-0  mx-auto w-full justify-between">
            {social.map((elem, id) => {
              return (
                <Link key={id} href=''>
                  <PrismicImage field={elem.media_icon} className="w-[24px]"/>
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
