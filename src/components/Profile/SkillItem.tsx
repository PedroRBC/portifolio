import { ReactNode } from "react"


type SkillType = {
    children: ReactNode
}

export function SkillItem({ children }: SkillType) {

    return <li className="flex flex-row gap-3 items-center hover:text-cyan-200 " >
        {children}
    </li>
}