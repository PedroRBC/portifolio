import { Icons } from "@/components/icons";
import { type ClassValue } from "clsx";

type skill = {
  name: string;
  icon: keyof typeof Icons;
  style?: ClassValue;
};

export type SiteConfig = {
  name: string;
  description: string;
  userIcon: string;
  socials: {
    twitter: string;
    github: string;
    mail: string;
  };
  skills: {
    leanguage: skill[];
    framework: skill[];
    other: skill[];
  };
};

export const siteConfig: SiteConfig = {
  name: "Pedro R.",
  description:
    "Portfolio pessoal do Pedro, desenvolvedor e estudante de programação.",
  userIcon: "https://github.com/pedrorbc.png",
  socials: {
    twitter: "https://twitter.com/pedrinhorbc",
    github: "https://github.com/pedrorbc",
    mail: "mailto:contato@pedrorbc.com",
  },
  skills: {
    leanguage: [
      {
        name: "Typescript",
        icon: "typeScript",
        style: "w-8 h-8",
      },
      {
        name: "Javacript",
        icon: "javaScript",
        style: "w-8 h-8",
      },
      {
        name: "Go",
        icon: "go",
      },
      {
        name: "C++",
        icon: "cplusplus",
      },
    ],
    framework: [
      {
        name: "React",
        icon: "react",
      },
      {
        name: "Next",
        icon: "next",
      },
    ],
    other: [
      {
        name: "Prisma",
        icon: "prisma",
      },
    ],
  },
};
