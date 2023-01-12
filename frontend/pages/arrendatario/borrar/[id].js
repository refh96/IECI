import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import {Button, Container, Heading, HStack, Input, Stack, FormControl, FormLabel, Select, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import Swal from 'sweetalert2'


const getArrendatario = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/arrendatario/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getArrendatario(context.query.id)
  return {
    props: {
      arrendatario: response.data
    }
  }
}

function handleSubmit(e) {

  try {
    Swal.fire({
      title: 'Arrendatario Eliminado',
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

const editar = ({arrendatario}) => {
  
  const router = useRouter()

  const deleteArrendatario = async () =>{
    const response = await axios.delete(`${process.env.SERVIDOR}/arrendatario/delete/${router.query.id}`)
    return response
  }

  const submitArrendatario = (e) => {
    
    deleteArrendatario(arrendatario).then(res => {
      console.log('arrendatario modificado')
      router.push('../list')
    })
  }

  const cancelar= function(){
    router.push('../list')
  }

  return (
    <Container maxW="container.xl" mt={10}>
      <Heading size="2xl" textAlign={"center"}>Esta seguro de eliminar al arrendatario: {arrendatario.nombre} {arrendatario.apellido}</Heading>
      <Stack spacing={4} mt ={5}>
        <Button colorScheme='red' mt = {2} mb = {2} onClick={() =>{submitArrendatario(); handleSubmit()}}>Eliminar</Button>
        <Button colorScheme='blue' mt = {2} mb = {2} onClick={cancelar}>Cancelar</Button>
      </Stack>
    </Container>
  )
}



export default editar