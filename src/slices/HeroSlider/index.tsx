import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroSlides from "@/components/HeroSlider/HeroSlider";
/**
 * Props for `HeroSlider`.
 */
export type HeroSliderProps = SliceComponentProps<Content.HeroSliderSlice>;

/**
 * Component for "HeroSlider" Slices.
 */
const HeroSlider: FC<HeroSliderProps> = ({ slice }) => {

  return <HeroSlides slice={slice} />;
};

export default HeroSlider;
