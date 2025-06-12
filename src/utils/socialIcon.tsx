import Image from "next/image";
import head_facebook from "../../public/icon/facebook.svg";
import head_instagram from "../../public/icon/instagram.svg";
import head_youtube from "../../public/icon/youtube.svg";

import foot_facebook from "../../public/icon/ft_facebook.svg";
import foot_instagram from "../../public/icon/ft_instagram.svg";
import foot_youtube from "../../public/icon/ft_youtube.svg";
interface SocialIconProps {
  type: string | null;
  variation: "header" | "footer";
}

export default function SocialIcon({type, variation}: SocialIconProps) {
  if (variation === "footer") {
  switch (type) {
    case "facebook":
      return <Image src={foot_facebook} alt="Facebook" />;
    case "instagram":
      return <Image src={foot_instagram} alt="Instagram" />;
    case "youtube":
      return <Image src={foot_youtube} alt="YouTube" />;
    default:
      return <>icon type not found</>;
  }
  }
  else if (variation === "header") {
  switch (type) {
    case "facebook":
      return <Image src={head_facebook} alt="Facebook" />;
    case "instagram":
      return <Image src={head_instagram} alt="Instagram" />;
    case "youtube":
      return <Image src={head_youtube} alt="YouTube" />;
    default:
      return <>icon type not found</>;
  }
  }
  else{
    return <>variation not found</>;
  }
}
