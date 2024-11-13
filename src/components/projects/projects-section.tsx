import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  categories: string[];
  image: string;
  href: string;
  className?: string;
}

const ProjectSection = () => {
  const projects: Project[] = [
    {
      title: "Gold Rush",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-2 row-span-2",
    },
    {
      title: "Statistics Mobile App",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-1 row-span-2",
    },
    {
      title: "Plastic Credit Card",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-1 row-span-1",
    },
    {
      title: "Diseño de Moda",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-1 row-span-1",
    },
    {
      title: "Dinámica Lifestyle",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-1 row-span-1",
    },
    {
      title: "Captive Bright Utensil",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-1 row-span-1",
    },
    {
      title: "Fitness Lifestyle Mobile App",
      categories: ["Stories", "Branding"],
      image: "/project-1.png",
      href: "#",
      className: "col-span-2 row-span-1",
    },
  ];

  /*
  Note: Some projects mentioned here are just shown for placeholder images, we will change them later with our keizer actual projects later.
  */

  return (
    <section className="bg-white text-black project-keizer">
      <div className="p-[100px] mx-auto max-w-[1536px] ">
        <div className="racking-[-1%] flex justify-between items-center">
          <div>
            <p className="uppercase text-[16px] pb-[10px]">Our clients</p>
            <h2 className="text-[54px] font-bold leading-[100%]">
              We’re going to
              <br />
              became partners
              <br />
              for the long run.
            </h2>
          </div>
          <div className="w-[640px] text-[20px]">
            <p>
              While creating inspiring places for people, product team
              which&nbsp;
              <span className="font-bold">creates amazing UI/UX </span>{" "}
              experiences,
              <span className="font-bold">&nbsp;by crafting top-notch</span>{" "}
              user experience.
            </p>
          </div>
        </div>
        <div className="grid pt-[60px] grid-cols-1 md:grid-cols-3 gap-[40px] py-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group relative h-[422px] overflow-hidden rounded-[5px] ${project.className}`}
            >
              <Image
                src={`/assets/project-${index + 1}.png`}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={400}
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 h-[50%] opacity-60 w-full bg-gradient-to-t from-black to-transparent" />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-[40px]">
                <h3 className="text-xl font-medium text-zinc-100 md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-[5px] text-sm text-zinc-300">
                  {project.categories.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
