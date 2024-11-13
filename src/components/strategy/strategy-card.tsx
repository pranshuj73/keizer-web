import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StrategyCardProps {
  number: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const StrategyCard = ({
  number,
  title,
  description,
  linkText = "Read More",
  linkHref = "#",
}: StrategyCardProps) => {
  return (
    <div className="relative w-[284px] mx-auto flex flex-col justify-between">
      <h2 className="text-white/80 text-[14px] pb-[20px] font-medium border-b border-neutral-600 tracking-wide">
        {number}. STRATEGY
      </h2>

      <div className="space-y-6 pt-[20px]">
        <h3 className="text-white text-[25px] font-bold leading-tight">
          {title}
        </h3>

        <p className="text-white/80 text-[16px] leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      <Link
        href={linkHref}
        className="inline-flex text-[14px] w-fit pt-[20px] items-center text-neutral-300  hover:border-white pb-1 hover:opacity-80 transition-all group"
      >
        {linkText}
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default StrategyCard;

// Example usage:
export function Example() {
  return (
    <div className="bg-black min-h-screen p-8 md:p-12">
      <StrategyCard
        number="1"
        title="Brand Strategy & Art Direction"
        description="Creating a higher spacing and how people move through a unique and impactful campaign."
        linkText="Read More"
        linkHref="/strategy"
      />
    </div>
  );
}
