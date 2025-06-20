import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { createClient } from "@/prismicio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500"],
});


export async function getHeaderData() {
  const client = createClient();
  const data = await client.getSingle("header");
  return data?.data;
}
const headerData = await getHeaderData();

export async function getFooterData() {
  const client = createClient();
  const data = await client.getSingle("footer");
  return data?.data;
}
const footerData = await getFooterData();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // console.log(children);
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Header data={headerData} />
        <main className="pt-[60px]">{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
