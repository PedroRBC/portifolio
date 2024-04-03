import { Icons } from "@/components/icons";

interface SiteConfig {
  name: string;
  description: string;
  userIcon: string;
  socials: {
    name: string;
    link: string;
    icon: keyof typeof Icons;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Pedro R.",
  description:
    "Portfolio pessoal do Pedro, desenvolvedor e estudante de programação.",
  userIcon: "https://github.com/pedrorbc.png",
  socials: [
    {
      name: "GitHub",
      link: "",
      icon: "gitHub",
    },
  ],
};
