// import Link from "next/link";
import React from "react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { ImageField, RichTextField, LinkField } from "@prismicio/client";
import * as Prismic from "@prismicio/client";
import ErrowButton from "../ErrowButton/ErrowButton";
import Link from "next/link";
import formatDate from "@/utils/formateDate";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
// import type { DateField } from "@prismicio/client";

interface CardData {
  card_image?: ImageField;
  card_heading?: RichTextField;
  button?: LinkField;
}

interface CardProp {
  uid?: string ;
  date?: string | null;
}
async function BlogCard({ uid='', date }: CardProp) {
  const client = createClient();
  const BlogData = await client.getByUID("blog", uid).catch(() => notFound());
  const data: CardData = BlogData.data;
  


  return (
    <div className="flex flex-col gap-6 mx-auto">
      <div className="max-w-[357px] w-full">
        {Prismic.isFilled.image(data?.card_image) && (
          <PrismicImage field={data?.card_image} />
        )}
      </div>
      <div className="flex flex-col w-full gap-2">
        <Link
          href={`/blog/${uid}`}
          className="font-medium md:text-xl  md:leading-7 leading-[26px]"
        >
          {Prismic.isFilled.richText(data?.card_heading) && (
            <PrismicRichText field={data?.card_heading} />
          )}
        </Link>
        {date && (
          <div className="text_primary font-normal text-xs leading-5">
            {formatDate(date)}
          </div>
        )}
        {date ? null : 
        <div className="max-w-[103px] w-full">
          <ErrowButton data={data?.button}/>
        </div>
        }
      </div>
    </div>
  );
}

export default BlogCard;
