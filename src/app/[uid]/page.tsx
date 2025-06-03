//  import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
// import ContactCards from "@/components/CardSection/CardSection";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import ContactHeader from "@/components/ContactHeader/ContactHeader";
// import ContactAbout from "@/components/SalesSection/SalesSection";
// import { ContactData , HomeData } from "@/data/data";

// import React from "react";




// function Contact() {
//   return (
//     <>
//       <BreadCrumb data={ContactData.BreadCrumb} />
//       <ContactHeader data={ContactData.ContactHeader} />
//       <ContactAbout data={ContactData.ContactAbout} size='' />
//       <ContactForm data={ContactData.contactForm} />
//       <ContactCards data={HomeData.CardSection} variation='primary' />
    
//     </>
//   );
// }

// export default Contact;




import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => ({ uid: page.uid }));
}