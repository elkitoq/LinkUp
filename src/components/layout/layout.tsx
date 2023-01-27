import React from 'react'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'

import {Navbar} from '@/components/navbar/Navbar'
import {Footer} from '@/components/footer/footer'

interface LayoutAppProps {
  children?: React.ReactNode
  title?: string
}

export const LayoutApp: React.FC<LayoutAppProps> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>Link Up | {title || 'N.A'}</title>
      </Head>
      <Navbar />
      <Box maxWidth={{'xl': '100%', '2xl': '90%'}} paddingTop={'10'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
