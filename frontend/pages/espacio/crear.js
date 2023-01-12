import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, Input, Stack, FormControl, FormLabel, Select} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const crearEspacio = () =>{

  const router = useRouter()

  const [espacio, setEspacio] = useState({
    nombre: '',
    aforo: 0,
    descripcion: '',
    tiempoMaximoDeArriendo: 0,
    status: 'Disponible'
  })
  
  console.log(espacio)

  const [formValid, setFormValid] = useState(false)

  function handleChange(e) {
    setEspacio({
      ...espacio,
      [e.target.name]:e.target.value
    })
    const { nombre, aforo, descripcion, tiempoMaximoDeArriendo, status } = espacio;
    if (nombre && aforo && descripcion && tiempoMaximoDeArriendo && status) {
      setFormValid(true);
    }
  }

  function handleSubmit(e) {

  try {
    Swal.fire({
      title: 'Espacio creado',
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


  const createEspacio = async (espacio) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/espacio`, espacio)
    return response
  }

  const submitEspacio = (e) => {
   
    createEspacio(espacio).then(res => {
      console.log('data mandada')
      router.push('./list')
    })
  }

  

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Crear Espacio</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'nombre'>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder="Nombre" name = "nombre" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'apellido'>
          <FormLabel>Aforo</FormLabel>
          <Input type="number" placeholder="Aforo" name = "aforo" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'numero'>
          <FormLabel>Descripción</FormLabel>
          <Input type="text" placeholder="Descripción" name = "descripcion" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'correo'>
          <FormLabel>Tiempo Máximo de Arriendo en Horas</FormLabel>
          <Input type = "number" name = "tiempoMaximoDeArriendo" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'status'>
          <Select name = 'status' onChange={handleChange}>
            <option value='Disponible'>Disponible</option>
            <option value='En Mantenimiento'>En Mantenimiento</option>
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
    submitEspacio();
    handleSubmit();
  }
}}>
  Crear
</Button>
    </Container>
  )
}

export default crearEspacio