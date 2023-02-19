"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
    Github,
    Instagram,
    Contact,
    Twitter,
} from 'lucide-react'
import { MenuButton } from './MenuButton'

const socialLinks = [
    {
        name: 'github',
        url: 'https://github.com/PedroRBC',
        icon: <Github size={14} />
    },
    {
        name: 'instagram',
        url: 'https://instagram.com/pedro_rbc',
        icon: <Instagram size={14} />
    },
    {
        name: 'twitter',
        url: 'https://twitter.com/pedrinhorbc',
        icon: <Twitter size={14} />
    },
]

export function SocialLinksMenuButton() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger aria-label="Redes sociais">
                <MenuButton icon={Contact} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content side='right' className="bg-[#2a273f] z-10 flex flex-col rounded-lg overflow-auto">
                    {socialLinks.map(socialItem => {
                        return (
                            <DropdownMenu.Item key={socialItem.url} className="outline-none">
                                <a
                                    href={socialItem.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]"
                                >
                                    {socialItem.icon}
                                    {socialItem.name}
                                </a>
                            </DropdownMenu.Item>
                        )
                    })}
                    <DropdownMenu.Arrow className="fill-[#2a273f]" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}