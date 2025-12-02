import { experience } from "@/data/data";

export default function Experience() {
  return (
    <div className="mt-10 scroll-mt-14" id="experience">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Work Experience
      </h2>

      <div className="mt-2">
        <ol className="relative space-y-4 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 p-2">
          {experience.map((item, index) => (
            <li key={index} className="relative flex items-start gap-4">
              <span className="w-3 h-3 shrink-0 rounded-full bg-base-content mt-1.5"></span>

              <div>
                <time className="text-xs font-medium text-base-content/80">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-base-content">
                  {item.title}
                </h3>
                <h6 className="text-sm font-semibold text-base-content">
                  {item.location}
                </h6>
                <p className="mt-1 text-sm text-base-content/80">
                  {item.description}
                </p>

                {Array.isArray(item.tags) && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="
                          text-xs font-medium text-base-content/80 
                          border border-gray-400 
                          rounded-full px-3 py-1 
                          transition-all duration-300
                          hover:bg-base-content/10 hover:text-base-content/100 
                          hover:scale-105 cursor-pointer
                          shadow-sm
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
