import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Toaster } from 'sonner';

const PublicLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
        <Header />
        <main className='min-h-[calc(100dvh-53px)] md:min-h-[calc(100dvh-66px)]'>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
    </>
  )
}

export default PublicLayout