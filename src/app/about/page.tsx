import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Sobre Mim",
};

function SkillSection({
  title,
  skills,
}: {
  title: string;
  skills: typeof siteConfig.skills.leanguage;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="flex gap-6 items-center justify-center flex-wrap">
        {skills.map((skill) => {
          const Icon = Icons[skill.icon];
          return (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-2 rounded-lg border bg-card p-4 transition-all duration-200 hover:border-violet-500/30 hover:shadow-md hover:shadow-violet-500/5"
            >
              <Icon
                className={cn(
                  "h-10 w-10 transition-transform duration-200 group-hover:scale-110",
                  skill.style,
                )}
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="container flex flex-1 justify-center py-10">
      <section className="flex items-center">
        <div className="flex flex-col items-center space-y-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Habilidades</h1>
            <p className="mt-2 text-muted-foreground">
              Tecnologias que uso no dia a dia
            </p>
          </div>
          <SkillSection
            title="Linguagens"
            skills={siteConfig.skills.leanguage}
          />
          <SkillSection
            title="Frameworks"
            skills={siteConfig.skills.framework}
          />
          <SkillSection title="Outros" skills={siteConfig.skills.other} />
        </div>
      </section>
    </main>
  );
}
