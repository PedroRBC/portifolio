import { Project, ProjectProps } from "@/components/Project"

export const metadata = {
    title: 'Projects'
}

const ProjectsList = [
    {
        title: 'Habits',
        desc: 'A tool to monitor and define habits and put your goals into practice.',
        image: 'https://raw.githubusercontent.com/PedroRBC/PRBC-Habits/master/.github/Habits_Web_Preview.png',
        url: 'https://github.com/PedroRBC/PRBC-Habits'
    },
    {
        title: 'Auth Api',
        desc: 'An authentication application with Prisma and Passport Libraries.',
        image: null,
        url: 'https://github.com/PedroRBC/AuthApp-API'
    }

] as ProjectProps[]

export default function Projects() {
    return (
        <div
            className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent pb-4"
        >
            <div className="flex flex-wrap gap-4 justify-center" >
                {ProjectsList.length > 0 && ProjectsList.map((project, i) => {
                    return (
                        <Project key={`${i}-${project.title}`} title={project.title} desc={project.desc} image={project.image} url={project.url} />
                    )
                })}
            </div>
        </div>
    )
}