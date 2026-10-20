import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ProjectState({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) {
  return (
    <div className="project-state">
      <FolderGit2 className="mb-5 text-primary" size={25} aria-hidden="true" />
      <h3 className="text-lg font-medium tracking-tight">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        {children}
        <a href={siteConfig.socials.github} className="text-link" target="_blank" rel="noopener noreferrer">Explorar no GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  );
}

export function ProjectSkeleton({ count = 2, variant = "grid" }: { count?: number; variant?: "grid" | "index" }) {
  if (variant === "index") {
    return (
      <>
        <div className="project-selector" role="status" aria-label="Carregando projetos do GitHub">
          <span className="sr-only">Carregando projetos do GitHub…</span>
          <p className="project-index-title">Projetos selecionados</p>
          <div aria-hidden="true">{Array.from({ length: count }, (_, index) => <div key={index} className="flex min-h-16 items-center justify-between border-t"><span className="h-5 w-2/5 animate-pulse bg-muted" /><span className="h-4 w-4 bg-muted" /></div>)}</div>
        </div>
        <div className="project-preview project-preview-skeleton" aria-hidden="true"><div className="project-artwork animate-pulse" /><div className="project-preview-info"><div className="h-7 w-2/3 bg-muted" /><div className="h-4 w-full bg-muted" /></div></div>
      </>
    );
  }

  return (
    <div role="status" aria-label="Carregando projetos do GitHub">
      <span className="sr-only">Carregando projetos do GitHub…</span>
      <div className="grid gap-8 md:grid-cols-2" aria-hidden="true">
        {Array.from({ length: count }, (_, index) => <div key={index}><div className="aspect-[16/9] animate-pulse bg-muted" /><div className="space-y-4 py-6"><div className="h-5 w-2/5 bg-muted" /><div className="h-3 w-4/5 bg-muted" /><div className="h-3 w-3/5 bg-muted" /></div></div>)}
      </div>
    </div>
  );
}
