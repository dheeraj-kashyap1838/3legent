"use client";

import React from "react";
import type { CardSection } from "@/type/type";
import SmallCard from "../SmallCard/SmallCard";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface CardSectionProps {
  data: Content.CardSectionSlice;
  variation: string;
}

function CardSection({ data }: CardSectionProps) {
  const { cards } = data?.primary;

  return (
    <>
      {data?.variation === "default" && (
        <section className={`px-6  ${data?.primary?.background_color}`}>
          <div className="container flex mx-auto flex-wrap justify-center md:gap-6 gap-2 ">
            {cards.map((card, id) => {
              return (
                <div key={id} className="max-w-[262px] w-full">
                  <SmallCard data={card} variation="default" />
                </div>
              );
            })}
          </div>
        </section>
      )}
      {data?.variation === "cardWithCenterAlign" && (
        <section className="px-6 pt-12 pb-10 ">
          <div className="container mx-auto flex flex-col gap-10 ">
            <div className="text-center heading">
              {isFilled.richText(data.primary.heading) && (
                <PrismicRichText field={data?.primary?.heading} />
              )}
            </div>
            <div className="flex mx-auto w-full md:flex-row flex-col justify-center md:gap-6 gap-2">
              {cards.map((card, id) => {
                return (
                  <div
                    key={id}
                    className="max-w-[357px] mx-auto  w-full"
                  >
                    <SmallCard data={card} variation="Align Center" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CardSection;
