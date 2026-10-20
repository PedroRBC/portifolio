import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { RepositoryExplorer } from "@/components/projects/repository-explorer";
import { ProjectSkeleton } from "@/components/projects/project-state";
import { ContactSection } from "@/components/contact-section";
import { getPublicRepositories } from "@/lib/github.server";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Explore os projetos selecionados e repositórios públicos de Pedro Rbc. Código open source, aplicações web, mobile e APIs.",
  alternates: { canonical: "/projects" },
};

async function PublicRepositories() {
  const result = await getPublicRepositories(siteConfig.github.username);
  return <RepositoryExplorer repositories={result.repositories} error={result.error} />;
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="site-container pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-7">
          <div>
            <h1 className="page-title">Ideias que viraram<br />projetos<span className="text-primary">.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">Experimentos, aplicações e aprendizado em prática. Uma seleção do que construo, com o código aberto para explorar.</p>
          </div>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="index-link">Meu GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
      <section aria-labelledby="featured-title" className="site-container pb-14 sm:pb-20">
        <h2 id="featured-title" className="mb-8 border-t pt-6 text-xl font-medium tracking-tight">Em destaque</h2>
        <FeaturedProjects />
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Seleção automática pelo tópico portfolio · github-automated-repos</p>
      </section>
      <section id="repositories" aria-labelledby="repositories-title" className="site-container pb-14 sm:pb-20">
        <div className="border-t pt-10 sm:pt-12">
          <h2 id="repositories-title" className="section-title">Mais no GitHub<span className="text-primary">.</span></h2>
          <p className="mb-8 mt-5 max-w-xl leading-relaxed text-muted-foreground">Todos os repositórios públicos do perfil em um só lugar. Encontre uma tecnologia, explore uma ideia ou veja o que mudou.</p>
          <Suspense fallback={<ProjectSkeleton />}><PublicRepositories /></Suspense>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
