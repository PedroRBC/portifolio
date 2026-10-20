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

  if (error) return <ProjectState title="Não foi possível abrir os repositórios." description="O GitHub pode estar indisponível ou ter atingido o limite de consultas. Você pode tentar novamente ou visitar o perfil diretamente."><Button variant="outline" size="sm" disabled={pending} onClick={() => startTransition(() => router.refresh())} className="gap-2"><RefreshCw size={14} className={pending ? "animate-spin" : ""} aria-hidden="true" />{pending ? "Atualizando…" : "Tentar novamente"}</Button></ProjectState>;
  if (repositories.length === 0) return <ProjectState title="Ainda não há repositórios públicos." description="Quando houver código público no perfil, ele aparecerá aqui automaticamente." />;

  const visible = filterRepositories(repositories, { query, topic, sort });
  const topics = getRepositoryTopics(repositories);
  const hasFilters = query !== "" || topic !== "all" || sort !== "updated";

  return (
    <div>
      <div className="grid gap-5 border-y py-6 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="min-w-0">
          <label htmlFor="repo-search" className="mb-2 block text-sm">Buscar repositório</label>
          <div className="relative"><Search size={16} className="absolute left-3 top-3.5 text-muted-foreground" aria-hidden="true" /><input id="repo-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nome, descrição ou tecnologia…" className="field w-full pl-10 placeholder:text-muted-foreground" autoComplete="off" /></div>
        </div>
        <div className="min-w-0"><label htmlFor="repo-topic" className="mb-2 block text-sm">Tecnologia / tópico</label><select id="repo-topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="field w-full"><option value="all">Todos os tópicos</option>{topics.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
        <div className="min-w-0"><label htmlFor="repo-sort" className="mb-2 block text-sm">Ordenar por</label><select id="repo-sort" value={sort} onChange={(event) => setSort(event.target.value as RepositorySort)} className="field w-full"><option value="updated">Atualizados recentemente</option><option value="name">Nome: A → Z</option><option value="stars">Mais estrelas</option></select></div>
      </div>
      <div className="my-6 flex min-h-6 flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p role="status" aria-live="polite">{visible.length} de {repositories.length} repositórios</p>
        {hasFilters && <button type="button" onClick={reset} className="text-link text-xs"><X size={13} aria-hidden="true" />Limpar filtros</button>}
      </div>
      {visible.length === 0 ? (
        <div className="border-y px-5 py-12 text-center"><Search className="mx-auto mb-4 text-muted-foreground" size={24} aria-hidden="true" /><h3 className="font-medium">Nenhum resultado por aqui.</h3><p className="mt-2 text-sm text-muted-foreground">Experimente outra busca ou remova os filtros.</p><Button variant="outline" onClick={reset} className="mt-5">Limpar filtros</Button></div>
      ) : (
        <ul className="divide-y border-y">
          {visible.map((repository) => (
            <li key={repository.id} className="group grid min-w-0 gap-5 py-7 md:grid-cols-[1fr_1.1fr] md:gap-10">
              <div className="min-w-0">
                <h3 className="text-xl font-medium tracking-tight"><a href={repository.htmlUrl} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-start gap-3 hover:text-primary"><span className="min-w-0 break-words">{repository.name}</span><ArrowUpRight size={17} className="mt-1 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" /></a></h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{repository.description || "Sem descrição. Os detalhes estão no repositório."}</p>
              </div>
              <div className="flex min-w-0 flex-col justify-between gap-4">
                {repository.topics.some((topic) => topic !== "portfolio") && <ul className="flex flex-wrap gap-2" aria-label={`Tópicos de ${repository.name}`}>{repository.topics.filter((item) => item !== "portfolio").slice(0, 3).map((item) => <li key={item} className="max-w-full break-words bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground">{item}</li>)}</ul>}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  {repository.language && <span>{repository.language}</span>}
                  <span className="inline-flex items-center gap-1" aria-label={`${repository.stars} estrelas`}><Star size={13} aria-hidden="true" />{repository.stars}</span>
                  <span className="inline-flex items-center gap-1" aria-label={`${repository.forks} forks`}><GitFork size={13} aria-hidden="true" />{repository.forks}</span>
                  <span className="md:ml-auto">Atualizado {dateFormatter.format(new Date(repository.updatedAt))}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Dados públicos do GitHub · Atualização automática a cada hora</p>
    </div>
  );
}
