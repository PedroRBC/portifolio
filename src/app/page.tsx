import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { siteConfig } from "@/config/site";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main className="site-container">
      <div className="home-layout">
        <section className="home-intro" aria-labelledby="intro-title">
          <h1 id="intro-title" className="home-title">Da curiosidade<br />ao código<span className="text-primary">.</span></h1>
          <p className="home-bio">Oi, sou o Pedro. Desenvolvedor e estudante de programação. Transformando o que aprendo em projetos para a web, mobile e tudo o que despertar a curiosidade.</p>
          <div className="home-intro-links">
            <a href={siteConfig.socials.mail} className="text-link text-primary">Vamos conversar <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </section>
        <FeaturedProjects limit={4} variant="index" />
      </div>
      <section className="home-about" aria-labelledby="about-title">
        <div>
          <h2 id="about-title" className="home-about-title">Sempre em construção.</h2>
          <ul className="skill-tags" aria-label="Minha stack">{["TypeScript", "React", "Next.js", "Expo"].map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div>
          <p>Moro no interior de São Paulo e gosto de aprender coisas novas. Programar é minha maneira de explorar ideias, entender como as coisas funcionam e criar algo com esse conhecimento.</p>
          <p className="mt-4">Entre interfaces, aplicações e APIs, cada projeto é uma oportunidade de experimentar e evoluir.</p>
          <Link href="/about" className="index-link mt-5">Um pouco mais sobre mim <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
