import React from 'react'
import Button from '../Button'
import Icon from '../Icon'

type Props = {
  isAbout?: boolean
}

const Follow = (props: Props) => {
  const {isAbout} = props
  return (
    <section className='section'>
        <div className='container mx-auto px-3 md:max-w-[720px]'>
            <h2 className={`text-foreground font-normal text-lg md:text-xl font-dela-gothic ${isAbout ? 'text-center' : ''}`}>Follow Me</h2>
            <div className='flex flex-wrap gap-2 mt-7'>
              {
                ICONS.map((icon) => (
                  <Button as='a' href={icon.url} target='_blank' rel='noopener noreferrer' variant='blank' size="sm" className='!capitalize !px-3 w-[calc(50%-6px)] sm:w-[calc(25%-6px)] !text-foreground' key={icon.id}>
                    <Icon icon={icon.icon} size={16} color='currentColor' className='mr-1 !block min-w-4' /> {icon.name}
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
    id: 2,
    icon: 'linkedin',
    name: 'Linkedin',
    url: 'https://github.com/vinodkv90',
  },
  {
    id: 3,
    icon: 'instagram',
    name: 'Instagram',
    url: 'https://github.com/vinodkv90',
  },
  {
    id: 4,
    icon: 'youtube',
    name: 'Youtube',
    url: 'https://github.com/vinodkv90',
  }
]