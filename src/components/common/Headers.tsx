"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GoArrowUpRight, GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";
import Image from "next/image";
import { MainHeadingProps, SectionHeadingProps } from "@/types";
import { TextAnimate } from "../animations/TextAnimate";

export const HomeHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sharedContent = (
    <>
      {isHovered && isHome && (
        <motion.div
          className="absolute top-4 right-4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <GoArrowUpRight className="w-6 h-6 text-gray-600" />
        </motion.div>
      )}
      <div className="flex flex-col gap-12 md:justify-between h-full">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex overflow-hidden rounded-full">
            <Image
              width={64}
              height={64}
              src="/Tushar_favicon.png"
              alt="Tushar Bhowal"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <TextAnimate
              animation="blurIn"
              as="h1"
              className="text-xl font-semibold text-gray-900"
              delay={0.5}
            >
              Tushar Bhowal
            </TextAnimate>
            <TextAnimate
              animation="blurIn"
              as="p"
              className="text-gray-500"
              delay={0.6}
            >
              Software Developer
            </TextAnimate>
          </div>
        </div>
        <div className="">
          <TextAnimate
            animation="slideUp"
            by="word"
            as="p"
            className="text-primary lg:text-[1vw]"
            delay={0.7}
          >
            I'm Tushar Bhowal, a software developer from India. I build
            impactful solutions by blending creativity with functionality, and I
            integrate AI to automate workflows and enhance user experiences.
          </TextAnimate>
        </div>
      </div>
    </>
  );

  return isHome ? (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-8 md:p-10 flex flex-col h-full gap-10 md:gap-0 justify-between bg-secondary rounded-xl relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 2 }}
      whileHover={{
        backgroundColor: "rgba(229, 231, 235, 0.7)",
        transition: { duration: 0.3 },
      }}
    >
      <Link href="/about" className="block h-full">
        {sharedContent}
      </Link>
    </motion.div>
  ) : (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-8 md:p-10 flex flex-col h-full gap-10 md:gap-0 justify-between bg-secondary rounded-xl relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 2 }}
      whileHover={{
        backgroundColor: "rgba(229, 231, 235, 0.7)",
        transition: { duration: 0.3 },
      }}
    >
      {sharedContent}
    </motion.div>
  );
};

//section heading funtion

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 2 }}
      className="flex items-center text-black font-normal justify-between px-4 py-4 rounded-xl bg-secondary transition-colors duration-200"
    >
      <div className="flex items-center space-x-2">
        <h2 className="flex items-center text-lg font-medium ">
          {title}
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <GoArrowDown className="ml-2 w-4 h-4 text-gray-600" />
          </motion.div>
        </h2>
      </div>
      {link && (
        <motion.div whileHover={{ x: 5 }}>
          <Link
            href="/projects"
            className="text-sm underline underline-offset-4"
          >
            {link}
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export const MainHeading: React.FC<MainHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="p-10 md:p-12 flex flex-col gap-12 md:gap-32 text-primary  bg-secondary rounded-xl relative "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 4 }}
    >
      <TextAnimate animation="blurIn" as="h1" className="text-3xl" delay={0.6}>
        {title}
      </TextAnimate>
      <TextAnimate animation="slideUp" by="word" as="p" delay={0.7}>
        {description}
      </TextAnimate>
    </motion.div>
  );
};
