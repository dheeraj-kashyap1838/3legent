import React from "react";
import type { ArticleSection } from "@/type/type";
import ErrowButton from "../ErrowButton/ErrowButton";
import { Content } from "@prismicio/client"; 
import { PrismicRichText } from "@prismicio/react";
import BlogCard from "../BlogCard/BlogCard";




interface ArticleProp {
  data: Content.ArticleSectionSlice;
}

function ArticleSection({ data }: ArticleProp) {
  const {heading, button, blog_card } = data?.primary
  return (
    <section className="px-6 md:py-20 py-10 ">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="heading">
            <PrismicRichText field={heading}/>
          </div>
          <div className="max-w-[122px] w-full">
            <ErrowButton data={button} />
          </div>
        </div>
        <div className="flex md:flex-row gap-[25] mx-auto flex-col">
          {blog_card.map((card, id) => {
            return (
              <BlogCard data={card}/>
              // <div key={id} className="max-w-[357px] flex flex-col gap-6 w-full">
              //   <Image
              //     width={357}
              //     height={325}
              //     src={card.image.path}
              //     alt={card.image.alt}
              //   />
              //   <div className=" flex flex-col gap-2">
              //     <h3 className="font-medium text-xl">{card.heading}</h3>
              //     <div className="max-w-[103px] w-full">
              //       <ErrowButton data={card.button} />
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
