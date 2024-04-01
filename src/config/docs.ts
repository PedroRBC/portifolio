interface Nav {
  title: string;
  href: string;
}

interface DocsConfig {
  siteName: string;
  description: string;
  avatarIcon: string;

  mainNav: Nav[];
}

export const docsConfig: DocsConfig = {
  siteName: "Pedro R.",
  description:
    "Portfolio pessoal do Pedro, desenvolvedor e estudante de programação.",
  avatarIcon: "https://github.com/pedrorbc.png",
  mainNav: [
    {
      title: "Projetos",
      href: "/projects",
    },
    {
      title: "Sobre",
      href: "/about",
    },
  ],
};
