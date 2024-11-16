"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "../shared/nav-link";
import { Button } from "~/src/components/ui/button";
import { AlignJustify } from "lucide-react";
import { space_Grotesk } from "~/src/components/ui/font";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const links = ["Our Projects", "Services", "Reviews", "About Us", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`w-full text-white bg-black/50 fixed z-50 top-0 flex justify-between items-center lg:px-[40px] px-[20px] transition-a duration-300 ease-in-out ${
        visible ? "md:h-[130px] h-[80px]" : "md:h-[100px] h-[80px] "
      }`}
    >
      <div className="max-w-[1440px] w-full flex justify-between items-center mx-auto">
        <div className="flex items-center gap-[5px]">
          <AlignJustify className="md:hidden block" fontWeight={900} />
          <Image
            src="/assets/logos/keizer-logo-name.svg"
            width={175}
            height={79.82}
            alt="keizer-brand-logo"
            className="md:w-[175px] md:h-[79.82px] sm:w-[135px] sm:h-[58.856px] w-[80.4px] h-[49.83px]"
          />
        </div>
        <div className="flex items-center lg:gap-[75px] gap-[40px]">
          <ul className="md:flex hidden lg:gap-[36px] gap-[30px] md:text-[16px] text-[14px]">
            {links.map((link, index) => {
              return (
                <li key={link}>
                  <NavLink
                    className="font-[300] text-[16px]"
                    linkName={link}
                    index={index}
                  />
                </li>
              );
            })}
          </ul>
          <Button
            className={`${space_Grotesk.className} bg-white hover:bg-neutral-300 text-black w-[102px] h-[36px] font-[700] text-[16px] rounded-[4px]`}
          >
            Let's talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
