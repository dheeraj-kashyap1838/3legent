import FilterBlog from "@/components/FilterBlog/FilterBlog";
import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import GetMetadata from "@/components/GenerateMeta/GenerateMeta";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return await GetMetadata({ props: 'blogs' });
}

async function BlogPage() {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog");
  const pageData = await client.getSingle("blogs");
  console.log('pageData', pageData)

  return (
    <>
      <PageBanner data={pageData?.data} />
      <FilterBlog data={blogPosts} />
      <SliceZone slices={pageData?.data?.slices} components={components} />
    </>
  );
}

export default BlogPage;
