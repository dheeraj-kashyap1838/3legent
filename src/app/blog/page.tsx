// import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";
import FilterBlog from "@/components/FilterBlog/FilterBlog";
import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
async function BlogPage() {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog");
  const pageData = await client.getSingle("blogs");
  return (
    <>
      <PageBanner data={pageData?.data} />
      <FilterBlog data={blogPosts} />
      <SliceZone slices={pageData?.data?.slices} components={components} />
      {/* <NewsletterSection data={HomeData.NewsletterSection} /> */}
    </>
  );
}

export default BlogPage;
