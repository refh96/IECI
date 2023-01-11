import { useState, useEffect } from 'react'
import { Container, Stack, Heading, Tr, Td, Thead, Table, Tbody, Button} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const listarEspacio = () => {

    const router = useRouter()

    const [espacios, setEspacios] = useState([])
    
    const getEspacios = async () => {
        const response = await axios.get(`${process.env.SERVIDOR}/espacios`)
        setEspacios(response.data)
    }


    const contentTable = () => {
        return espacios.map((espacio => {
            return (
                <Tr key={espacio._id}>
                    <Td>{espacio.nombre}</Td>
                    <Td>{espacio.aforo}</Td>
                    <Td>{espacio.descripcion}</Td>
                    <Td>{espacio.tiempoMaximoDeArriendo}</Td>
                    <Td>{espacio.status}</Td>
                    <Button colorScheme='blue' onClick={()=>router.push(`./edit/${espacio._id}`)}>Edit</Button>
                    <Button colorScheme='red' onClick={()=>router.push(`./borrar/${espacio._id}`)}>Borrar</Button>
                </Tr>
            )
        }))
    }

    useEffect(() => {
        getEspacios()
    }, [])

    console.log(espacios)

    return (
        <Container maxW='container.xl'>
            <Heading as='h1' size = '2xl' textAlign='center' mt = '10' color = 'blue.400'> Listado de Espacios </Heading>
            <Stack spacing = {4} mt = '10'>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Nombre</Td>
                        <Td>Aforo</Td>
                        <Td>Descripción</Td>
                        <Td>Tiempo Máximo de Arriendo</Td>
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

export default listarEspacio