import Image from 'next/image'
import React from 'react'

type Data = {
    title: string | null,
    image: {
        alternativeText: string | null,
        caption: string | null,
        height: number | null,
        url: string | null,
        width: number | null,
    }
}

type BannerProps = {
    component: Data | null
    data: Data | null
    widgetType: string
}

const Banner = (props: BannerProps) => {
    const { data } = props
    console.log(props);
    return (
        <section className='py-8 sm:py-12'>
            <div className="container mx-auto px-3 md:max-w-[720px]">
                <div className="flex items-center justify-center relative h-60 overflow-hidden rounded-sm bg-radial from-emerald-800 from-40% to-emerald-900">
                    <figure className='w-full h-full absolute overflow-hidden z-0 rounded-sm'>
                        <Image src={data?.image?.url ?? '/gradient.jpg'} alt={data?.image?.alternativeText ?? ''} fill />
                    </figure>
                    <h1 className='text-white font-dela-gothic font-normal text-lg md:text-xl m-0 z-[1] tracking-widest uppercase'>{data?.title}</h1>
                </div>
            </div>
        </section>
    )
}

export default Banner