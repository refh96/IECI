import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select} from '@chakra-ui/react'

const editarArrendatario = () =>{
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
      <Heading size="2xl" textAlign={"center"}>Editar Arrendatario</Heading>
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
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitArrendatario}>editar</Button>
    </Container>
    </>
  )
}

export default editarArrendatario