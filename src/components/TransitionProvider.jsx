"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen bg-black z-40 fixed rounded-b-[100px] overflow-hidden"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto left-0 top-0 right-0 bottom-0 text-white cursor-default text-8xl w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathname === "/" ? "home" : pathname.slice(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black z-30 rounded-t-[100px] bottom-0"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
