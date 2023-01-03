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
        <Stack spacing = '24px' my={'20'} p='5'>
          <Center>
            <Heading as='h1' color={'blue.100'}>Sección Usuario</Heading>
          </Center>
          <Center>
            <Image src = 'https://assets.website-files.com/5a43f26a7b791a0001995f0f/6102cd3f4cc1456f8bc1c528_apertura%20areas%20comunes.jpg' alt = 'Espacios'/>
          </Center>
          <Button colorScheme='green' onClick = {()=>router.push('/arriendo/crear')}>Crear Arriendo</Button>
          <Button colorScheme='purple' onClick = {()=>router.push('/arriendo/list')}>Lista Arriendos</Button>
        </Stack>
    </Container>
    </>
  )
}