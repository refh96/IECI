import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'


const getArrendatario = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/arrendatario/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getArrendatario(context.query.id)
  return {
    props: {
      arrendatario: response.data
    }
  }
}

const editar = ({arrendatario}) => {
  
  const router = useRouter()

  const [arrendatario2, setArrendatario] = useState(arrendatario)

  const updateArrendatario = async (arrendatario) =>{
    const response = await axios.put(`${process.env.SERVIDOR}/arrendatario/update/${router.query.id}`, arrendatario)
    return response
  }

  const handleChange = (e) => {
    setArrendatario ({
      ...arrendatario2,
      [e.target.name]: e.target.value
    })
  }

  console.log(arrendatario2)

  const submitArrendatario = (e) => {
    e.preventDefault()
    updateArrendatario(arrendatario2).then(res => {
      console.log('arrendatario modificado')
      router.push('../list')
    })
  }

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Editar Arrendatario: {arrendatario2.nombre} {arrendatario2.apellido}</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'nombre'>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder="Nombre" name = "nombre" onChange={handleChange} value = {arrendatario2.nombre}/>
        </FormControl>
        <FormControl id = 'apellido'>
          <FormLabel>Apellido</FormLabel>
          <Input type="text" placeholder="Apellido" name = "apellido" onChange={handleChange} value = {arrendatario2.apellido}/>
        </FormControl>
        <FormControl id = 'numero'>
          <FormLabel>Numero</FormLabel>
          <InputGroup>
            <InputLeftAddon children = '+56'></InputLeftAddon>
            <Input type="number" placeholder="Numero" name = "número" onChange={handleChange} value = {arrendatario2.número}/>
          </InputGroup>
        </FormControl>
        <FormControl id = 'correo'>
          <FormLabel>Correo</FormLabel>
          <Input type="text" placeholder="Correo" name = "correo" onChange={handleChange} value = {arrendatario2.correo}/>
        </FormControl>
        <FormControl id = 'status'>
          <Select name = 'status' onChange={handleChange} value = {arrendatario2.value}>
            <option value='Permitido'>Permitido</option>
            <option value='Bloqueado'>Bloqueado</option>
          </Select>
        </FormControl>
      </Stack>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitArrendatario}>Modificar</Button>
    </Container>
  )
}



export default editar