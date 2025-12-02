"use client";
import { projects } from "@/data/data";

export default function ProjectsList() {
    return (
        <div className="mt-10 scroll-mt-14 flex flex-col gap-2" id="projects">
            <div className="flex items-end justify-between">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                    Projects
                </h2>
                <a
                    href="/projects"
                    className="text-sm flex underline hover:text-base-content/80"
                >
                    See All
                </a>
            </div>
            <div className="flex flex-col gap-2">
                {projects.pinProjects.map((item, index) => (
                    <div
                        key={index}
                        className="group p-4 border-2 border-base-content/20 rounded-2xl hover:scale-102 transition-transform duration-200"
                    >
                        <div className="flex flex-col gap-2 justify-between">
                            <h3 className="font-semibold text-lg">
                                {item.title}
                            </h3>
                            <p className="text-base-content/80 text-sm sm:text-base">
                                {item.description}
                            </p>
                            <div className="flex items-center flex-wrap gap-2 mt-1">
                                {item.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
