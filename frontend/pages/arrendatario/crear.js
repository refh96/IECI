import Head from 'next/head'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  const handleSubmit = async (e) => {
    //Para el evento submit
    e.preventDefault()

    //Paso el elemento que genera el evento (el formulario)
    let formulario = e.target; 
    //Creo un objeto con los datos del formulario.
    const data = {
      "nombre":formulario.nombre.value,
      "apellido":formulario.apellido.value,
      "número":formulario.número.value,
      "correo":formulario.correo.value,
      "status":formulario.status.value
    }

    // paso el onjeto a formato Json
    const JSONdata = JSON.stringify(data)

    // direccion de la api para guardar
    const url = 'http://146.83.198.35:1095/api/Arrendatarios'

    // opciones de envio
    const options = {
      // Metodo post
      method: 'POST',
      // en formato JSON
      headers: {
        'Content-Type': 'application/json',
      },
      // El cuerpo(body) enviado es el objeto Json
      body: JSONdata,
    }

    // Envio infoirmacion y espero respuesta
    const response = await fetch(url, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result}`)
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="continer">
        <div className="card">
          <div className="card-header">
            <h3>Crear Arrendatario</h3>
          </div>
          <form  onSubmit={handleSubmit} > 
          <div className="card-body">           
            <div className="mb-3">
                <label className="form-label">nombre</label>
                <input type="string" name="nombre" className="form-control"/>
            </div>         
            <div className="mb-3">
                <label className="form-label">apellido</label>
                <input type="string" name="apellido" className="form-control"/>
            </div>         
            <div className="mb-3">
                <label className="form-label">numero</label>
                <input type="number" name="número" className="form-control"/>
            </div>         
            <div className="mb-3">
                <label className="form-label">correo</label>
                <input type="email" name="correo" className="form-control"/>
            </div>         
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select name="status" className="form-select">
                    <option>Permitido</option>
                    <option>Bloqueado</option>
                </select>
            </div>
          </div>
          <div className="card-footer">
              <button className="btn btn-success w-100" type="Submit">Enviar</button>
          </div>
          </form>
        </div>
      </main>
    </>
  )
}