import React from 'react'
import Image from 'next/image'
import { ProjectsResponse } from '@/types/home';

const Projects: React.FC<ProjectsResponse> = ({ title, projects }) => {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-3 md:max-w-[720px]">
            <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>{title}</h2>
            <div className="mt-7">
                <div className="flex flex-wrap gap-4">
                    {
                        projects.map((project) => (
                            <div key={project.title} className={`group relative overflow-hidden rounded-sm ${project.is_large ? 'w-full xs:w-[calc(50%-8px)] md:w-[calc(66.6666%-8px)]' : 'w-full xs:w-[calc(50%-8px)] md:w-[calc(33.3333%-8px)]'}`}>
                                <figure className='w-full relative overflow-hidden z-0 after:pb-40 after:block after:w-full bg-radial from-emerald-800 from-40% to-emerald-900'>
                                    {
                                        project?.image?.url ? (
                                            <Image 
                                                src={project?.image?.url} 
                                                alt={project?.image?.alternativeText ?? project.title} 
                                                fill 
                                                className='transition-all group-hover:scale-90 group-hover:opacity-0 object-contain object-center max-w-[100px] max-h-[100px] !left-1/2 -translate-x-1/2 !top-1/2 -translate-y-1/2 grayscale brightness-[10000] will-change-transform' 
                                            />
                                        ) : (
                                            <span className='text-white text-2xl font-black font-montserrat uppercase transition-all group-hover:scale-90 group-hover:opacity-0 block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 will-change-transform'>{project.title}</span>
                                        )
                                    }
                                </figure>
                                <div className="flex flex-col justify-end absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground p-4 bg-radial from-emerald-800 from-40% to-emerald-900 will-change-transform">
                                    <h3 className='text-background font-montserrat font-bold tracking-wide text-base'>{project.title}</h3>
                                    <p className='text-background font-montserrat font-medium line-clamp-2'>{project.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
        </section>
    )
}

export default Projects