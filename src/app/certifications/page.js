import React from "react";
import { certifications, seo } from "../../data/data";

export const metadata = {
  title: `Certifications | ${seo.title}`,
  description: "View my professional certifications, AI, web development, and full-stack achievements.",
  keywords: "certifications, achievements, AI, web development, full-stack"
};

function Page() {
  return (
    <div className="md:w-[700px] w-[100%] mt-10 p-4">
      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
          Certifications
        </h1>
        <div className="flex flex-col gap-4 p-1">
          {certifications.length > 0 ? (
            certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border p-3 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <h2 className="font-semibold text-base">{cert.title}</h2>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {cert.issuer} {cert.credentialId ? `| Credential ID: ${cert.credentialId}` : ""}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 md:text-right md:whitespace-nowrap">{cert.date}</p>
                  </div>
                  
{cert.title === "Préparer votre carrière dans l'IA générative" ? (
  <div className="mt-1.5">
    <a
      href="https://www.linkedin.com/learning/certificates/1fcbaff755abcbc9263f1f0f1e47cb8ca89e6de7420e08977236b895f72006f2"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all duration-200 shadow-sm hover:shadow"
    >
      Show credential
    </a>
  </div>
) : cert.credentialId ? (
  <div className="mt-1.5">
    <a
      href={`https://www.coursera.org/account/accomplishments/verify/${cert.credentialId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition-all duration-200 shadow-sm hover:shadow"
    >
      Show credential
    </a>
  </div>
) : null}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-10">No certifications available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Page;