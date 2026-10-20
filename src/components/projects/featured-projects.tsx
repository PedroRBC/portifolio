"use client";

import { useState } from "react";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getFeaturedRepositories, normalizeRepository, type Repository } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { ProjectIndex } from "./project-index";
import { ProjectSkeleton, ProjectState } from "./project-state";

type FeaturedProjectsProps = { limit?: number; variant?: "grid" | "index" };

function FeaturedFeed({ limit, variant = "grid", retry }: FeaturedProjectsProps & { retry: () => void }) {
  const { data, isLoading, error } = useGitHubAutomatedRepos(siteConfig.github.username, siteConfig.github.keyword);

  if (isLoading || (!data && !error)) return <ProjectSkeleton count={limit ?? 4} variant={variant} />;
  if (error) return <div className={variant === "index" ? "project-selector" : undefined}><ProjectState title="O GitHub fez uma pausa." description="Não foi possível carregar os projetos agora. Tente novamente ou explore o código diretamente no GitHub."><Button variant="outline" size="sm" onClick={retry} className="gap-2"><RefreshCw size={14} aria-hidden="true" />Tentar novamente</Button></ProjectState></div>;

  const normalized = (data ?? []).map(normalizeRepository).filter((repository): repository is Repository => repository !== null);
  const repositories = getFeaturedRepositories(normalized, siteConfig.github.featured);
  const visible = limit === undefined ? repositories : repositories.slice(0, limit);

  if (variant === "index") return <ProjectIndex repositories={visible} />;
  if (visible.length === 0) return <ProjectState title="Novos projetos a caminho." description="Nenhum projeto com o tópico portfolio está disponível no momento. Outros repositórios continuam no GitHub." />;

  return <div className="grid items-stretch gap-x-8 gap-y-12 md:grid-cols-2">{visible.map((repository) => <ProjectCard key={repository.id} repository={repository} />)}</div>;
}

export function FeaturedProjects({ limit, variant }: FeaturedProjectsProps) {
  const [attempt, setAttempt] = useState(0);
  return <FeaturedFeed key={attempt} limit={limit} variant={variant} retry={() => setAttempt((value) => value + 1)} />;
}
