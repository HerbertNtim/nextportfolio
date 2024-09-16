"use client"

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Portfolio
    </motion.section>
  );
};

export default Portfolio;
