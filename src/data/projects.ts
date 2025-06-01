import { CardProps, Project } from "@/types";

export const cardData: CardProps[] = [
  {
    id: "nexcartia",
    title: "Nexcartia - E-Commerce Platform",
    description: "Modern platform for online shopping",
    icon: "/assets/projects/nexcartia/nexcartia-logo.png",
    image: "/assets/projects/nexcartia/nexcartia-hero.jpg",
    backGround: "bg-pink-500",
    link: "https://nexcartia-ecommerce.vercel.app",
  },
  {
    id: "snippetgenius",
    title: "SnippetGenius - Code Snippet Manager",
    description: "AI-based snippet manager for developers",
    icon: "/assets/projects/snippetgenius/snippetgenius-logo.png",
    image: "/assets/projects/snippetgenius/snippetgenius-hero.mp4",
    backGround: "bg-blue-600",
    link: "https://snippetgenius.vercel.app",
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment Booking App",
    description: "Book and manage doctor appointments online",
    icon: "/assets/projects/doctor-appointment/doctor-appointment-logo.png",
    image: "/assets/projects/doctor-appointment/doctor-appointment-hero.jpg",
    backGround: "bg-green-500",
    link: "https://doctor-appointment-bookingapp.vercel.app",
  },
  {
    id: "simplifyefforts",
    title: "SimplifyEfforts - AI Photo Editor",
    description: "AI-driven app for smart photo editing",
    icon: "/assets/projects/simplifyefforts/simplifyefforts-logo.png",
    image: "/assets/projects/simplifyefforts/simplifyefforts-hero.jpg",
    backGround: "bg-purple-600",
    link: "https://simplifyefforts.vercel.app",
  },
];

