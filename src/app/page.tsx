import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

import { createClient } from "@/prismicio";
import GetMetadata from "@/components/GenerateMeta/GenerateMeta";


export async function generateMetadata(): Promise<Metadata> {
  return await GetMetadata({ props: 'homepage' });
}
export default async function Page() {

  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());
  return <SliceZone slices={page.data.slices} components={components} />; 
}
