import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="border-t py-16 sm:py-24">
      <div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-5">Uma boa conversa é um começo</p>
          <h2 id="contact-title" className="section-title">Tem uma ideia?<br /><span className="text-muted-foreground">Vamos conversar.</span></h2>
        </div>
        <a href={siteConfig.socials.mail} className="group inline-flex max-w-full items-center gap-4 border-b border-primary pb-3 text-base font-medium sm:text-lg">
          <span className="break-all">contato@pedrorbc.com</span>
          <ArrowUpRight className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={25} />
        </a>
      </div>
    </section>
  );
}
