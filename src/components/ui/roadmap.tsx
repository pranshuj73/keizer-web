type RoadmapProps = {
  title: string;
  description: string;
  containerClass?: string;
  indicatorClass?: string;
  endElement?: boolean;
};

export default function RoadmapElement({
  title,
  description,
  containerClass,
  indicatorClass,
  endElement,
}: RoadmapProps) {
  return (
    <div
      className={`flex flex-col relative pl-6 ${endElement ? "ml-[10px]" : "ml-2 border-l-[3px] border-foreground/40"} pb-8 -mt-[1px] ${containerClass}`}
    >
      <div
        className={`absolute -left-[7px] size-3 bg-white rounded-full z-10 ${indicatorClass}`}
      />
      <span className="text-lg font-semibold -mt-[7px]">{title}</span>
      <span>{description}</span>
    </div>
  );
}
