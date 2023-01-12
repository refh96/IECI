import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import Swal from 'sweetalert2'


const getarriendo = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/arriendo/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getarriendo(context.query.id)
  return {
    props: {
      arriendo: response.data
    }
  }
}

function handleSubmit(e) {

  try {
    Swal.fire({
      title: 'Arriendo Eliminado',
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

const editar = ({arriendo}) => {
  
  const router = useRouter()

  const deletearriendo = async () =>{
    const response = await axios.delete(`${process.env.SERVIDOR}/arriendo/delete/${router.query.id}`)
    return response
  }

  const submitarriendo = (e) => {
   
    deletearriendo(arriendo).then(res => {
      console.log('arriendo modificado')
      router.push('../list')
    })
  }

  const cancelar= function(){
    router.push('../list')
  }

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Esta seguro de eliminar al arriendo: {arriendo.nombre} {arriendo.apellido}</Heading>
      <Button colorScheme='red' mt = {10} mb = {10} onClick={() =>{submitarriendo(); handleSubmit()}}>Eliminar</Button>
      <Button colorScheme='blue' mt = {10} mb = {10} onClick={cancelar}>Cancelar</Button>
    </Container>
  )
}



export default editar