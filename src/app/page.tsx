import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex-1 flex items-center px-6">
      <section className="my-10 flex flex-1 flex-col lg:flex-row items-center justify-between gap-12">
        <div className="md:w-[37rem] space-y-4">
          <div className="inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-400">
            Bem-vindo ao meu portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Oi, Me chamo{" "}
            <span className="text-violet-600 dark:text-violet-400">Pedro.</span>
          </h1>
          <h2 className="md:text-3xl text-xl font-medium text-muted-foreground">
            Desenvolvedor e estudante de programacao.
          </h2>
          <p className="text-muted-foreground md:text-lg text-base leading-relaxed">
            Morador do Interior de Sao Paulo, apaixonado por tecnologia e
            aprender coisas novas.
          </p>
          <div className="flex gap-3 pt-2 justify-center lg:justify-normal">
            <Button variant="outline" size="sm" asChild>
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="mr-2 h-4 w-4 fill-current" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.twitter className="mr-2 h-4 w-4 fill-current" />
                Twitter
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href={siteConfig.socials.mail}
                target="_blank"
                rel="noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-linear-to-tr from-violet-500 to-violet-300 opacity-20 blur-xl" />
            <Avatar className="relative h-48 w-48 md:h-64 md:w-64 border-2 border-violet-500/20">
              <AvatarImage src={siteConfig.userIcon} alt="@pedrorbc" />
              <AvatarFallback className="text-4xl">PR.</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
    </main>
  );
}
