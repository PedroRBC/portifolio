interface Nav {
  title: string;
  href: string;
}

interface DocsConfig {
  mainNav: Nav[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Projetos",
      href: "/projects",
    },
    {
      title: "Habilidades",
      href: "/about",
    },
  ],
};
