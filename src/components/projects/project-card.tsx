"use client";

import { useId } from "react";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import type { Repository } from "@/lib/projects";
import { ProjectArtwork } from "./project-artwork";

export function ProjectCard({ repository }: { repository: Repository }) {
  const titleId = useId();
  const topics = repository.topics.filter((topic) => topic !== "portfolio").slice(0, 4);

  return (
    <article aria-labelledby={titleId} className="group flex h-full min-w-0 flex-col">
      <ProjectArtwork key={repository.id} repository={repository} className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col pt-6">
        <h3 id={titleId} className="break-words text-2xl font-medium tracking-tight">{repository.name}</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{repository.description || "Um projeto open source. Explore o código e os detalhes no GitHub."}</p>
        {topics.length > 0 && <ul className="project-topics mb-6" aria-label="Tecnologias e tópicos">{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-b py-5">
          <a href={repository.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Ver código de ${repository.name} no GitHub`}><Icons.gitHub className="h-4 w-4" aria-hidden="true" />Código <ArrowUpRight size={15} aria-hidden="true" /></a>
          {repository.homepage && <a href={repository.homepage} target="_blank" rel="noopener noreferrer" className="text-link text-primary" aria-label={`Ver demonstração de ${repository.name}`}>Ver projeto <ArrowUpRight size={16} aria-hidden="true" /></a>}
        </div>
      </div>
    </article>
  );
}
