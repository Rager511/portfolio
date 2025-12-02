import React from "react";
import { projects, seo } from "@/data/data";

export const metadata = {
  title: `Projects | ${seo.title}`,
  description:
    "Explore a curated collection of web development projects built with Next.js, React, and modern web technologies.",
  keywords:
    "projects, web development, Next.js, React, JavaScript, portfolio",
};

function Projects() {
  return (
    <div className="md:w-[700px] w-[100%] mt-5 p-4">
      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
          All Projects
        </h1>

        <div className="flex flex-col gap-2">
          {/* PINNED PROJECTS */}
          {projects.pinProjects.map((item, index) => (
            <div
              key={index}
              className="p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-102 transition-transform duration-200"
            >
              <div className="flex flex-col gap-2 justify-between">
                <h2 className="font-semibold text-lg">{item.title}</h2>

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

          {/* OTHER PROJECTS */}
          {projects.otherProjects.map((item, index) => (
            <div
              key={index}
              className="p-4 border-2 border-base-content/20 rounded-2xl hover:border-base-content/80 hover:scale-102 transition-transform duration-200"
            >
              <div className="flex flex-col gap-2 justify-between">
                <h2 className="font-semibold text-lg">{item.title}</h2>

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
      </main>
    </div>
  );
}

export default Projects;
