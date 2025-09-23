import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Follow from '@/components/Follow'
import Skills from '@/components/Skills'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Banner title='About' src='/gradient.jpg' />
      <Contact />
      <Experience />
      <Skills />
      <Follow isAbout />
    </>
  )
}

export default page