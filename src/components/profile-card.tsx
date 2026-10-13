import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
      <div className="absolute -left-4 -top-4 h-16 w-16 border-l border-t border-primary/50" aria-hidden="true" />
      <div className="overflow-hidden rounded-2xl border bg-card">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <span className="eyebrow">Por trás do código</span>
          <span className="font-mono text-xs text-primary" aria-hidden="true">&lt;/&gt;</span>
        </div>
        <div className="relative p-5">
          <Avatar className="aspect-[1.05] h-auto w-full rounded-xl bg-muted">
            <AvatarImage src={siteConfig.userIcon} alt="Foto de perfil de Pedro Rbc" className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0" />
            <AvatarFallback className="rounded-xl font-mono text-7xl text-primary">PR.</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-9 left-9 rounded-md bg-background/90 px-3 py-2 font-mono text-xs backdrop-blur">Olá, mundo<span className="text-primary">_</span></div>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
          <div>
            <p className="text-sm font-medium">Pedro Rbc</p>
            <p className="mt-1 text-xs text-muted-foreground">Interior de São Paulo, Brasil</p>
          </div>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="Visitar o GitHub de Pedro" className="rounded-full border p-2.5 transition-colors hover:bg-primary hover:text-primary-foreground"><ArrowUpRight size={18} /></a>
        </div>
      </div>
      <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Aprendendo. Construindo. Repetindo.</p>
    </div>
  );
}
