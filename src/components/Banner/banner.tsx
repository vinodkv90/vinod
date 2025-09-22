import React from 'react'

type Props = {
    title: string
}

const Banner = (props: Props) => {
    const {title} = props
    return (
        <section className='py-8 sm:py-15'>
            <div className="container mx-auto px-3 md:max-w-[720px]">
                <div className="flex items-center justify-center h-60">
                    <h1 className='text-color font-dela-gothic font-normal text-lg md:text-lg m-0'>{title}</h1>
                </div>
            </div>
        </section>
    )
}

export default Banner