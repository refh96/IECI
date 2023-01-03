import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select} from '@chakra-ui/react'

const crearArrendatario = () =>{
  const [arrendatario, setArrendatario] = useState({
    nombre: '',
    apellido: '',
    número: 0,
    correo: '',
    status: 'Permitido'
  })
  
  console.log(arrendatario)

  const handleChange = (e) => {
    setArrendatario({
      ...arrendatario,
      [e.target.name]:e.target.value
    })
  }

  const createArrendatario = async (arrendatario) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/arrendatario`, arrendatario)
    return response
  }

  const submitArrendatario = (e) => {
    e.preventDefault()
    createArrendatario(arrendatario).then(res => {
      console.log('data mandada')
    })
  }

  

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Crear Arrendatario</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'nombre'>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder="Nombre" name = "nombre" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'apellido'>
          <FormLabel>Apellido</FormLabel>
          <Input type="text" placeholder="Apellido" name = "apellido" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'numero'>
          <FormLabel>Numero</FormLabel>
          <Input type="number" placeholder="Numero" name = "número" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'correo'>
          <FormLabel>Correo</FormLabel>
          <Input type="text" placeholder="Correo" name = "correo" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'status'>
          <Select name = 'status' onChange={handleChange}>
            <option value='Permitido'>Permitido</option>
            <option value='Bloqueado'>Bloqueado</option>
          </Select>
        </FormControl>
      </Stack>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitArrendatario}>Crear</Button>
    </Container>
  )
}

export default crearArrendatario


