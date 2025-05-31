"use client";

import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/socialLinks";
import { SlidingLogo } from "../animations/SlidingTextLogoEffect";

const MyInformation = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-3"
      >
        <div className="col-span-1 flex flex-col md:flex-row">
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
          >
            <Link
              href="https://maps.apple.com/?address=Ichapur,%20North%20Barrackpur,%20743144,%20West%20Bengal,%20India&auid=1375702232826506223&ll=22.805642,88.372861&lsp=7618&q=My%20Location&t=m"
              passHref
            >
              <motion.div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="/images/contact/location.png"
                    alt="my location"
                    width={500}
                    height={600}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </Link>
            <div className="absolute top-1/2 left-1/2 size-20 rounded-full -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              >
                <Image
                  src="/images/contact/face.png"
                  alt="my logo"
                  width={50}
                  height={0}
                  className="size-18"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <Link key={link.id} href={link.url} passHref>
                <SlidingLogo
                  FirstIcon={link.icon}
                  SecondIcon={GoArrowUpRight}
                  name={link.title}
                  className="bg-secondary hover:bg-gray-200/70"
                />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyInformation;
