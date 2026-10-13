import Link from "next/link";

export default function HomeCareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <nav
        aria-label="Documentos do HomeCare"
        className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b pb-6 text-sm"
      >
        <span className="font-semibold">HomeCare</span>
        <Link
          href="/homecare/privacy"
          className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Política de privacidade
        </Link>
        <Link
          href="/homecare/data-deletion"
          className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Exclusão de conta e dados
        </Link>
      </nav>
      <article className="space-y-10 text-base leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:font-semibold [&_h3]:text-foreground [&_section]:space-y-4 [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:break-words [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </article>
    </main>
  );
}
