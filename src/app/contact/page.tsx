"use client";

import ContactForm from "@/components/contact/ContactForm";
import MyInformation from "@/components/contact/MyInformation";
import MainLayout from "@/components/layouts/MainLayout";
import TwoColumnLayout from "@/components/layouts/TwoColumnLayout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
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
                src="/images/Tushar.jpg"
                alt="Tushar image"
              />
            </motion.div>
          </motion.div>
        }
      >
        {/* right-side children */}
        <ContactForm />
        <MyInformation />
      </TwoColumnLayout>
    </MainLayout>
  );
}
