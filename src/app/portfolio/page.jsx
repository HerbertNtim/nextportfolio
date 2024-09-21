"use client";

import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <AnimatedText text={"My Current Works"} className="!text-6xl p-2" />
      <div className="flex flex-col relative h-full items-start" ref={ref}>
        <div className="mx-auto flex flex-col gap-16 sm:gap-8 w-full max-w-4xl mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              github={project.github}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
