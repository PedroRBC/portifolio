import { GistContent } from '@/components/GistContent'

export const metadata = {
    title: 'ZSH Configs',
}

export default async function Extensions() {
    {/* @ts-expect-error Server Component */ }
    return <GistContent lang='zsh' gistUrl="https://gist.githubusercontent.com/PedroRBC/eba9faddab0999d9d03385ac058b04f1/raw/477e4490adc6143c0e0410fa3d9e3a77b2ac8bcc/.zshrc" />
}