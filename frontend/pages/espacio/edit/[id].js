import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import Swal from 'sweetalert2'


const getEspacio = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/espacio/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getEspacio(context.query.id)
  return {
    props: {
      espacio: response.data
    }
  }
}

function handleSubmit(e) {

  try {
    Swal.fire({
      title: 'Espacio Editado',
      text: 'El registro se ha Editado exitosamente',
      icon: 'success'
    })
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: error.message,
      icon: 'error',
    })
  }
}

const editar = ({espacio}) => {
  
  const router = useRouter()

  const [espacio2, setEspacio] = useState(espacio)

  const updateEspacio = async (espacio) =>{
    const response = await axios.put(`${process.env.SERVIDOR}/espacio/update/${router.query.id}`, espacio)
    return response
  }

  const handleChange = (e) => {
    setEspacio ({
      ...espacio2,
      [e.target.name]: e.target.value
    })
  }

  console.log(espacio2)

  const submitEspacio = (e) => {
 
    updateEspacio(espacio2).then(res => {
      console.log('espacio modificado')
      router.push('../list')
    })
  }

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Editar Espacio: {espacio2.nombre} {espacio2.apellido}</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'nombre'>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder="Nombre" name = "nombre" onChange={handleChange} value = {espacio2.nombre}/>
        </FormControl>
        <FormControl id = 'apellido'>
          <FormLabel>Aforo</FormLabel>
          <Input type="number" placeholder="Aforo" name = "aforo" onChange={handleChange} value = {espacio2.aforo}/>
        </FormControl>
        <FormControl id = 'numero'>
          <FormLabel>Descripción</FormLabel>
          <InputGroup>
            <Input type="text" placeholder="Descripción" name = "descripcion" onChange={handleChange} value = {espacio2.descripcion}/>
          </InputGroup>
        </FormControl>
        <FormControl id = 'correo'>
          <FormLabel>Tiempo Máximo de Arriendo</FormLabel>
          <Input type="number" placeholder="Tiempo Máximo de Arriendo" name = "tiempoMaximoDeArriendo" onChange={handleChange} value = {espacio2.tiempoMaximoDeArriendo}/>
        </FormControl>
        <FormControl id = 'status'>
          <Select name = 'status' onChange={handleChange} value = {espacio2.status}>
            <option value='Disponible'>Disponible</option>
            <option value='En Mantenimiento'>En Mantenimiento</option>
          </Select>
        </FormControl>
      </Stack>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={() =>{submitEspacio(); handleSubmit()}}>Modificar</Button>
    </Container>
  )
}



export default editar