import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 mt-auto px-6">
      <div className="container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            {new Date().getFullYear()} &mdash;{" "}
            <a
              href="https://pedrorbc.com/"
              className="font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {siteConfig.name}
            </a>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.gitHub className="h-4 w-4 fill-current" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.twitter className="h-4 w-4 fill-current" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
