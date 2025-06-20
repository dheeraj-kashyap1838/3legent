import { createClient } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import { notFound } from "next/navigation";
import LinkResolver from "../LinkResolver/LinkResolver";

interface MetadataProps{
  uid?: string | null;
  props: "blog" | "blogs" | "homepage" | "page";
}


export default async function generateMetadata({ props, uid }: MetadataProps) {
  const client = createClient();

  let page;
  if (uid && typeof uid === "string") {
    page = await client.getByUID(props, uid).catch(() => notFound());
  } else {
    page = await client.getSingle(props).catch(() => notFound());
  }



  return {
    metadataBase: new URL('https://3legent-six.vercel.app'),
    title: page?.data?.meta_title,
    description: page?.data?.meta_description,
    alternates: {
      canonical: LinkResolver(page),
    },
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
