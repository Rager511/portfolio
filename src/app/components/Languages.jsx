"use client";

import React from "react";

const languages = [
  {
    name: "English",
    level: 90, 
    description: "Fluent"
  },
  {
    name: "French",
    level: 90,
    description: "Fluent"
  },
  {
    name: "Arabic",
    level: 100,
    description: "Native"
  },
  {
    name: "Chinese",
    level: 30,
    description: "HSK2 – Beginner | score: (141/200)"
  }
];

export default function Languages() {
  return (
    <div className="mt-10 md:w-[700px] w-full p-4">
      <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
        Languages
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {languages.map((lang, idx) => (
          <div key={idx} className="flex flex-col gap-1 group">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-base-content">{lang.name}</span>
              <span className="text-sm text-base-content/60">{lang.description}</span>
            </div>

            <div className="relative w-full h-3 rounded-full bg-base-200 overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transition-all duration-1000"
                style={{ width: `${lang.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
