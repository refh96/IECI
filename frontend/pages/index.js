import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <ul>
      <li>
        <Link href="/admin">Administrador</Link>
      </li>
      <li>
        <Link href="/usuario">usuario</Link>
      </li>
    </ul>
    </>
  )
}