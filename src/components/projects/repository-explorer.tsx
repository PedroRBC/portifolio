"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, GitFork, RefreshCw, Search, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { filterRepositories, getRepositoryTopics, type Repository, type RepositorySort } from "@/lib/projects";
import { ProjectState } from "./project-state";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric", timeZone: "UTC" });

export function RepositoryExplorer({ repositories, error }: { repositories: Repository[]; error: string | null }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [sort, setSort] = useState<RepositorySort>("updated");
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function reset() {
    setQuery("");
    setTopic("all");
    setSort("updated");
  }

  if (error) return <ProjectState title="Não foi possível abrir os repositórios." description="O GitHub pode estar indisponível ou ter atingido o limite de consultas. Você pode tentar novamente ou visitar o perfil diretamente."><Button variant="outline" size="sm" disabled={pending} onClick={() => startTransition(() => router.refresh())} className="gap-2"><RefreshCw size={14} className={pending ? "animate-spin" : ""} />{pending ? "Atualizando…" : "Tentar novamente"}</Button></ProjectState>;
  if (repositories.length === 0) return <ProjectState title="Ainda não há repositórios públicos." description="Quando houver código público no perfil, ele aparecerá aqui automaticamente." />;

  const visible = filterRepositories(repositories, { query, topic, sort });
  const topics = getRepositoryTopics(repositories);
  const hasFilters = query !== "" || topic !== "all" || sort !== "updated";

  return (
    <div>
      <div className="grid gap-4 rounded-xl border bg-card p-5 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <label htmlFor="repo-search" className="eyebrow mb-2 block">Buscar repositório</label>
          <div className="relative"><Search size={16} className="absolute left-3 top-3.5 text-muted-foreground" aria-hidden="true" /><input id="repo-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nome, descrição ou tecnologia…" className="field w-full pl-10 placeholder:text-muted-foreground" autoComplete="off" /></div>
        </div>
        <div><label htmlFor="repo-topic" className="eyebrow mb-2 block">Tecnologia / tópico</label><select id="repo-topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="field w-full"><option value="all">Todos os tópicos</option>{topics.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
        <div><label htmlFor="repo-sort" className="eyebrow mb-2 block">Ordenar por</label><select id="repo-sort" value={sort} onChange={(event) => setSort(event.target.value as RepositorySort)} className="field w-full"><option value="updated">Atualizados recentemente</option><option value="name">Nome: A → Z</option><option value="stars">Mais estrelas</option></select></div>
      </div>
      <div className="my-6 flex min-h-6 flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p role="status" aria-live="polite">{visible.length} de {repositories.length} repositórios</p>
        {hasFilters && <button type="button" onClick={reset} className="text-link text-xs"><X size={13} />Limpar filtros</button>}
      </div>
      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed py-14 text-center"><Search className="mx-auto mb-4 text-muted-foreground" size={24} aria-hidden="true" /><h3 className="font-medium">Nenhum resultado por aqui.</h3><p className="mt-2 text-sm text-muted-foreground">Experimente outra busca ou remova os filtros.</p><Button variant="outline" onClick={reset} className="mt-5">Limpar filtros</Button></div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((repository) => (
            <li key={repository.id} className="group flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex items-start justify-between gap-3"><h3 className="min-w-0 text-lg font-medium tracking-tight"><a href={repository.htmlUrl} target="_blank" rel="noopener noreferrer" className="break-words hover:text-primary">{repository.name}</a></h3><ArrowUpRight size={18} className="mt-1 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" /></div>
              <p className="mb-5 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{repository.description || "Sem descrição. Os detalhes estão no repositório."}</p>
              <div className="mb-5 flex flex-wrap gap-2">{repository.topics.filter((item) => item !== "portfolio").slice(0, 3).map((item) => <span key={item} className="rounded bg-secondary px-2 py-1 font-mono text-[10px] text-muted-foreground">{item}</span>)}</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-4 font-mono text-[10px] text-muted-foreground">
                {repository.language && <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />{repository.language}</span>}
                <span className="inline-flex items-center gap-1" aria-label={`${repository.stars} estrelas`}><Star size={12} aria-hidden="true" />{repository.stars}</span>
                <span className="inline-flex items-center gap-1" aria-label={`${repository.forks} forks`}><GitFork size={12} aria-hidden="true" />{repository.forks}</span>
                <span className="ml-auto">Atualizado {dateFormatter.format(new Date(repository.updatedAt))}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 font-mono text-[10px] leading-relaxed text-muted-foreground">Dados públicos do GitHub · Atualização automática a cada hora</p>
    </div>
  );
}
