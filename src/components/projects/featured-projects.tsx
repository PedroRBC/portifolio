"use client";

import { useState } from "react";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getFeaturedRepositories, normalizeRepository, type Repository } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { ProjectSkeleton, ProjectState } from "./project-state";

function FeaturedFeed({ limit, retry }: { limit?: number; retry: () => void }) {
  const { data, isLoading, error } = useGitHubAutomatedRepos(siteConfig.github.username, siteConfig.github.keyword);

  if (isLoading || (!data && !error)) return <ProjectSkeleton count={limit ?? 4} />;
  if (error) return <ProjectState title="O GitHub fez uma pausa." description="Não foi possível carregar os projetos agora. Tente novamente ou explore o código diretamente no GitHub."><Button variant="outline" size="sm" onClick={retry} className="gap-2"><RefreshCw size={14} />Tentar novamente</Button></ProjectState>;

  const normalized = (data ?? []).map(normalizeRepository).filter((repository): repository is Repository => repository !== null);
  const repositories = getFeaturedRepositories(normalized, siteConfig.github.featured);
  const visible = limit === undefined ? repositories : repositories.slice(0, limit);

  if (visible.length === 0) return <ProjectState title="Novos projetos a caminho." description="Nenhum projeto com o tópico portfolio está disponível no momento. Outros repositórios continuam no GitHub." />;

  return <div className="grid items-stretch gap-6 md:grid-cols-2">{visible.map((repository, index) => <ProjectCard key={repository.id} repository={repository} index={index} />)}</div>;
}

export function FeaturedProjects({ limit }: { limit?: number }) {
  const [attempt, setAttempt] = useState(0);
  return <FeaturedFeed key={attempt} limit={limit} retry={() => setAttempt((value) => value + 1)} />;
}
