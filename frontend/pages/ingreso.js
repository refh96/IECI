import { Heading, Container, Stack, Button, Input, FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const ingreso = () => {

    const user = (rut) =>{
        const response = axios.post(`${process.env.SERVIDOR}/login`, { rut })
        return response
    }
    const [rut, setRUT] = useState('')
    const router = useRouter()
    const handleChange = (e) => {
        setRUT(e.target.value)
    }

    const login = async (e) => {
        e.preventDefault()
        const response = await user(rut)
        if(response.status === 200){
            localStorage.setItem('token', rut)
            router.push('./usuario')
        }
    }

    return (
        <>
            <Container maxW='container.xl' centerContent>
                <Heading as='h1' size ='2xl' textAlign='center' mt='10'>Ingreso</Heading>
                <Stack my = '10' spacing = '5'>
                    <FormControl>
                        <FormLabel>Ingrese RUT</FormLabel>
                        <Input onChange={handleChange}/>
                    </FormControl>
                    <Button onClick={login}>Ingresar</Button>
                </Stack>
            </Container>
        </> )
}

export default ingreso