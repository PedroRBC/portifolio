import { ArrowUpRight, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = { title: "Manutenção" };

export default function Maintenance() {
  return (
    <main className="site-container py-24 sm:py-32">
      <Wrench className="mb-8 text-primary" size={32} aria-hidden="true" />
      <p className="eyebrow mb-5">Em construção</p>
      <h1 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-6xl">Um pequeno ajuste.<br /><span className="text-muted-foreground">Já volto.</span></h1>
      <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">O portfólio está em manutenção. Enquanto isso, você pode explorar meus projetos no GitHub ou entrar em contato por e-mail.</p>
      <div className="mt-9 flex flex-wrap gap-6"><a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <ArrowUpRight size={16} /></a><a href={siteConfig.socials.mail} className="text-link">Entrar em contato <ArrowUpRight size={16} /></a></div>
    </main>
  );
}
