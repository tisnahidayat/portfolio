import type { IconType } from "react-icons";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type Info = {
  icon: IconType;
  title: string;
  description: string;
};

export const info: Info[] = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    description: "(+62) 823 9728 7915",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "tisnahidayat1993@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Phone",
    description: "Tempuran, Karawang, Jawa Barat",
  },
];
