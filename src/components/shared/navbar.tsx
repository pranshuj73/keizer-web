"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const navLinks = ["Product", "Development", "Design", "Marketing"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-2 translate-y-4 rounded-xl max-w-7xl mx-auto top-0 z-[100] sticky flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          className=" object-cover translate-y-1"
          width={50}
          height={50}
        />
        <span className="font-semibold ">Keizer.</span>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            {!isOpen && (
              <Button variant="ghost" size="icon" className="text-neutral-200">
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-neutral-800">
            <div className="flex flex-col gap-3 mt-12">
              {navLinks.map((link) => (
                <Link 
                  key={link}
                  href="/"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors duration-300 text-lg font-medium tracking-wide  py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
            <SheetFooter className="mt-12">
              <Link href="/">
                <Button className="w-full py-6 text-lg font-semibold tracking-wide  bg-neutral-200 text-black rounded-full">
                  Get started
                </Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center border border-neutral-800 gap-4 px-4 py-2 backdrop-blur-md bg-neutral-800/80 rounded-full">
        {navLinks.map((link) => {
          return (
            <li
              key={link} 
              className="text-neutral hover:text-neutral-400 transition-all"
            >
              <Link href={`${link}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
      <button className=" hidden md:block px-4 py-1 glow-btn duration-500 transition-all bg-neutral-200 text-black rounded-full font-[550]">
        Get started
      </button>
    </nav>
  );
}
