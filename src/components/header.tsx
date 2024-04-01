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
    <header className="sticky top-0 z-10 w-screen bg-background/50 backdrop-blur-md">
      <div className="container py-5">
        <div className="h-20 flex items-center justify-between">
          <Link href="/">
            <p className="text-2xl font-bold md:inline-block">
              PR
              <span className="text-violet-600 dark:text-violet-400">.</span>
            </p>
          </Link>
          <div className="flex gap-4 items-center text-lg font-medium">
            <Link href="/">
              <p
                className={cn(
                  pathname === "/" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Home
              </p>
            </Link>
            {docsConfig.mainNav.map((nav) => (
              <Link key={nav.href} href={nav.href}>
                <p
                  className={cn(
                    pathname.startsWith(nav.href)
                      ? "text-foreground"
                      : "text-foreground/60",
                  )}
                >
                  {nav.title}
                </p>
              </Link>
            ))}
            <Button variant="ghost" onClick={toggleTheme} size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
