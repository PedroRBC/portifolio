import { Icons } from "@/components/icons";
import { type ClassNameValue } from "tailwind-merge";

type skill = {
  name: string;
  icon: keyof typeof Icons;
  style?: ClassNameValue;
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
      {
        name: "Nest.Js",
        icon: "nestjs",
      },
      {
        name: "Expo",
        icon: "expo",
      },
    ],
    other: [
      {
        name: "Prisma",
        icon: "prisma",
      },
      {
        name: "Firebase",
        icon: "firebase",
      },
      {
        name: "Docker",
        icon: "docker",
      },
    ],
  },
};
