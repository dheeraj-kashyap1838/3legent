import React from "react";
import type { CardSection } from "@/type/type";
import SmallCard from "../SmallCard/SmallCard";

interface SectionProp {
  data: CardSection;
}

function CardSection({ data }: SectionProp) {
  return (
    <section className="px-6 mb-10">
      <div className="container flex mx-auto flex-wrap justify-center ">
        {data.cards.map((card, id) => {
          return (
            <div
              key={id}
              className="md:basis-1/4 basis-1/2 lg:px-3 px-1.5 py-1.5 "
            >
              <SmallCard data={card} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardSection;
