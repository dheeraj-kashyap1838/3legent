import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Cardsection from "@/components/CardSection/CardSection";

/**
 * Props for `CardSection`.
 */
export type CardSectionProps = SliceComponentProps<Content.CardSectionSlice>;

/**
 * Component for "CardSection" Slices.
 */
const CardSection: FC<CardSectionProps> = ({ slice }) => {
  return <Cardsection data={slice} variation="default" />;
};

export default CardSection;
