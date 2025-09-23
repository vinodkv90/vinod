import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='py-5 bg-foreground'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
            <p className='text-background font-semibold font-montserrat text-center'>
                {`© ${new Date().getFullYear()}. All rights reserved.`}
            </p>
        </div>
    </footer>
  )
}

export default Footer