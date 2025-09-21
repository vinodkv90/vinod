import React from 'react'
import Header from '../Header';

const PublicLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
        <Header />
        <main>{children}</main>
    </>
  )
}

export default PublicLayout