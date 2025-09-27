import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='py-5 bg-footer'>
        <div className="container mx-auto px-3 md:max-w-[720px]">
            <p className='text-foreground font-semibold font-montserrat text-center'>
                {`© ${new Date().getFullYear()}`}
            </p>
        </div>
    </footer>
  )
}

export default Footer