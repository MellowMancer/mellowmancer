import { useState } from 'react';
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
        <div>
            {typedWork.map((job, index) => (
                <div key={index} className="job">
                    {/* <img src={job.image_path} alt={`${job.company} logo`} /> */}
                    <h2>{job.company}</h2>
                    <h3>{job.role}</h3>
                    <p>{job.description}</p>
                    <h4>Technologies:</h4>
                    {job.technologies.join(" | ")}
                </div>
            ))}
        </div>
    );
}

export default Work;