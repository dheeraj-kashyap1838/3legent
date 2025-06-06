import React from "react";
import type { ArticleSection } from "@/type/type";
import ErrowButton from "../ErrowButton/ErrowButton";
import {
  Content,
  isFilled,
  FilledContentRelationshipField,
} from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import BlogCard from "../BlogCard/BlogCard";

interface ArticleProp {
  data: Content.ArticleSectionSlice;
}

interface ExtendedBlogRelationship
  extends FilledContentRelationshipField<
    "blog",
    string,
    Content.BlogDocumentData
  > {
  first_publication_date: string;
}

function ArticleSection({ data }: ArticleProp) {
  const { heading, button, featured_blog } = data?.primary;

  return (
    <section className="px-6 md:py-20 py-10 ">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="heading">
            <PrismicRichText field={heading} />
          </div>
          <div className="max-w-[122px] w-full">
            <ErrowButton data={button} />
          </div>
        </div>

        <div className="flex md:flex-row gap-[25px] mx-auto flex-col">
          {featured_blog
            ? featured_blog.map((card, id) => {
                if (isFilled.contentRelationship(card.featured_blog)) {
                  const blog = card.featured_blog as ExtendedBlogRelationship;

                  return (
                    <div key={id} className="max-w-[357px] w-full">
                      <BlogCard
                        uid={blog.uid}
                        date={
                          card.with_date ? blog.first_publication_date : null
                        }
                      />
                    </div>
                  );
                }

                return null;
              })
            : null}
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
