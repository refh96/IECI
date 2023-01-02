import Head from 'next/head'
import { Inter } from '@next/font/google'
import { use } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context) {

  // direccion de la api para guardar
  const url = 'http://146.83.198.35:1095/api/Arrendatarios'

  // opciones de envio
  const options = {
    // Metodo post
    method: 'GET',
    // en formato JSON
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Envio infoirmacion y espero respuesta
  const response = await fetch(url, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const data = await response.json()
  return { props: { data } }
}

function Page({ data }) {
  const router = useRouter()


  async function statusChange(id){
    // direccion de la api para guardar
    const url = 'http://146.83.198.35:1095/api/Arrendatarios/status/'+id

    // opciones de envio
    const options = {
      // Metodo post
      method: 'PUT',
      // en formato JSON
      headers: {
        'Content-Type': 'application/json',
      }
    }

    // Envio infoirmacion y espero respuesta
    const response = await fetch(url, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const data = await response.json()

    router.replace(router.asPath);
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          inicio
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
          <ul className="navbar-nav ml-auto">

          </ul>
        </div>
      </div>
    </nav>
      <Head>
        <title>Lista de Arrendatarios</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
          <table className="table table-light table-bordered table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Número</th>
                <th>Correo</th>
                <th>Estatus</th>
                <th width="1">Acción</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value.nombre} {value.apellido}</td>
                      <td>{value.número}</td>
                      <td>{value.correo}</td>
                      <td className={value.status=='Bloqueado'?'text-danger':'text-success'} align="center">
                        <a onClick={()=>statusChange(value._id)}>⬤</a>
                      </td>
                      <td>
                        <div className="btn-group">
                          <Link href={"/arrendatario/"+value._id} className="btn btn-primary">Editar</Link>
                          <Link href={"/arrendatario/"+value._id} className="btn btn-danger">Eliminar</Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
            <tfoot>

            </tfoot>
          </table>
      </main>
    </>
  )
}

export default Page