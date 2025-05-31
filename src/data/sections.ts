import { FooterNavigationSection, MainHeadingProps } from "@/types";

export const aboutTitleData: MainHeadingProps = {
  title: "About Me",
  description:
    "I'm a passionate Software Developer driven by a desire to build intelligent, high-impact web solutions that blend functionality, performance, and modern design. I specialize in full-stack development and integrate AI to automate workflows, personalize user experiences, and solve real-world problems at scale. Beyond just writing code, I focus on building meaningful products, leading with curiosity, and growing with every challenge. I thrive in collaborative teams where innovation, ownership, and purpose matter—and I’m constantly seeking opportunities to create, lead, and evolve.",
};

export const workTitleData: MainHeadingProps = {
  title: "My Projects",
  description:
    "Combining a deep understanding of user experience with a knack for transforming ideas into visually stunning and functional interfaces. I specialize in building web applications using modern technologies both frontend and backend. My projects showcase my ability to deliver end-to-end solutions from concept to deployment. With a focus on user-centric design, seamless functionality, and secure integrations, I aim to craft impactful software solutions that address real-world challenges.",
};

export const footerNavigationData: FooterNavigationSection[] = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "CMS",
    links: [
      { name: "Work", href: "#" },
      { name: "Work Single", href: "#" },
    ],
  },
  { title: "Utility", links: [{ name: "404", href: "#" }] },
];

export const steps = [
  {
    number: "01",
    title: "Discovery call",
    description: "We'll discuss your goals and vision",
  },
  {
    number: "02",
    title: "Custom design",
    description: "I'll understand your design tailored to your needs",
  },
  {
    number: "03",
    title: "Development",
    description: "The design comes to life with clean, efficient code",
  },
  {
    number: "04",
    title: "Launch",
    description: "I'll help you get your website live and ready for the world",
  },
];
