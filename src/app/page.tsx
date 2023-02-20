import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'
import { ProfileMenu } from "@/components/Profile";

const markdown = `
# About Me

Hello! My name is Pedro Rodrigues and I'm a student developer.
In my free time, I enjoy exploring new programming languages and frameworks, as well as building personal projects.

## Education

- Currently attending technical high school at ETEC

## Skills and Interests

- Interest in technology, programming, and other related fields
- Basic knowledge of C++, SQL Databases and Node.Js
- Familiarity with React Frameworks

## Additional Details

- Location: São Paulo/Brazil
- Time Zone: GMT-3

`.trim()

export default async function Home() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return (
    <div className='lg:grid lg:grid-cols-page max-lg:scrollbar ' >
      <ProfileMenu />
      <div className="lg:h-full relative max-lg:h-[80%] " >
        <CodePreview code={code} />
      </div>
    </div>
  )
}