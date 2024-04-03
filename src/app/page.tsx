import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex-1 flex items-center">
      <section className="my-10 flex flex-1 flex-col lg:flex-row items-center justify-between gap-8">
        <div className="md:w-[37rem]">
          <h1 className="text-4xl md:text-6xl font-bold whitespace-break-spaces transition-transform">
            {"Oi, Me chamo\nPedro."}
          </h1>
          <h2 className="text-violet-600 dark:text-violet-400 md:text-4xl my-1 font-semibold text-2xl">
            Desenvolvedor e estudante de programação.
          </h2>
          <p className="text-muted-foreground mt-3 md:text-xl text-base">
            Morador do Interior de São Paulo, apaixonado por tecnologia e
            aprender coisas novas.
          </p>
          <div className="mt-5 flex gap-5 justify-center sm:justify-normal">
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost">
                <Icons.gitHub className="w-4 h-4 fill-current" />
              </Button>
            </Link>
            <Link
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost">
                <Icons.twitter className="w-4 h-4 fill-current" />
              </Button>
            </Link>
            <Link
              href={siteConfig.socials.mail}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost">
                <Mail className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Avatar className="w-1/2 h-1/2">
            <AvatarImage src={siteConfig.userIcon} alt="@pedrorbc" />
            <AvatarFallback>PR.</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </main>
  );
}
