import Link from 'next/link'
import React from 'react'
import Button from '../Button'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='border-b border-border py-1.5 bg-background sticky top-0 z-10'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
            <div className="flex items-center justify-between">
                <Link href="/" className='flex flex-col items-end gap-1 h-5'>
                    <span className="block px-2 py-1 bg-foreground font-montserrat font-bold text-xs text-background tracking-[2px] uppercase">
                        Vinod's
                    </span>
                    <span className='font-bimbo font-regular text-foreground'>Portfolio</span>
                </Link>
                <div className="flex items-center justify-end">
                    {
                        MENU.map((item) => (
                            <Link key={item.name} href={item.link} className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]'>
                                {item.name}
                            </Link>
                        ))
                    }
                    <Button variant='primary' size='md' as='a' href='/contact' className='ms-4 !rounded-full !px-7'>Contact</Button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header

const MENU = [
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
]