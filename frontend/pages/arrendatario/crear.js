import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const crearArrendatario = () =>{

  const router = useRouter()

  const [arrendatario, setArrendatario] = useState({
    nombre: '',
    apellido: '',
    número: 0,
    correo: '',
    status: 'Permitido'
  })
  
  console.log(arrendatario)

  const [formValid, setFormValid] = useState(false)

  function handleChange(e) {
    setArrendatario({
      ...arrendatario,
      [e.target.name]:e.target.value
    })
    const { nombre, apellido, número, correo, status } = arrendatario;
    if (nombre && apellido && número && correo && status) {
      setFormValid(true);
    }
  }

  function handleSubmit(e) {

  try {
    Swal.fire({
      title: 'Arrendatario creado',
      text: 'El registro se ha creado exitosamente',
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



  const createArrendatario = async (arrendatario) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/arrendatario`, arrendatario)
    return response
  }

  const submitArrendatario = (e) => {
    
    createArrendatario(arrendatario).then(res => {
      console.log('data mandada')
      router.push('./list')
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
          <InputGroup>
            <InputLeftAddon children = '+56'></InputLeftAddon>
            <Input type="number" placeholder="Numero" name = "número" onChange={handleChange}/>
          </InputGroup>
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
      <Button colorScheme='blue' mt={10} mb={10} onClick={() => {
  if (!formValid) {
    Swal.fire({
      title: 'Error',
      text: 'Debes llenar todos los campos',
      icon: 'error',
    });
  } else {
    submitArrendatario();
    handleSubmit();
  }
}}>
  Crear
</Button>
    </Container>
  )
}


export default crearArrendatario


