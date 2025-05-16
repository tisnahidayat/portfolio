import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import type { IconType } from "react-icons";

type Social = {
  icon: IconType;
  path: string;
};

export const socials: Social[] = [
  {
    icon: FaGithub,
    path: "https://github.com/tisnahidayat",
  },
  {
    icon: FaLinkedin,
    path: "https://linkedin.com/in/tisna-hidayat-778084203",
  },
  {
    icon: FaInstagram,
    path: "https://instagram.com/tisnahidayat_/",
  },
  {
    icon: FaTwitter,
    path: "https://x.com/TisnaHidayat7",
  },
];
