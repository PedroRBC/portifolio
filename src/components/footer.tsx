import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="site-container py-9">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Link href="/" className="font-mono text-sm font-medium">p.rbc<span className="text-primary"> /</span></Link>
            <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. Feito com curiosidade e código.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a className="text-link" href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>
            <a className="text-link" href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter <ArrowUpRight size={14} /></a>
            <a className="text-link" href={siteConfig.socials.mail}>E-mail <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t pt-5 text-xs text-muted-foreground">
          <span>HomeCare</span>
          <Link href="/homecare/privacy" className="hover:text-foreground">Privacidade</Link>
          <Link href="/homecare/data-deletion" className="hover:text-foreground">Exclusão de dados</Link>
        </div>
      </div>
    </footer>
  );
}
