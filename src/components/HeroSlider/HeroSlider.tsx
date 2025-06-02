"use client";

import React from "react";
import type { heroSlider } from "@/type/type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface SliderProp {
  data: heroSlider;
}

export default function HeroSlider({ data }: SliderProp) {
  return (
    <section className="md:px-0 px-6" id="hero_slider">
      <div className=" mx-auto">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper "
        >
          {data.slider.map((elem, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="max-h-[536px] h-full flex justify-center xl:items-end items-center">
                  <Image
                    width={0}
                    height={0}
                    src={elem.path}
                    alt={elem.alt}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex md:flex-row flex-col gap-4 items-center justify-center pt-8 pb-10">
          <div
            className=" max-w-[643px] w-full font_poppins font-medium lg:text-7xl text-[40px] md:leading-[76px] leading-[44px]"
            dangerouslySetInnerHTML={{ __html: data.hadding }}
          ></div>
          <div
            className="flex font_inter font-semibold text_primary  max-w-[477px] w-full"
            dangerouslySetInnerHTML={{ __html: data.text }}
          ></div>
        </div>
      </div>
    </section>
  );
}
