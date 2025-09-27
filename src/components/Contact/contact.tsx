import React from 'react'
import Icon from '../Icon'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className='pt-10 bg-background'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
          <h2 className='text-foreground font-dela-gothic font-normal text-lg md:text-xl text-center'>Contact Me</h2>
          <div className="flex flex-wrap mt-7 gap-4">
            <div className="flex flex-col justify-start gap-4 w-full sm:w-1/2 md:w-1/3 p-4 rounded-sm bg-shade">
              {
                contact.map((item) => (
                  <div key={item.id} className="group flex items-center w-full">
                    <div className="flex w-8 after:pb-[100%] after:w-full relative rounded-sm bg-primary-hover group-hover:bg-primary text-background me-4">
                      <span className="flex items-center justify-center absolute inset-0">
                        <Icon icon={item.icon} size={16} color='currentColor' className='!block group-hover:scale-110' />
                      </span>
                    </div>
                    <Link href={item.link} className='text-foreground font-montserrat font-bold md:text-sm'>{item.name}</Link>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col justify-center gap-4 w-full md:flex-1 p-4 bg-shade rounded-sm">
              <p className='text-foreground font-montserrat font-bold leading-6'>
                {`I'm from Nedumkandam, which is a beautiful place in the Idukki district of Kerala, surrounded by hills, tea, and cardamom plantations.`}
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact

const contact = [
  // {
  //   id: 1,
  //   name: 'Location',
  //   link: 'gsdcsdcbvsdyhcvg',
  //   icon: 'location'
  // },
  {
    id: 2,
    name: 'Email',
    link: 'mailto:vinodkv.developer@gmail.com',
    icon: 'at'
  },
  {
    id: 3,
    name: 'Phone',
    link: 'tel:+918547439747',
    icon: 'phone'
  },
]