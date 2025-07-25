import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";
import { SiGooglesheets, SiLinktree } from "react-icons/si";

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
    icon: SiGooglesheets,
    path: "https://docs.google.com/spreadsheets/d/1DMc20BeoRx21xAa7oKoMXKDyfUufh06YUr9gSiBRDuc/edit?gid=0#gid=0",
  },
  {
    icon: SiLinktree,
    path: "https://linktr.ee/tisnahidayat",
  },
];
