import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import NewsletterSection from "@/components/NewsletterSection/NewsletterSection";


/**
 * Props for `NewsLetter`.
 */
export type NewsLetterProps = SliceComponentProps<Content.NewsLetterSlice>;

/**
 * Component for "NewsLetter" Slices.
 */
const NewsLetter: FC<NewsLetterProps> = ({ slice }) => {
  return (
    <NewsletterSection data={slice}/>
  );
};

export default NewsLetter;
