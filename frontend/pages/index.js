import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <ul>
      <li>
        <Link href="/arrendatario/crear">Arrendaratio Crear</Link>
      </li>
      <li>
        <Link href="/arrendatario/list">Arrendaratio Lista</Link>
      </li>
      <li>
        <Link href="/espacio/crear">Crear Espacio</Link>
      </li>
      
      <li>
        <Link href="/espacio/list">Lista Espacios Comunes</Link>
      </li>
    </ul>
    </>
  )
}