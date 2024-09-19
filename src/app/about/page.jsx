"use client";

import Brain from "@/components/Brain";
import ExperienceLists from "@/components/ExperienceLists";
import { skills } from "@/constants";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-220vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll md:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-24 xl:p-48 gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* EDUCATION */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-2xl font-bold">EDUCATION</h1>
            <h4 className="text-2xl font-bold text-black/90">
              Kwame Nkrumah University of Science and Technology
            </h4>
            <p className="font-semibold">Bsc. Computer Engineering</p>

            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="mt-16"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col">
            <motion.h1
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="flex flex-col items-start gap-6 border-b-2 border-solid border-black pb-4"
              >
                <h5 className="text-lg font-semibold mt-6 rounded p-2 bg-black/15">
                  {skill.title}
                  {":"}
                </h5>
                <div className="flex flex-wrap gap-4 items-center">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="mt-16"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold p-2">EXPERIENCE</h1>
            <div className="relative sm:mx-auto my-4">
              <div className="hidden sm:block absolute left-0 top-0 w-[4px] h-full bg-black origin-top" />
              <div className="hidden sm:block w-5 h-5 rounded-full absolute top-0 -left-2 bg-red-500" />
              <div className="hidden sm:block w-5 h-5 rounded-full absolute top-1/2 -left-2 bg-red-500" />
              <div className="flex flex-col sm:ml-8 gap-12">
                <ExperienceLists
                  title="frontend developer"
                  company="MT Lab KNUST"
                  jobDate="Jun 2023 - Oct 2023"
                  description="Collaborated to build responsive, user-friendly web applications using React.js and Tailwind CSS. Experienced in crafting modern, scalable UI components for seamless digital experiences according to figma design."
                />

                <ExperienceLists
                  title="backend developer"
                  company="ALLE-AI"
                  jobDate="Nov 2023 - Dec 2023"
                  description="Developed and tested APIs for generative AI models, including text, image, audio, and video generation.Collaborated with the team to integrate AI capabilities into production environments, enhancing model performance and scalability. Gained hands-on experience in API development, testing, and backend optimization for AI-based applications."
                />
              </div>
            </div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden md:block lg:w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
