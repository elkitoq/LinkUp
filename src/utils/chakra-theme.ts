import { extendTheme } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const interFont = Inter({ subsets: ['latin'] })

export const chakraTheme = extendTheme({
  fonts: {
    heading: interFont.style.fontFamily,
    body: interFont.style.fontFamily,
  },
})
