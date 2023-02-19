import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
    title: 'Server Setup',
}

const markdown = `
# Server Setup
- Ubuntu Server
- AMD A4-7300 @3.8GHz
- 2x 4GB 1600Mhz
- HDD 500Gb

That's it, nothing more.
`.trim()

export default async function GamingSetup() {
    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon',
    })

    const code = highlighter.codeToHtml(markdown, { lang: 'md' })

    return <CodePreview code={code} />
}