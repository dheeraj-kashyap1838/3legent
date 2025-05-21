"use client";

import React, { useState } from "react";
import type { Header } from "@/type/type";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface HeaderProp {
  data: Header;
}

function Header({ data }: HeaderProp) {
  const [mobile_nav, setMobile_nav] = useState(false);

  console.log(mobile_nav);

  return (
    <header className="px-6 py-[18px]">
      <div className="container relative mx-auto max-h-[60px] h-full  flex justify-between items-center">
        <div className="flex max-h-[24px] h-full justify-center items-center">
          <div
            className={`${
              mobile_nav ? "hidden" : "block"
            } px-2 md:hidden block`}
            onClick={() => setMobile_nav(!mobile_nav)}
          >
            <FiMenu />
          </div>
          <Image width={105} height={24} src={data.logo.icon} alt="" />
        </div>

        {/* ========== Desktop Nav ======== */}
        <nav className="max-w-[324px] md:flex font-medium text-[14px] hidden justify-between w-full">
          {data.nav.map((elem, id) => {
            return (
              <Link key={id} href={elem.path}>
                {elem.name}
              </Link>
            );
          })}
        </nav>

        {/* ============ Mobile Nav ========== */}
        <nav
          className={`${
            mobile_nav ? "flex" : "hidden"
          } md:hidden pb-6 w-full flex flex-col justify-between h-[89vh]  absolute top-[40px] left-0`}
        >
          {/*=========== mobile Top ============    */}
          <div className="flex flex-col">
            <label className="relative w-full  ">
              <input
                className="ps-[48px] w-full py-[11px] rounded-[6px] border-[1px] border-[#6C7275]"
                type="text"
                placeholder={data.serch.placeholder}
              />
            </label>
            <div className="w-full gap-4 py-4 flex flex-col justify-center ">
              {data.nav.map((elem, id) => {
                return (
                  <Link
                    key={id}
                    className="pb-4 font-medium text-[14px] border-b-[1px] border_primary"
                    href={elem.path}
                  >
                    {elem.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/*========= mobile bottom ======    */}
          <div className="w-full flex gap-2 flex-col">
            <div className="flex pb-2 border-b-[1px] border_primary  justify-between">
              <h2 className="font-medium text-lg text_primary">
                {data.cart.name}
              </h2>
              <div className=" flex items-center gap-1 ">
                <Image width={24} height={24} src={data.cart.icon} alt="" />
                <div className="w-[20px] h-[20px] pb-0.5 bg-black text-white flex justify-center items-center rounded-full">
                  {data.cart.item}
                </div>
              </div>
            </div>

            <div className="flex pb-2 border-b-[1px] border_primary  justify-between">
              <h2 className="font-medium text-lg text_primary">
                {data.wishlist.name}
              </h2>
              <div className=" flex items-center gap-1 ">
                <Image width={24} height={24} src={data.wishlist.icon} alt="" />
                <div className="w-[20px] h-[20px] pb-0.5 bg-black text-white flex justify-center items-center rounded-full">
                  {data.wishlist.item}
                </div>
              </div>
            </div>
            <div className="py-[19px] flex">
              <Button data={data.button} />
            </div>
            <div className="flex max-w-[120px] w-full justify-between">
              {data.media.map((elem, id) => {
                return (
                  <Link key={id} href={elem.path}>
                    <Image width={24} height={24} src={elem.icon} alt="" />
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="max-w-[130px] max-h-[28px] h-full w-full flex items-center gap-4 md:justify-center justify-end ">
          <Image
            className="md:block hidden"
            width={24}
            height={24}
            src={data.serch.icon}
            alt=""
          />
          <Image
            className="md:block hidden"
            width={24}
            height={24}
            src={data.user.icon}
            alt=""
          />
          {/* <div className=" flex items-center gap-1 "> */}
          <div className={`${mobile_nav ? "hidden" : "block"} flex items-center gap-1`}>
            <Image width={24} height={24} src={data.cart.icon} alt="" />
            <div className="w-[20px] h-[20px] pb-0.5 bg-black text-white flex justify-center items-center rounded-full">
              {data.cart.item}
            </div>
          </div>
          <div className={`w-[24px] h-[24px]  ${mobile_nav ? 'block': 'hidden' }`} onClick={()=>setMobile_nav(!mobile_nav)} >
            <RxCross2 className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
