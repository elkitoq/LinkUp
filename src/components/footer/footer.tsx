import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {ReactNode} from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      alignItems={'center'}
      as={'a'}
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      cursor={'pointer'}
      display={'inline-flex'}
      h={8}
      href={href}
      justifyContent={'center'}
      rounded={'full'}
      transition={'background 0.3s ease'}
      w={8}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        align={{base: 'center', md: 'center'}}
        as={Stack}
        direction={{base: 'column', md: 'row'}}
        justify={{base: 'center', md: 'space-between'}}
        maxW={'6xl'}
        py={4}
        spacing={4}
      >
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton href={'#'} label={'Twitter'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton href={'#'} label={'YouTube'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton href={'#'} label={'Instagram'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
