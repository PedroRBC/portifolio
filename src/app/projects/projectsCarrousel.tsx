"use client";

import {
  useGitHubAutomatedRepos,
  StackIcons,
} from "github-automated-repos";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import Link from "next/link";

export function CarrouselProjects() {
  const { data, isLoading, error } = useGitHubAutomatedRepos(
    "PedroRBC",
    "portfolio",
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <Loader2 className="h-8 w-8 animate-spin text-violet-500" />
        <p className="text-muted-foreground">Carregando projetos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <p className="text-muted-foreground">
          Erro ao carregar projetos. Tente novamente mais tarde.
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <p className="text-muted-foreground">Nenhum projeto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {data.map((repo) => (
        <Card
          key={repo.id}
          className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1 hover:border-violet-500/20"
        >
          {repo.banner && repo.banner.length > 0 && (
            <div className="relative h-44 w-full overflow-hidden bg-muted">
              <img
                src={repo.banner[0]}
                alt={repo.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{repo.name}</CardTitle>
            {repo.description && (
              <CardDescription className="line-clamp-2">
                {repo.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              {repo.topics
                .filter((topic) => topic !== "portfolio")
                .map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    <StackIcons
                      itemTopics={topic}
                      className="h-3.5 w-3.5"
                    />
                    {topic}
                  </span>
                ))}
            </div>
          </CardContent>
          <CardFooter className="gap-2 pt-0">
            <Button variant="outline" size="sm" asChild>
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-4 w-4" />
                Codigo
              </Link>
            </Button>
            {repo.homepage && (
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
