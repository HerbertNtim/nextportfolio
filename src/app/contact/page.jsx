"use client"

import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Contact
    </motion.section>
  );
};

export default Contact;
