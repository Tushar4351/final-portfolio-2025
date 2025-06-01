 "use client";
 
import { useEffect, useState } from "react";
import { motion} from "framer-motion";
import { BiEnvelope } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
 import Image from "next/image";
import MainLayout from "@/components/layouts/MainLayout";
import TwoColumnLayout from "@/components/layouts/TwoColumnLayout";
import { MainHeading } from "@/components/common/Headers";
import { workTitleData } from "@/data/sections";
import ProjectCard from "@/components/projects/ProjectCard";
import { SlidingLogo } from "@/components/animations/SlidingTextLogoEffect";
import { projects } from "@/data/projects";
import Link from "next/link";
 
export default function ContactPage() {
     
      const [currentImage, setCurrentImage] = useState(
    "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  );
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }
   return (
     <MainLayout>
       <TwoColumnLayout
         left={
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="w-full h-[500px] sm:h-[710px] lg:h-full"
           >
             <motion.div
               className="h-full lg:sticky lg:top-0 relative overflow-hidden"
               initial={{ clipPath: "inset(0 0 100% 0)" }}
               animate={{ clipPath: "inset(0 0 0% 0)" }}
               transition={{
                 duration: 1.2,
                 ease: [0.76, 0, 0.24, 1],
               }}
             >
               <Image
                 width={800}
                 height={600}
                 className="object-cover rounded-xl w-full h-full"
                 src={currentImage}
                 alt="Tushar image"
               />
             </motion.div>
           </motion.div>
         }
       >
         {/* right-side children */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MainHeading
              title={workTitleData.title}
              description={workTitleData.description}
            />
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            {projects.map((card, i) => (
              <Link
                className="sticky "
                style={{
                  top: `calc(0px + ${i * 40}px`,
                }}
                key={card.id}
                href={`/projects/${card?.id}`}
                onMouseEnter={() => setCurrentImage(card.image)}
                onMouseLeave={() =>
                  setCurrentImage(
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9"
                  )
                }
              >
                <ProjectCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  image={card.image}
                  backGround={card.backGround}
                />
              </Link>
            ))}
          </motion.div>
          <a href="/contact">
            <SlidingLogo
              FirstIcon={BiEnvelope}
              SecondIcon={GoArrowUpRight}
              name="Contact Me"
              className="bg-black text-white"
            />
          </a>
       </TwoColumnLayout>
     </MainLayout>
   );
 }
 