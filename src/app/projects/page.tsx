"use n";
import { CarrouselProjects } from "./projectsCarrousel";

export const metadata = {
  title: "Projetos",
};

export default function ProjectsPage() {
  return (
    <main className="container w-full flex-1 flex items-center justify-center">
      <CarrouselProjects />
    </main>
  );
}
