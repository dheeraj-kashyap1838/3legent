// import BannerGrid from "@/components/BannerGrid/BannerGrid";
// import ArticleSection from "@/components/ArticleSection/ArticleSection";
// import CardSection from "@/components/CardSection/CardSection";
// import HeroSlider from "@/components/HeroSlider/HeroSlider";
// import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";
// import SalesSection from "@/components/SalesSection/SalesSection";
// import { HomeData } from "@/data/data";



// export default function Home() {
//   return (
//     <>
//       <HeroSlider data={HomeData.HeroSlider} />
//       {/* <BannerGrid data={HomeData.BannerGrid} /> */}
//       <CardSection data={HomeData.CardSection} variation="default" />
//       <SalesSection data={HomeData.SalesSection} size="full"/>
//       <ArticleSection data={HomeData.ArticleSection} />
//       <NewsletterSection data={HomeData.NewsletterSection} />
//     </>
//   );
// }
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}