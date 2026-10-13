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

const navigation = [{ title: "Início", href: "/" }, ...docsConfig.mainNav];

export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function navLinks(mobile = false) {
    return navigation.map((item) => {
      const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
          className={cn("relative transition-colors hover:text-foreground", mobile ? "rounded-lg px-4 py-3 text-base" : "px-3 py-2 text-sm", active ? "text-foreground" : "text-muted-foreground", active && mobile && "bg-secondary")}
        >
          {item.title}
          {active && !mobile && <span aria-hidden="true" className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />}
        </Link>
      );
    });
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="site-container flex h-20 items-center justify-between gap-4">
        <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Pedro Rbc — início" className="flex items-center gap-2 font-mono text-lg font-medium tracking-tight">
          <span className="text-primary" aria-hidden="true">[</span>p.rbc<span className="text-primary" aria-hidden="true">]</span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-3 md:flex">
          {navLinks()}
        </nav>
        <div className="flex items-center gap-3">
          <a href={siteConfig.socials.mail} className="text-link mr-2 hidden lg:inline-flex">Vamos conversar <ArrowUpRight size={16} /></a>
          <Button variant="ghost" size="icon" className="relative rounded-full border border-border" aria-label="Alternar tema" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <Sun size={17} className="absolute scale-100 dark:scale-0" />
            <Moon size={17} className="absolute scale-0 dark:scale-100" />
          </Button>
          <Button ref={menuButton} variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Navegação móvel" hidden={!menuOpen} className="site-container border-t pb-5 pt-3 md:hidden">
        <div className="flex flex-col gap-1">
          {navLinks(true)}
          <a href={siteConfig.socials.mail} className="text-link px-4 py-3">Vamos conversar <ArrowUpRight size={16} /></a>
        </div>
      </nav>
    </header>
  );
}
