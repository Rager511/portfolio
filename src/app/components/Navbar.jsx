"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isSkills = pathname === "/skills";
  const isCertifications = pathname === "/certifications";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
  }, []);

  const handleThemeChange = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setIsDark(checked);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-3xl mx-auto flex items-center justify-between py-1 px-4"> {/* Reduced py from py-2 to py-1 */}
        
        {/* Logo / Home link */}
        <Link href="/" className="font-semibold text-base"> {/* Reduced text-lg to text-base */}
          IM.
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-4"> {/* Reduced gap from gap-6 to gap-4 */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  pathname === link.href ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme toggle + mobile menu button */}
        <div className="flex items-center gap-1"> {/* Reduced gap from gap-2 to gap-1 */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={isDark}
              onChange={(e) => handleThemeChange(e.target.checked)}
            />
            <span className="w-5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600 relative flex items-center"> {/* Smaller toggle */}
              <span
                className={`w-2.5 h-2.5 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
                  isDark ? "translate-x-2.5" : "translate-x-0"
                }`}
              />
            </span>
          </label>

          <button
            className="sm:hidden flex items-center justify-center p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition" // Reduced p-2 to p-1.5
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-base">menu</span> {/* Reduced icon size */}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden bg-gray-50 dark:bg-gray-900 shadow-md absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-1"> {/* Reduced padding */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors rounded" // Reduced padding and smaller text
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}