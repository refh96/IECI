import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <ul>
      <li>
        <Link href="/arriendo/crear">Arriendo Crear</Link>
      </li>
      <li>
        <Link href="/arriendo/list">Arriendo Lista</Link>
      </li>
    </ul>
    </>
  )
}