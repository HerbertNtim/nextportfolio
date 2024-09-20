"use client"

import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <AnimatedText text={'My Current Works'} className="!text-6xl p-2"/>
      <div className="">

      </div>
    </motion.section>
  );
};

export default Portfolio;
