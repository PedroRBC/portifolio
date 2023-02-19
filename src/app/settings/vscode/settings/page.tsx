import { GistContent } from '@/components/GistContent'

export const metadata = {
    title: 'VSCode Settings',
}

export default async function Settings() {
    {/* @ts-expect-error Server Component */ }
    return <GistContent lang='json' gistUrl="https://gist.githubusercontent.com/PedroRBC/812203652caed79ce62b498d29f0206b/raw/ed5c869c3a895bdefa7f4d54699d3e3d9ed86286/vscode-config.json" />
}