import SingleArticle from "@/components/SingleArticle/SingleArticle";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

type tParams = Promise<{ slug: string }>;

async function SingleBlog({ params }: { params: tParams }) {
  const { slug } = await params;
  const client = createClient();
  const blog = await client.getByUID("blog", slug);

  return (
    <>
      <SingleArticle data={blog?.data} date={blog?.first_publication_date} />
      <SliceZone slices={blog?.data?.slices} components={components} />
    </>
  );
}

export default SingleBlog;
