"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const text = "Say Hello";

  return (
    <motion.section
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😉
          </div>
        </div>
        {/* FORMS CONTAINER */}
        <form className="h-1/2 lg:h-full lg:w-1/2 rounded-xl bg-red-50 flex flex-col gap-8 p-24 justify-center">
          <span>Dear Herbert Ntim,</span>
          <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none pb-16 mb-16b" placeholder="Your Message Here" required></textarea>
          <span>My Email is:</span>
          <input type="email" placeholder="Email Here" required className="bg-transparent border-b-2 border-b-black outline-none p-2"/>
          <span>Regards:</span>
          <button className="bg-purple-200 text-gray-500 p-2 rounded font-semibold">Send</button>
          {success && <span className="text-green-600 text-lg">Your message is sent</span>}
          {error && <span className="text-red-600 text-lg">Something went wrong! Please try again!</span>}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
