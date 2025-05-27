// import BannerGrid from "@/components/BannerGrid/BannerGrid";
import ArticleSection from "@/components/ArticleSection/ArticleSection";
import CardSection from "@/components/CardSection/CardSection";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";
import SalesSection from "@/components/SalesSection/SalesSection";
import { HomeData } from "@/data/data";



export default function Home() {
  return (
    <>
      <HeroSlider data={HomeData.HeroSlider} />
      {/* <BannerGrid data={HomeData.BannerGrid} /> */}
      <CardSection data={HomeData.CardSection} />
      <SalesSection data={HomeData.SalesSection} size="full"/>
      <ArticleSection data={HomeData.ArticleSection} />
      <NewsletterSection data={HomeData.NewsletterSection} />
    </>
  );
}
