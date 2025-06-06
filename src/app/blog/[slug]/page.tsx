// 'use client'

import SingleArticle from "@/components/SingleArticle/SingleArticle";
// import ImageGroup from "@/components/ImageGroup/ImageGroup";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

// import { BlogData,HomeData } from "@/data/data";
// import SplitContent from "@/components/SplitContent/SplitContent";
// import MoreArticle from "@/components/MoreArticle/MoreArticle";
// import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";

// interface SingleProp {
//   params: { slug: string };
// }
type tParams = Promise<{ slug: string }>;

async function SingleBlog({ params }: { params: tParams }) {
  const { slug } = await params;
  const client = createClient();
  const blog = await client.getByUID("blog", slug);

  // console.log(blog)

  return (
    <>
      <SingleArticle data={blog.data} date={blog.first_publication_date} />
      <SliceZone slices={blog?.data?.slices} components={components} />
      {/* 
      <SplitContent data={SingleBlog.splitContent} />
      <MoreArticle data={SingleBlog.moreArticle} />
      <NewsletterSection data={HomeData.NewsletterSection} /> */}
    </>
  );
}

export default SingleBlog;
