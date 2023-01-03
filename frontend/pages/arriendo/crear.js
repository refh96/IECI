import { useState , useEffect} from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select} from '@chakra-ui/react'
import { useRouter } from 'next/router'


const crearArriendo = () =>{

  const router = useRouter()

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const [arriendo, setArriendo] = useState({
    id: '',
    fecha_inicio: '',
    fecha_fin: '',
    arrendatario: token,
    espacio: null,
  })

  const [espacios, setEspacios] = useState([])
  
  console.log(arriendo)

  const handleChange = (e) => {
    setArriendo({
      ...arriendo,
      [e.target.name]:e.target.value
    })
  }

  const createArriendo = async (arriendo) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/arriendo`, arriendo)
    return response
  }

  const submitArriendo = (e) => {
    e.preventDefault()
    createArriendo(arriendo).then(res => {
      console.log('data mandada')
    })
    router.push('./list')

  }

  const getEspacios = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/espacios`)
    console.log(response.data)
    setEspacios(response.data)
  }

  console.log(espacios)

  const contentTable = () => {
    return espacios.map((espacio => {
        return (
          <option value = {espacio.id}>{espacio.nombre}</option>
        )
    }))
  }

  useEffect(() => {
    getEspacios()
  }, [])
  

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Arrendar</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'fecha_inicio'>
          <FormLabel>Fecha de Inicio</FormLabel>
          <Input
            placeholder="Fecha de Inicio"
            type="datetime-local"
            name="fecha_inicio"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id = 'fecha_fin'>
          <FormLabel>Fecha de Fin</FormLabel>
          <Input 
            placeholder="Fecha de Fin" 
            type="datetime-local" 
            name="fecha_fin" 
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id = 'espacio'>
          <FormLabel>Lista de espacios</FormLabel>
          <Select name = 'espacio' placeholder = 'Seleccione un Espacio' onChange={handleChange}>
            {contentTable()}
          </Select>
        </FormControl>
      </Stack>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitArriendo}>Crear</Button>
    </Container>
  )
}

export default crearArriendo