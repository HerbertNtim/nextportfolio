"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="flex">
        {/* TEXT */}
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
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
          <div>SKILLS</div>

          {/* EXPERIENCE */}
          <div>EXPERIENCE</div>
        </div>

        {/* SVG */}
        <div></div>
      </div>
    </motion.section>
  );
};

export default About;
