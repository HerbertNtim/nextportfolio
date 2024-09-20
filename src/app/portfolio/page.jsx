"use client";

import AnimatedCircle from "@/components/AnimatedCircle";
import AnimatedText from "@/components/AnimatedText";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const reference = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["stat end", "center start"],
  });

  return (
    <motion.section
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <AnimatedText text={"My Current Works"} className="!text-6xl p-2" />
      <div className="flex flex-col relative h-full" ref={ref}>
        <motion.div
          className="absolute left-8 top-0 w-[4px] h-full bg-black origin-top"
          // style={{ scaleY: scrollYProgress }}
        />
        {/* <AnimatedCircle reference={reference} /> */}

        <div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
