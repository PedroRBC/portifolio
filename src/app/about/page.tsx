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

function SkillSection({ title, description, skills }: { title: string; description: string; skills: Skill[] }) {
  return (
    <section className="grid gap-6 border-t py-8 md:grid-cols-[1fr_1.6fr] md:gap-12">
      <div><h3 className="text-lg font-medium tracking-tight">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {skills.map((skill) => {
          const Icon = Icons[skill.icon];
          return <li key={skill.name} className="flex items-center gap-3 py-2"><Icon className={cn("h-6 w-6", skill.style)} aria-hidden="true" /><span className="text-sm">{skill.name}</span></li>;
        })}
      </ul>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="site-container pb-14 pt-12 sm:pb-20 sm:pt-16">
        <h1 className="page-title mb-10 max-w-3xl sm:mb-14">Aprender é parte<br /><span className="text-muted-foreground">do processo.</span></h1>
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>Oi, sou o Pedro. Desenvolvedor, estudante de programação e morador do interior de São Paulo.</p>
            <p>Sou apaixonado por tecnologia e por aprender coisas novas. Gosto de transformar a curiosidade em código: de uma interface na web a uma aplicação mobile, passando pelas APIs que conectam tudo.</p>
            <p>Este portfólio reúne meus projetos e as tecnologias que fazem parte desse caminho. O código está aberto no GitHub — porque compartilhar também é uma forma de aprender.</p>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="index-link text-foreground">Acompanhe no GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <ProfileCard />
        </div>
      </section>
      <section aria-labelledby="skills-title" className="site-container pb-12 sm:pb-16">
        <h2 id="skills-title" className="section-title mb-5">Tecnologias que uso<span className="text-primary">.</span></h2>
        <p className="mb-9 max-w-xl leading-relaxed text-muted-foreground">Ferramentas para experimentar, construir e continuar aprendendo. Cada projeto pede uma combinação diferente.</p>
        <SkillSection title="Linguagens" description="A base de cada ideia." skills={siteConfig.skills.languages} />
        <SkillSection title="Frameworks" description="Da web ao mobile." skills={siteConfig.skills.frameworks} />
        <SkillSection title="Ferramentas" description="O que conecta tudo." skills={siteConfig.skills.tools} />
      </section>
      <ContactSection />
    </main>
  );
}
