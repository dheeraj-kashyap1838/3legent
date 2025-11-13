import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Article_Section from "@/components/ArticleSection/ArticleSection";

/**
 * Props for `ArticleSection`.
 */
export type ArticleSectionProps =
  SliceComponentProps<Content.ArticleSectionSlice>;

/**
 * Component for "ArticleSection" Slices.
 */
const ArticleSection: FC<ArticleSectionProps> = ({ slice }) => {
  return (
    <Article_Section data={slice}  />
  );
};

export default ArticleSection;
