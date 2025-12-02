import { education } from "@/data/data";

export default function Education() {
  return (
    <div className="mt-10 scroll-mt-14" id="education">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Education
      </h2>

      <div className="mt-2">
        <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 p-2">
          {education.map((item, index) => (
            <li key={index} className="relative flex items-start gap-4">
              <span className="w-3 h-3 shrink-0 rounded-full bg-base-content mt-1.5"></span>

              <div>
                <time className="text-xs font-medium text-base-content/80">
                  {item.date}
                </time>
                <h3 className="text-lg font-semibold text-base-content">
                  {item.institution}
                </h3>
                <h6 className="text-sm font-semibold text-base-content">
                  {item.location}
                </h6>
                <p className="mt-1 text-sm text-base-content/80">
                  {item.degree}
                </p>

              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
