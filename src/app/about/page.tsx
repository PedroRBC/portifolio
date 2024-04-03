import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Sobre Min",
};

export default function AboutPage() {
  return (
    <main className="container flex flex-1 justify-center">
      <section className="flex flex-col justify-around">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Habilidades</h1>
          <div className="flex gap-5 my-7 items-center justify-center flex-wrap">
            {siteConfig.skills.map((skill) => {
              const Icon = Icons[skill.icon];
              return (
                <div
                  key={skill.name}
                  className="flex justify-center gap-y-1 flex-col items-center"
                >
                  <Icon className="w-10 h-10" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <h2 className="text-xl font-mono">Em construção... 🔥🔥🔥</h2>
        </div>
      </section>
    </main>
  );
}
