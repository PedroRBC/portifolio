import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export function ProfileCard() {
  return (
    <figure className="mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
      <Avatar className="aspect-square h-auto w-full rounded-none bg-secondary">
        <AvatarImage src={siteConfig.userIcon} alt="Foto de perfil de Pedro Rbc" className="object-cover" />
        <AvatarFallback className="rounded-none text-7xl font-medium tracking-tight text-primary">PR.</AvatarFallback>
      </Avatar>
      <figcaption className="mt-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-base font-medium tracking-tight">Pedro Rbc</p>
            <p className="mt-1 text-sm text-muted-foreground">Interior de São Paulo, Brasil</p>
          </div>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="Visitar o GitHub de Pedro" className="p-3 text-primary transition-colors hover:text-foreground"><ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
        <p className="mt-5 border-t pt-4 text-xs text-muted-foreground">Aprendendo. Construindo. Repetindo.</p>
      </figcaption>
    </figure>
  );
}
