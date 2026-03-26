"use client";

import Link from "next/link";
import { projects } from "../app/data/data";
import { LogoLight, LogoDark } from "../app/link/icon";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex flex-col flex-1 items-center justify-center px-4 w-full min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <main className="flex flex-1 w-full max-w-2xl flex-col items-start justify-center py-20 gap-10">

        {/* Toggle Button */}
        <div className="w-full h-5 flex justify-end items-center px-2">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              console.log("Dark mode is now:", !darkMode);

              if (!darkMode) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            }}
            className="flex items-center p-0 bg-transparent"
          >
            {darkMode ? <LogoLight size={16} /> : <LogoDark size={16} />}
          </button>
        </div>

        {/* Intro */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-thin">
  Aswin Krishna
</h1>
          <p className={`${darkMode ? "text-gray-300" : "text-zinc-600"}`}>
            Frontend Engineer exploring UI, computer, game and compilers
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div className="flex flex-col gap-5">
            {projects.map((project) => (
              <div key={project.id}>
                <Link href={`/projects/${project.id}`}>
                  <h3 className={`hover:underline ${darkMode ? "text-white" : "text-black"}`}>
                    {project.title}
                  </h3>
                </Link>
                <p className={`${darkMode ? "text-gray-300" : "text-zinc-600"}`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
          <a
            className={`flex h-11 w-full sm:w-[140px] items-center justify-center rounded-full px-4 transition-colors ${darkMode
                ? "bg-white text-black hover:bg-gray-300"
                : "bg-black text-white hover:bg-gray-800"
              }`}
            href="https://github.com/aaswne"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            className={`flex h-11 w-full sm:w-[140px] items-center justify-center rounded-full border px-4 transition-colors ${darkMode
                ? "border-white hover:bg-gray-800 text-white"
                : "border-black hover:bg-gray-200 text-black"
              }`}
            href=""
          >
            Hire Me
          </a>
        </div>
      </main>
    </div>
  );
}