import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { ProfileCard } from "@/components/profile-card";
import { ContactSection } from "@/components/contact-section";
import { siteConfig, type Skill } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça Pedro Rbc, desenvolvedor e estudante de programação, e as tecnologias que usa para construir seus projetos.",
  alternates: { canonical: "/about" },
};

function SkillSection({ index, title, description, skills }: { index: string; title: string; description: string; skills: Skill[] }) {
  return (
    <section className="grid gap-6 border-t py-9 md:grid-cols-[1fr_1.6fr] md:gap-12">
      <div><p className="eyebrow mb-3">{index} / {title}</p><h3 className="text-xl font-medium">{description}</h3></div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {skills.map((skill) => {
          const Icon = Icons[skill.icon];
          return <li key={skill.name} className="flex min-h-28 flex-col justify-between gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-primary/40"><Icon className={cn("h-8 w-8", skill.style)} aria-hidden="true" /><span className="text-sm font-medium">{skill.name}</span></li>;
        })}
      </ul>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="site-container pb-16 pt-14 sm:pb-24 sm:pt-20">
        <p className="eyebrow mb-6">Sobre / Pedro Rbc</p>
        <h1 className="mb-12 max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Aprender é parte<br /><span className="text-muted-foreground">do processo.</span></h1>
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Oi, sou o Pedro. Desenvolvedor, estudante de programação e morador do interior de São Paulo.</p>
            <p>Sou apaixonado por tecnologia e por aprender coisas novas. Gosto de transformar a curiosidade em código: de uma interface na web a uma aplicação mobile, passando pelas APIs que conectam tudo.</p>
            <p>Este portfólio reúne meus projetos e as tecnologias que fazem parte desse caminho. O código está aberto no GitHub — porque compartilhar também é uma forma de aprender.</p>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-link text-foreground">Acompanhe no GitHub <ArrowUpRight size={17} /></a>
          </div>
          <ProfileCard />
        </div>
      </section>
      <section aria-labelledby="skills-title" className="border-t bg-card/30 py-16 sm:py-24">
        <div className="site-container">
          <p className="eyebrow mb-4">Minha caixa de ferramentas</p>
          <h2 id="skills-title" className="section-title mb-5">Tecnologias que uso<span className="text-primary">.</span></h2>
          <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">Ferramentas para experimentar, construir e continuar aprendendo. Cada projeto pede uma combinação diferente.</p>
          <SkillSection index="01" title="Linguagens" description="A base de cada ideia." skills={siteConfig.skills.languages} />
          <SkillSection index="02" title="Frameworks" description="Da web ao mobile." skills={siteConfig.skills.frameworks} />
          <SkillSection index="03" title="Ferramentas" description="O que conecta tudo." skills={siteConfig.skills.tools} />
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
