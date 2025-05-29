"use client";
import SkillsMarquee from "@/components/about/SkillsMarquee";
import StepProcess from "@/components/about/StepProcess";
import { HomeHeader, MainHeading } from "@/components/common/Headers";
import {
  SocialLinksBottom,
  SocialLinksTop,
} from "@/components/common/SocialLinks";
import MainLayout from "@/components/layouts/MainLayout";
import TwoColumnLayout from "@/components/layouts/TwoColumnLayout";
import { aboutTitleData } from "@/data/sections";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <MainLayout>
      <TwoColumnLayout
        left={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mt-16 lg:mt-0 h-[500px] sm:h-[710px] lg:h-full"
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
                src="/images/tushar_bhowal.jpg"
                alt="Tushar image"
              />
            </motion.div>
          </motion.div>
        }
      >
        {/* right-side children */}
        <div className="md:grid md:grid-cols-5 gap-2">
          <div className="md:col-span-3">
            <HomeHeader />
          </div>
          <div className="md:col-span-2">
            <SocialLinksTop />
          </div>
        </div>
        <MainHeading
          title={aboutTitleData.title}
          description={aboutTitleData.description}
        />
        <SkillsMarquee />
        <StepProcess />
        <SocialLinksBottom />
      </TwoColumnLayout>
    </MainLayout>
  );
}
