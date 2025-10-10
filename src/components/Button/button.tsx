import Link from 'next/link'
import React from 'react'

type Props = {
    variant?: 'primary' | 'secondary' | 'blank',
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    disabled?: boolean,
    as?: 'button' | 'a',
    href?: string,
    target?: string,
    rel?: string,
    size?: 'sm' | 'md' | 'lg',
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>,
}

const Button = (props: Props) => {
    const {variant, children, type, className, disabled, as = 'button', href="", target, rel, size, ...rest} = props || {}
    return (
        as === 'button' ? (
            <button className={`${className} ${variant ? `btn-${variant}` : 'btn-primary'} ${size ? `btn-${size}` : 'md'} cursor-pointer font-montserrat rounded-sm px-4 py-0 flex items-center justify-center text-xs text-white font-medium uppercase leading-[1]`} type={type} disabled={disabled} {...rest}>
                {children}
            </button>
        ) : (
            <Link className={`${className} ${variant ? `btn-${variant}` : 'btn-primary'} ${size ? `btn-${size}` : 'md'} cursor-pointer font-montserrat rounded-sm px-4 py-0 flex items-center justify-center text-xs text-white font-medium uppercase leading-[1]`} href={href} target={target} rel={rel} {...rest}>
                {children}
            </Link>
        )
    )
}

export default Button