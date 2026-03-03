import { CarrouselProjects } from "./projectsCarrousel";

export const metadata = {
  title: "Projetos",
};

export default function ProjectsPage() {
  return (
    <main className="container w-full flex-1 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <p className="mt-2 text-muted-foreground">
          Meus projetos open source no GitHub
        </p>
      </div>
      <CarrouselProjects />
    </main>
  );
}
