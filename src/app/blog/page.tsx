import PageBanner from "@/components/PageBanner/PageBanner";
import { BlogData } from "@/data/data";
import React from "react";


function BlogPage() {
  return (
    <>
      <PageBanner data={BlogData.pageBanner} />
    </>
  );
}

export default BlogPage;
