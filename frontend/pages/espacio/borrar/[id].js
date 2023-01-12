import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import Swal from 'sweetalert2'


const getespacio = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/espacio/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getespacio(context.query.id)
  return {
    props: {
      espacio: response.data
    }
  }
}

function handleSubmit(e) {

  try {
    Swal.fire({
      title: 'Espacio Eliminado',
      text: 'El registro se ha eliminado exitosamente',
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

const editar = ({espacio}) => {
  
  const router = useRouter()

  const deleteespacio = async () =>{
    const response = await axios.delete(`${process.env.SERVIDOR}/espacio/delete/${router.query.id}`)
    return response
  }

  const submitespacio = (e) => {
   
    deleteespacio(espacio).then(res => {
      console.log('espacio modificado')
      router.push('../list')
    })
  }

  const cancelar= function(){
    router.push('../list')
  }

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Esta seguro de eliminar el espacio: {espacio.nombre}</Heading>
      <Stack spacing={4} mt ={5}>
        <Button colorScheme='red' mt = {2} mb = {2} onClick={() =>{submitespacio(); handleSubmit()}}>Eliminar</Button>
        <Button colorScheme='blue' mt = {2} mb = {2} onClick={cancelar}>Cancelar</Button>
      </Stack>
    </Container>
  )
}



export default editar