"use client";

import { useState } from "react";
import { socials } from "@/data/data";
import { about } from "@/data/data";

export default function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDownload = (lang) => {
    const fileName = lang === "en" ? "/Imad-Maailil-en.pdf" : "/Imad-Maailil-fr.pdf";
    const link = document.createElement("a");
    link.href = fileName;
    link.download = `Resume-${lang}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDropdown(false);
  };

  return (
    <div className="mt-5">
      <img
        src="/me.jpg"
        className="w-[120px] h-[120px] rounded-full object-cover object-center"
        alt={`${about.name}'s profile`}
      />
      <div className="flex gap-[5px] items-center mt-1">
        <h1 className="text-2xl font-semibold">{about.name}</h1>
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        <p className="text-base text-base-content/60">{about.role}</p>
      </div>

      <div className="flex items-center mt-3 gap-3">
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cursor-pointer"
          >
            <circle cx="12" cy="12" r="12" fill="#0A66C2" />
            <path
              fill="#fff"
              d="M8.34 17.34H5.67V10.66h2.67v6.68zM7 9.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zM18.33 17.34h-2.66v-3.34c0-.8-.02-1.82-1.11-1.82-1.11 0-1.28.86-1.28 1.76v3.4h-2.67V10.66h2.56v.92h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.1v3.05z"
            />
          </svg>
        </a>

        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>

      {/* Resume Download Button */}
      <div className="relative mt-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-200"
        >
          Download Resume
        </button>

        {showDropdown && (
          <div className="absolute mt-2 w-44 bg-base-200 border border-gray-300 rounded-md shadow-lg z-10">
            <button
              className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-base-300"
              onClick={() => handleDownload("en")}
            >
              <img src="/uk-flag.svg" alt="UK Flag" className="w-5 h-5" />
              English
            </button>
            <button
              className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-base-300"
              onClick={() => handleDownload("fr")}
            >
              <img src="/fr-flag.svg" alt="France Flag" className="w-5 h-5" />
              French
            </button>
          </div>
        )}
      </div>
    </div>
  );
}