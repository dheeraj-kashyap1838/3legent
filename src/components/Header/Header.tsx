"use client";

import React, { useState } from "react";
import type { Header } from "@/type/type";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { isFilled, type Content } from "@prismicio/client";
import { PrismicImage, PrismicLink } from "@prismicio/react";

interface HeaderProp {
  data: Content.HeaderDocumentData;
}

function Header({ data }: HeaderProp) {
  const [mobile_nav, setMobile_nav] = useState(false);
  const { logo, nav } = data;

  return (
    <header className="px-6 py-[18px] fixed top-10px  left-0 z-30 w-full max-h-[60px] h-full bg-white">
      <div className="container w-full z-10  mx-auto max-h-[60px] h-full  flex justify-between items-center">
        <div className="flex max-h-[24px] h-full justify-center items-center">
          <div
            className={`${
              mobile_nav ? "hidden" : "block"
            } px-2 md:hidden block`}
            onClick={() => setMobile_nav(!mobile_nav)}
          >
            <FiMenu />
          </div>
          <Link href="/" className=" w-full">
            {isFilled.image(logo) && (
              <PrismicImage field={logo} className="w-[105px] h-[24px]" />
            )}
          </Link>
        </div>

        {/* ========== Desktop Nav ======== */}
        <nav className="max-w-[324px] md:flex font-medium text-[14px] hidden justify-between w-full">
          {nav?.map((elem, id) => {
            return (
              <div key={id}>
                {isFilled.link(elem.nav_link) && (
                  <PrismicLink field={elem?.nav_link} />
                )}
              </div>
            );
          })}
        </nav>

        {/* ============ Mobile Nav ========== */}
        <nav
          className={`${
            mobile_nav ? "flex" : "hidden"
          } md:hidden pb-6 w-full px-6 z-10 bg-white flex flex-col justify-between h-[calc(100vh-60px)]  fixed top-[60px] left-0`}
        >
          {/*=========== mobile Top ============    */}
          <div className="flex flex-col">
            <label className="relative w-full  ">
              <input
                className="ps-[48px] w-full py-[11px] rounded-[6px] border-[1px] border-[#6C7275]"
                type="text"
                placeholder="Search"
              />
            </label>
            <div className="w-full gap-4 py-4 flex flex-col justify-center ">
              {nav?.map((elem, id) => {
                return (
                  <div
                    key={id}
                    className="pb-4 font-medium text-[14px] border-b-[1px] border_primary"
                  >
                    {isFilled.link(elem?.nav_link) && (
                      <PrismicLink field={elem?.nav_link} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/*========= mobile bottom ======    */}
          <div className="w-full flex gap-2 flex-col">
            <div className="flex pb-2 border-b-[1px] border_primary  justify-between">
              <h2 className="font-medium text-lg text_primary">Cart</h2>
              <div className=" flex items-center gap-1 ">
                <Image
                  width={24}
                  height={24}
                  src="/icon/shoppingbag.svg"
                  alt=""
                />
                <div className="w-[20px] h-[20px] pb-0.5 bg-black text-white flex justify-center items-center rounded-full">
                  2
                </div>
              </div>
            </div>

            <div className="flex pb-2 border-b-[1px] border_primary  justify-between">
              <h2 className="font-medium text-lg text_primary">Wishlist</h2>
              <div className=" flex items-center gap-1 ">
                <Image width={24} height={24} src="/icon/heart.svg" alt="" />
                <div className="w-[20px] h-[20px] pb-0.5 bg-black text-white flex justify-center items-center rounded-full">
                  2
                </div>
              </div>
            </div>
            <div className="py-[19px] flex">
              <Link
                className="w-full text-center font-medium text-lg py-2.5 bg-black text-white rounded-md"
                href=""
              >
                Sign in
              </Link>
            </div>
            <div className="flex max-w-[120px] w-full justify-between">
              {/* {social?.map((elem, id) => {
                return (
                  <Link href="" key={id}>
                    {isFilled.image(elem?.media_icon) && (
                      <PrismicImage
                        field={elem?.media_icon}
                        className="w-[24px]"
                      />
                    )}
                  </Link>
                );
              })} */}
            </div>
          </div>
        </nav>

        <div className="max-w-[130px] max-h-[28px] h-full w-full flex items-center gap-4 md:justify-center justify-end ">
          <Image
            className="md:block cursor-pointer hidden"
            width={24}
            height={24}
            src="/icon/search1.svg"
            alt=""
          />
          <Link href="">
            <Image
              className="md:block hidden"
              width={24}
              height={24}
              src="/icon/user-circle.svg"
              alt=""
            />
          </Link>
          <div className=" flex items-center gap-1 ">
            <div
              className={`${
                mobile_nav ? "hidden" : "block"
              } flex items-center gap-1`}
            >
              <Link href="">
                <Image
                  width={24}
                  height={24}
                  src="/icon/shoppingbag.svg"
                  alt="cart"
                />
              </Link>
              <Link href="">
                <div className="w-[20px] h-[20px] pb-0.5 bg-black text-white flex justify-center items-center rounded-full">
                  2
                </div>
              </Link>
            </div>
            <div
              className={`w-[24px] h-[24px] md:hidden  ${mobile_nav ? "block" : "hidden"}`}
              onClick={() => setMobile_nav(!mobile_nav)}
            >
              <RxCross2 className="w-full h-full" />
            </div>
          </div>
        </div>
      </div> 
    </header>
  );
}

export default Header;
