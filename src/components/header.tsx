"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function navLinks(mobile = false) {
    return docsConfig.mainNav.map((item) => {
      const active = pathname.startsWith(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
          className={cn(mobile ? "px-3 py-3 text-base" : "site-nav-link", active && "text-primary", !active && mobile && "text-muted-foreground")}
        >
          {item.title}
        </Link>
      );
    });
  }

  return (
    <header
      className="relative z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="site-container">
        <div className="flex min-h-20 items-center justify-between gap-5 border-b sm:min-h-[104px]">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Pedro Rbc — início" className="site-wordmark">pedro rbc<span className="text-primary">.</span></Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <nav aria-label="Navegação principal" className="hidden items-center gap-4 md:flex">
              {navLinks()}
              <a href={siteConfig.socials.mail} className="site-nav-link">Contato</a>
            </nav>
            <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full border border-border" aria-label="Alternar tema" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
              <Sun size={15} className="absolute scale-100 dark:scale-0" aria-hidden="true" />
              <Moon size={15} className="absolute scale-0 dark:scale-100" aria-hidden="true" />
            </Button>
            <Button ref={menuButton} variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </Button>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label="Navegação móvel" hidden={!menuOpen} className="border-b py-4 md:hidden">
          <div className="flex flex-col">
            <Link href="/" onClick={() => setMenuOpen(false)} className="px-3 py-3 text-base">Início</Link>
            {navLinks(true)}
            <a href={siteConfig.socials.mail} className="text-link px-3 py-3">Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
