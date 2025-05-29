import SingleArticle from "@/components/SingleArticle/SingleArticle";
import ImageGroup from "@/components/ImageGroup/ImageGroup";
import { BlogData } from "@/data/data";

function SingleBlog() {
  const SingleBlog = BlogData.SingleBlog;
  return (
    <>
      <SingleArticle data={SingleBlog.blogArticle} />
      <ImageGroup data={SingleBlog.imageGroup} />
    </>
  );
}

export default SingleBlog;
