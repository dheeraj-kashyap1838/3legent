import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Split_Content from "@/components/SplitContent/SplitContent";

/**
 * Props for `SplitContent`.
 */
export type SplitContentProps = SliceComponentProps<Content.SplitContentSlice>;

/**
 * Component for "SplitContent" Slices.
 */
const SplitContent: FC<SplitContentProps> = ({ slice }) => {
  return (
      <Split_Content data={slice} />
    
  );
};

export default SplitContent;
