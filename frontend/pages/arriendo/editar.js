import { useState , useEffect} from 'react'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select} from '@chakra-ui/react'
import { useRouter } from 'next/router'


const editarArriendo = () =>{

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

  const getArriendo = async (arriendo) =>{
    const response = await axios.post(`${process.env.SERVIDOR}/arriendo`, arriendo)
    return response
  }

  const submitArriendo = (e) => {
    e.preventDefault()
    getArriendo(arriendo).then(res => {
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
      <Heading size="2xl" textAlign={"center"}>Editar Arriendo</Heading>
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
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={submitArriendo}>editar</Button>
    </Container>
    </>
  )
}

export default editarArriendo