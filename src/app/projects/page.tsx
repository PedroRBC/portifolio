import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
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
      <section className="site-container pb-14 pt-14 sm:pb-20 sm:pt-20">
        <p className="eyebrow mb-6">Projetos / Código aberto</p>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div><h1 className="text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Ideias que viraram<br /><span className="text-primary">projetos.</span></h1><p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">Experimentos, aplicações e aprendizado em prática. Uma seleção do que construo, com o código aberto para explorar.</p></div>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-link"><Icons.gitHub className="h-4 w-4" aria-hidden="true" />Meu GitHub <ArrowUpRight size={16} /></a>
        </div>
      </section>
      <section aria-labelledby="featured-title" className="site-container pb-16 sm:pb-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-t pt-7"><h2 id="featured-title" className="text-xl font-medium tracking-tight">Em destaque</h2><span className="eyebrow">01 / Seleção de projetos</span></div>
        <FeaturedProjects />
        <p className="mt-5 font-mono text-[10px] text-muted-foreground">Seleção automática pelo tópico portfolio · github-automated-repos</p>
      </section>
      <section id="repositories" aria-labelledby="repositories-title" className="border-t bg-card/30 py-16 sm:py-24">
        <div className="site-container">
          <p className="eyebrow mb-4">02 / Explore o código</p>
          <h2 id="repositories-title" className="section-title">Mais no GitHub<span className="text-primary">.</span></h2>
          <p className="mb-8 mt-5 max-w-xl leading-relaxed text-muted-foreground">Todos os repositórios públicos do perfil em um só lugar. Encontre uma tecnologia, explore uma ideia ou veja o que mudou.</p>
          <Suspense fallback={<ProjectSkeleton />}><PublicRepositories /></Suspense>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
