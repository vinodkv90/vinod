import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    src: string
}

const Banner = (props: Props) => {
    const {title, src} = props
    return (
        <section className='py-8 sm:py-12'>
            <div className="container mx-auto px-3 md:max-w-[720px]">
                <div className="flex items-center justify-center relative h-60 overflow-hidden rounded-sm bg-radial from-emerald-800 from-40% to-emerald-900">
                    <figure className='w-full h-full absolute overflow-hidden z-0'>
                        <Image src={src ?? '/gradient.jpg'} alt={title} fill />
                    </figure>
                    <h1 className='text-white font-dela-gothic font-normal text-lg md:text-xl m-0 z-[1] tracking-widest uppercase'>{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default Banner