import Link from 'next/link'
import React from 'react'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import { nextFetch } from '@/utils/nextFetch'

interface Logo {
    title: string | null;
    description: string | null;
    url: string;
}
interface MenuItem {
    id: number;
    name: string | null;
    link: string;
}
interface ContactButton {
    name: string | null;
    link: string | null;
}

interface HeaderData {
    logo: Logo;
    menu: MenuItem[];
    contact_button: ContactButton;
}

const Header = async () => {

    const data: HeaderData = await nextFetch('/header');

    return (
        <header className='border-b border-border py-1.5 bg-background sticky top-0 z-10'>
            <div className="container mx-auto px-3 md:max-w-[720px]">
                <div className="flex items-center justify-between h-10 md:h-auto">
                    <Link href={data?.logo?.url} className='flex flex-col items-end gap-1 h-5'>
                        <span className="block px-2 py-1 bg-foreground font-montserrat font-bold text-xs text-background tracking-[2px] uppercase">
                            {data?.logo?.title ?? 'Portfolio'}
                        </span>
                        <span className='font-bimbo font-regular text-foreground relative z-10 text-shadow-[0_0_0_rgba(255,255,255,0.9)] text-shadow-background'>{data?.logo?.description}</span>
                    </Link>
                    <Menu menu={data?.menu} contactButton={data?.contact_button} />
                    <MobileMenu menu={data?.menu} contactButton={data?.contact_button} />
                </div>
            </div>
        </header>
    )
}

export default Header