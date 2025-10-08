"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import useToggle from '@/customHooks/useToggle'

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

const MobileMenu = (props: Props) => {
    const {menu, contactButton} = props
    const { status, toggle, setFalse } = useToggle()
    const pathname = usePathname()
    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = status ? `${scrollBarWidth}px` : '0px'
        if(status) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [status])
    return (
        <div className='block md:hidden'>
            <span className={`flex flex-col relative w-6 h-6 justify-center items-end gap-1 cursor-pointer`} onClick={toggle}>
                <span className={`block w-full h-0.5 rounded-sm bg-foreground transition-transform ${status ? 'scale-x-0' : 'scale-x-100'}`} />
                <span className={`block w-5 h-0.5 rounded-sm bg-foreground transition-transform ${status ? 'scale-x-0' : 'scale-x-100'}`} />
                <span className={`block w-5 h-0.5 rounded-sm bg-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-x-0 origin-center rotate-45 transition-transform ${status ? 'scale-x-100' : ''}`} />
                <span className={`block w-5 h-0.5 rounded-sm bg-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-x-0 origin-center -rotate-45 transition-transform ${status ? 'scale-x-100' : ''}`} />
            </span>
            <AnimatePresence>
            {
                // Mobile Menu
                status && <motion.aside 
                    initial={{
                        x: -768
                    }}
                    animate={{
                        x: 0
                    }}
                    exit={{
                        x: -768
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.7,
                        bounce: 0,
                    }}
                    className={`${status ? 'flex' : 'hidden'} items-center justify-center absolute top-[calc(100%+1px)] inset-x-0 bg-background p-4 border-b border-border h-[calc(100vh-53px)]`}
                >
                    <div className="container mx-auto px-3 md:max-w-[720px]">
                        <div className="flex flex-col items-center justify-center">
                            {
                                menu.map((item, index) => (
                                    <motion.div
                                        initial={{
                                            x: -30, 
                                            opacity: 0
                                        }} 
                                        animate={{
                                            x: 0, 
                                            opacity: status ? 1 : 0
                                        }}
                                        exit={{
                                            x: -30, 
                                            opacity: 0
                                        }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.7,
                                            delay: index*0.1,
                                            bounce: 0,
                                        }}
                                        key={item?.id}
                                    >
                                        <Link 
                                            href={item?.link} 
                                            className={`block text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]`}
                                            style={pathname === item?.link ? {color: 'var(--color-primary)'} : {}}
                                            onClick={setFalse}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))
                            }
                            <motion.div 
                                initial={{
                                    x: -30, 
                                    opacity: 0
                                }} 
                                animate={{
                                    x: 0, 
                                    opacity: status ? 1 : 0
                                }}
                                exit={{
                                    x: -30, 
                                    opacity: 0
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.7,
                                    delay: 3*0.1,
                                    bounce: 0,
                                }}
                            >
                                <Link 
                                    href={contactButton?.link ?? '/contact'} 
                                    className={`block text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]`}
                                    style={pathname === '/contact' ? {color: 'var(--color-primary)'} : {}}
                                    onClick={setFalse}
                                >
                                    {contactButton?.name ?? 'Contact'}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.aside>
            }
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu