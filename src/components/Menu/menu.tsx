import Link from 'next/link'
import React from 'react'
import Button from '../Button'

type Props = {
    menu: {
        id: number
        name: string
        link: string
    }[]
}

const Menu = (props: Props) => {
    const {menu} = props
    return (
        <div className="hidden md:flex items-center justify-end">
            {
                menu.map((item) => (
                    <Link key={item?.id} href={item?.link} className='text-foreground font-bold px-3 py-5 hover:text-primary leading-[1]'>
                        {item.name}
                    </Link>
                ))
            }
            <Button variant='primary' size='md' as='a' href='/contact' className='ms-4 !rounded-full !px-7'>Contact</Button>
        </div>
    )
}

export default Menu