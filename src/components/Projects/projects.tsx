import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { ProjectsResponse } from '@/types/home';

const Projects: React.FC<ProjectsResponse> = ({ title, description, projects }) => {
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
                                    <Image src={project?.image?.url ?? '/gradient.jpg'} alt={project?.image?.alternativeText ?? project.title} fill className='transition-all group-hover:scale-90 group-hover:opacity-0 object-contain object-center max-w-[100px] max-h-[100px] !left-1/2 -translate-x-1/2 !top-1/2 -translate-y-1/2' />
                                </figure>
                                <div className="flex flex-col justify-end absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-foreground p-4 bg-radial from-emerald-800 from-40% to-emerald-900">
                                    <h3 className='text-background font-montserrat font-bold tracking-wide text-base'>{project.title}</h3>
                                    <p className='text-background font-montserrat font-medium'>{project.description}</p>
                                    {/* <Button as='a' href={project.link} target='_blank' rel='noopener noreferrer' className='mt-4'>View Project</Button> */}
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

const projects = [
    {
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description',
        link: 'https://project1.com',
        image: '/wac.svg',
        isLarge: false,
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Project 2 description',
        link: 'https://project2.com',
        image: '/wac.svg',
        isLarge: true,
    },
    {
        id: 3,
        name: 'Project 1',
        description: 'Project 1 description',
        link: 'https://project1.com',
        image: '/wac.svg',
        isLarge: true,
    },
    {
        id: 4,
        name: 'Project 2',
        description: 'Project 2 description',
        link: 'https://project2.com',
        image: '/wac.svg',
        isLarge: false,
    },
    {
        id: 5,
        name: 'Project 1',
        description: 'Project 1 description',
        link: 'https://project1.com',
        image: '/wac.svg',
        isLarge: false,
    },
    {
        id: 6,
        name: 'Project 2',
        description: 'Project 2 description',
        link: 'https://project2.com',
        image: '/wac.svg',
        isLarge: true,
    },
    {
        id: 7,
        name: 'Project 1',
        description: 'Project 1 description',
        link: 'https://project1.com',
        image: '/wac.svg',
        isLarge: true,
    },
    {
        id: 8,
        name: 'Project 2',
        description: 'Project 2 description',
        link: 'https://project2.com',
        image: '/wac.svg',
        isLarge: false,
    },
    {
        id: 9,
        name: 'Project 1',
        description: 'Project 1 description',
        link: 'https://project1.com',
        image: '/wac.svg',
        isLarge: false,
    },
    {
        id: 10,
        name: 'Project 2',
        description: 'Project 2 description',
        link: 'https://project2.com',
        image: '/wac.svg',
        isLarge: true,
    }
]