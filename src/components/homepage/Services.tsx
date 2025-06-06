"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { TextAnimate } from "../animations/TextAnimate";

const Services = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 3 }}
      className="flex flex-col space-y-4 rounded-xl h-[600px] md:h-[500px] lg:h-[400px]  bg-secondary"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-10 pt-10 md:pb-0 md:px-12 md:pt-12 flex flex-col gap-12 md: md:flex-row "
      >
        <TextAnimate
          animation="blurIn"
          as="h1"
          className="text-2xl md:w-1/2 font-semibold mb-4"
          delay={0.8}
        >
          So, What do I even do?
        </TextAnimate>
        <TextAnimate
          animation="slideUp"
          by="word"
          as="p"
          className=" md:w-1/2"
          delay={0.9}
        >
          I create software solutions, specialize in web technologies, design
          responsive UIs, manage teams, and deliver impactful
          projects—leveraging AI to automate tasks and enhance user
          experiences—driven by technical expertise, leadership, and strong
          communication.
        </TextAnimate>
      </motion.div>
      <div className="flex-1 relative" ref={constraintsRef}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="inline-flex absolute text-md bg-primary text-white items-center gap-2 px-6 py-2 rounded-full"
            style={{
              left: service.left,
              top: service.top,
            }}
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: index * 0.2,
            }}
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1 }}
          >
            <span>
              <service.icon className="w-5 h-5" />
            </span>
            <span>{service.title}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
