import Image from 'next/image'
import React from 'react'

type Props = {
    url: string
}

const Hero = (props: Props) => {
    const {url} = props
  return (
    <section className='section min-h-[70vh] flex items-center'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
            <figure className='w-[120px] relative overflow-hidden after:block after:w-full after:pb-[100%] rounded-sm'>
                <Image src={url ?? '/image.jpg'} alt='hero' className='w-full h-auto object-cover object-center' fill />
            </figure>
            <h1 className='mt-4 text-color font-normal text-lg md:text-lg'>
                <span className='block text-2xl text-foreground font-dela-gothic'>{`I'm Vinod`}</span>
                <span className='font-montserrat font-black'>{`UI & Strapi Developer`}</span>
            </h1>
            <p className='mt-2 text-color font-semibold font-montserrat leading-6'>
                {`
                I began my career as a UI Developer, focusing on creating clean, responsive, and user-friendly interfaces. Over time, I expanded my expertise into backend development and now work as a Full Stack Developer, specializing in Strapi for headless CMS and React/Next.js for modern front-end applications. With hands-on experience across the stack, I build scalable, efficient, and engaging digital solutions from concept to deployment.
                `}
            </p>
        </div>
    </section>
  )
}

export default Hero