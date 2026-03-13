"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { useExperiment } from "statsig-react";

interface HeroSlidesProps {
  slice: Content.HeroSliderSlice;
}

export default function HeroSlider({ slice }: HeroSlidesProps) {
  const { description, heading, sliderImage } = slice?.primary;
  const experiment = useExperiment("hero-button-test");

  // Get experiment values with fallbacks
  const buttonColor:string = experiment?.config?.get?.("button_color", "blue");
  const showButton:boolean = experiment?.config?.get?.("button",true);
  const variant:string = experiment?.config?.get?.("variant","control");
  console.log('experiment', buttonColor)
  console.log('experiment', experiment)

  return (
    <section className="md:px-0 px-6" id="hero_slider">
      {/* <div className=" w-full mx-auto">
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
          </div>
        </div>
      </div>
      <h2 className="text-center font_poppins font-medium text-4xl">
        New Hero Section Coming Soon!
      </h2> */}
      <>
        <h1>
          {prismic.isFilled.richText(heading) && (
            <PrismicRichText field={heading} />
          )}
        </h1>

        {showButton && (
          <button 
            style={{ background: buttonColor }}
            data-experiment-variant={variant}
          >
            <div className="flex font_inter font-semibold text_primary  max-w-[477px] w-full">
              {prismic.isFilled.richText(description) && (
                <PrismicRichText field={description} />
              )}
            </div>
          </button>
        )}
      </>
    </section>
  );
}
