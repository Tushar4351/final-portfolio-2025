"use client";
import { motion } from "framer-motion";
import { SkillBar } from "./SkillsBar";
import { skills } from "@/data/skills";
import { TextAnimate } from "../animations/TextAnimate";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-secondary rounded-xl"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-10 md:p-12 flex flex-col gap-12 md: md:flex-row "
      >
        <TextAnimate
          animation="blurIn"
          as="h1"
          className="text-2xl md:w-1/2 font-semibold mb-4"
        >
          My Skills, your advantage
        </TextAnimate>
        <TextAnimate
          animation="slideUp"
          by="word"
          as="p"
          className=" md:w-1/2"
          delay={0.5}
        >
          My skills is a blend of creativity and technology, allowing me to
          deliver top-notch development and strategy for every project.
        </TextAnimate>
      </motion.div>

      <div className="space-y-4 p-8 md:p-10 ">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            src={skill.src}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
