import { useState, useEffect } from 'react'
import { Container, Stack, Heading, Tr, Td, Thead, Table, Tbody, Button} from '@chakra-ui/react'
import axios from 'axios'
import getFecha from '../../auxiliar/fecha'
import { useRouter } from 'next/router'


const listarArriendo = () => {

    const router = useRouter()

    const [arriendos, setArriendos] = useState([])
    
    const getArriendos = async () => {
        const response = await axios.get(`${process.env.SERVIDOR}/arriendos`)
        setArriendos(response.data)
    }

    const checkNom = (a) => {return a !== null ? a.nombre : null}
    const checkAp = (a) => {return a !== null ? a.apellido: null}

    const deleteArriendo = async (id) => {
        const response = await axios.delete(`${process.env.SERVIDOR}/arriendo/delete/${id}`)
        return response
    }


    const contentTable = () => {
        return arriendos.map((arriendo => {
            return (
                <Tr key={arriendo._id}>
                    <Td>{checkNom(arriendo.arrendatario) + ' ' + checkAp(arriendo.arrendatario)}</Td>
                    <Td>{checkNom(arriendo.espacio)}</Td>
                    <Td>{getFecha(arriendo.fecha_inicio)}</Td>
                    <Td>{getFecha(arriendo.fecha_fin)}</Td>
                    <Button colorScheme='blue' onClick={()=>router.push(`./edit/${arriendo._id}`)}>Edit</Button>
                    <Button colorScheme='red' onClick={useEffect(()=> {deleteArriendo(arriendo._id)},[])}>Borrar</Button>
                </Tr>
            )
        }))
    }

    useEffect(() => {
        getArriendos()
    }, [])

   
    console.log(arriendos)

    return (
        <Container maxW='container.xl'>
            <Heading as='h1' size = '2xl' textAlign='center' mt = '10' color = 'blue.400'> Listado de Arriendos </Heading>
            <Stack spacing = {4} mt = '10'>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Arrendatario</Td>
                        <Td>Espacio</Td>
                        <Td>Fecha Inicio</Td>
                        <Td>Fecha Fin</Td>
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