export const projects: Project[] = [
  {
    id: "nexcartia",
    title: "Nexcartia - E-Commerce Platform",
    shortDescription:
      "A robust full-stack e-commerce platform delivering a seamless shopping experience with advanced features and secure transactions.",
    image: "/assets/projects/nexcartia/nexcartia-hero.jpg",
    video: "",
    logo: "/assets/projects/nexcartia/nexcartia-logo.png",
    category: "E-Commerce",
    links: {
      liveUrl: "https://nexcartia-ecommerce.vercel.app",
      githubUrl: "https://github.com/Tushar4351/MERN-Ecommerce--App",
    },
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "Firebase",
    ],
    fullDescription:
      "Nexcartia is a cutting-edge e-commerce platform designed to provide a seamless and intuitive online shopping experience. Built with a focus on performance, scalability, and user satisfaction, Nexcartia integrates advanced features to cater to modern retail demands. The platform includes a dynamic product listing with robust search and filter capabilities, enabling users to find products effortlessly. The cart management system supports complex functionalities like shipping address handling and order placement, ensuring a smooth checkout process. Security is paramount, with JWT-based authentication and Google Sign-In for user trust and convenience. Stripe integration ensures secure and reliable payment processing, including support for coupon discounts to enhance user engagement. The admin dashboard empowers merchants with tools for product management (add, edit, delete), transaction tracking, and insightful data visualization using React Table. A data caching mechanism optimizes performance, reducing load times and improving scalability. Nexcartia is designed for businesses seeking a modern, reliable, and feature-rich e-commerce solution.",
    features: [
      "Dynamic product listing with advanced search and filter functionality",
      "Cart management with shipping address handling and order placement",
      "Secure JWT-based authentication with firebase integration",
      "Stripe-powered payment processing with coupon discount support",
      "Admin dashboard for product management and transaction tracking",
      "Data visualization with React Table for actionable insights",
      "Data caching mechanism for optimized performance",
    ],
    useCases: [
      "Small to medium-sized businesses launching online stores",
      "Retailers needing a scalable platform with robust inventory management",
      "Merchants requiring secure payment processing and user authentication",
      "Admins seeking comprehensive tools for product and transaction oversight",
    ],
    purpose:
      "To empower businesses with a modern e-commerce platform that combines a user-friendly interface, secure transactions, and powerful admin tools to drive sales and streamline operations.",
    date: "April 2024",
  },
  {
    id: "snippetgenius",
    title: "SnippetGenius - Code Snippet Manager",
    shortDescription:
      "A web application for storing, managing, and generating code snippets using AI, with secure payment integration.",
    image: "/assets/projects/snippetgenius/snippetgenius-hero.mp4",
    video: "",
    logo: "/assets/projects/snippetgenius/snippetgenius-logo.png",
    category: "Developer Tools",
    links: {
      liveUrl: "https://snippetgenius.vercel.app",
      githubUrl: "https://github.com/Tushar4351/Ai-code-snippet-manager",
    },
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Clerk Authentication",
      "Stripe",
      "React Context API",
    ],
    fullDescription:
      "SnippetGenius is a sophisticated web application tailored for developers to store, organize, and generate code snippets efficiently. Leveraging AI-driven code generation, SnippetGenius empowers users to create high-quality code snippets quickly, enhancing productivity and collaboration. The platform uses React Context API for seamless state management, ensuring a smooth user experience. Secure payment processing is integrated via Stripe, allowing users to access premium features through subscription plans. Clerk Authentication provides robust user authentication, ensuring data security and user privacy. Built with Next.js for server-side rendering and optimal performance, MongoDB for scalable data storage, and Tailwind CSS for a modern, responsive UI, SnippetGenius is designed for developers of all levels. The application supports features like snippet categorization, search, and AI-assisted code suggestions, making it an indispensable tool for coding workflows.",
    features: [
      "AI-driven code snippet generation for rapid development",
      "Secure snippet storage and organization with MongoDB",
      "Stripe integration for seamless subscription payments",
      "Clerk Authentication for secure user management",
      "React Context API for efficient state management",
      "Responsive UI with Tailwind CSS for cross-device compatibility",
      "Search and categorization for easy snippet retrieval",
    ],
    useCases: [
      "Developers storing and organizing reusable code snippets",
      "Teams collaborating on shared coding resources",
      "Freelancers offering premium coding services via subscriptions",
      "Learners experimenting with AI-generated code for education",
    ],
    purpose:
      "To streamline code management and generation for developers by providing an AI-powered, secure, and user-friendly platform for snippet storage and collaboration.",
    date: "June 2024",
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment Booking App",
    shortDescription:
      "An intuitive online platform for booking and managing doctor appointments with a focus on patient experience.",
    image: "/assets/projects/doctor-appointment/doctor-appointment-hero.jpg",
    video: "",
    logo: "/assets/projects/doctor-appointment/doctor-appointment-logo.png",
    category: "Healthcare",
    links: {
      liveUrl: "https://doctor-appointment-bookingapp.vercel.app",
      githubUrl:
        "https://github.com/Tushar4351/doctor-appointment-bookingapp-complete",
    },
    technologies: ["Next.js", "Tailwind CSS", "Strapi CMS"],
    fullDescription:
      "The Doctor Appointment Booking App is a user-centric platform designed to simplify the process of scheduling and managing medical appointments. Built with a focus on accessibility and patient satisfaction, the application allows users to browse available doctors, select appointment slots, and manage their bookings with ease. The platform leverages Strapi CMS for dynamic content management, enabling healthcare providers to update doctor profiles, availability, and services in real-time. Next.js ensures fast, SEO-friendly performance, while Tailwind CSS delivers a responsive and visually appealing interface. Features include intuitive booking management, appointment reminders, and patient experience tracking to ensure high satisfaction. The app is designed to bridge the gap between patients and healthcare providers, offering a seamless, reliable, and modern solution for appointment scheduling.",
    features: [
      "User-friendly interface for browsing and booking doctor appointments",
      "Real-time doctor availability and slot selection",
      "Strapi CMS for dynamic content and service management",
      "Appointment reminders and patient experience tracking",
      "Responsive design with Tailwind CSS for accessibility",
      "SEO-optimized performance with Next.js",
    ],
    useCases: [
      "Patients seeking convenient appointment scheduling",
      "Healthcare providers managing doctor availability and services",
      "Clinics aiming to improve patient satisfaction and engagement",
      "Mobile users requiring a responsive booking experience",
    ],
    purpose:
      "To enhance the healthcare experience by providing a streamlined, accessible, and efficient platform for patients to book and manage doctor appointments.",
    date: "August 2024",
  },
  {
    id: "simplifyefforts",
    title: "SimplifyEfforts - AI Photo Editor",
    shortDescription:
      "An AI-powered web application for advanced photo enhancement, editing, and credit-based transactions.",
    image: "/assets/projects/simplifyefforts/simplifyefforts-hero.jpg",
    logo: "/assets/projects/simplifyefforts/simplifyefforts-logo.png",
    video: "",
    category: "AI & Image Processing",
    links: {
      liveUrl: "https://simplifyefforts.vercel.app",
      githubUrl: "https://github.com/Tushar4351/Ai-Saas-Application",
    },
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Stripe",
    ],
    fullDescription:
      "SimplifyEfforts is an innovative web application that harnesses AI to revolutionize photo editing. Designed for both amateur and professional users, the platform offers advanced features like background removal, object removal, and image quality enhancement, all powered by cutting-edge AI algorithms. Users can purchase credits via Stripe for flexible access to premium editing tools, ensuring a scalable and user-friendly monetization model. Built with React and TypeScript for type-safe development, Next.js for optimal performance, and MongoDB with Mongoose for robust data management, SimplifyEfforts delivers a seamless and responsive experience. Tailwind CSS ensures a modern, visually appealing UI that adapts to various devices. The application is ideal for photographers, content creators, and businesses seeking high-quality photo editing solutions without complex software.",
    features: [
      "AI-powered background and object removal for precise editing",
      "Image quality enhancement for professional-grade results",
      "Stripe integration for credit-based transactions",
      "Type-safe development with TypeScript and React",
      "Scalable data management with MongoDB and Mongoose",
      "Responsive UI with Tailwind CSS for cross-device compatibility",
      "User-friendly credit purchase system for flexible access",
    ],
    useCases: [
      "Photographers enhancing images for portfolios or clients",
      "Content creators needing quick, high-quality edits for social media",
      "E-commerce businesses improving product visuals",
      "Casual users seeking accessible AI-powered photo editing tools",
    ],
    purpose:
      "To democratize advanced photo editing by providing an AI-driven, user-friendly platform that delivers professional results with ease and accessibility.",
    date: "October 2024",
  },
];
