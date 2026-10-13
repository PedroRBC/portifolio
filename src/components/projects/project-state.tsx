import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ProjectState({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed bg-card/40 px-6 py-12 text-center">
      <FolderGit2 className="mx-auto mb-5 text-primary" size={28} aria-hidden="true" />
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
        {children}
        <a href={siteConfig.socials.github} className="text-link" target="_blank" rel="noopener noreferrer">Explorar no GitHub <ArrowUpRight size={16} /></a>
      </div>
    </div>
  );
}

export function ProjectSkeleton({ count = 2 }: { count?: number }) {
  return (
    <div role="status" aria-label="Carregando projetos do GitHub">
      <span className="sr-only">Carregando projetos do GitHub…</span>
      <div className="grid gap-6 md:grid-cols-2" aria-hidden="true">
        {Array.from({ length: count }, (_, index) => <div key={index} className="overflow-hidden rounded-2xl border"><div className="aspect-[16/9] animate-pulse border-b bg-muted" /><div className="space-y-4 p-7"><div className="h-5 w-2/5 rounded bg-muted" /><div className="h-3 w-4/5 rounded bg-muted" /><div className="h-3 w-3/5 rounded bg-muted" /></div></div>)}
      </div>
    </div>
  );
}
