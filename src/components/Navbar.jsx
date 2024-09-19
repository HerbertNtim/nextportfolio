"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // framer animation
  const topVariant = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariant = {
    closed: {
      rotate: 0,
    },

    opened: {
      opacity: 1,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const linkVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    },
  };

  return (
    <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 text-xl">
      {/* LG NAV */}
      <div className="hidden md:flex justify-center items-center gap-4 w-1/3">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`text-xl ${
              pathname === link.href && "bg-black text-white rounded p-1"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex sm:px-8 lg:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm rounded-md bg-black flex items-center justify-center p-1"
        >
          <span className="text-white mr-1 font-semibold">Ntim</span>
          <span className="w-12 h-8 rounded text-black bg-white flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 ">
        <Link href="">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/linkedin.png" alt="github" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE NAVIGATION */}
      <div className="md:hidden flex z-50">
        {/* BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST  */}
        {open && (
          <motion.div
            variants={linkVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6"
          >
            {links.map((link) => (
              <motion.div variants={listVariant} key={link.title}>
                <Link href={link.href} className="text-4xl cursor-pointer">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
