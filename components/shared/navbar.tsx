import Image from "next/image";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="w-full py-4 text-white">
      <div className="w-5/6 mx-auto animate-unblur flex align-middle justify-between items-center rounded-2xl px-4 py-2">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="flex justify-center items-center cursor-pointer max-w-1/5"
        >
          <Image src={"/logo.svg"} alt="logo" width={60} height={60} />
          <h1 className="font-semibold">KeizerWorks</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-x-4 border rounded-3xl p-1 border-white/10 bg-black/10 backdrop-blur-sm"
        >
          {["Product", "Development", "Design", "Marketting"].map((s) => (
            <Link
              href="#"
              key={"random service key" + s}
              className="cursor-pointer hover:text-gray-300 bg-white/10 px-3 rounded-3xl py-1"
            >
              {s}
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="secondary"
            className="rounded-3xl px-3 py-1 cursor-pointer"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
