import { FooterNavigationSection, MainHeadingProps } from "@/types";

export const aboutTitleData: MainHeadingProps = {
  title: "About Me",
  description:
    "I am a self-motivated and ambitious B.Tech graduate with a passion for technology, aspiring to excel as a Software Engineer. Proficient in various programming languages and equipped with a strong project portfolio, I thrive on solving challenges and delivering innovative solutions. I seek to join a dynamic team where I can contribute to organizational success while continuously learning and refining my skills. Dedicated to growth, I aim to make a meaningful impact in the field of software engineering.",
};

export const workTitleData: MainHeadingProps = {
  title: "My Projects",
  description:
    "Combining a deep understanding of user experience with a knack for transforming ideas into visually stunning and functional interfaces. I specialize in building web applications using modern technologies both frontend and backend. My projects showcase my ability to deliver end-to-end solutions from concept to deployment. With a focus on user-centric design, seamless functionality, and secure integrations, I aim to craft impactful software solutions that address real-world challenges.",
};
  
  export const footerNavigationData: FooterNavigationSection[] = [
    { title: "Pages", links: [ { name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" } ] },
    { title: "CMS", links: [ { name: "Work", href: "#" }, { name: "Work Single", href: "#" } ] },
    { title: "Utility", links: [ { name: "404", href: "#" } ] }
  ];
  
  export const steps = [
    { number: "01", title: "Discovery call", description: "We'll discuss your goals and vision" },
    { number: "02", title: "Custom design", description: "I'll understand your design tailored to your needs" },
    { number: "03", title: "Development", description: "The design comes to life with clean, efficient code" },
    { number: "04", title: "Launch", description: "I'll help you get your website live and ready for the world" },
  ];
  