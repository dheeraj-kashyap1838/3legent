import SingleArticle from "@/components/SingleArticle/SingleArticle";
import ImageGroup from "@/components/ImageGroup/ImageGroup";
import { BlogData,HomeData } from "@/data/data";
import SplitContent from "@/components/SplitContent/SplitContent";
import MoreArticle from "@/components/MoreArticle/MoreArticle";
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";


function SingleBlog() {
  const SingleBlog = BlogData.SingleBlog;
  return (
    <>
      <SingleArticle data={SingleBlog.blogArticle} />
      <ImageGroup data={SingleBlog.imageGroup} />
      <SplitContent data={SingleBlog.splitContent} />
      <MoreArticle data={SingleBlog.moreArticle} />
      <NewsletterSection data={HomeData.NewsletterSection} />
      

    </>
  );
}

export default SingleBlog;
