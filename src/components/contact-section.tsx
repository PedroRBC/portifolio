import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="site-container">
      <div className="contact-section flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 id="contact-title" className="text-2xl font-medium leading-snug tracking-tight">Tem uma ideia? <span className="text-muted-foreground">Vamos conversar.</span></h2>
        <a href={siteConfig.socials.mail} className="text-link max-w-full gap-3 text-primary"><span className="break-all">contato@pedrorbc.com</span><ArrowUpRight size={19} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
