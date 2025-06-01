import { HiWindow, HiOutlinePaintBrush } from "react-icons/hi2";
import { TbCodeCircle2 } from "react-icons/tb";
import { SiEngadget } from "react-icons/si";
import { PiUserSoundBold, PiHandFist } from "react-icons/pi";
import { Service } from "@/types";

export const services: Service[] = [
  { id: 1, title: "Frontend", icon: HiWindow, top: "5%", left: "5%" },
  { id: 2, title: "Backend", icon: TbCodeCircle2, top: "30%", left: "0%" },
  { id: 3, title: "Innovation", icon: SiEngadget, top: "5%", left: "50%" },
  { id: 4, title: "Communication", icon: PiUserSoundBold, top: "30%", left: "40%" },
  { id: 5, title: "Leadership", icon: PiHandFist, top: "55%", left: "50%" },
  { id: 6, title: "Web Design", icon: HiOutlinePaintBrush, top: "60%", left: "1%" },
];
