import SingleArticle from "@/components/SingleArticle/SingleArticle";
import { BlogData } from "@/data/data";

function SingleBlog() {
  const SingleBlog = BlogData.SingleBlog;
  return (
    <>
      <SingleArticle data={SingleBlog.blogArticle} />
    </>
  );
}

export default SingleBlog;
