import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Heading, Center, Fade, Image, Container, HStack, Stack, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Container maxW="container.xl">
        <Stack spacing = '24px' my={'40'} p='5'>
          <Center>
            <Heading as='h1' color={'blue.100'}>Espacios Comunes</Heading>
          </Center>
          <Center>
            <Image src = 'https://www.pasteneyrojo.cl/configuraciones/imagen/noticia/noticia/95/imagen/039442431d09daa840ba04cdbfe67b94/type/detalle/' alt = 'Espacios'/>
          </Center>
          <Button colorScheme='red' onClick = {()=>router.push('/admin')}>Administrador</Button>
          <Button colorScheme='blue' onClick = {()=>router.push('/ingreso')}>Usuario</Button>
        </Stack>
    </Container>
    </> )
}