import { Icons } from "@/components/icons";
import { type ClassNameValue } from "tailwind-merge";

export type Skill = {
  name: string;
  icon: keyof typeof Icons;
  style?: ClassNameValue;
};

export const siteConfig = {
  name: "Pedro Rbc",
  description:
    "Portfólio de Pedro Rbc, desenvolvedor e estudante de programação no interior de São Paulo. Projetos open source, desenvolvimento web e mobile.",
  url: "https://pedrorbc.com",
  userIcon: "https://github.com/pedrorbc.png",
  github: {
    username: "PedroRBC",
    keyword: "portfolio",
    featured: ["habits", "PalDex", "paldex-api", "ValorantDex"],
  },
  socials: {
    twitter: "https://twitter.com/pedrinhorbc",
    github: "https://github.com/pedrorbc",
    mail: "mailto:contato@pedrorbc.com",
  },
  skills: {
    languages: [
      { name: "TypeScript", icon: "typeScript", style: "h-8 w-8" },
      { name: "JavaScript", icon: "javaScript", style: "h-8 w-8" },
      { name: "Go", icon: "go" },
      { name: "C++", icon: "cplusplus" },
    ] satisfies Skill[],
    frameworks: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Expo", icon: "expo" },
    ] satisfies Skill[],
    tools: [
      { name: "Prisma", icon: "prisma" },
      { name: "Firebase", icon: "firebase" },
      { name: "Docker", icon: "docker" },
    ] satisfies Skill[],
  },
};

export type SiteConfig = typeof siteConfig;
