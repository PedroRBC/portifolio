"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getSelectedRepository, type Repository } from "@/lib/projects";
import { ProjectArtwork } from "./project-artwork";
import { ProjectState } from "./project-state";

export function ProjectIndex({ repositories }: { repositories: Repository[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const previewId = useId();
  const titleId = useId();
  const selected = getSelectedRepository(repositories, selectedId);

  if (!selected) {
    return <div className="project-selector"><ProjectState title="Novos projetos a caminho." description="Nenhum projeto com o tópico portfolio está disponível no momento. Outros repositórios continuam no GitHub." /></div>;
  }

  return (
    <>
      <section className="project-selector" aria-labelledby={titleId}>
        <h2 id={titleId} className="project-index-title">Projetos selecionados</h2>
        <ul className="project-index-list">
          {repositories.map((repository) => (
            <li key={repository.id} onFocusCapture={() => setSelectedId(repository.id)}>
              <button
                type="button"
                className="project-index-row"
                aria-label={`Selecionar ${repository.name}`}
                aria-pressed={selected.id === repository.id}
                aria-controls={previewId}
                onMouseEnter={() => setSelectedId(repository.id)}
                onClick={() => setSelectedId(repository.id)}
              >
                <span className="project-index-name">{repository.name}</span>
                <span className="project-index-meta" aria-hidden="true">
                  {repository.language && <span>{repository.language}</span>}
                  <ArrowRight size={18} />
                </span>
              </button>
              <div className="project-index-actions">
                <a href={repository.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Ver código de ${repository.name} no GitHub`}>Código <ArrowUpRight size={15} aria-hidden="true" /></a>
                {repository.homepage && <a href={repository.homepage} target="_blank" rel="noopener noreferrer" className="text-link text-primary" aria-label={`Ver demonstração de ${repository.name}`}>Ver projeto <ArrowUpRight size={15} aria-hidden="true" /></a>}
              </div>
            </li>
          ))}
        </ul>
        <Link href="/projects" className="index-link mt-5">Todos os projetos <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>
      <section id={previewId} className="project-preview" aria-label="Prévia do projeto selecionado">
        <ProjectArtwork key={selected.id} repository={selected} className="project-preview-artwork" />
        <div className="project-preview-info">
          <div key={selected.id} className="project-preview-copy">
            <h3>{selected.name}</h3>
            <p>{selected.description || "Um projeto open source. Explore o código e os detalhes no GitHub."}</p>
            {selected.topics.some((topic) => topic !== "portfolio") && (
              <ul className="project-topics" aria-label="Tecnologias e tópicos">
                {selected.topics.filter((topic) => topic !== "portfolio").slice(0, 4).map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            )}
          </div>
          <div className="project-preview-links">
            <a href={selected.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Ver código de ${selected.name} no GitHub`}>Código <ArrowUpRight size={16} aria-hidden="true" /></a>
            {selected.homepage && <a href={selected.homepage} target="_blank" rel="noopener noreferrer" className="text-link text-primary" aria-label={`Ver demonstração de ${selected.name}`}>Ver projeto <ArrowUpRight size={16} aria-hidden="true" /></a>}
          </div>
        </div>
        <span className="sr-only" role="status" aria-live="polite">Projeto selecionado: {selected.name}</span>
      </section>
      <p className="project-index-hint">Passe o mouse, toque ou use o teclado para explorar os projetos.</p>
    </>
  );
}
