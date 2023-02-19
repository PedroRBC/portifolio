import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
    title: 'Gaming Setup',
}

const markdown = `
# My Setup
- AMD Ryzen 5 3400G
- 2x Gigabyte 8GB 2666Mhz
- 500W 80 Plus
- Kingston SSD KC600 256Gb
- RX Vega 11 Graphics
## Peripherals
- LG 24" Display 5ms 1920x1080
- LG 19,5" Display 5ms 1366x768
That's it, nothing more.
`.trim()

export default async function GamingSetup() {
    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon',
    })

    const code = highlighter.codeToHtml(markdown, { lang: 'md' })

    return <CodePreview code={code} />
}