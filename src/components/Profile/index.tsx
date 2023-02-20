
import imageProfile from '@/assets/profile.png'
import Image from 'next/image'
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { SkillItem } from './SkillItem';

export function ProfileMenu() {
    return (
        <div className='flex py-2 px-4 text-[#8F8CA8] flex-col items-center max-lg:mb-1' >
            <div className='flex border rounded-full border-[#72707D] max-lg:w-40 ' >
                <Image
                    src={imageProfile}
                    alt='Profile Image'
                />
            </div>

            <div className="flex flex-col mt-6 items-center" >
                <span> Skills: </span>
                <ul className="flex flex-col" >
                    <SkillItem> <SiJavascript color="#ff1" /> JavaScript</SkillItem>
                    <SkillItem> <SiTypescript color="#007acc" /> TypeScript</SkillItem>
                    <SkillItem> <SiReact color="#61DBFB" /> React</SkillItem>
                    <SkillItem> <SiReact color="#61DBFB" /> React Native</SkillItem>
                    <SkillItem> <SiNodedotjs color="#3C873A" /> Node.Js</SkillItem>
                </ul>
            </div>

        </div>
    )
}