import { useState } from "react";
import work from "@/lib/work.json";

interface Work {
  company: string;
  role: string;
  technologies: string[];
  description: string;
  image_path: string;
}

const typedWork: Work[] = work as unknown as Work[];

function Work() {
  return (
    <div className="work-parent self-center pl-4 md:pl-8 z-0 align-center overflow-x-hidden">
      <div className="work-container rounded-2xl w-full overflow-hidden">
        <div className="overflow-x-auto w-full">
          <div className="work-list overflow-x-scroll w-full flex">
            {typedWork.map((item, index) => (
              <div
                key={index}
                className="text-left mt-8 p-8 text-[var(--text-color)] text-lg font-bold min-h-[20rem] m-4 shadow-xl inline-block min-w-[50rem] w-[50rem]" // Fixed width for cards
              >
                {/* <h3 className="text-4xl whitespace-normal">{item.company}</h3> */}
                {/* Uncomment below as needed */}
                {/* <p className="whitespace-normal">{item.role}</p>
              <p className="whitespace-normal">{item.technologies.join(" | ")}</p>
              <p className="whitespace-normal">{item.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
