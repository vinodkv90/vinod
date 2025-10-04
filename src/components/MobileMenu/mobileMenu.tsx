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
            {/* <Button 
                variant='primary' 
                size='sm' 
                as='button'
                className='!px-3 w-[65px]'
                onClick={() => {setIsOpen(!isOpen)}}
            >{isOpen ? `Close` : `Menu`}</Button> */}
            <span className={`flex flex-col relative w-6 h-6 justify-center items-end gap-1 cursor-pointer`} onClick={() => {setIsOpen(!isOpen)}}>
                <span className={`block w-full h-0.5 rounded-sm bg-foreground transition-transform ${isOpen ? 'scale-x-0' : 'scale-x-100'}`} />
                <span className={`block w-5 h-0.5 rounded-sm bg-foreground transition-transform ${isOpen ? 'scale-x-0' : 'scale-x-100'}`} />
                <span className={`block w-5 h-0.5 rounded-sm bg-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-x-0 origin-center rotate-45 transition-transform ${isOpen ? 'scale-x-100' : ''}`} />
                <span className={`block w-5 h-0.5 rounded-sm bg-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-x-0 origin-center -rotate-45 transition-transform ${isOpen ? 'scale-x-100' : ''}`} />
            </span>
            <aside className={`${isOpen ? 'flex' : 'hidden'} items-center justify-center absolute top-[calc(100%+1px)] inset-x-0 bg-background p-4 border-b border-border h-[calc(100vh-53px)]`}>
                <div className="container mx-auto px-3 md:max-w-[720px]">
                    <div className="flex flex-col items-center justify-center">
                        {
                            menu.map((item) => (
                                <Link key={item?.id} href={item?.link} className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]'>
                                    {item.name}
                                </Link>
                            ))
                        }
                        <Link href={'/contact'} className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]'>
                            {'Contact'}
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default MobileMenu