import { motion } from "framer-motion";
import { useState } from "react";
import ListItem from "@/components/ListItem";
import projects from "@/lib/projects.json";
import { Rotate3D } from "lucide-react";

interface DataItem {
  title: string;
  tag: string;
  accomplishment: string;
  technologies: string[];
  description: string;
  image_path: string;
}

const typedProjects: DataItem[] = projects as unknown as DataItem[];

const projectVariants = {
  hidden: { opacity: 0, x: "-100vw" }, // Exit to the right
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: { opacity: 0, x: "-100vw", transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, Rotate3D: 90 }, // Exit to the right
  visible: {
    opacity: 1,
    x: 0,
    Rotate3D: 90,
    transition: { duration: 1 }
  },
  exit: { opacity: 0, x: "-100vw", transition: { duration: 1 } },
};

const item_list = (handleHover: (index: number | null) => void) => {
  return (
    <>
      {typedProjects.map((item, index) => (
        <motion.li
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "linear",
            type: "spring",
            duration: 0.6,
            delay: index * 0.2,
            stiffness: 60,
          }}
          exit="exit"
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(null)}
        >
          <ListItem item={item.title} />
        </motion.li>
      ))}
    </>
  );
};

function Projects() {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = (index: number | null) => {
    if (hoveredItemIndex !== index) {
      setIsAnimating(false);
      setTimeout(() => {
        setHoveredItemIndex(index);
      }, 240);
      setIsAnimating(true);
    }
  };

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 10);
  };

  return (
    <>
      <div className="flex justify-center align-center mb-[-5rem] overflow-clip">
        <div className="px-8 lg:px-16 grid grid-cols-12 items-end">
          <div className="row-span-full col-start-1 col-span-12 md:col-start-1 md:col-span-8 self-center z-10 align-center">
            <div className="list-parent-parent w-full mt-8 md:mt-4 md:w-full h-full justify-between">
              <div className="md:hidden dir-ltr list-parent text-left font-sofia md:pl-12 md:pr-32 md:py-14 lg:pl-16 lg:py-16 mr-auto sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[8.5rem] 2xl:leading-[9.5rem] text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[9rem] min-w-[30rem]">
                Projects
              </div>
              <ul className="list-parent flex-column h-[100vh] px-12 py-12 md:pl-12 md:pr-32 md:py-14 lg:pl-16 lg:py-16 justify-center content-start text-start mr-auto sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[8.5rem] 2xl:leading-[9.5rem] text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[9rem] min-w-[30rem] overflow-y-scroll">
                <li className="hidden md:block opacity-0">DUMMY</li>
                {item_list(handleHover)}
                <li className="hidden md:block opacity-0">DUMMY</li>
                <li className="hidden md:block opacity-0">DUMMY</li>
              </ul>
            </div>
          </div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            // transition={{
            //   ease: "linear",
            //   type: "spring",
            //   duration: 0.6,
            //   stiffness: 60,
            // }}
            exit="exit"
            className="project-parent row-span-full col-start-5 col-span-9 self-center pr-4 md:pr-8 z-0 align-center"
          >
            <div
              className={`project-container hidden md:flex md:flex-col items-end justify-between min-w-56 min-h-[32rem] ml-auto rounded-2xl shadow-xl ${
                isAnimating ? "project-spin" : ""
              }`}
              style={{
                backgroundImage:
                  hoveredItemIndex !== null
                    ? `url(${typedProjects[hoveredItemIndex].image_path})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onAnimationEnd={handleAnimationEnd}
            >
              {hoveredItemIndex !== null ? (
                <>
                  {typedProjects[hoveredItemIndex].accomplishment !== "" ? (
                    <div className="text-left mt-8 p-8 text-[var(--text-color)] text-lg font-bold bg-[var(--background-color)] rounded-r-2xl">
                      {typedProjects[hoveredItemIndex].accomplishment}
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div className="w-full text-right p-8 text-[var(--text-color)] md:text-2xl lg:text-3xl xl:text-3xl font-bold bg-[var(--background-color)] rounded-b-2xl">
                    {typedProjects[hoveredItemIndex].tag}
                    <div className="md:text-sm lg:text-md xl:text-lg text-[var(--secondary-text-color)]">
                      {typedProjects[hoveredItemIndex].technologies.join(" | ")}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div></div>
                  <div className="w-full text-right p-8 md:text-2xl lg:text-3xl xl:text-3xl font-bold">
                    Hover over to see a preview, or click to view more details
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Projects;
