"use client";

import Brain from "@/components/Brain";
import ExperienceLists from "@/components/ExperienceLists";
import { skills } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.section
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex gap-3 items-center justify-center">
              <h1 className="text-3xl font-black">BIOGRAPHY</h1>
              <Image
                src={"https://s3-inventory-2024.s3.amazonaws.com/profile.jpg"}
                alt="profile"
                width={34}
                height={34}
                className="w-20 h-20 object-cover rounded-full"
                unoptimized
              />
            </div>
            <p className="text-xl">
              Herbert Ntim is a recent Computer Engineering graduate from Kwame
              Nkrumah University of Science and Technology, passionate about
              solving real-world problems through technology. With a solid
              foundation in hardware and software, he has honed his full-stack
              JavaScript skills, specializing in React, Node.js, and modern web
              technologies. Through internships and group projects, Herbert
              gained hands-on experience in frontend, backend, and database
              management. Eager to learn and be mentored in new technologies, he
              is committed to expanding his expertise in scalable software
              solutions. Herbert seeks opportunities to build seamless,
              user-centric digital experiences while staying at the cutting edge
              of tech.
            </p>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col justify-center items-center gap-5">
            <h1>SKILLS</h1>
            <div className="flex flex-col gap-4 justify-between">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="flex flex-col justify-center items-center gap-4"
                >
                  <h2>{skill.title}</h2>
                  <div className="flex flex-wrap items-center gap-4">
                    {skill.items.map((item) => (
                      <span
                        className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-black text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LISTS */}
            <div className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/2 mr-4 flex flex-col gap-8">
                  <ExperienceLists
                    title={"Software Developer Intern"}
                    description={
                      "Collaborated with a team of developers to build a scalable and user-friendly platform for managing customer data. Implemented RESTful APIs and integrated third-party services to enhance the platform’s functionality."
                    }
                    jobDate={"June 2021 - August 2021"}
                    company={"Company Name"}
                  />
                  <ExperienceLists
                    title={"Software Developer Intern"}
                    description={
                      "Collaborated with a team of developers to build a scalable and user-friendly platform for managing customer data. Implemented RESTful APIs and integrated third-party services to enhance the platform’s functionality."
                    }
                    jobDate={"June 2021 - August 2021"}
                    company={"Company Name"}
                  />
                </div>

                {/* CENTER */}
                <div className="w-1/6 h-full ml-10">
                  {/* LINE */}
                  <div className="w-1 h-[45rem] sm:h-[30rem] bg-black rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-0"></div>
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2"></div>
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 -bottom-0"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/2">
                  <ExperienceLists
                    title={"Software Developer Intern"}
                    description={
                      "Collaborated with a team of developers to build a scalable and user-friendly platform for managing customer data. Implemented RESTful APIs and integrated third-party services to enhance the platform’s functionality."
                    }
                    jobDate={"June 2021 - August 2021"}
                    company={"Company Name"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2">
          <Brain />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
