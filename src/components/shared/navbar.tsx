import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = ["Product", "Development", "Design", "Marketing"];

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
        <span className="font-semibold">Keizer.</span>
      </div>
      <ul className="flex absolute left-1/2 -translate-x-1/2 items-center border border-neutral-800 gap-4 px-4 py-2 backdrop-blur-md bg-neutral-800/80 rounded-full">
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
      <button className="px-4 py-1 glow-btn duration-500 transition-all bg-neutral-200 text-black rounded-full font-[550]">
        Get started
      </button>
    </nav>
  );
}
