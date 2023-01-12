import { useState } from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import espacioValidation from '../../validation/espacioValidation'

const crearEspacio = () =>{

  const router = useRouter()

  const [espacio, setEspacio] = useState({
    nombre: '',
    aforo: 0,
    descripcion: '',
    tiempoMaximoDeArriendo: 0,
    status: 'Permitido'
  })
  

  const createEspacio = async (espacio) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/espacio`, espacio)
    return response
  }

  

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Crear Espacio</Heading>
      <Formik
        initialValues = {espacio}
        validationSchema = {espacioValidation}
        onSubmit={(values => {
          createEspacio(values).then(res =>{
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
                <FormLabel>Aforo</FormLabel>
                <Input type="number" placeholder="Aforo" name = "aforo" onChange={handleChange} onBlur={handleBlur} value = {values.aforo}/>
                {touched.aforo && errors.aforo && (
                  <p>{errors.aforo}</p>
                )}
              </FormControl>
              <FormControl id = 'numero'>
                <FormLabel>Descripción</FormLabel>
                <InputGroup>
                  <InputLeftAddon children = '+56'></InputLeftAddon>
                  <Input type="text" placeholder="Descripción" name = "descripcion" onChange={handleChange} onBlur={handleBlur} value = {values.descripcion}/>
                </InputGroup>
                {touched.descripcion && errors.descripcion && (
                  <p>{errors.descripcion}</p>
                )}
              </FormControl>
              <FormControl id = 'correo'>
                <FormLabel>Tiempo Máximo de Arriendo</FormLabel>
                <Input type="number" placeholder="Tiempo Máximo de Arriendo" name = "tiempoMaximoDeArriendo" onChange={handleChange} onBlur={handleBlur} value = {values.tiempoMaximoDeArriendo}/>
                {touched.tiempoMaximoDeArriendo && errors.tiempoMaximoDeArriendo && (
                  <p>{errors.tiempoMaximoDeArriendo}</p>
                )}
              </FormControl>
              <FormControl id = 'status'>
                <Select name = 'status' onChange={handleChange} value = {values.status} onBlur={handleBlur}>
                  <option value='Disponible'>Disponible</option>
                  <option value='En Mantención'>En Mantención</option>
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


export default crearEspacio

