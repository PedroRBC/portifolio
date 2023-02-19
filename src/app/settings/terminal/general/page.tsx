import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
    title: 'Terminal',
}

const markdown = `
# General
Currently I'm using the combo OhMyPosh in Windows and Zsh in Linux to my terminal.
OhMyPosh: https://ohmyposh.dev
Zsh + OhMyZsh: https://www.zsh.org + https://ohmyz.sh
---
I'm Also using For OhMyZsh Theme: PowerLevel10K.
PowerLevel10K: https://github.com/romkatv/powerlevel10k
`.trim()

export default async function General() {
    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon',
    })

    const code = highlighter.codeToHtml(markdown, { lang: 'md' })

    return <CodePreview code={code} />
}