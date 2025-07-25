import React from "react";
import type { CardSection } from "@/type/type";
import SmallCard from "../SmallCard/SmallCard";

interface SectionProp {
  data: CardSection;
  variation: string;
}

function CardSection({ data, variation }: SectionProp) {
  return (
    <>
      {variation === "default" && (
        <section className="px-6 mb-10">
          <div className="container flex mx-auto flex-wrap justify-center md:gap-6 gap-2 ">
            {data.cards.map((card, id) => {
              return (
                <div key={id} className="md:max-w-[262px] max-w-[152px] w-full">
                  <SmallCard data={card} variation="default" />
                </div>
              );
            })}
          </div>
        </section>
      )}
      {variation === "primary" && (
        <section className="px-6 py-4 bg_primary">
          <div className="container flex mx-auto flex-wrap justify-center md:gap-6 gap-2 ">
            {data.cards.map((card, id) => {
              return (
                <div key={id} className="md:max-w-[262px] max-w-[152px] w-full">
                  <SmallCard data={card} variation="default" />
                </div>
              );
            })}
          </div>
        </section>
      )}
      
    </>
  );
}

export default CardSection;
