import colors from 'tailwindcss/colors'

export type ProjectProps = {
    title: string;
    url: string;
    image: string;
    desc: string;
}


export function Project({ desc, url, image, title }: ProjectProps) {

    return (
        <a href={url}  >
            <div
                className="group flex border bg-zinc-700 border-zinc-900 rounded-xl p-2 flex-col h-72 w-96" >
                <span className="w-full border-b-2 border-zinc-800" >{title}</span>

                <div
                    className='h-full flex items-end '
                    style={{
                        backgroundColor: colors.zinc[600],
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'

                    }} >
                    <div className="invisible group-hover:visible rounded-t-xl p-1"
                    >
                        <span  >{desc}</span>
                    </div>
                </div>

            </div>
        </a>
    )
}