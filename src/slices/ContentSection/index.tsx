import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Content_Section from "@/components/ContentSection/ContentSection";

/**
 * Props for `ContentSection`.
 */
export type ContentSectionProps =
  SliceComponentProps<Content.ContentSectionSlice>;

/**
 * Component for "ContentSection" Slices.
 */
const ContentSection: FC<ContentSectionProps> = ({ slice }) => {
  return <Content_Section data={slice} />;
};

export default ContentSection;
