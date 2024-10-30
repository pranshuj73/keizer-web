import Image from "next/image";
import Hero from "~/components/hero/hero";
import Projects from "~/components/hero/projects";
import Navbar from "~/components/shared/navbar";

export default function Home() {
  return (
    <div className="">
      <Image
        src={"/hero/bg.png"}
        fill
        alt="background"
        className="absolute top-0 opacity-15 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 h-full w-full bg-transparent opacity-15 -z-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] w-full">
        <Hero />
        <Projects />
      </div>
    </div>
  );
}
