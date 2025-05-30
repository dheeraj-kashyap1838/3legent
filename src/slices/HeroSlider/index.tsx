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
  console.log(slice, "slice");
  
  return (
    <section
    >
     <HeroSlides slice={slice} />
    </section>
  );
};

export default HeroSlider;
