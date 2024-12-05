import { UserRound } from "lucide-react";

const NewsLetter = () => {
  return (
    <section
      id="newsLetter"
      className="md:px-[100px] md:pt-[100px] pt-[60px] px-[24px] "
    >
      <div className="flex border-b border-neutral-600 md:pb-[100px] pb-[60px] md:flex-row flex-col gap-[24px] lg:items-center items-start justify-between max-w-[1536px] mx-auto">
        <p className="text-[24px] leading-[100%] font-bold">
          Join our newsletter{" "}
          <br className="lg:block md:hidden block" />
          to stay up to date with us
        </p>

        <div className="items-center flex gap-[10px]">
          <div className="relative">
            <input
              className="bg-black md:w-auto w-[200px] relative py-[14px] pl-[50px] pr-[24px] text-white border-white/20 rounded-full focus:outline-none outline-none border"
              type="text"
              placeholder="Enter your email."
            />
            <UserRound className="absolute text-white/60 h-[15px] top-[50%] left-[24px] -translate-y-1/2" />
          </div>

          <button className="text-[14px] py-[14px] px-[28px] rounded-full bg-[#2D2DC3] hover:bg-[#2d2dc3]/50 transition-all active:bg-[#2d2dc3]/30">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
