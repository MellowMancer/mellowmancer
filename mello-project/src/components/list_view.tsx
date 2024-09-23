import React, { useState } from "react";
import ListItem from "./listItem";
import projects from "@/lib/projects.json";

interface DataItem {
    title: string;
    tag: string;
    technologies: string[];
    description: string;
    image_path: string;
}

const typedProjects: DataItem[] = projects as unknown as DataItem[];

const item_list = (
  domain: string,
  handleHover: (index: number | null) => void
) => {
  return (
    <>
      {typedProjects.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(null)}
        >
          <ListItem item={item.title} />
        </li>
      ))}
    </>
  );
};

interface ListViewProps {
  domain: string;
}

const ListView: React.FC<ListViewProps> = ({ domain }) => {
  // State to keep track of the hovered item index
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);

  // Handler function to update hovered index
  const handleHover = (index: number | null) => {
    setHoveredItemIndex(index);
  };

  return (
    <div className="flex justify-center align-center mb-[-5rem]">
      <div className="px-8 lg:px-16 grid grid-cols-12 items-end">
        <div className="row-span-full col-start-1 col-span-12 md:col-start-1 md:col-span-8 self-center z-10 align-center">
          <div className="list-parent-parent w-full mt-8 md:mt-4 md:w-full h-full justify-between">
            <ul className="list-parent flex-column h-1/4 px-12 py-12 md:pl-12 md:pr-32 md:py-14 lg:pl-16 lg:py-16 justify-center content-start text-start mr-auto sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[8.5rem] 2xl:leading-[9.5rem] text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[9rem] min-w-[30rem] overflow-y-scroll max-h-[80vh] border-b-2 border-t-2 border-[color: var(--secondary-background-color)]">
              {item_list(domain, handleHover)}
            </ul>
          </div>
        </div>
        <div className="project-parent row-span-full col-start-5 col-span-9 self-center pr-4 md:pr-8 z-0 align-center">
          <div
            className="project-container hidden md:flex items-end min-w-56 min-h-[32rem] ml-auto rounded-2xl shadow-xl"
            style={{
              backgroundImage: hoveredItemIndex !== null
                ? `url(${typedProjects[hoveredItemIndex].image_path})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {hoveredItemIndex !== null ? (
              <div className="w-full text-right p-8 text-[var(--text-color)] text-4xl font-bold bg-[var(--background-color)] rounded-b-2xl">
                {typedProjects[hoveredItemIndex].tag}
                <div className="text-lg text-[var(--secondary-text-color)]">{typedProjects[hoveredItemIndex].technologies.join(", ")}</div>
              </div>
            ) : (
              <div className="w-full text-right p-8 text-5xl font-bold">Hover over a project to see the details.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
