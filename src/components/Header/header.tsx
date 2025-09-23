import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='border-b border-border py-1.5 bg-background sticky top-0 z-10'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
            <div className="flex items-center justify-between h-10 md:h-auto">
                <Link href="/" className='flex flex-col items-end gap-1 h-5'>
                    <span className="block px-2 py-1 bg-foreground font-montserrat font-bold text-xs text-background tracking-[2px] uppercase">
                        Vinod's
                    </span>
                    <span className='font-bimbo font-regular text-foreground relative z-10 text-shadow-[0_0_0_rgba(255,255,255,0.9)] text-shadow-background'>Portfolio</span>
                </Link>
                <Menu menu={MENU} />
                <MobileMenu menu={MENU} />
            </div>
        </div>
    </header>
  )
}

export default Header

const MENU = [
    {
        id: 1,
        name: 'About',
        link: '/about'
    },
    {
        id: 2,
        name: 'Projects',
        link: '/projects'
    },
    {
        id: 3,
        name: 'Blog',
        link: '/blog'
    },
]