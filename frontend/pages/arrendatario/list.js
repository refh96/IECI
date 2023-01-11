import { useState, useEffect } from 'react'
import { Container, Stack, Heading, Tr, Td, Thead, Table, Tbody, Button} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const listarArriendo = () => {

    const router = useRouter()

    const [arrendatarios, setArrendatarios] = useState([])
    
    const getArrendatarios = async () => {
        const response = await axios.get(`${process.env.SERVIDOR}/arrendatarios`)
        setArrendatarios(response.data)
    }

    const contentTable = () => {
        return arrendatarios.map((arrendatario => {
            return (
                <Tr key={arrendatario._id}>
                    <Td>{arrendatario.nombre}</Td>
                    <Td>{arrendatario.apellido}</Td>
                    <Td>{arrendatario.número}</Td>
                    <Td>{arrendatario.correo}</Td>
                    <Td>{arrendatario.status}</Td>
                    <Button colorScheme='blue' onClick={()=>router.push(`./edit/${arrendatario._id}`)}>Edit</Button>
                    <Button colorScheme='red' onClick={()=>router.push(`./borrar/${arrendatario._id}`)}>Borrar</Button>
                </Tr>
            )
        }))
    }

    useEffect(() => {
        getArrendatarios()
    }, [])

    console.log(arrendatarios)

    return (
        <Container maxW='container.xl'>
            <Heading as='h1' size = '2xl' textAlign='center' mt = '10' color = 'blue.400'> Listado de Arrendatarios </Heading>
            <Stack spacing = {4} mt = '10'>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Nombre</Td>
                        <Td>Apellido</Td>
                        <Td>Número</Td>
                        <Td>Correo</Td>
                        <Td>Status</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {contentTable()}
                </Tbody>
            </Table>
            </Stack>
        </Container>
    )
}

export default listarArriendo