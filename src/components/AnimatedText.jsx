"use client";
import { motion, stagger } from "framer-motion";

const animateVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
      ,
    },
  },
}

const singleWordVariant = {
  initial: {
    opacity: 1,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
}

const AnimatedText = ({ text, className }) => {
  return (
    <div className="w-full mx-auto ppy-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-black font-black capitalize text-8xl ${className}`}
        variants={animateVariant}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span key={word+'-'+index} className={"inline-block mr-3 pr-1"} variants={singleWordVariant}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
