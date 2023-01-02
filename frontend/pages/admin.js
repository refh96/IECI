import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Box, Heading, Center, Fade, Image, Container, Stack, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const router = useRouter()

  return (
    <>
    <Container maxW="container.xl">
        <Stack spacing = '24px' my={'20'} p='5'>
          <Center>
            <Heading as='h1' color={'blue.100'}>Sección Admin</Heading>
          </Center>
          <Center>
            <Box boxSize = 'sm'>
              <Image src = 'https://static9.depositphotos.com/1003938/1122/v/600/depositphotos_11225505-stock-illustration-funny-cartoon-manager.jpg' alt = 'Espacios'/>
            </Box>
          </Center>
          <Button colorScheme='red' onClick = {()=>router.push('/arrendatario/crear')}>Crear Arrendatario</Button>
          <Button colorScheme='red' onClick = {()=>router.push('/arrendatario/list')}>Lista Arrendatarios</Button>
          <Button colorScheme='green' onClick = {()=>router.push('/espacio/crear')}>Crear Espacio Común</Button>
          <Button colorScheme='green' onClick = {()=>router.push('/espacio/list')}>Lista Espacios Comunes</Button>
          <Button colorScheme='purple' onClick = {()=>router.push('/arriendo/list')}>Lista de Arriendos</Button>
        </Stack>
    </Container>
    </>
  )
}