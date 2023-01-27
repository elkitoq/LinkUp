import React from 'react'
import {Heading, HStack} from '@chakra-ui/react'

interface LayoutAppProps {
  title: string
  rightElement?: React.ReactNode
  breadcrumbs?: string[]
}

export const HeadingApp: React.FC<LayoutAppProps> = ({title, rightElement}) => {
  return (
    <>
      <HStack justifyContent={'space-between'} marginBottom={10}>
        <Heading>{title}</Heading>
        {rightElement}
      </HStack>
    </>
  )
}
