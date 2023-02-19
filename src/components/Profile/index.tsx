
import imageProfile from '@/assets/profile.png'
import Image from 'next/image'
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";

export function ProfileMenu() {
    return (
        <div className='py-2 px-4 text-[#8F8CA8]' >
            <div className='flex border rounded-full border-[#72707D] ' >
                <Image
                    src={imageProfile}
                    alt='Profile Image'
                />
            </div>

            <div className="flex flex-col mt-6 items-center" >
                <span> Skills: </span>
                <ul className="flex flex-col" >
                    <li className="flex flex-row gap-3 items-center" ><SiJavascript color="#ff1" /> JavaScript</li>
                    <li className="flex flex-row gap-3 items-center" ><SiTypescript color="#007acc" /> TypeScript</li>
                    <li className="flex flex-row gap-3 items-center" ><SiReact color="#61DBFB" /> React</li>
                    <li className="flex flex-row gap-3 items-center" ><SiReact color="#61DBFB" /> React Native</li>
                    <li className="flex flex-row gap-3 items-center" ><SiNodedotjs color="#3C873A" /> Node.Js</li>
                </ul>
            </div>

        </div>
    )
}