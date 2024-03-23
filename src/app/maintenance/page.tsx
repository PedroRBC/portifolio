export default function Maintenance() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-24">
      <section className="flex flex-col gap-6 bg-orange-200 p-8 rounded-xl border">
        <h1 className="text-5xl font-bold text tracking-tight text-orange-400/80">
          Manutenção 🚧
        </h1>
        <p className="text-base font-normal">
          Esta página está em Manutenção. Por favor, volte mais tarde.
        </p>
      </section>
    </main>
  );
}
