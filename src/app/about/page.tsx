import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Sobre Min",
};

export default function AboutPage() {
  return (
    <main className="container flex flex-1 justify-center">
      <section className="flex flex-col justify-around">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold">Habilidades</h1>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {siteConfig.skills.leanguage.map((skill) => {
              const Icon = Icons[skill.icon];
              return (
                <div
                  key={skill.name}
                  className="flex justify-center gap-y-1 flex-col items-center"
                >
                  <Icon className={cn("w-10 h-10", skill.style)} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {siteConfig.skills.framework.map((skill) => {
              const Icon = Icons[skill.icon];
              return (
                <div
                  key={skill.name}
                  className="flex justify-center gap-y-1 flex-col items-center"
                >
                  <Icon className={cn("w-10 h-10", skill.style)} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {siteConfig.skills.other.map((skill) => {
              const Icon = Icons[skill.icon];
              return (
                <div
                  key={skill.name}
                  className="flex justify-center gap-y-1 flex-col items-center"
                >
                  <Icon className={cn("w-10 h-10", skill.style)} />
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
