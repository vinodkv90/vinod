import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Banner title='About' />
      <Contact />
    </>
  )
}

export default page