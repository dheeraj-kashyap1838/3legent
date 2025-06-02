// import Link from "next/link";
import React from "react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { ImageField, RichTextField, LinkField } from "@prismicio/client";
// import * as Prismic from "@prismicio/client";
import ErrowButton from "../ErrowButton/ErrowButton";

interface CardData {
  card_image: ImageField;
  card_heading: RichTextField;
  button: LinkField;
}
interface CardProp {
  data: CardData;
  variation?: string;
}

function BlogCard({ data, variation }: CardProp) {
  const { button, card_image, card_heading } = data;
  return (
    <>
      {variation === "with_button" && (
        <div className="max-w-[357px] flex flex-col gap-6 w-full">
          <PrismicImage field={card_image} />

          <div className=" flex flex-col gap-2">
            <div className="font-medium text-xl">
              <PrismicRichText field={card_heading} />
            </div>
            <div className="max-w-[103px] w-full">
              <ErrowButton data={button} />
            </div>
          </div>
        </div>
      )}
      {/* {variation === "with_date" && (
        <div className="flex flex-col gap-6 mx-auto">
          <div className="max-w-[357px] w-full">
            {Prismic.isFilled.image(card_image) && (
              <PrismicImage field={card_image} />
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="font-medium md:text-xl  md:leading-7 leading-[26px]">
              {Prismic.isFilled.richText(card_heading) && (
                <PrismicRichText field={card_heading} />
              )}
            </div>
            <div className="text_primary font-normal text-xs leading-5">
                <PrismicRichText field={card_heading} />

            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default BlogCard;
