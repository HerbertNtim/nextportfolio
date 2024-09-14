"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/contact", title: "Contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
      {/* LG NAV */}
      <div className="hidden md:flex justify-center items-center gap-4 w-1/3">
        {links.map((link) => (
          <Link key={link.title} href={link.href} className={`text-xl ${pathname === link.href && 'bg-black text-white rounded p-1'}`}>
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
      <div className="md:hidden flex">
        {/* BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black"></div>
          <div className="w-10 h-1 bg-black"></div>
          <div className="w-10 h-1 bg-black"></div>
        </button>
        {/* MENU LIST  */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
            {links.map((link) => (
              <Link key={link.title} href={link.href} className="text-4xl">
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
