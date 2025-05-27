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
    <section className="px-6 relative " id="hero_slider">
      <div className="container mx-auto">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper "
        >
          {data.slider.map((elem, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="max-h-[536px] h-full flex justify-center items-end">
                  <Image
                    width={1120}
                    height={536}
                    src={elem.path}
                    alt={elem.alt}
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
