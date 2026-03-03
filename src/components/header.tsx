"use client";

import * as React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";

import { SunMedium as Sun, Moon } from "lucide-react";

import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg px-6">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <p className="text-xl lg:text-2xl font-bold">
              PR
              <span className="text-violet-600 dark:text-violet-400 transition-colors group-hover:text-violet-500">
                .
              </span>
            </p>
          </Link>
          <nav className="flex gap-1 items-center">
            <Link
              href="/"
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === "/"
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
              )}
            >
              Home
            </Link>
            {docsConfig.mainNav.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  pathname.startsWith(nav.href)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                )}
              >
                {nav.title}
              </Link>
            ))}
            <div className="ml-2 h-5 w-px bg-border" />
            <Button
              variant="ghost"
              onClick={toggleTheme}
              size="icon"
              className="ml-1"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
