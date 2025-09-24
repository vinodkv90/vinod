"use client"
import React, { useState } from 'react'
import Button from '../Button'
import Link from 'next/link'

type Props = {
    menu: {
        id: number
        name: string
        link: string
    }[]
}

const MobileMenu = (props: Props) => {
    const {menu} = props
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='block md:hidden'>
            <Button 
                variant='primary' 
                size='sm' 
                as='button'
                className='!px-3 w-[65px]'
                onClick={() => {setIsOpen(!isOpen)}}
            >{isOpen ? `Close` : `Menu`}</Button>
            <aside className={`${isOpen ? 'flex' : 'hidden'} items-center justify-center absolute top-[calc(100%+1px)] inset-x-0 bg-background p-4 border-b border-border h-[calc(100vh-53px)]`}>
                <div className="container mx-auto px-3 md:max-w-[720px]">
                    <div className="flex flex-col items-center justify-center">
                        {
                            menu.map((item) => (
                                <Link key={item?.id} href={item?.link} className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]' onClick={() => setIsOpen(false)}>
                                    {item.name}
                                </Link>
                            ))
                        }
                        <Link href={'/contact'} className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]' onClick={() => setIsOpen(false)}>
                            {'Contact'}
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default MobileMenu