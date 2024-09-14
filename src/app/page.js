import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="h-full flex flex-col items-center py-8 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Hello, 😍 I am <span className="font-black rounded-lg ring-1 ring-black p-2 bg-gradient-to-r from-[#09203F] to-[#537895] text-white">Herbert</span>!
      </h1>

      <h3 className="mt-8 py-8 text-3xl">Full-Stack Developer, based in Ghana.</h3>

      <p className="text-xl mt-10 text-center text-gray-800 py-2">Develop Seamless Digital Experiences with Expertise in Frontend & Backend Development.</p>
      {/* BUTTONS */}
      <div className="w-full flex justify-center items-center gap-4 mt-8">
        <Link
          href="/portfolio"
          className="p-4 rounded-lg ring-1 ring-black bg-black text-white text-xl hover:bg-transparent hover:text-black"
        >
          Explore My Work
        </Link>
        <Link
          href="/contact"
          className="p-4 rounded-lg ring-1 ring-black text-black text-xl hover:bg-black hover:text-white"
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Home;
