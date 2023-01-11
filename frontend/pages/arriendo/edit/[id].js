import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'


const getArriendo = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/arriendo/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getArriendo(context.query.id)
  return {
    props: {
      arriendo: response.data
    }
  }
}

const editar = ({arriendo}) => {
  
  const router = useRouter()

  const [arriendo2, setArriendo] = useState(arriendo)

  const updateArriendo = async (arriendo) =>{
    const response = await axios.put(`${process.env.SERVIDOR}/arriendo/update/${router.query.id}`, arriendo)
    return response
  }

  const handleChange = (e) => {
    setArriendo ({
      ...arriendo2,
      [e.target.name]: e.target.value
    })
  }

  console.log(arriendo2)

  const submitArriendo = (e) => {
    e.preventDefault()
    updateArriendo(arriendo2).then(res => {
      console.log('arriendo modificado')
      router.push('../list')
    })
  }

  const [espacios, setEspacios] = useState([])

  const getEspacios = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/espacios`)
    console.log(response.data)
    setEspacios(response.data)
  }


  const contentTable = () => {
    return espacios.map((espacio => {
        return (
          <option value = {espacio._id}>{espacio.nombre}</option>
        )
    }))
  }

  useEffect(() => {
    getEspacios()
  }, [])
  

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Editar Arriendo</Heading>
      <Stack spacing={4} mt ={10}>
        <FormControl id = 'fecha_inicio'>
          <FormLabel>Fecha de Inicio</FormLabel>
          <Input
            placeholder="Fecha de Inicio"
            type="datetime-local"
            name="fecha_inicio"
            onChange={handleChange}
            value={arriendo2.fecha_inicio.replace('Z','')}
          />
        </FormControl>
        <FormControl id = 'fecha_fin'>
          <FormLabel>Fecha de Fin</FormLabel>
          <Input 
            placeholder="Fecha de Fin" 
            type="datetime-local" 
            name="fecha_fin" 
            onChange={handleChange}
            value={arriendo2.fecha_fin.replace('Z','')}
          />
        </FormControl>
        <FormControl id = 'espacio'>
          <FormLabel>Lista de espacios</FormLabel>
          <Select name = 'espacio' placeholder = 'Seleccione un Espacio' onChange={handleChange} value={arriendo2.espacio.fecha_inicio}>
            {contentTable()}
          </Select>
        </FormControl>
      </Stack>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitArriendo}>Crear</Button>
    </Container>
  )
}



export default editar