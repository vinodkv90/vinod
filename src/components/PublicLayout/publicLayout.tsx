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
        <Toaster 
          position="bottom-right" 
          richColors 
          toastOptions={{
            classNames: {
              toast: 'toast',
              title: 'toast-title',
              icon: 'toast-icon',
              description: 'description',
              actionButton: 'action-button',
              cancelButton: 'cancel-button',
              closeButton: 'close-button',
            },
          }}
        />
    </>
  )
}

export default PublicLayout