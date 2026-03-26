import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4">
      
      <main className="flex flex-1 w-full max-w-2xl flex-col items-start justify-center py-20 sm:py-28 bg-white dark:bg-black gap-10 ">
        
        {/* Intro */}
        <div className="flex flex-col gap-4 text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Aswin Krishna
          </h1>
          <p className="text-base sm:text-lg leading-7 text-zinc-600 dark:text-zinc-400 max-w-md">
            Frontend Engineer exploring UI, game development, and compiler technologies
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6 mt-12 w-full">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Projects
          </h2>

          <div className="flex flex-col gap-5">
            
            <div>
              <Link href="/projects/samsara-ai" className="hover:underline">
                <h3 className="text-base font-medium text-black dark:text-zinc-100">
                  Samsara AI
                </h3>
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                AI-powered application focused on intelligent workflows and automation.
              </p>
            </div>

            <div>
              <Link href="/projects/netflix-clone" className="hover:underline">
                <h3 className="text-base font-medium text-black dark:text-zinc-100">
                  Netflix Clone (Full Stack)
                </h3>
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Full-stack streaming platform with authentication and dynamic content.
              </p>
            </div>

            <div>
              <Link href="/projects/olx-clone" className="hover:underline">
                <h3 className="text-base font-medium text-black dark:text-zinc-100">
                  OLX Clone App
                </h3>
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Marketplace app for buying and selling products.
              </p>
            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
          <a
            className="flex h-11 w-full sm:w-[140px] items-center justify-center rounded-full bg-foreground px-4 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="https://www.linkedin.com/in/aswin-krishna-07a848252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect
          </a>

          <a
            className="flex h-11 w-full sm:w-[140px] items-center justify-center rounded-full border border-black/[.08] px-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="mailto:your-email@example.com"
          >
            Contact
          </a>
        </div>

      </main>
    </div>
  );
}