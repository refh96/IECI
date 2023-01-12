import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import arrendatarioValidation from '../../validation/arrendatarioValidation'

const crearArrendatario = () =>{

  const router = useRouter()

  const [arrendatario, setArrendatario] = useState({
    nombre: '',
    apellido: '',
    número: 0,
    correo: '',
    status: 'Permitido'
  })
  

  const createArrendatario = async (arrendatario) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/arrendatario`, arrendatario)
    return response
  }

  

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Crear Arrendatario</Heading>
      <Formik
        initialValues = {arrendatario}
        validationSchema = {arrendatarioValidation}
        onSubmit={(values => {
          createArrendatario(values).then(res =>{
            router.push("./list")
          })
        })}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit} id = "form">
            <Stack spacing={4} mt ={10}>
              <FormControl id = 'nombre'>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" placeholder="Nombre" name = "nombre" onChange={handleChange} onBlur={handleBlur} value = {values.nombre}/>
                {touched.nombre && errors.nombre && (
                  <p>{errors.nombre}</p>
                )}
              </FormControl>
              <FormControl id = 'apellido'>
                <FormLabel>Apellido</FormLabel>
                <Input type="text" placeholder="Apellido" name = "apellido" onChange={handleChange} onBlur={handleBlur} value = {values.apellido}/>
                {touched.apellido && errors.apellido && (
                  <p>{errors.apellido}</p>
                )}
              </FormControl>
              <FormControl id = 'numero'>
                <FormLabel>Numero</FormLabel>
                <InputGroup>
                  <InputLeftAddon children = '+56'></InputLeftAddon>
                  <Input type="number" placeholder="Numero" name = "número" onChange={handleChange} onBlur={handleBlur} value = {values.numero}/>
                </InputGroup>
                {touched.número && errors.número && (
                  <p>{errors.número}</p>,
                )}
              </FormControl>
              <FormControl id = 'correo'>
                <FormLabel>Correo</FormLabel>
                <Input type="text" placeholder="Correo" name = "correo" onChange={handleChange} onBlur={handleBlur} value = {values.correo}/>
                {touched.correo && errors.correo && (
                  <p>{errors.correo}</p>
                )}
              </FormControl>
              <FormControl id = 'status'>
                <Select name = 'status' onChange={handleChange} value = {values.status} onBlur={handleBlur}>
                  <option value='Permitido'>Permitido</option>
                  <option value='Bloqueado'>Bloqueado</option>
                </Select>
              </FormControl>
            </Stack>
            <Button colorScheme='blue' mt = {10} mb = {10} type = {"submit"}>Crear</Button>

          </form>
        )}
      </Formik>
    </Container>
  )
}


export default crearArrendatario

