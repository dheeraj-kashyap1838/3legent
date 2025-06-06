import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image_group from "@/components/ImageGroup/ImageGroup"
/**
 * Props for `ImageGroup`.
 */
export type ImageGroupProps = SliceComponentProps<Content.ImageGroupSlice>;

/**
 * Component for "ImageGroup" Slices.
 */
const ImageGroup: FC<ImageGroupProps> = ({ slice }) => {
  return (
    <Image_group data={slice}/>
  );
};

export default ImageGroup;
