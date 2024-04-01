export default function Home() {
  return (
    <main className="container flex-1 flex items-center">
      <section className="my-14 md:my-10 flex items-center justify-between">
        <div className="w-[37rem]">
          <h1 className="text-4xl md:text-6xl font-bold whitespace-break-spaces">
            Oi, Me chamo
            {"\nPedro."}
          </h1>
          <h2 className="text-violet-600 dark:text-violet-400 md:text-4xl my-1 font-semibold text-2xl">
            Desenvolvedor e estudante de programação.
          </h2>
          <p className="text-muted-foreground mt-3 md:text-xl text-base">
            Morador do Interior de São Paulo, apaixonado por tecnologia e
            aprender coisas novas.
          </p>
          <div className="mt-5 flex gap-5"></div>
        </div>
        <div />
      </section>
    </main>
  );
}
