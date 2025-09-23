import React from 'react'
import Button from '../Button'
import Image from 'next/image'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className='pt-20'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
          <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>Projects</h2>
          <div className="mt-7">
            <div className="flex flex-wrap gap-4">
                {
                    projects.map((project) => (
                        <div key={project.id} className={`group relative overflow-hidden rounded-sm ${project.isLarge ? 'w-[calc(66.6666%-8px)]' : 'w-[calc(33.3333%-8px)]'}`}>
                            <figure className='w-full relative overflow-hidden z-0 after:pb-40 after:block after:w-full bg-shade'>
                                <Image src={project?.image ?? '/gradient.jpg'} alt={project?.description} fill />
                            </figure>
                            <div className="flex absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-overlay">
                                <h3 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl'>{project.name}</h3>
                                <p className='text-foreground font-montserrat font-normal text-sm md:text-base'>{project.description}</p>
                                <Button as='a' href={project.link} target='_blank' rel='noopener noreferrer' className='mt-4'>View Project</Button>
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
        image: '/gradient.jpg',
        isLarge: false,
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Project 2 description',
        link: 'https://project2.com',
        image: '/gradient.jpg',
        isLarge: true,
    }
]