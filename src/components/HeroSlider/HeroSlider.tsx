"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <section className="px-6">
      <div className="container mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Image width={150} height={150} src="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={150} height={150} src="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={150} height={150} src="" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
