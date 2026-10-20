import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="site-container mt-auto">
      <div className="flex flex-col justify-between gap-5 border-t py-6 text-sm sm:flex-row sm:items-center">
        <p className="text-muted-foreground">Pedro Rbc <span className="mx-1" aria-hidden="true">·</span> São Paulo, Brasil</p>
        <a href={siteConfig.socials.mail} className="text-link max-w-full text-primary"><span className="break-all">contato@pedrorbc.com</span><ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="flex flex-col justify-between gap-5 pb-7 text-xs text-muted-foreground sm:flex-row sm:items-start">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Feito com curiosidade e código.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
          <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Twitter</a>
          <Link href="/homecare/privacy" className="transition-colors hover:text-foreground">HomeCare · Privacidade</Link>
          <Link href="/homecare/data-deletion" className="transition-colors hover:text-foreground">Exclusão de dados</Link>
        </div>
      </div>
    </footer>
  );
}
