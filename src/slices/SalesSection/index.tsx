import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Sales_Section from "@/components/SalesSection/SalesSection";

/**
 * Props for `SalesSection`.
 */
export type SalesSectionProps = SliceComponentProps<Content.SalesSectionSlice>;

/**
 * Component for "SalesSection" Slices.
 */
const SalesSection: FC<SalesSectionProps> = ({ slice }) => {
  return <Sales_Section data={slice}  />;
};

export default SalesSection;
