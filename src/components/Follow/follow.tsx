import React from 'react'
import Button from '../Button'
import Icon from '../Icon'

type Props = {}

const Follow = (props: Props) => {
  return (
    <section className='section bg-gray-50'>
        <div className='container mx-auto px-3 md:max-w-[720px]'>
            <h2 className='text-foreground font-normal text-xl md:text-2xl font-dela-gothic'>Elsewhere</h2>
            <p className='mt-3 text-color font-semibold font-montserrat leading-6'>{`Full-stack developer passionate about crafting seamless digital experiences. Skilled in React, Next.js, and Strapi, with a strong foundation in UI/UX design. Constant learner, problem solver, and tech enthusiast who loves turning ideas into impactful solutions.`}</p>
            <div className='flex flex-wrap gap-2 mt-5'>
              {
                ICONS.map((icon) => (
                  <Button as='a' href={icon.url} target='_blank' rel='noopener noreferrer' variant='blank' size="sm" className='!capitalize !px-3' key={icon.id}>
                    <Icon icon={icon.icon} size={16} color='currentColor' className='mr-1 !block' /> {icon.name}
                  </Button>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Follow

const ICONS = [
  {
    id: 1,
    icon: 'github',
    name: 'GitHub',
    url: 'https://github.com/vinodkv90',
  },
  {
    id: 1,
    icon: 'linkedin',
    name: 'Linkedin',
    url: 'https://github.com/vinodkv90',
  },
  {
    id: 1,
    icon: 'instagram',
    name: 'Instagram',
    url: 'https://github.com/vinodkv90',
  },
  {
    id: 1,
    icon: 'youtube',
    name: 'Youtube',
    url: 'https://github.com/vinodkv90',
  }
]