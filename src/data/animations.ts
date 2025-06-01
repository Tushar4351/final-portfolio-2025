import { HamburgerLineVariants, MenuVariants } from "@/types";

export const menuVariants: MenuVariants = {
    closed: { height: "auto", transition: { duration: 0.9, ease: "easeInOut" } },
    open: { height: "auto", transition: { duration: 0.5, ease: "easeInOut" } },
  };
  
  export const hamburgerLineVariants: HamburgerLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (i) => ({ rotate: i === 1 ? 45 : i === 2 ? -45 : 0, y: i === 1 ? -2 : i === 2 ? -8 : 0, opacity: i === 0 ? 0 : 1 }),
  };