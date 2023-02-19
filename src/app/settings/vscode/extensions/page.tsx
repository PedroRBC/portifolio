import { GistContent } from '@/components/GistContent'

export const metadata = {
    title: 'VSCode Extensions',
}

export default async function Extensions() {
    {/* @ts-expect-error Server Component */ }
    return <GistContent lang='json' gistUrl="https://gist.githubusercontent.com/PedroRBC/bd4a99c37f185a695d9d696af472295f/raw/639fa75cc445c3a7a887d09a71068fad4c769eb0/extensions.json" />
}