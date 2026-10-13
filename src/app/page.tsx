import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/profile-card";
import { ContactSection } from "@/components/contact-section";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { siteConfig } from "@/config/site";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main>
      <section className="site-container pb-12 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b pb-5">
          <p className="eyebrow flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />Desenvolvedor & estudante</p>
          <p className="eyebrow">São Paulo, Brasil <span className="ml-2 text-primary" aria-hidden="true">↗</span></p>
        </div>
        <div className="grid items-center gap-16 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <div className="reveal">
            <p className="mb-5 text-base text-muted-foreground">Oi, sou o Pedro.</p>
            <h1 className="text-[clamp(2.8rem,7vw,5.75rem)] font-medium leading-[1.06] tracking-[-0.065em]">Da curiosidade<br />ao <span className="text-primary">código.</span></h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">Desenvolvedor e estudante de programação. Transformando o que aprendo em projetos para a web, mobile e tudo o que despertar a curiosidade.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button asChild size="lg" className="h-12 gap-6 rounded-full px-6"><Link href="/projects">Explorar projetos <ArrowUpRight size={18} /></Link></Button>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-link"><Icons.gitHub className="h-4 w-4" aria-hidden="true" />GitHub <ArrowUpRight size={14} className="text-muted-foreground" /></a>
            </div>
          </div>
          <div className="reveal [animation-delay:120ms]"><ProfileCard /></div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t pt-6 lg:mt-20">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted-foreground"><span className="eyebrow mr-2">Minha stack</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>Expo</span></div>
          <a href="#selected-work" className="text-link text-xs text-muted-foreground">Continue explorando <ArrowDown size={14} /></a>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="work-title" className="border-t bg-card/30 py-16 sm:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow mb-4">01 / Projetos selecionados</p><h2 id="work-title" className="section-title">Aprendizado em prática<span className="text-primary">.</span></h2></div>
            <Link href="/projects" className="text-link">Todos os projetos <ArrowUpRight size={17} /></Link>
          </div>
          <FeaturedProjects limit={2} />
        </div>
      </section>

      <section aria-labelledby="about-title" className="site-container grid gap-8 py-16 sm:py-24 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div><p className="eyebrow mb-4">02 / Além do código</p><h2 id="about-title" className="section-title">Sempre em<br /><span className="text-muted-foreground">construção.</span></h2></div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>Moro no interior de São Paulo e gosto de aprender coisas novas. Programar é minha maneira de explorar ideias, entender como as coisas funcionam e criar algo com esse conhecimento.</p>
          <p>Entre interfaces, aplicações e APIs, cada projeto é uma oportunidade de experimentar e evoluir.</p>
          <Link href="/about" className="text-link text-foreground">Um pouco mais sobre mim <ArrowRight size={17} /></Link>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
