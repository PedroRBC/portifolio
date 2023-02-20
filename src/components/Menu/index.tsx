"use client"


import { Cog, User, FolderHeart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuButton } from './MenuButton'
import { SocialLinksMenuButton } from './SocialLinksMenuButton'

export function Menu() {
    const pathName = usePathname();
    function ActualRoute(href = '/') {
        const isCurrentActive = pathName === href;
        return isCurrentActive
    }



    return (
        <div className="flex flex-col justify-between">
            <nav className="flex flex-col">
                <Link href='/' aria-label='Home Page' >
                    <MenuButton icon={User} isActive={ActualRoute('/')} />
                </Link>
                <Link href='/projects' aria-label='Projects Page'  >
                    <MenuButton icon={FolderHeart} isActive={ActualRoute('/projects')} />
                </Link>
            </nav>
            <div className="flex flex-col ">
                <SocialLinksMenuButton />
                <Link href='/settings' aria-label='Settings Page'  >
                    <MenuButton icon={Cog} isActive={ActualRoute('/settings')} />
                </Link>
            </div>
        </div>
    )
}