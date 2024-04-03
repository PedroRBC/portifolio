import { Icons } from "@/components/icons";

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
    name: string;
    icon: keyof typeof Icons;
  }[];
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
  skills: [
    {
      name: "React",
      icon: "react",
    },
    {
      name: "Next",
      icon: "next",
    },
    {
      name: "Typescript",
      icon: "typeScript",
    },
    {
      name: "Prisma",
      icon: "prisma",
    },
  ],
};
