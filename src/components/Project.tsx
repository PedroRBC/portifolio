import colors from 'tailwindcss/colors'

export type ProjectProps = {
    title: string;
    url: string;
    image: string | null;
    desc: string;
}

export function Project({ desc, url, image, title }: ProjectProps) {
    var backgroundImage: string;
    if (image == null) {
        backgroundImage = 'https://raw.githubusercontent.com/PedroRBC/portifolio/main/.github/noImage.png'
    } else {
        backgroundImage = image
    }

    return (
        <a href={url} className="flex justify-center" >
            <div
                className="group flex border bg-zinc-700 border-zinc-900 rounded-xl p-2 flex-col h-72 w-96 max-lg:w-11/12" >
                <span className="w-full border-b-2 border-zinc-800" >{title}</span>

                <div
                    className='h-full flex items-end '
                    style={{
                        backgroundColor: colors.zinc[600],
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'

                    }} >
                    <div className="invisible group-hover:visible rounded-t-xl p-1 max-lg:visible"
                        style={{
                            backgroundColor: 'rgba(250, 250, 256, 0.25)'
                        }}
                    >
                        <span  >{desc}</span>
                    </div>
                </div>

            </div>
        </a>
    )
}