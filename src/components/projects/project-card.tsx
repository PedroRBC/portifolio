"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { StackIcons } from "github-automated-repos";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Repository } from "@/lib/projects";

export function ProjectCard({ repository, index }: { repository: Repository; index: number }) {
  const titleId = useId();
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const banner = repository.banners[0];
  const topics = repository.topics.filter((topic) => topic !== "portfolio").slice(0, 4);

  return (
    <Card role="article" aria-labelledby={titleId} className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-none transition-colors hover:border-primary/40">
      <div className="project-art relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b bg-secondary/40">
        {banner && banner !== failedImage ? (
          <Image src={banner} alt={`Prévia do projeto ${repository.name}`} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" onError={() => setFailedImage(banner)} />
        ) : (
          <div aria-hidden="true" className="relative flex w-4/5 flex-col gap-5 rounded-lg border bg-background/90 p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-muted-foreground/30" /><span className="h-2 w-2 rounded-full bg-muted-foreground/30" /><span className="h-2 w-2 rounded-full bg-primary/60" /><span className="ml-auto font-mono text-[9px] text-muted-foreground">OPEN SOURCE</span></div>
            <div className="truncate font-mono text-2xl tracking-tight sm:text-3xl"><span className="text-primary">&lt;</span>{repository.name}<span className="text-primary"> /&gt;</span></div>
            <div className="flex gap-2"><span className="h-1.5 w-20 rounded-full bg-primary/30" /><span className="h-1.5 w-12 rounded-full bg-muted-foreground/20" /><span className="h-1.5 w-8 rounded-full bg-muted-foreground/20" /></div>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded bg-background/90 px-2 py-1 font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")} / PROJETO</span>
      </div>
      <CardHeader className="p-6 pb-4 sm:p-7 sm:pb-4">
        <CardTitle id={titleId} className="text-2xl font-medium tracking-tight">{repository.name}</CardTitle>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{repository.description || "Um projeto open source. Explore o código e os detalhes no GitHub."}</p>
      </CardHeader>
      <CardContent className="flex-1 px-6 pb-6 sm:px-7">
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologias e tópicos">
          {topics.map((topic) => <li key={topic} className="inline-flex items-center gap-1.5 rounded-md border bg-secondary/30 px-2 py-1 font-mono text-[10px] text-muted-foreground"><StackIcons itemTopics={topic} className="h-3 w-3" aria-hidden="true" />{topic}</li>)}
        </ul>
      </CardContent>
      <CardFooter className="justify-between border-t px-6 py-4 sm:px-7">
        <a href={repository.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Ver código de ${repository.name} no GitHub`}><Icons.gitHub className="h-4 w-4" aria-hidden="true" />Código <ArrowUpRight size={14} className="text-muted-foreground" /></a>
        {repository.homepage && <a href={repository.homepage} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Ver demonstração de ${repository.name}`}>Ver projeto <ArrowUpRight size={16} className="text-primary" /></a>}
      </CardFooter>
    </Card>
  );
}
