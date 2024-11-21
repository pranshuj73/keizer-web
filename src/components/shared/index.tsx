import Link from "next/link";
import { cn } from "~/lib/utils";

const NavLink = ({
  linkName,
  index,
  className,
}: {
  linkName: string;
  index?: number;
  className?: string;
}) => {
  return (
    <Link
      className={cn(
        "font-mono group tracking-[-1%] relative text-nowrap",
        className,
      )}
      href={`#${linkName.split(" ").join("").toLowerCase()}`}
    >
      {index !== undefined && (
        <span className="absolute text-[9px] group-hover:opacity-100 ease-in-out transition-all opacity-70 translate-y-2 top-[-100%] right-0">
          0{index + 1}
        </span>
      )}
      {linkName}
    </Link>
  );
};

export default NavLink;
