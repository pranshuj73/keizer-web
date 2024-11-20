import { ArrowRight } from "lucide-react";
import Link from "next/link";

const NewsSection = () => {
  return (
    <section id="news" className="bg-white text-black">
      <div className="max-w-[1536px] mx-auto md:p-[100px] px-[24px] py-[60px]">
        <header className="flex justify-between items-end">
          <div>
            <span className="text-[15px] font-bold uppercase">News</span>
            <h2 className="md:text-[54px] text-[32px] font-semibold">
              News archive.
            </h2>
          </div>
          <Link
            href="#"
            className="items-center group md:flex hidden gap-[10px]"
          >
            Show all post{" "}
            <ArrowRight className="group-hover:translate-x-1 group-hover:opacity-100 opacity-60 transition-all" />
          </Link>
        </header>
        <div>Coming soon...</div>
        <Link
          href="#"
          className="items-center group justify-center md:hidden flex gap-[10px]"
        >
          Show all post{" "}
          <ArrowRight className="group-hover:translate-x-2 group-hover:opacity-100 opacity-0 transition-all" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
