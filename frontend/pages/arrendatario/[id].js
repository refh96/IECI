import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const getArrendatario = async (id) => {
  const response = await axios.get(`${process.env.SERVIDOR}/arrendatario/search/${id}`)
  return response
}

export const getServerSideProps =  async (context) => {
  const response = await getArrendatario(context.query.arrendatario)
  return {
    props: {
      arriendo: response.data
    }
  }
}

const editar = (arrendatario) => {
  const router = useRouter()
  console.log(arrendatario)
  return (
    <div>
      {arrendatario.nombre}
    </div>
  )
}

export default editar