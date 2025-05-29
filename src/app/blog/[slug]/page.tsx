import SingleArticle from "@/components/SingleArticle/SingleArticle";
import ImageGroup from "@/components/ImageGroup/ImageGroup";
import { BlogData } from "@/data/data";
import SplitContent from "@/components/SplitContent/SplitContent";
import MoreArticle from "@/components/MoreArticle/MoreArticle";


function SingleBlog() {
  const SingleBlog = BlogData.SingleBlog;
  return (
    <>
      <SingleArticle data={SingleBlog.blogArticle} />
      <ImageGroup data={SingleBlog.imageGroup} />
      <SplitContent data={SingleBlog.splitContent} />
      <MoreArticle data={SingleBlog.moreArticle} />
      

    </>
  );
}

export default SingleBlog;
