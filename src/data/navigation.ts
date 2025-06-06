import { NavigationItem } from "@/types";
import { GoArrowUpRight } from "react-icons/go";
export const navigationData: NavigationItem[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.15) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(234,88,12,0.15) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(22,163,74,0.15) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.15) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
];