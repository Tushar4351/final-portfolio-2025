import { SocialLink } from "@/types";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/tushaar_22",
    icon: FaInstagram,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tushar-bhowal-32bb74205",
    icon: TbBrandLinkedin,
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/Tushar4351",
    icon: FaGithub,
  },
  {
    id: 4,
    title: "Facebook",
    url: "https://www.facebook.com/tushar.bhowal.1",
    icon: RiFacebookCircleLine,
  },
];