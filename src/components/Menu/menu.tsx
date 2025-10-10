"use client"
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import { usePathname } from 'next/navigation'

type Props = {
    menu: {
        id: number
        name: string | null
        link: string
    }[],
    contactButton: {
        name: string | null
        link: string | null
    } | null
}

const Menu = (props: Props) => {
    const {menu} = props
    const pathname = usePathname()
    return (
        <div className="hidden md:flex items-center justify-end">
            {
                menu.map((item) => (
                    <Link 
                        style={pathname === item?.link ? {color: 'var(--color-primary)'} : {}}
                        key={item?.id} 
                        href={item?.link} 
                        className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]'
                    >
                        {item.name}
                    </Link>
                ))
            }
            <Button variant='primary' size='md' as='a' href='/contact' className='ms-4 !rounded-full !px-7'>Contact</Button>
        </div>
    )
}

export default Menu