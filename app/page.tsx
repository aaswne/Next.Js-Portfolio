import Link from "next/link";
import { projects } from "../app/data/data";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black px-4">
      
      <main className="flex flex-1 w-full max-w-2xl flex-col items-start justify-center py-20 gap-10">
        
        {/* Intro */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">
            Aswin Krishna
          </h1>
          <p className="text-zinc-600">
            Frontend Engineer exploring UI, computer, game  and compilers
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div className="flex flex-col gap-5">
            
            <div>
              <Link href="/projects/samsara-ai">
                <h3 className="hover:underline">
                  Samsara AI
                </h3>
              </Link>
              <p className="text-sm text-zinc-600">
                AI-powered workflow automation app.
              </p>
            </div>

            <div>
              <Link href="/projects/netflix-clone">
                <h3 className="hover:underline">
                  Netflix Clone
                </h3>
              </Link>
              <p className="text-sm text-zinc-600">
                Full-stack streaming platform.
              </p>
            </div>

            <div>
              <Link href="/projects/olx-clone">
                <h3 className="hover:underline">
                  OLX Clone
                </h3>
              </Link>
              <p className="text-sm text-zinc-600">
                Marketplace app.
              </p>
            </div>

          </div>
        </div>

         <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
          <a
            className="flex h-11 w-full sm:w-[140px] items-center justify-center rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="https://github.com/aaswne"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            className="flex h-11 w-full sm:w-[140px] items-center justify-center rounded-full border border-black/[.08] px-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href=""
          >
            Hire Me
          </a>
        </div>

      </main>
    </div>
  );
}