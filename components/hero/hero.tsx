import { ChevronDown, Phone } from "lucide-react";
import { FlipWords } from "~/components/ui/flip-words";

export default function Hero() {
  const words = ["new", "better", "faster", "smarter"];
  return (
    <div className="w-full my-auto overflow-x-hidden">
      <div className="p-4 max-w-8xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="[animation-delay:_0.3s] opacity-0 text-4xl md:text-8xl font-bold animate-unblur text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          KeizerWorks <br />
        </h1>

        <h1 className="[animation-delay:_0.5s] opacity-0 text-4xl md:text-7xl font-bold animate-unblur text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="a">is the</span>{" "}
          <FlipWords words={words} className="text-neutral-300" />
          <span className="a">solution.</span>
        </h1>

        <div className="[animation-delay:_0.75s] opacity-0 animate-unblur mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
          At KeizerWorks, we bring ideas to life. Whether you&apos;re a budding
          startup looking to build your MVP, or an established business aiming
          for the next big leap, we provide tailored support for product
          development and funding.
        </div>
      </div>

      {/* Book a call button */}
      <div className="flex gap-2 justify-center items-center">
        <button className="[animation-delay:_0.85s] opacity-0 animate-unblur bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>

          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
            <span className="text-[14px]">Book a call</span>
            <Phone size={14} />
          </div>

          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>

        <button className="[animation-delay:_0.9s] opacity-0 animate-unblur bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>

          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
            <span className="text-[14px]">Our Services</span>
            <ChevronDown size={14} />
          </div>

          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
    </div>
  );
}
