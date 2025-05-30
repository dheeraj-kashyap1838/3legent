"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Content } from "@prismicio/client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
interface HeroSlidesProps {
  slice: Content.HeroSliderSlice;
}
<<<<<<< HEAD
import * as prismic from "@prismicio/client";
=======

>>>>>>> 08f76a9a0aae962187159afa0137816614069011
export default function HeroSlider({ slice }: HeroSlidesProps) {
  const { description, heading, sliderImage } = slice?.primary;
  return (
    <section className="px-6" id="hero_slider">
      <div className="container mx-auto">
<<<<<<< HEAD
        {prismic.isFilled.group(sliderImage) && (
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper "
          >
            {sliderImage?.map((elem, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="max-h-[536px] h-full flex justify-center items-end">
                    <PrismicImage field={elem?.image} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <div className="flex md:flex-row flex-col gap-4 items-center justify-center pt-8 pb-10">
          <div className=" max-w-[643px] w-full font_poppins font-medium lg:text-7xl text-[40px] md:leading-[76px] leading-[44px]">
            {prismic.isFilled.richText(heading) && (
              <PrismicRichText field={heading} />
            )}
          </div>
          <div className="flex font_inter font-semibold text_primary  max-w-[477px] w-full">
            {prismic.isFilled.richText(heading) && (
              <PrismicRichText field={description} />
            )}
=======
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper "
        >{
          sliderImage && 
          sliderImage?.map((elem, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="max-h-[536px] h-full flex justify-center items-end">
                  <PrismicImage field={elem?.image} />
                </div>
              </SwiperSlide>
            );
          })
        }
        </Swiper>
        <div className="flex md:flex-row flex-col gap-4 items-center justify-center pt-8 pb-10">
          <div className=" max-w-[643px] w-full font_poppins font-medium lg:text-7xl text-[40px] md:leading-[76px] leading-[44px]">
            <PrismicRichText field={heading} />
          </div>
          <div className="flex font_inter font-semibold text_primary  max-w-[477px] w-full">
            <PrismicRichText field={description} />
>>>>>>> 08f76a9a0aae962187159afa0137816614069011
          </div>
        </div>
      </div>
    </section>
  );
}
