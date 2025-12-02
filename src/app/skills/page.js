"use client";

import React, { useState } from "react";

const skillsData = {
  all: [
    // Languages & Backend/Frontend
    { name: "Angular", icon: "/angular-c.svg" },
    { name: "Express", icon: "/expressjs-c.svg" },
    { name: "Fast API", icon: "/fastapi-c.svg" },
    { name: "Flask", icon: "/flask.svg" },
    { name: "Java", icon: "/java-c.svg" },
    { name: "JavaScript", icon: "/javascript-c.svg" },
    { name: "Nest", icon: "/nestjs-c.svg" },
    { name: "Next", icon: "/nextjs.svg" },
    { name: "Node.js", icon: "/node-c.svg" },
    { name: "Python", icon: "/python-c.svg" },
    { name: "React", icon: "/reactjs-c.svg" },
    { name: "Spring Boot", icon: "/springboot-c.svg" },
    { name: "TypeScript", icon: "/typescript-c.svg" },

    // Databases
    { name: "MongoDB", icon: "/mongodb-c.svg" },
    { name: "MySQL", icon: "/mysql-c.svg" },
    { name: "PostgreSQL", icon: "/postgresql-c.svg" },
    { name: "Redis", icon: "/redis-c.svg" },

    // Cloud / DevOps
    { name: "Alibaba Cloud", icon: "/abc-c.svg" },
    { name: "CI/CD (GitHub Actions)", icon: "/githubactions-c.svg" },
    { name: "Docker", icon: "/docker-c.svg" },
    { name: "Grafana", icon: "/grafana-c.svg" },
    { name: "Jenkins", icon: "/jenkins-c.svg" },
    { name: "Kubernetes", icon: "/kubernetes-c.svg" },
    { name: "Linux / Bash", icon: "/linux-c.svg" },
    { name: "Nginx", icon: "/nginx-c.svg" },
    { name: "Prometheus", icon: "/prometheus-c.svg" },

    // Data Science
    { name: "NumPy", icon: "/numpy-c.svg" },
    { name: "Pandas", icon: "/pandas-c.svg" },
    { name: "Scikit-learn", icon: "/scikitlearn-c.svg" },

    // UI/UX
    { name: "Figma", icon: "/figma-c.svg" },

    // Tools & Testing
    { name: "Git", icon: "/git-c.svg" },
    { name: "Jest", icon: "/jest-c.svg" },
    { name: "Junit", icon: "/junit-c.svg" },
    { name: "Postman", icon: "/postman-c.svg" },
    { name: "Pytest", icon: "/pytest-c.svg" }
  ],

  frontend: [
    { name: "Angular", icon: "/angular-c.svg" },
    { name: "JavaScript", icon: "/javascript-c.svg" },
    { name: "Next", icon: "/nextjs.svg" },
    { name: "React", icon: "/reactjs-c.svg" },
    { name: "TypeScript", icon: "/typescript-c.svg" }
  ],

  backend: [
    { name: "Express", icon: "/expressjs-c.svg" },
    { name: "Fast API", icon: "/fastapi-c.svg" },
    { name: "Flask", icon: "/flask.svg" },
    { name: "Java", icon: "/java-c.svg" },
    { name: "Nest", icon: "/nestjs-c.svg" },
    { name: "Node.js", icon: "/node-c.svg" },
    { name: "Python", icon: "/python-c.svg" },
    { name: "Spring Boot", icon: "/springboot-c.svg" }
  ],

  database: [
    { name: "MongoDB", icon: "/mongodb-c.svg" },
    { name: "MySQL", icon: "/mysql-c.svg" },
    { name: "PostgreSQL", icon: "/postgresql-c.svg" },
    { name: "Redis", icon: "/redis-c.svg" }
  ],

  cloudDevops: [
    { name: "Alibaba Cloud", icon: "/abc-c.svg" },
    { name: "CI/CD (GitHub Actions)", icon: "/githubactions-c.svg" },
    { name: "Docker", icon: "/docker-c.svg" },
    { name: "Grafana", icon: "/grafana-c.svg" },
    { name: "Jenkins", icon: "/jenkins-c.svg" },
    { name: "Kubernetes", icon: "/kubernetes-c.svg" },
    { name: "Linux / Bash", icon: "/linux-c.svg" },
    { name: "Nginx", icon: "/nginx-c.svg" },
    { name: "Prometheus", icon: "/prometheus-c.svg" }
  ],

  machineLearning: [
    { name: "NumPy", icon: "/numpy-c.svg" },
    { name: "Pandas", icon: "/pandas-c.svg" },
    { name: "Scikit-learn", icon: "/scikitlearn-c.svg" }
  ],

  ToolsTesting: [
    { name: "Git", icon: "/git-c.svg" },
    { name: "Jest", icon: "/jest-c.svg" },
    { name: "Junit", icon: "/junit-c.svg" },
    { name: "Postman", icon: "/postman-c.svg" },
    { name: "Pytest", icon: "/pytest-c.svg" }
  ],

  uiux: [
    { name: "Figma", icon: "/figma-c.svg" }
  ]
};


export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "cloudDevops", label: "Cloud & DevOps" },
    { key: "machineLearning", label: "ML" },
    { key: "ToolsTesting", label: "Tools & Testing" },
    { key: "uiux", label: "UI/UX" }
  ];

  return (
    <div className="md:w-[700px] w-[100%] mt-5 p-4">
      <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
        Skills
      </h1>

      {/* Tabs */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              px-4 py-2 rounded-full border relative overflow-hidden
              transition-all duration-300
              ${activeTab === tab.key
                ? "bg-base-content text-base-100 scale-105 shadow-md"
                : "bg-base-200 text-base-content hover:scale-105"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div
        key={activeTab} // triggers animation on tab change
        className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fadeIn"
      >
        {skillsData[activeTab].map((skill, idx) => (
<div
  key={idx}
  className={`
    flex flex-col items-center px-3 py-3 border rounded-lg text-center
    bg-base-200 shadow-sm
    transition-all duration-300
    hover:shadow-lg hover:-translate-y-1
  `}
>
  <img
    src={skill.icon}
    alt={skill.name}
    className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
  />
  <span className="text-sm font-medium">{skill.name}</span>
</div>

        ))}
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
