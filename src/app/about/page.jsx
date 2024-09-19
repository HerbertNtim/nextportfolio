"use client";

import { skills } from "@/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-220vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-24 xl:p-48 gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* EDUCATION */}
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-2xl font-bold">EDUCATION</h1>
            <p className="text-lg">
              Herbert Ntim is a Computer Engineering graduate from Kwame Nkrumah
              University of Science and Technology. With a passion for
              technology and innovation, I specialize in full-stack development,
              particularly using modern web technologies like React.js and
              Node.js, to build efficient, scalable, and user-friendly digital
              solutions.
            </p>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
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
            <h1 className="text-2xl font-bold">SKILLS</h1>
            {skills.map((skill) => (
              <div key={skill.title} className="flex flex-col items-start gap-4 border-b-2 border-solid border-black pb-4">
                <h5 className="text-lg font-semibold mt-6 rounded p-2 bg-black/15">{skill.title}{':'}</h5>
                <div className="flex flex-wrap gap-4 items-center">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* EXPERIENCE */}
          <div>EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden">SVG</div>
      </div>
    </motion.div>
  );
};

export default About;
