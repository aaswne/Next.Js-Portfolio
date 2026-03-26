import { projects } from "../../data/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="text-zinc-500">
            {project.description}
          </p>
        </div>

        {/* ✅ Image */}
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overview */}
        <section className="space-y-2">
          <h2 className="text-sm uppercase tracking-wide text-zinc-400">
            Overview
          </h2>
          <p className="leading-relaxed text-zinc-700">
            {project.overview}
          </p>
        </section>

        {/* Tech */}
        <section className="space-y-2">
          <h2 className="text-sm uppercase tracking-wide text-zinc-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-zinc-100 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="space-y-2">
          <h2 className="text-sm uppercase tracking-wide text-zinc-400">
            Features
          </h2>
          <div className="space-y-1 text-zinc-700">
            {project.features.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="space-y-2">
          <h2 className="text-sm uppercase tracking-wide text-zinc-400">
            Challenges
          </h2>
          <p className="text-zinc-700 leading-relaxed">
            {project.challenges}
          </p>
        </section>

        {/* Links */}
        <div className="flex gap-6 pt-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            className="underline underline-offset-4 hover:text-black"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            className="underline underline-offset-4 hover:text-black"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}