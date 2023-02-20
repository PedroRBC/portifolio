import shiki from "shiki"
import { CodePreview } from "./CodePreview"

interface GistContentProps {
    gistUrl: string;
    lang: string
}

export async function GistContent({ gistUrl, lang }: GistContentProps) {
    const settingsResponse = await fetch(gistUrl)
    const settings = await settingsResponse.text()

    const highlighter = await shiki.getHighlighter({
        theme: 'rose-pine-moon',
        langs: ["json"]
    })

    const code = highlighter.codeToHtml(settings, { lang })

    return <CodePreview code={code} raw={settings} />
}