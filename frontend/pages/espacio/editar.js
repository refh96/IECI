import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Stack, FormControl, FormLabel, Select} from '@chakra-ui/react'

const editarEspacio = () =>{
  const [espacio, setEspacio] = useState({
    nombre: '',
    aforo: 0,
    descripcion: '',
    tiempoMáximoDeArriendo: 0,
    status: 'Permitido'
  })
  
  console.log(espacio)

  const handleChange = (e) => {
    setEspacio({
      ...espacio,
      [e.target.name]:e.target.value
    })
  }

  const getEspacio = async (espacio) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/espacio`, espacio)
    return response
  }

  const submitEspacio = (e) => {
    e.preventDefault()
    getEspacio(espacio).then(res => {
      console.log('data mandada')
    })
  }

  

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            inicio
          </a>
          <a className="navbar-brand" href="../usuario">
            usuario
          </a>
          <a className="navbar-brand" href="../admin">
            admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto"></ul>
          </div>
        </div>
      </nav>
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>editar Espacio</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'nombre'>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder="Nombre" name = "nombre" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'apellido'>
          <FormLabel>Aforo</FormLabel>
          <Input type="text" placeholder="Aforo" name = "aforo" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'numero'>
          <FormLabel>Descripción</FormLabel>
          <Input type="text" placeholder="Numero" name = "descripcion" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'correo'>
          <FormLabel>Tiempo Máximo de Arriendo en Horas</FormLabel>
          <Input type = "number" name = "tiempoMáximoDeArriendo" onChange={handleChange}/>
        </FormControl>
        <FormControl id = 'status'>
          <Select name = 'status' onChange={handleChange}>
            <option value='Permitido'>Permitido</option>
            <option value='Bloqueado'>Bloqueado</option>
          </Select>
        </FormControl>
      </Stack>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitEspacio}>editar</Button>
    </Container>
    </>
  )
}

export default editarEspacio