import React from 'react'
import Button from '../Button'

type Props = {}

const Follow = (props: Props) => {
  return (
    <section className='section bg-gray-50'>
        <div className='container mx-auto px-3 md:max-w-[720px]'>
            <h2 className='text-foreground font-normal text-xl md:text-2xl font-dela-gothic'>Elsewhere</h2>
            <div className='flex flex-wrap gap-2 mt-5'>
                <Button as='a' href='https://github.com/vinodkumar1998' target='_blank' rel='noopener noreferrer' variant='blank' size="sm" className='!capitalize'>
                    GitHub
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Follow