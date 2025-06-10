import Image from "next/image";
import facebook from "../../public/icon/ft_facebook.svg";
import instagram from "../../public/icon/ft_instagram.svg";
import youtube from "../../public/icon/ft_youtube.svg";

export default function SocialIcon(type: string | null) {
  switch (type) {
    case "facebook":
      return <Image src={facebook} alt="Facebook" />;
    case "instagram":
      return <Image src={instagram} alt="Instagram" />;
    case "youtube":
      return <Image src={youtube} alt="YouTube" />;
    default:
      return <>icon type not found</>;
  }
}